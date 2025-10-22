var Input = /** @class */ (function () {
    function Input() {
    }
    // +
    Input.getAxisX = function () {
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
                default:
                    break;
            }
        });
        return this.axisX;
    };
    Input.axisX = 0;
    return Input;
}());
export { Input };
