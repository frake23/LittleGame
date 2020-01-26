const {app, BrowserWindow, ipcMain} = require('electron');
const path = require('path');

// Основное окно
let mainWindow;

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin')
        app.quit()
});

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        width: 500,
        height: 500,
        show: true,
        webPreferences: {
            nodeIntegration: true
        },
        resizable: false,
    });
    mainWindow.setMenu(null);
    mainWindow.loadURL('file://' + path.join(__dirname, '/../static/pages/menu.html'));
    mainWindow.on('closed',  () => mainWindow = null)
});

// Обработка сообщений от рендер-процесса
ipcMain.on('start', () => {
    mainWindow.loadURL('file://' + path.join(__dirname, '/../static/pages/game.html'));
});

ipcMain.on('leave', () => {
    mainWindow.loadURL('file://' + path.join(__dirname, '/../static/pages/menu.html'));
});

ipcMain.on('exit', () => {
    app.quit()
});
