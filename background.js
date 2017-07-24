var txt =  ""
var conflict = 'uniquify';


var checkSite = function(downloadItem) {
  var site = downloadItem.url;
  if (site.indexOf('wolfware') != -1) {
    return true;
  }
  return false;
};



chrome.downloads.onDeterminingFilename.addListener(function(downloadItem, suggest) {
  var go = checkSite(downloadItem);
  console.log(downloadItem.url);
  if (go) {
      chrome.tabs.query({ active: true, lastFocusedWindow: true }, function(tabs) {
      var tt = tabs[0].title;
      if (tt.indexOf('Course:') !== -1) {
        txt = tt.substring(8, 14);
        txt += tt.charAt(14) == ' '? "" : tt.charAt(14);
      } else {
        txt = tt.substring(0, 6);
        txt += tt.charAt(6) == ' '? "" : tt.charAt(6);
      }
       suggest({
        filename: txt + '/' + downloadItem.filename,
        conflictAction:'overwrite'
        });
       console.log(txt);
      });
  } else 
       suggest({
        filename: downloadItem.filename,
        conflictAction:'uniquify'
        });
      
  return true;
});

