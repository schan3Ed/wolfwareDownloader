let txt = ""
let conflict = 'uniquify';

let checkSite = function (downloadItem) {
  let site = downloadItem.url;
  if (site.indexOf('wolfware') != -1) {
    return true;
  }
  return false;
};

chrome.downloads.onDeterminingFilename.addListener(function (downloadItem, suggest) {
  let go = checkSite(downloadItem);
  if (go) {
    chrome.tabs.query({ active: true, lastFocusedWindow: true }, function (tabs) {
      let tt = tabs[0].title;
      if (tt.indexOf('Course:') !== -1) {
        txt = tt.substring(8, 14);
        txt += tt.charAt(14) == ' ' ? "" : tt.charAt(14);
      } else {
        txt = tt.substring(0, 6);
        txt += tt.charAt(6) == ' ' ? "" : tt.charAt(6);
      }
      suggest({
        filename: txt + '/' + downloadItem.filename,
        conflictAction: 'overwrite'
      });
    });
  } else
    suggest({
      filename: downloadItem.filename,
      conflictAction: 'uniquify'
    });

  return true;
});