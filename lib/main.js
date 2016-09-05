"use strict";

const data = require('sdk/self').data;
//const { Hotkey } = require("sdk/hotkeys");
//const {Panel} = require("sdk/panel");
//const selection = require("sdk/selection");
//const tabs = require("sdk/tabs");
//
//// TODO expose css in panel.js
//// TODO expose position in panel().show()
//// TODO incorporate existing menus?  Html5 element menus?
//
//var pagerightmenu = Panel({
//  width: 300,
//  height: 500,
//  contentURL: data.url("pagemenu.html"),
//});
//
//var selectionmenu= Panel({
//    width: 600,
//    height: 500,
//    contentURL: data.url("selectionmenu.html"),
//});
//
//var pagerightmenuHotkey = Hotkey({
//  combo: "shift-p",
//  onPress: function() {
//    showmenu(pagerightmenu);
//  }
//});
//
//var selectionmenuHotkey= Hotkey({
//  combo: "shift-c",
//  onPress: function() {
//    showmenu(selectionmenu);
//  }
//});
//
//var showmenu = function(panel,anchor,where) {
//  panel.isShowing? panel.hide(): panel.show(anchor,where);
//  return false;
//}
//
//tabs[0].url = "chrome://global/skin/popup.css";
//tabs.open("about:newtab");


// http://andromeda.rutgers.edu/~ehrlich/jjtm/demo/oncontextmenu/oncontextmenu_JS.htm
const windowUtils = require("sdk/window/utils");
// inspired by: https://github.com/erikvold/menuitems-jplib/blob/master/lib/menuitems.js
var contextMenuTracker = new windowUtils.WindowTracker({
    onTrack: function(window) {
        console.log("tracking",window.location);
        window.oncontextmenu = function(evt){
            let el=evt.target;
            if (evt.shiftKey){return true;} // regular menu

            console.log("El",el);
            let where = {x:evt.screenX, y:evt.screenY};
            let menu;
            // TODO what is right way of checking if this is really a selection?
            if (selection.text) {
                console.log("selection menu");
                menu = selectionmenu;
            } else {
                menu = pagerightmenu;
            }
            showmenu(menu,null,where); return false};
    }
});

// <div style="height: 100px; background-color: red;" oncontextmenu="window.alert('test');return false;"></div>

