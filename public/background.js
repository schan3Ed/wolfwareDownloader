/* global chrome */
chrome.browserAction.setIcon({
  path: 'icon.png',
});

// list of sites that needed to be check
function getFromStorageSync(key) {
  return new Promise((resolve) => {
    chrome.storage.sync.get(key, (items) => {
      resolve(items);
    });
  });
}

chrome.downloads.onDeterminingFilename.addListener((downloadItem, suggest) => {
  // Add more sites potentially
  if (downloadItem.url.includes('wolfware')) {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.executeScript(tabs[0].id, {
        code: 'document.getElementsByClassName("page-header-headings")[0].innerText',
      }, (result) => {
        const pathName = result[0].split(/[\s]+/);
        const courseTitle = pathName[0];
        const courseNumber = pathName[1];
        getFromStorageSync('config').then((storage) => {
          suggest({
            filename: `${courseTitle}${courseNumber}/${downloadItem.filename}`,
            conflictAction: storage.config,
          });
        });
      });
    });
  } else {
    suggest({
      filename: downloadItem.filename,
      conflictAction: 'uniquify',
    });
  }
  return true;
});
