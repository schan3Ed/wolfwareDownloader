// Do I even need this?
chrome.browserAction.setIcon({
  path: "icon.png"
});

// File conflict action
// .prompt
// .overwrite
// .default
let storageCache = {};

function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

let initStorage = function() {
  // alert('testing');
  console.log('clearing local storage');
  chrome.storage.local.clear(function() {
    console.log('cleared');
    chrome.storage.local.get('config', function(result) {
      // alert(result);
      console.log('result' + JSON.stringify(result));
      if (isEmpty(result)) {
        console.log('setting config to prompt');
        let init = {
          config: 'prompt'
        };
        chrome.storage.local.set(init);
        storageCache = init;
      } else {
        console.log('storage already initialized');
      }
    })
  })
}

let getSettings = function() {
  console.log('called get settings')
  chrome.storage.local.get('config', function(result) {
    return result;
  });
}



initStorage();

let startIndex = 0;
let endIndex = 0;
//list of sites that needed to be check
let checkSites = function(downloadItem) {
  let url = downloadItem.url;
  return checkWolfware(url);
}
//checking for wolfware
let checkWolfware = function(url) {
  if (url.indexOf('wolfware') != -1) {
    console.log('Downloading from a wolfware site');
    //setting up for wolfware environment
    startIndex = 0;
    endIndex = 6;
    return true;
  }
  return false;
};


//Where the determining file name starts  
chrome.downloads.onDeterminingFilename.addListener(function(downloadItem, suggest) {
  if (checkSites(downloadItem)) {
    chrome.tabs.query({
      active: true,
      lastFocusedWindow: true
    }, function(tabs) {
      let tabTitle = tabs[0].title;
      // This right here get the right title in any page v0.1.3
      // Should extract this as a refactor if we have more websites. But for now, its okay
      chrome.tabs.executeScript({
          code: 'document.getElementsByClassName("page-header-headings")[0].innerText'
      }, function(result) {
        let pathName = "";
        console.log(result[0])
   //     result = result.textContent
        pathName += result[0].substring(startIndex, endIndex);
        suggest({
          filename: pathName + '/' + downloadItem.filename,
          //conflictAction: storageCache.config
          conflictAction: 'overwrite'
        });
      });
    });
  } else
    suggest({
      filename: downloadItem.filename,
      conflictAction: 'uniquify'
    });

  return true;
});
