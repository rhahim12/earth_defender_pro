import { GameObject } from "./GameObjects/GameObjet.js";
import { Player } from "./GameObjects/Player.js";
import { Input } from "./Input.js";
import { Alien } from "./GameObjects/Alien.js";
import { Star } from "./GameObjects/Star.js";
export class Game {

    private context: CanvasRenderingContext2D;
    public readonly CANVAS_WIDTH: number = 900;
    public readonly CANVAS_HEIGHT: number = 600;

    constructor() {
        // Init Game canvas
        // Codez ici ...
        const canvas: HTMLCanvasElement = document.querySelector("canvas");
        canvas.height = this.CANVAS_HEIGHT;
        canvas.width = this.CANVAS_WIDTH;
        this.context = canvas.getContext("2d");



    }


    private player: Player;
    private alien: Alien;
    private gameObjects: GameObject[] = [];
    private nbAliens : number = 10;
    private star: Star;

    public start(): void {
        //Codez ici ...
        this.context.clearRect(0, 0, this.CANVAS_WIDTH, this.CANVAS_HEIGHT);
        this.context.fillStyle = "#141414";  // HexaDecimal Gris foncé
        this.context.fillRect(
            0, 0,            // [x,y] supérieur gauche
            this.CANVAS_WIDTH, this.CANVAS_HEIGHT // [x,y] inférieur droit
        );

        // J'instancie un GameObject
        const gameObject = new GameObject(this);

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


        
   
        for (let i = 0; i<this.nbAliens;i++){
            this.instanciate(new Alien(this))
        }

        this.star = new Star(this);
        this.draw(this.star); 
        // Input.listen();

    }

    //  La fonction draw qui affiche un gameObject
    private draw(gameObject: GameObject) {
        // Codez ici
        // ...
        this.context.drawImage(
            gameObject.getImage(),
            gameObject.getPosition().x,
            gameObject.getPosition().y,
            gameObject.getImage().width,
            gameObject.getImage().height);
    }

    private loop() {
        setInterval(() => {
            console.log("Frame!");
            // J'efface la frame précédente.
            this.context.clearRect(0, 0, this.CANVAS_WIDTH, this.CANVAS_HEIGHT);
            this.context.fillStyle = "#141414";
            this.context.fillRect(0, 0, this.CANVAS_WIDTH, this.CANVAS_HEIGHT);

            // Je redessine le joueur à chaque frame
            this.draw(this.player);

            // Je mets à jour le joueur
            this.player.callUpdate();



            this.alien.callUpdate();
            this.draw(this.alien);

             this.gameObjects.forEach(go=>{
                go.callUpdate();
                this.draw(go);
            })

            // this.star.callUpdate();
            // this.draw(this.star);




        }, 10);
        // 1 frame/10ms ---> 100 frames/1000ms ---> 100 frames/1s
    }


    public instanciate(gameObject: GameObject): void {
        this.gameObjects.push(gameObject);
    }


}