var Game = /** @class */ (function () {
    function Game() {
        this.CANVAS_WIDTH = 900;
        this.CANVAS_HEIGHT = 600;
        // Init Game canvas
        // Codez ici ...
        var canvas = document.querySelector("canvas");
        canvas.height = this.CANVAS_HEIGHT;
        canvas.width = this.CANVAS_WIDTH;
        this.context = canvas.getContext("2d");
    }
    Game.prototype.start = function () {
        //Codez ici ...
        this.context.clearRect(0, 0, this.CANVAS_WIDTH, this.CANVAS_HEIGHT);
        this.context.fillStyle = "#141414"; // HexaDecimal Gris foncé
        this.context.fillRect(0, 0, // [x,y] supérieur gauche
        this.CANVAS_WIDTH, this.CANVAS_HEIGHT // [x,y] inférieur droit
        );
    };
    return Game;
}());
export { Game };
