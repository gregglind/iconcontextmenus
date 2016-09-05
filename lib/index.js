
var { modelFor } = require("sdk/model/core");
var { viewFor } = require("sdk/view/core");
var windows = require("sdk/windows").browserWindows;

function catchMenu (window) {
  console.log("tracking",window.location);
  window.oncontextmenu = function(evt){
      let el=evt.target;
      if (evt.shiftKey){
        console.log('has shift key')
        return true;
      } // regular menu

      console.log("El",el);
      let where = {x:evt.screenX, y:evt.screenY};
      //let menu;
      // TODO what is right way of checking if this is really a selection?
      if (selection.text) {
          console.log("selection menu");
          menu = selectionmenu;
      } else {
          console.log('page right')
          menu = pagerightmenu;
      }
      //showmenu(menu,null,where);
      return true
    };
}




// existing
for (let browserWindow of windows) {
  console.log(`annotating (open): ${browserWindow.title}`);
  var chromeWindow = viewFor(browserWindow);
  catchMenu(chromeWindow)
}

// news
// add a listener to the 'open' event
windows.on('open', function(browserWindow) {
  console.log(`annotating (new): ${browserWindow.title}`);
  var chromeWindow = viewFor(browserWindow);
  catchMenu(chromeWindow)
});
