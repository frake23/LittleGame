(function () {
    const { ipcRenderer } = require('electron');

    // Отправка соообщений на Main процесс при нажатии кнопок
    document.getElementById("startBtn").onclick = () => ipcRenderer.send('start');
    document.getElementById("exitBtn").onclick = () => ipcRenderer.send('exit');
}());

