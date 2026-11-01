# 🚫 Focus Guard

A simple Chrome extension that blocks distracting websites while you study or work. Add the sites you waste time on, and Focus Guard replaces them with a "Stay focused!" screen.

![Focus Guard demo](demo.gif)

## ✨ Features

- Blocks any website on your list (including its subdomains)
- Default block list: YouTube and Instagram
- Add or remove sites from a small popup
- One-click on/off switch
- Your list is saved in Chrome and syncs across devices when you're signed in
- Lightweight: plain HTML, CSS, and JavaScript, no dependencies

## 🛠️ Tech Stack

- HTML, CSS, JavaScript
- Chrome Extension Manifest V3
- `chrome.storage` API

## 📦 Installation

1. Download this repo: click **Code → Download ZIP**, then extract it  
   (or clone it: `git clone https://github.com/shivborse6/focus-guard.git`)
2. Open Chrome and go to `chrome://extensions`
3. Turn on **Developer mode** (top right)
4. Click **Load unpacked**
5. Select the `focus-guard` folder (the one that contains `manifest.json`)

The extension is now active. Pin it from the puzzle-piece icon in the toolbar for easy access.

## 🚀 Usage

1. Click the Focus Guard icon in your toolbar
2. Type a site (for example `reddit.com`) and click **Add**
3. Visit that site and you'll see the "Stay focused!" screen
4. Click **✕** next to a site to unblock it, or untick **Enabled** to pause blocking

## 📁 Project Structure

```
focus-guard/
├── manifest.json   # Extension configuration
├── content.js      # Checks each page and blocks it if listed
├── popup.html      # Popup interface
└── popup.js        # Popup logic (add/remove sites, on/off toggle)
```

## 🗺️ Planned Features

- [ ] Pomodoro timer mode (block sites for 25 minutes)
- [ ] Schedule blocking (for example, only during study hours)
- [ ] Motivational quotes on the blocked page
- [ ] "Wait 10 seconds" challenge before unblocking
- [ ] Dark/light theme for the popup
- [ ] Stats on time saved

## 🤝 Contributing

Suggestions and pull requests are welcome. Feel free to open an issue if you find a bug or have a feature idea.

## ⭐ Support

If Focus Guard helps you stay focused, consider giving the repo a star!

## 👤 Author

Made by [@shivborse6](https://github.com/shivborse6)