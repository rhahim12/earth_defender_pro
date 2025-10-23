export class Input {
    private static axisX: Direction = 0;
    private static axisY: Direction = 0;
    private static isShooting: boolean = false;
    // +

    public static getAxisX(): Direction {
        return this.axisX;
    }


    public static getIsShooting(): boolean {
        return Input.isShooting;
    }

    public static listen() {
        document.addEventListener("keydown", (event) => {
            switch (event.key) {
                // Go right
                case "d":
                case "D":
                    Input.axisX = 1;
                    break;
                // Go left
                case "q":
                case "Q":
                    Input.axisX = -1;
                    break;
                case " ":
                    Input.isShooting = true;
                    break;
                default:
                    break;
            }
        });

        // Key Realeased
        document.addEventListener("keyup", (event) => {
            switch (event.key) {
                // Player Stops
                case "d":
                case "D":
                case "q":
                case "Q":
                    Input.axisX = 0;
                    break;
                case " ":
                    Input.isShooting = true;
                    break;
                default:
                    break;

            }
        });

        // RETOURNE this.axisX dans la method getAxisX plutot héhé
        // return this.axisX;


    }




}


export type Direction = 0 | 1 | -1;
