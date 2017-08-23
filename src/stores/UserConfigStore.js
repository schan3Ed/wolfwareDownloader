/* global chrome */
import Promise from 'bluebird';
let storageCache = {}

const storageGet = Promise.promisify(chrome.storage.sync.get);

// Updates only storageCache config property
// Also push up update to chrome local storage
export let updateConfig = function(obj) {
  storageCache.config = obj;
  chrome.storage.sync.set(storageCache);
}

function isEmptyObj(obj) {
  return Object.keys(obj).length === 0;
}

let init = {
  config: 'prompt'
};

export function initCache () {
  return new Promise(function (resolve, reject) {
    chrome.storage.sync.get('config', function (result) {
      if (isEmptyObj(result)) {
        chrome.storage.sync.set(init);
        storageCache = init;
      } else {
        // console.log('storage already initialized');
        storageCache = result;
        // console.log('result ' + JSON.stringify(result));
      }
      resolve(result);
    });
  });
};
