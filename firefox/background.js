// Copyright 2018 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

const browserAPI = typeof browser !== "undefined" ? browser : chrome;

browserAPI.action.onClicked.addListener((tab) => {
  if (!tab || !tab.id) return;
  browserAPI.scripting.executeScript({
    target: { tabId: tab.id, allFrames: true },
    files: ["script.js"],
  }).catch(() => {
    // Ignore error on restricted pages (e.g. about:, addons.mozilla.org)
  });
});

browserAPI.runtime.onInstalled.addListener(async () => {
  const { autoPip } = await browserAPI.storage.local.get({ autoPip: true });
  try {
    await browserAPI.contextMenus.removeAll();
  } catch {
    // Ignore error
  }
  browserAPI.contextMenus.create({
    id: "autoPip",
    contexts: ["action"],
    title: "Automatic picture-in-picture (BETA)",
    type: "checkbox",
    checked: autoPip,
  }, () => {
    if (browserAPI.runtime.lastError) {
      // Ignore duplicate menu error
    }
  });
  await updateContentScripts(autoPip);
});

browserAPI.runtime.onStartup.addListener(async () => {
  const { autoPip } = await browserAPI.storage.local.get({ autoPip: true });
  await updateContentScripts(autoPip);
});

browserAPI.contextMenus.onClicked.addListener(async (info) => {
  const autoPip = info.checked;
  await browserAPI.storage.local.set({ autoPip });
  await updateContentScripts(autoPip);
});

async function updateBadge(autoPip) {
  try {
    await browserAPI.action.setBadgeBackgroundColor({ color: "#4285F4" });
    if (browserAPI.action.setBadgeTextColor) {
      await browserAPI.action.setBadgeTextColor({ color: "#fff" });
    }
    await browserAPI.action.setTitle({ title: `Automatic picture-in-picture (${autoPip ? "on" : "off"})` });
    await browserAPI.action.setBadgeText({ text: autoPip ? "★" : "" });
  } catch {
    // Action API can fail silently if not available
  }
}

async function updateContentScripts(autoPip) {
  await updateBadge(autoPip);

  try {
    await browserAPI.scripting.unregisterContentScripts({ ids: ["autoPip"] });
  } catch {
    // Script was not registered, ignore
  }

  if (!autoPip) {
    return;
  }

  try {
    await browserAPI.scripting.registerContentScripts([{
      id: "autoPip",
      js: ["autoPip.js"],
      matches: ["<all_urls>"],
      runAt: "document_start"
    }]);
  } catch {
    // Catch any registration error
  }
}
