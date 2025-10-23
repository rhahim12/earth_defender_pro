import { GameObject } from "./GameObjects/GameObjet.js";
import { Player } from "./GameObjects/Player.js";
import { Input } from "./Input.js";
import { Alien } from "./GameObjects/Alien.js";
import { Star } from "./GameObjects/Star.js";
import { Laser } from "./GameObjects/Laser.js";
var Game = /** @class */ (function () {
    function Game() {
        this.CANVAS_WIDTH = 900;
        this.CANVAS_HEIGHT = 600;
        this.gameObjects = [];
        this.nbAliens = 10;
        this.nbStar = 100;
        this.nbLaser = 1;
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
        for (var i = 0; i < this.nbStar; i++) {
            this.instanciate(new Star(this));
        }
        this.laser = new Laser(this);
        this.draw(this.laser);
        for (var i = 0; i < this.nbLaser; i++) {
            this.instanciate(new Laser(this));
        }
        Input.listen();
    };
    Game.prototype.over = function () {
        alert("GameOver!");
        window.location.reload();
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
            // console.log("Frame!");
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
                if (go instanceof Alien && _this.player.overlap(go)) {
                    console.log("Alien touche le joueur");
                }
                _this.gameObjects.forEach(function (other) {
                    // Si le gameObject chevauche un gameObject qui n'est pas lui-même
                    if (other != go && go.overlap(other)) {
                        // console.log("Deux GameObject différents se touchent");
                        go.callCollide(other); // J'appelle la méthode collide de mon GameObject
                    }
                });
            });
            _this.star.callUpdate();
            _this.draw(_this.star);
            // Je dois donc créer une méthode overlap ...
        }, 10);
        // 1 frame/10ms ---> 100 frames/1000ms ---> 100 frames/1s
    };
    Game.prototype.instanciate = function (gameObject) {
        this.gameObjects.push(gameObject);
    };
    Game.prototype.getPlayer = function () {
        return this.player;
    };
    Game.prototype.destroy = function (gameObject) {
        // Codez ici ...
        // Supprimer gameObject du tableau de gameObjects
        this.gameObjects = this.gameObjects.filter(function (go) { return go != gameObject; });
    };
    return Game;
}());
export { Game };
