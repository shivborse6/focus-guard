chrome.storage.sync.get(
  { sites: ["youtube.com", "instagram.com"], enabled: true },
  ({ sites, enabled }) => {
    if (!enabled) return;
    const host = location.hostname;
    const blocked = sites.some(s => host === s || host.endsWith("." + s));
    if (blocked) {
      document.documentElement.innerHTML = `
        <body style="display:flex;align-items:center;justify-content:center;
          height:100vh;margin:0;background:#111;color:#fff;
          font-family:sans-serif;text-align:center">
          <div>
            <h1>🚫 Stay focused!</h1>
            <p>${host} is blocked right now.</p>
          </div>
        </body>`;
    }
  }
);