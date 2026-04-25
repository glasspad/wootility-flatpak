const { app, BrowserWindow, session } = require('electron');


app.commandLine.appendSwitch('enable-experimental-web-platform-features');
app.commandLine.appendSwitch('enable-features', 'WebHID');

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
  });

  win.loadURL('https://wootility.io');
}

app.whenReady().then(() => {
  
  session.defaultSession.setPermissionCheckHandler((wc, permission) => {
    return permission === 'hid';
  });

  session.defaultSession.setDevicePermissionHandler(() => true);

  createWindow();
});