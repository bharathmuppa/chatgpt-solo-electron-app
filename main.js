const { app, BrowserWindow } = require('electron');

const url = 'https://chat.openai.com/chat';

function createWindow() {
  const win = new BrowserWindow({
    fullscreen: true,
    title: "ChatGpt Solo",
  })

  win.loadURL(url)
}

app.whenReady().then(() => {
  createWindow()
})