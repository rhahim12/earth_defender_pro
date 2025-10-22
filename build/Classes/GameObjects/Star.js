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
import { Input } from "../Input.js";
var Star = /** @class */ (function (_super) {
    __extends(Star, _super);
    function Star() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.speed = 1;
        return _this;
    }
    Star.prototype.start = function () {
        // Définissez l'image de l'alien
        // Codez ici ...
        this.setImage(Assets.getStarImage());
        // Faites-le apparaître à une position aléatoire dans le canvas
        // Codez ici ...
        this.setPosition({
            x: Math.random() * this.getGame().CANVAS_WIDTH,
            y: Math.random() * this.getGame().CANVAS_HEIGHT / 4 - 50,
        });
    };
    Star.prototype.update = function () {
        // Faites avancer l'alien vers le bas du Canvas
        // Codez ici ...  
        console.log(this.getPosition());
        // Codez ici ...
        this.setPosition({
            x: this.getPosition().x,
            y: this.getPosition().y += this.speed,
        });
        console.log(Input.getAxisX());
    };
    return Star;
}(GameObject));
export { Star };
