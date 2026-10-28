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

function getAllVideos(root = document) {
  const videos = Array.from(root.querySelectorAll("video"));
  const elements = root.querySelectorAll("*");
  for (const el of elements) {
    if (el.shadowRoot) {
      videos.push(...getAllVideos(el.shadowRoot));
    }
  }
  return videos;
}

function findLargestPlayingVideo() {
  const videos = getAllVideos()
    .filter((video) => video.readyState !== 0)
    .sort((v1, v2) => {
      // Prioritize currently playing videos
      const v1Playing = !v1.paused && !v1.ended && v1.currentTime > 0;
      const v2Playing = !v2.paused && !v2.ended && v2.currentTime > 0;
      if (v1Playing !== v2Playing) {
        return v2Playing ? 1 : -1;
      }
      const r1 = v1.getBoundingClientRect();
      const r2 = v2.getBoundingClientRect();
      return (r2.width * r2.height) - (r1.width * r1.height);
    });

  if (videos.length === 0) {
    return;
  }

  const selected = videos[0];
  // Override sites that explicitly disable Picture-in-Picture
  if (selected.disablePictureInPicture) {
    selected.disablePictureInPicture = false;
  }

  return selected;
}

async function requestPictureInPicture(video) {
  try {
    await video.requestPictureInPicture();
    video.setAttribute("__pip__", "true");
    video.addEventListener("leavepictureinpicture", () => {
      video.removeAttribute("__pip__");
    }, { once: true });
    new ResizeObserver(maybeUpdatePictureInPictureVideo).observe(video);
  } catch {
    // Gracefully handle any rejected request
  }
}

function maybeUpdatePictureInPictureVideo(entries, observer) {
  const observedVideo = entries[0].target;
  if (!document.pictureInPictureElement) {
    observer.unobserve(observedVideo);
    return;
  }
  const video = findLargestPlayingVideo();
  if (video && video !== document.pictureInPictureElement) {
    observer.unobserve(observedVideo);
    requestPictureInPicture(video);
  }
}

(async () => {
  // If any video is already in PiP (whether launched manually, via autoPip, or native player), exit PiP
  if (document.pictureInPictureElement) {
    try {
      await document.exitPictureInPicture();
    } catch {
      // Exit failed or already exited
    }
    return;
  }

  const video = findLargestPlayingVideo();
  if (!video) {
    return;
  }
  await requestPictureInPicture(video);
})();
