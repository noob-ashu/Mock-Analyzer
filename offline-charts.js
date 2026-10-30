/* Offline canvas chart renderer: used when Chart.js CDN is unavailable. */
(function(){if(window.Chart)return;
class OfflineChart {
 static defaults={color:'#94a3b8',font:{family:'sans-serif'}};
 constructor(ctx,config){this.ctx=ctx;this.config=config;this.draw();}
 destroy(){/* canvas replaced on next render */}
 draw(){const ctx=this.ctx,c=this.config,canvas=ctx.canvas;const w=canvas.clientWidth||canvas.width||640,h=canvas.clientHeight||canvas.height||280;canvas.width=Math.round(w*devicePixelRatio);canvas.height=Math.round(h*devicePixelRatio);ctx.setTransform(devicePixelRatio,0,0,devicePixelRatio,0,0);ctx.clearRect(0,0,w,h);const datasets=c.data?.datasets||[];
 if(c.type==='doughnut'){const a=Number(datasets[0]?.data?.[0])||0,b=Number(datasets[0]?.data?.[1])||0,tot=Math.max(1,a+b),cx=w/2,cy=h*.78,r=Math.min(w*.36,h*.6),lw=Math.max(8,r*.2);ctx.lineWidth=lw;ctx.lineCap='butt';ctx.beginPath();ctx.strokeStyle=datasets[0]?.backgroundColor?.[1]||'#334155';ctx.arc(cx,cy,r,Math.PI,2*Math.PI);ctx.stroke();ctx.beginPath();ctx.strokeStyle=datasets[0]?.backgroundColor?.[0]||'#38bdf8';ctx.arc(cx,cy,r,Math.PI,Math.PI+Math.PI*Math.max(0,Math.min(1,a/tot)));ctx.stroke();return;}
 const l=48,t=16,r=12,b=35,iw=Math.max(1,w-l-r),ih=Math.max(1,h-t-b);const vals=datasets.flatMap(d=>(d.data||[]).map(Number).filter(Number.isFinite));const lo=Math.min(0,...vals),hi=Math.max(1,...vals),range=hi-lo||1;ctx.font='11px sans-serif';ctx.strokeStyle='rgba(148,163,184,.2)';ctx.fillStyle=OfflineChart.defaults.color;ctx.lineWidth=1;for(let i=0;i<=4;i++){let y=t+ih*i/4;ctx.beginPath();ctx.moveTo(l,y);ctx.lineTo(w-r,y);ctx.stroke();ctx.fillText(String(Math.round(hi-range*i/4)),4,y+3)}
 const n=Math.max(2,c.data?.labels?.length||0);for(let j=0;j<datasets.length;j++){let d=datasets[j];ctx.beginPath();ctx.strokeStyle=d.borderColor||'#38bdf8';ctx.lineWidth=d.borderWidth||2;ctx.setLineDash(d.borderDash||[]);let started=false;(d.data||[]).forEach((v,i)=>{if(v===null||v===undefined||!Number.isFinite(Number(v))){started=false;return;}const x=l+iw*i/(n-1),y=t+ih*(hi-Number(v))/range;if(!started){ctx.moveTo(x,y);started=true}else ctx.lineTo(x,y)});ctx.stroke();ctx.setLineDash([])}
 const labels=c.data?.labels||[];ctx.fillStyle=OfflineChart.defaults.color;[0,Math.floor((labels.length-1)/2),labels.length-1].filter((v,i,a)=>v>=0&&a.indexOf(v)===i).forEach(i=>{const text=String(labels[i]||'').slice(0,14);ctx.fillText(text,Math.max(l,Math.min(w-85,l+iw*i/(n-1)-20)),h-10)});
 }
}
window.Chart=OfflineChart;
})();