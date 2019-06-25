"use strict";

var _require = require('electron'),
    app = _require.app,
    BrowserWindow = _require.BrowserWindow;

function createWindow() {
  // Create the browser window.
  var win = new BrowserWindow({
    width: 800,
    height: 600
  }); // and load the index.html of the app.

  win.loadFile('build/index.html');
  win.removeMenu();
  win.setTitle("SystemManager Desktop"); // win.blur();

  win.addTabbedWindow;
  win.webContents.openDevTools();
}

app.on('ready', createWindow);