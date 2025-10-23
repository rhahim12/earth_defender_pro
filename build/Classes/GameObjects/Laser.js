var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Assets } from "../Assets.js";
import { GameObject } from "./GameObjet.js";
import { Alien } from "./Alien.js";
var Laser = /** @class */ (function (_super) {
    __extends(Laser, _super);
    function Laser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Laser.prototype.start = function () {
        // Définissez l'image de l'alien
        // Codez ici ...
        this.setImage(Assets.getLaserImage());
        // Faites-le apparaître à une position aléatoire dans le canvas
        // Codez ici ...
        this.setPosition({
            x: this.getGame().getPlayer().getPosition().x,
            y: this.getGame().getPlayer().getPosition().y - this.getImage().height
        });
    };
    Laser.prototype.update = function () {
        // Faites avancer l'alien vers le bas du Canvas
        // Codez ici ...  
        // console.log(this.getPosition());
        // Codez ici ...
        this.setPosition({
            x: this.getPosition().x,
            y: this.getPosition().y += -1,
        });
        //  console.log(Input.getAxisX()); 
    };
    Laser.prototype.collide = function (other) {
        if (other instanceof Alien) {
            console.log("ola chica !");
            this.getGame().destroy(other);
            this.getGame().destroy(this);
        }
    };
    return Laser;
}(GameObject));
export { Laser };
