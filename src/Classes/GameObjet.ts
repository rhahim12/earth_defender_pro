import { Position } from "./Position.js";

export class GameObject{
    private position : Position;

    constructor(){
         this.position = {
            x : 0,
            y : 0
        };
    }
}