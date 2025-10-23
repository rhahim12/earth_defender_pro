var Input = /** @class */ (function () {
    function Input() {
    }
    // +
    Input.getAxisX = function () {
        return this.axisX;
    };
    Input.getIsShooting = function () {
        return Input.isShooting;
    };
    Input.listen = function () {
        document.addEventListener("keydown", function (event) {
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
        document.addEventListener("keyup", function (event) {
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
    };
    Input.axisX = 0;
    Input.axisY = 0;
    Input.isShooting = false;
    return Input;
}());
export { Input };
