# Picture in Picture

A modern, lightweight, and versatile browser extension that allows you to easily watch any video in a floating Picture-in-Picture (PiP) window directly from any webpage—featuring one-click toolbar activation, keyboard shortcut support (`Alt+P`), automatic video selection with Shadow DOM traversal, restriction override, dynamic video tracking via ResizeObserver, and an optional Automatic Picture-in-Picture mode.


Compatible with all major browsers: **Chrome, Brave, Edge, Opera, Vivaldi (Chromium-based)** and **Mozilla Firefox**.



### <a name="Features"></a> ⭐ Features

- **One-Click Picture-in-Picture Toggle:** Activate or exit Picture-in-Picture mode with a single click from the browser toolbar or via the global keyboard shortcut (`Alt+P`).
- **Smart Video Detection & Prioritization:** Automatically scans the webpage to locate active HTML5 `<video>` elements, prioritizing currently playing videos and selecting the largest video based on viewport dimensions.
- **Deep Shadow DOM Traversal:** Recursively inspects custom web components and open Shadow DOM trees to discover embedded video players that standard DOM queries miss.
- **Bypass Website Restrictions:** Automatically overrides arbitrary developer flags that block PiP by setting `disablePictureInPicture = false` on restricted video elements.
- **Dynamic Stream Tracking (ResizeObserver):** Monitors the active video container with a `ResizeObserver`, smoothly transferring the PiP session if the primary playing video changes or updates on the page.
- **Automatic Picture-in-Picture (BETA):** Right-click the extension icon to toggle the Auto-PiP mode. When enabled, it leverages the `MediaSession` API (`enterpictureinpicture`) to automatically pop out videos into PiP when switching tabs or multitasking.
- **Visual Badge Status:** Displays a clean star badge (`★`) and contextual tooltip on the toolbar icon to clearly indicate when Automatic PiP mode is active.
- **Dual Browser Architecture (MV3):**
  - **Chromium:** Powered by Manifest V3 service worker lifecycle and dynamic content script registration.
  - **Mozilla Firefox:** Tailored Manifest V3 implementation with non-persistent Event Pages and Gecko ID integration.
- **100% Local & Zero External Dependencies:** Operates entirely client-side in browser memory with zero tracking, telemetry, data collection, or remote server communications.



### <a name="RepositoryStructure"></a> 📁 Repository Structure

```text

├── chromium/          # Extension build directory for Chrome, Brave, Edge, Opera, Vivaldi, etc.
│   ├── assets/        # Extension toolbar and store icons (19px, 38px, 128px)
│   ├── autoPip.js     # MediaSession listener for automatic picture-in-picture triggering
│   ├── background.js  # Service worker handling toolbar clicks, badge updates, and script registration
│   ├── manifest.json  # Chromium Manifest V3 configuration
│   └── script.js      # Smart video discovery, Shadow DOM traversal, and PiP toggle script
│
├── firefox/           # Extension build directory for Mozilla Firefox
│   ├── assets/        # Extension toolbar and store icons (19px, 38px, 128px)
│   ├── autoPip.js     # MediaSession listener for automatic picture-in-picture triggering
│   ├── background.js  # Event page script handling toolbar clicks, badge updates, and script registration
│   ├── manifest.json  # Firefox Manifest V3 configuration (with Gecko ID)
│   └── script.js      # Smart video discovery, Shadow DOM traversal, and PiP toggle script
│
├── .gitignore         # Prevents tracking of OS metadata, archives, and temporary files
├── LICENSE            # Apache License 2.0
├── PRIVACY_POLICY.md  # Privacy policy and local data handling guidelines
├── README.md          # Project documentation and setup guide
└── SECURITY.md        # Security policy and vulnerability disclosure guide

```



### <a name="InstallationUsage"></a> ⚙️ Installation & Usage

### <a name="ForChromiumBasedBrowsers"></a> 🌐 For Chromium-Based Browsers (Chrome, Brave, Edge, Opera)

1. Open your Chromium-based browser and navigate to:
   - **Google Chrome / Brave / Opera:** `chrome://extensions/`
   - **Microsoft Edge:** `edge://extensions/`

2. Enable **Developer mode** (toggle located in the top-right corner).

3. Click **Load unpacked**.

4. Select the `chromium` directory:

```text
chromium/
├── assets/
│   ├── icon19.png
│   ├── icon38.png
│   └── icon128.png
├── autoPip.js
├── background.js
├── manifest.json
└── script.js
```

5. The extension will be installed and ready to use in your browser toolbar.

### <a name="ForMozillaFirefox"></a> 🦊 For Mozilla Firefox

1. Open **Mozilla Firefox** and navigate to `about:debugging#/runtime/this-firefox`.
2. Click **Load Temporary Add-on...**.
3. Select the `manifest.json` file inside the `firefox` folder:

```text
firefox/
└── manifest.json
```

4. The extension is now loaded as a temporary add-on.

> [!NOTE]
> For permanent installation in Firefox, the extension can be packaged and signed through [addons.mozilla.org](https://addons.mozilla.org) (e.g. submitted as a self-distributed/unlisted add-on to generate a signed `.xpi`).



### <a name="HowToUse"></a> 🖱️ How to Use

1. Navigate to any webpage containing one or more HTML5 videos (e.g., YouTube, Twitch, Vimeo, news sites, or custom video players).
2. Start playing the video you want to watch.
3. Click the **Picture in Picture** icon in your browser toolbar (or press `Alt+P` on your keyboard).
4. The active video will immediately detach into a floating, resizable Picture-in-Picture window that stays on top of other windows.
5. To exit Picture-in-Picture:
   - Click the **Picture in Picture** toolbar icon again (or press `Alt+P`).
   - Or click the close / return-to-tab button on the floating PiP window.
6. **Automatic Picture-in-Picture (Optional):**
   - Right-click the extension icon in your toolbar to see the context menu.
   - Check **Automatic picture-in-picture (BETA)**.
   - A star badge (`★`) will appear on the icon indicating that auto-PiP is active. When supported by the site, videos will automatically enter PiP when you switch tabs.



### <a name="Privacy & Safety"></a> 🛡️ Privacy & Safety

- **Local Processing:** All DOM querying, video inspection, and Picture-in-Picture API invocations occur strictly within your browser's local runtime. No video streams, audio, titles, browsing history, or personal data are ever captured, logged, or sent to external servers.
- **Safe & Non-Intrusive:** Operates with minimal permissions, modifying only standard video DOM properties on demand without injecting tracking scripts or interfering with website styles.



> [!WARNING]
> Picture-in-Picture relies on the standard HTML5 `<video>` element and browser PiP support. Videos rendered exclusively inside encrypted DRM containers, WebGL canvas streams without video backing, or non-HTML5 plugins cannot be extracted via standard Picture-in-Picture APIs.



### <a name="Copyright©2026"></a> Copyright © 2026

Thank you for engaging with us. For inquiries or collaboration, please contact:  
hamzabellouchcontact@gmail.com

Stay connected and follow us on:  
[WhatsApp](https://whatsapp.com/channel/0029Vb7MArw0LKZMpjjqOk2P) | [Facebook](https://facebook.com/hamzabellouch1) | [Instagram](https://instagram.com/hamzabellouch0) | [Twitter](https://twitter.com/hamzabellouch0) | [Telegram](https://t.me/hammzabellouch) | [LinkedIn](https://www.linkedin.com/in/hamzabellouch)
