/* global chrome */
let storageCache = {};

// Updates only storageCache config property
// Also push up update to chrome local storage
export const updateConfig = (obj) => {
  storageCache.config = obj;
  chrome.storage.sync.set(storageCache);
};

export function getCache() {
  return storageCache;
}

function isEmptyObj(obj) {
  return Object.keys(obj).length === 0;
}

const init = {
  config: 'prompt',
};

export function initCache() {
  return new Promise((resolve) => {
    chrome.storage.sync.get('config', (result) => {
      if (isEmptyObj(result)) {
        chrome.storage.sync.set(init);
        storageCache = init;
      } else {
        storageCache = result;
      }
      resolve(result);
    });
  });
}
