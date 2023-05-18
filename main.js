const { app, BrowserWindow} = require('electron')
const path = require('path')


const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    
    width: 1200,
    height: 750,
    minHeight:750,
    minWidth:1200,
    // titleBarStyle: 'hidden',
    titleBarOverlay: {

      color: '#2e2863',
      sumbolColor:'#74b1be'
    },
    
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true,
      contextIsolation: false
    },
    icon: './LearnPDD.png'

  })
  
  // and load the index.html of the app.
  mainWindow.loadFile('main.html'),
  mainWindow.setMenuBarVisibility(false)
  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Некоторые интерфейсы API могут использоваться только после возникновения этого события.
app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})
