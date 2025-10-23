import { GameObject } from "./GameObjects/GameObjet.js";
import { Player } from "./GameObjects/Player.js";
import { Input } from "./Input.js";
import { Alien } from "./GameObjects/Alien.js";
import { Star } from "./GameObjects/Star.js";
import { Laser } from "./GameObjects/Laser.js";


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
    private nbAliens: number = 10;
    private nbStar: number = 100;
    private star: Star;
     private laser: Laser;
     private nbLaser: number = 1;

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




        for (let i = 0; i < this.nbAliens; i++) {
            this.instanciate(new Alien(this))
        }

        this.star = new Star(this);
        this.draw(this.star);

        for (let i = 0; i < this.nbStar; i++) {
            this.instanciate(new Star(this))
        }

        this.laser = new Laser(this);
        this.draw(this.laser);

        for (let i = 0;i < this.nbLaser; i++){
            this.instanciate(new Laser(this))
        }
        
        Input.listen();

    }


      public over() : void{
        alert("GameOver!")
        window.location.reload();
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
            // console.log("Frame!");
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

            this.gameObjects.forEach(go => {
                go.callUpdate();
                this.draw(go);

                if (go instanceof Alien && this.player.overlap(go)) {
                    console.log("Alien touche le joueur");
                }

                this.gameObjects.forEach(other =>{

                    // Si le gameObject chevauche un gameObject qui n'est pas lui-même
                    if (other != go && go.overlap(other)) {
                        // console.log("Deux GameObject différents se touchent");
                        go.callCollide(other); // J'appelle la méthode collide de mon GameObject
                    }
                })
            })

            this.star.callUpdate();
            this.draw(this.star);

            // Je dois donc créer une méthode overlap ...






        }, 10);
        // 1 frame/10ms ---> 100 frames/1000ms ---> 100 frames/1s
    }


    public instanciate(gameObject: GameObject): void {
        this.gameObjects.push(gameObject);
    }

    public getPlayer() : Player{
    return this.player;
}
 public destroy(gameObject : GameObject) : void{
    // Codez ici ...
    // Supprimer gameObject du tableau de gameObjects
    this.gameObjects = this.gameObjects.filter(go=>go!=gameObject);

}

}