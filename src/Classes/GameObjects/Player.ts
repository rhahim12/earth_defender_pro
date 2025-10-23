import { Assets } from "../Assets.js";
import { GameObject } from "./GameObjet.js";
import { Input } from "../Input.js";
import { Laser } from "./Laser.js";

export class Player extends GameObject {
      private speed : number = 10;
       public lastShootTime  : number = Date.now();
    private shootInterval_ms : number = 200;
    protected start(): void {
        this.setImage(Assets.getPlayerImage());
        this.setPosition({
            x: this.getGame().CANVAS_WIDTH / 2,
            y: this.getGame().CANVAS_HEIGHT - this.getImage().height - 10
        });
    }
     protected update(): void {
        // console.log(this.getPosition());
        // Codez ici ...
         this.setPosition({
            x : this.getPosition().x += this.speed*Input.getAxisX(),
            y : this.getPosition().y
        })
        //  console.log(Input.getAxisX());

        if(Input.getIsShooting()&&
        (
            (Date.now() - this.lastShootTime) >=this.shootInterval_ms
        )
        ){
            this.getGame().instanciate(new Laser(this.getGame()));
            this.lastShootTime= Date.now();
        }
    }
}   