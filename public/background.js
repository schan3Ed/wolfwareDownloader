// import { getCache } from '../src/stores/UserConfigStore';
// Do I even need this?
chrome.browserAction.setIcon({
  path: "icon.png"
});

//list of sites that needed to be check
let checkSite = function(downloadItem) {
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
chrome.downloads.onDeterminingFilename.addListener(function (downloadItem, suggest) {
  if (checkSite(downloadItem)) {
    chrome.tabs.query({ active: true, lastFocusedWindow: true }, function (tabs) {
      let tt = tabs[0].title;
      if (tt.indexOf('Course:') !== -1) {
        txt = tt.substring(8, 14);
        txt += tt.charAt(14) == ' ' ? "" : tt.charAt(14);
      } else {
        txt = tt.substring(0, 6);
        txt += tt.charAt(6) == ' ' ? "" : tt.charAt(6);
      }
      getFromStorageSync('config').then( (results) => {
        console.log(results.config);
        console.log(results);
        suggest({
          filename: txt + '/' + downloadItem.filename,
          conflictAction: results.config
        });
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
