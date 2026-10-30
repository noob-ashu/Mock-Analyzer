# Advance Analyzer V3 — Public PWA Edition

This is a static, offline-first installable web app based on Advance Analyzer V2. No build command required.

## Publish on GitHub Pages

1. Create a **public** repository (for example `advance-analyzer`).
2. Upload the **contents** of this folder to the repository root. Do not upload the ZIP as a single file.
3. Go to **Settings → Pages → Build and deployment → Deploy from a branch → main → /(root) → Save**.
4. Wait for GitHub Pages to publish, then open `https://YOUR-USERNAME.github.io/advance-analyzer/`.
5. In Chrome/Edge, use the browser's **Install app** option. Open it once online, then test with Wi-Fi off.

## Data migration (IMPORTANT)

In the original Advance Analyzer V2, go to Settings → Data Backup → Export Backup. In the published app, use Import Backup. Browser storage cannot automatically transfer between `file://` and the GitHub Pages origin. Keep the original file and backup until you verify scores, countdowns, and playlist progress.

## Offline limitations

The included offline-charts.js is a minimal offline fallback for charts. When online, Chart.js from the CDN replaces it. YouTube metadata imports and video playback require internet. Playlist thumbnails loaded from YouTube may not appear offline, but titles and progress remain. Google Fonts may fall back to system fonts offline.

## API key / privacy

Do NOT commit any personal API keys or backups to this public repository. Students supply their own API keys in Settings. Restrict YouTube Data API keys to the GitHub Pages HTTPS origin where possible. Data is stored in each student's browser storage, not on GitHub.

## Updating

Commit updated files; change the service worker CACHE version for major releases. Test upgrades and backup restoration before deploying. The browser may evict site storage; advise users to keep backups.
