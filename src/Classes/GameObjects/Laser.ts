import { Assets } from "../Assets.js"
import { GameObject } from "./GameObjet.js"
import { Input } from "../Input.js";
import { Player } from "./Player.js";
import { Alien } from "./Alien.js";


export class Laser extends GameObject {


    protected start(): void {
        // Définissez l'image de l'alien
        // Codez ici ...
        this.setImage(Assets.getLaserImage());


        // Faites-le apparaître à une position aléatoire dans le canvas
        // Codez ici ...
        this.setPosition({
            x: this.getGame().getPlayer().getPosition().x,
            y: this.getGame().getPlayer().getPosition().y - this.getImage().height

        });


    }

    protected update(): void {
        // Faites avancer l'alien vers le bas du Canvas
        // Codez ici ...  
        // console.log(this.getPosition());
        // Codez ici ...
        this.setPosition({
            x: this.getPosition().x,
            y: this.getPosition().y += -1,
        })
        //  console.log(Input.getAxisX()); 


    }
    protected collide(other: GameObject): void {
        if (other instanceof Alien) {
            console.log("ola chica !")
            this.getGame().destroy(other);
            this.getGame().destroy(this);
        }
    }
}