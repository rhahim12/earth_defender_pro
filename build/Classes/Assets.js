var Assets = /** @class */ (function () {
    function Assets() {
    }
    Assets.getDefaultImage = function () {
        var image = document.querySelector("img#asset_default");
        if (image == null) {
            throw Error("No assets found");
        }
        return image;
    };
    // Ajout du getter d'asset player
    Assets.getPlayerImage = function () {
        // Codez ici ...
        var image = document.querySelector("img#asset_player");
        if (image == null) {
            throw Error("No assets found");
        }
        return image;
    };
    Assets.getAlienImage = function () {
        // Codez ici ...
        var image = document.querySelector("img#asset_alien");
        if (image == null) {
            throw Error("No assets found");
        }
        return image;
    };
    Assets.getStarImage = function () {
        // Codez ici ...
        var image = document.querySelector("img#asset_star");
        if (image == null) {
            throw Error("No assets found");
        }
        return image;
    };
    Assets.getLaserImage = function () {
        // Codez ici ...
        var image = document.querySelector("img#asset_laser");
        if (image == null) {
            throw Error("No assets found");
        }
        return image;
    };
    return Assets;
}());
export { Assets };
