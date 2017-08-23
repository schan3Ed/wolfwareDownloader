// Do I even need this?
chrome.browserAction.setIcon({
  path: "icon.png"
});

let checkSite = function (downloadItem) {
  let site = downloadItem.url;
  if (site.indexOf('wolfware') != -1) {
    console.log('found wolfware');
    return true;
  }
  return false;
};

chrome.downloads.onDeterminingFilename.addListener(function (downloadItem, suggest) {
  if (checkSite(downloadItem)) {
    chrome.tabs.query({ active: true, lastFocusedWindow: true }, function (tabs) {
      let tabTitle = tabs[0].title;
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
