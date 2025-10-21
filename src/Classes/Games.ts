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
    public start(): void {
        //Codez ici ...
        this.context.clearRect(0, 0,this.CANVAS_WIDTH,this.CANVAS_HEIGHT);
        this.context.fillStyle = "#141414";  // HexaDecimal Gris foncé
        this.context.fillRect(
            0, 0,            // [x,y] supérieur gauche
            this.CANVAS_WIDTH, this.CANVAS_HEIGHT // [x,y] inférieur droit
        );

    }
}