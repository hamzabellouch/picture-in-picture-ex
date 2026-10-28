# Security Policy

## Supported Versions

The following versions of **Picture in Picture** are currently supported with security and stability updates.

| Version | Supported |
| -------- | --------- |
| 1.0.x (latest release) | ✅ |
| < 1.0.0 | ❌ |

---

## Reporting a Vulnerability

If you discover a security vulnerability, privacy issue, or behavior that could negatively impact users or the extension, please report it responsibly.

### Before Reporting

Please ensure that:

- The issue is reproducible.
- You are using the latest supported version of **Picture in Picture**.
- The issue is not caused by modified builds, unsupported browser forks, or conflicting third-party extensions.

### How to Report

You can report vulnerabilities through:

- **GitHub Issues:** [hamzabellouch/picture-in-picture-ex/issues](https://github.com/hamzabellouch/picture-in-picture-ex/issues) (for general non-sensitive bugs or security queries)
- **Email Contact:** `hamzabellouchcontact@gmail.com` (for sensitive vulnerabilities, security disclosures, or exploit details)

When submitting a report, please include:

- Browser name and version (e.g., Chrome 130, Firefox 132, Edge 130)
- Operating system and version (e.g., Windows 11, macOS Sequoia, Ubuntu 24.04)
- **Picture in Picture** version (e.g., v1.0.0)
- Steps to reproduce the issue
- Target webpage URL where the issue occurred (if applicable)
- Screenshots, logs, or console error messages (if available)
- A clear description of the potential security impact

### Response Policy

Security reports are reviewed as quickly as possible.

If a report is confirmed:

- The vulnerability will be investigated and patched promptly.
- A fix will be included in the next update release.
- Credit may be given to the reporter upon request.

If a report cannot be reproduced, lacks sufficient information, or is determined not to be a security issue, it will be closed with a clear explanation.

---

## Security & Architecture Notes

**Picture in Picture** runs locally within your browser and is designed with strict security principles:

- **Local Client-Side Execution:** All script logic runs locally using Manifest V3 service workers (Chromium) and background scripts (Firefox). No remote code execution (`eval`, external script injection, or remote CDN loading) is used, fully complying with modern browser extension store security standards.
- **On-Demand Minimal Script Injection:** The video discovery and toggle script (`script.js`) is only injected into the active tab via `chrome.scripting.executeScript` when you explicitly click the extension action icon or press the `Alt+P` keyboard shortcut.
- **Dynamic Content Script Registration:** The automatic background handler (`autoPip.js`) is dynamically registered via `chrome.scripting.registerContentScripts` strictly when the user enables the Automatic PiP option, and is immediately unregistered when disabled.
- **Native W3C Picture-in-Picture Standard:** Utilizes native browser APIs (`requestPictureInPicture()`, `exitPictureInPicture()`). The extension never records, captures, proxies, or streams media data or user inputs.
- **Non-Destructive DOM & Shadow DOM Traversal:** Inspects the local DOM and open Shadow DOM trees to discover `<video>` elements in a read-only manner, without altering page stylesheets or interfering with host website scripts.
- **Safe Restriction Overrides:** Overriding site-level `disablePictureInPicture` flags is performed strictly on the local `HTMLVideoElement` in memory to restore user control without circumventing browser sandbox boundaries.
- **Secure Local State Storage:** `chrome.storage.local` is used exclusively to persist the user's `autoPip` toggle state (`true`/`false`). No sensitive data, URLs, or browsing history are ever stored.
- **Zero Background Telemetry:** The extension contains zero tracking SDKs, analytics beacons, telemetry collectors, or background network calls.

Users are encouraged to:

- Keep **Picture in Picture** updated to the latest release.
- Install the extension only from the official repository ([hamzabellouch/picture-in-picture-ex](https://github.com/hamzabellouch/picture-in-picture-ex)) or verified store listings.
- Avoid installing modified, repackaged, or unofficial third-party builds.
- Report any unexpected behavior that could affect security or privacy.

Security and user privacy are foundational priorities for this project.
