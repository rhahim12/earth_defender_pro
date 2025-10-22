import { Assets } from "../Assets.js"
import { GameObject } from "./GameObjet.js"
import { Input } from "../Input.js";

export class Star extends GameObject{
    private speed : number = 1;

    protected start(): void {
        // Définissez l'image de l'alien
        // Codez ici ...
         this.setImage(Assets.getStarImage());


        // Faites-le apparaître à une position aléatoire dans le canvas
        // Codez ici ...
        this.setPosition({
            x : Math.random() * this.getGame().CANVAS_WIDTH,
            y : Math.random() * this.getGame().CANVAS_HEIGHT /4 - 50,
        });


    }

    protected update(): void {
        // Faites avancer l'alien vers le bas du Canvas
        // Codez ici ...  
        console.log(this.getPosition());
                // Codez ici ...
                 this.setPosition({
                    x : this.getPosition().x ,
                    y : this.getPosition().y += this.speed,
                })
                 console.log(Input.getAxisX()); 
        
        
    }
}