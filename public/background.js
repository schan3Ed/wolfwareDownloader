// import { getCache } from '../src/stores/UserConfigStore';
// Do I even need this?
chrome.browserAction.setIcon({
  path: "icon.png"
});

//list of sites that needed to be check
let checkSites = function(downloadItem) {
  let url = downloadItem.url;
  return checkWolfware(url);
}

//checking for wolfware
let checkWolfware = function(url) {
  if (url.indexOf('wolfware') != -1) {
    //setting up for wolfware environment
    startIndex = 0;
    endIndex = 6;
    return true;
  }
  return false;
};

function getFromStorageSync(key) {
  return new Promise(function (resolve) {
    chrome.storage.sync.get(key, function (items) {
      resolve(items)
    })
  })
}

let startIndex;
let endIndex;
//Where the determining file name starts  
chrome.downloads.onDeterminingFilename.addListener(function(downloadItem, suggest) {
  if (checkSites(downloadItem)) {
    chrome.tabs.query({
      active: true,
      lastFocusedWindow: true
    }, function(tabs) {
      // This right here get the right title in any page v0.1.3
      // Should extract this as a refactor if we have more websites. But for now, its okay
      chrome.tabs.executeScript({
          code: 'document.getElementsByClassName("page-header-headings")[0].innerText'
      }, function(result) {
        let pathName = "";
        console.log(result[0])
        pathName += result[0].substring(startIndex, endIndex);
        getFromStorageSync('config').then((result) => {
          suggest({
            filename: pathName + '/' + downloadItem.filename,
            conflictAction: result.config
          });
        })
      })
    });
    return true;
  } else {
    suggest({
      filename: downloadItem.filename,
      conflictAction: 'uniquify'
    });
  }
});
