const list = document.getElementById("list");
const toggle = document.getElementById("toggle");
const input = document.getElementById("site");

function render(sites) {
  list.innerHTML = "";
  sites.forEach((s, i) => {
    const li = document.createElement("li");
    li.textContent = s + " ";
    const btn = document.createElement("button");
    btn.textContent = "✕";
    btn.onclick = () => {
      sites.splice(i, 1);
      chrome.storage.sync.set({ sites }, () => render(sites));
    };
    li.appendChild(btn);
    list.appendChild(li);
  });
}

chrome.storage.sync.get({ sites: ["youtube.com", "instagram.com"], enabled: true },
  ({ sites, enabled }) => {
    toggle.checked = enabled;
    render(sites);

    toggle.onchange = () => chrome.storage.sync.set({ enabled: toggle.checked });

    document.getElementById("add").onclick = () => {
      const value = input.value.trim().toLowerCase();
      if (value && !sites.includes(value)) {
        sites.push(value);
        chrome.storage.sync.set({ sites }, () => render(sites));
      }
      input.value = "";
    };
  });