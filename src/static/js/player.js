class Player {
    // Координаты
    #x; #y;

    // Изменение координат
    #dx = 0; #dy = 0;

    // Скорость
    #speed;

    // Интервал обновления рисования в мс
    #timeout = 5;

    // Сдвиг игрока
    #delta = () => this.#speed * this.#timeout;

    constructor() {
        this.#x = canvas.width / 2;
        this.#y = canvas.height / 2;

        // Скорость определяется по формуле (длина + высота) / (2 * интервал обновления * 500)
        this.#speed = (canvas.width + canvas.height) / (2 * this.#timeout * 500);

        setInterval(this.#drawBall, this.#timeout)
    }

    // Функция отрисовки игрока
    #drawBall = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.arc(this.#x, this.#y, 10, 0, Math.PI*2);
        ctx.fillStyle = "brown";
        ctx.fill();
        ctx.closePath();

        // Проверка на стены
        if (this.#x + this.#dx >= 10 && this.#x + this.#dx <= canvas.width - 10)
            this.#x += this.#dx;
        if (this.#y + this.#dy >= 10 && this.#y + this.#dy <= canvas.height - 10)
            this.#y += this.#dy;
    };

    // Функция движения игрока
    move(action) {
        switch (action) {
            case "moveLeft":
                this.#dx = -this.#delta();
                break;
            case "moveRight":
                this.#dx = this.#delta();
                break;
            case "moveUp":
                this.#dy = -this.#delta();
                break;
            case "moveDown":
                this.#dy = this.#delta();
                break;
            case "stopLeftRight":
                this.#dx = 0;
                break;
            case "stopUpDown":
                this.#dy = 0;
                break;
        }
    }
}
