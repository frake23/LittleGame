(function () {
    const { ipcRenderer } = require('electron');

    // Отправка соообщений на Main процесс при нажатии кнопок
    document.getElementById('exitBtn').onclick = () => ipcRenderer.send('leave');

    const player = new Player();

    document.addEventListener("keydown", (e) => {
        switch (e.code) {
            case "KeyW":
                player.move("moveUp");
                break;
            case "KeyA":
                player.move("moveLeft");
                break;
            case "KeyS":
                player.move("moveDown");
                break;
            case "KeyD":
                player.move("moveRight");
                break;
        }
    });
    document.addEventListener("keyup", (e) => {
        switch (e.code) {
            case "KeyW":
            case "KeyS":
                player.move("stopUpDown");
                break;
            case "KeyA":
            case "KeyD":
                player.move("stopLeftRight");
                break;
        }
    })
}());
