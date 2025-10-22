import { GameObject } from "./GameObjects/GameObjet.js";
import { Player } from "./GameObjects/Player.js";
import { Alien } from "./GameObjects/Alien.js";
import { Star } from "./GameObjects/Star.js";
var Game = /** @class */ (function () {
    function Game() {
        this.CANVAS_WIDTH = 900;
        this.CANVAS_HEIGHT = 600;
        this.gameObjects = [];
        this.nbAliens = 10;
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
        // J'instancie un GameObject
        var gameObject = new GameObject(this);
        // Je le dessine
        this.draw(gameObject);
        // Démarre la boucle de jeu
        this.loop();
        this.player = new Player(this);
        this.draw(this.player);
        this.instanciate(this.player);
        // ++ Instanciation de l'alien
        this.alien = new Alien(this);
        this.draw(this.alien);
        for (var i = 0; i < this.nbAliens; i++) {
            this.instanciate(new Alien(this));
        }
        this.star = new Star(this);
        this.draw(this.star);
        // Input.listen();
    };
    //  La fonction draw qui affiche un gameObject
    Game.prototype.draw = function (gameObject) {
        // Codez ici
        // ...
        this.context.drawImage(gameObject.getImage(), gameObject.getPosition().x, gameObject.getPosition().y, gameObject.getImage().width, gameObject.getImage().height);
    };
    Game.prototype.loop = function () {
        var _this = this;
        setInterval(function () {
            console.log("Frame!");
            // J'efface la frame précédente.
            _this.context.clearRect(0, 0, _this.CANVAS_WIDTH, _this.CANVAS_HEIGHT);
            _this.context.fillStyle = "#141414";
            _this.context.fillRect(0, 0, _this.CANVAS_WIDTH, _this.CANVAS_HEIGHT);
            // Je redessine le joueur à chaque frame
            _this.draw(_this.player);
            // Je mets à jour le joueur
            _this.player.callUpdate();
            _this.alien.callUpdate();
            _this.draw(_this.alien);
            _this.gameObjects.forEach(function (go) {
                go.callUpdate();
                _this.draw(go);
            });
            // this.star.callUpdate();
            // this.draw(this.star);
        }, 10);
        // 1 frame/10ms ---> 100 frames/1000ms ---> 100 frames/1s
    };
    Game.prototype.instanciate = function (gameObject) {
        this.gameObjects.push(gameObject);
    };
    return Game;
}());
export { Game };
