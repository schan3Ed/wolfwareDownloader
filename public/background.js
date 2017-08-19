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
    chrome.storage.local.get('config', function (result) {
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

let getSettings = function(){
  console.log('called get settings')
  chrome.storage.local.get('config', function (result) {
    return result;
  });
}

let checkSite = function (downloadItem) {
  let site = downloadItem.url;
  if (site.indexOf('wolfware') != -1) {
    console.log('found wolfware');
    return true;
  }
  return false;
};

initStorage();
//Where the determining file name starts  
chrome.downloads.onDeterminingFilename.addListener(function (downloadItem, suggest) {
  if (checkSite(downloadItem)) {
    chrome.tabs.query({ active: true, lastFocusedWindow: true }, function (tabs) {
      let tabTitle = tabs[0].title;
    // This right here get the right title in any page v0.1.3
        chrome.tabs.executeScript(tabs[0].id, {
        "code": "document.getElementsByTagName(\"h1\")[1]"}, function (result) {
        });
  //ends here still need to extract
      let txt = "";
      if (tabTitle.indexOf('Course:') !== -1) {
        txt = tabTitle.substring(8, 14);
        txt += tabTitle.charAt(14) == ' ' ? "" : tabTitle.charAt(14);
      } else {
        txt = tabTitle.substring(0, 6);
        txt += tabTitle.charAt(6) == ' ' ? "" : tabTitle.charAt(6);
      }
      suggest({
        filename: txt + '/' + downloadItem.filename,
        conflictAction: storageCache.config
      });
    });
  } else
    suggest({
      filename: downloadItem.filename,
      conflictAction: 'uniquify'
    });

  return true;
});
