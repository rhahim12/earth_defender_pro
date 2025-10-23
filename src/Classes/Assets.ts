export class Assets{
    public static getDefaultImage(){
        const image : HTMLImageElement = document.querySelector("img#asset_default");
        if(image == null){
            throw Error("No assets found");
        }
        return image;
    }

     // Ajout du getter d'asset player
    public static getPlayerImage() : HTMLImageElement{
        // Codez ici ...
         const image : HTMLImageElement = document.querySelector("img#asset_player");
        if(image == null){
            throw Error("No assets found");
        }
        return image;
    }


     public static getAlienImage() : HTMLImageElement{
        // Codez ici ...
         const image : HTMLImageElement = document.querySelector("img#asset_alien");
        if(image == null){
            throw Error("No assets found");
        }
        return image;
    }
     public static getStarImage() : HTMLImageElement{
        // Codez ici ...
         const image : HTMLImageElement = document.querySelector("img#asset_star");
        if(image == null){
            throw Error("No assets found");
        }
        return image;
    }
    public static getLaserImage() : HTMLImageElement{
        // Codez ici ...
         const image : HTMLImageElement = document.querySelector("img#asset_laser");
        if(image == null){
            throw Error("No assets found");
        }
        return image;
    }
}