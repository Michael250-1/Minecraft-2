var Canvas=new fabric.Canvas("myCanvas");
playerx=10;
playery=10;
blockwidth=30;
blockheight=30;
var player_object="";
var block_object="";

function player_update(){
    fabric.Image.fromURL("player.png", function(Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:playery,
            left:playerx
        });
        Canvas.add(player_object);
    });

}
function block_update(get_image){
    fabric.Image.fromURL(get_image, function(Img){
        block_object=Img;
        block_object.scaleToWidth(blockwidth);
        block_object.scaleToHeight(blockheight);
        block_object.set({
            top:playery,
            left:playerx
        });
        Canvas.add(block_object);
    });
    
}
window.addEventListener("keydown",my_keyDown);
function my_keyDown(e){
    keypress=e.keyCode;
    if (keypress=="84"){
block_update("trunk.jpg");
console.log("t");
    }

   if (keypress=="68"){
block_update("dark_green.png");
console.log("d"); 
}

if (keypress=="76"){
    block_update("light_green.png");
   console.log("l");
}

if (keypress=="71"){
    block_update("ground.png");
    console.log("g");
}

if (keypress=="87"){
    block_update("wall.jpg");
    console.log("w");
}

if (keypress=="89"){
    block_update("yellow_wall.png");
    console.log("y");
}

if (keypress=="82"){
    block_update("roof.jpg");
    console.log("r");
}

    if (keypress=="67"){
        block_update("cloud.jpg");
        console.log("c");
    }

        if (keypress=="85"){
            block_update("unique.png");
            console.log("u");
        }

        if (keypress=="80" && e.shiftKey==true){
            console.log("p and shift pressed together");
            blockwidth= blockwidth + 10;
            blockheight= blockheight + 10;
            document.getElementById("currentwidth",).innerHTML=blockwidth;
            document.getElementById("currentheight",).innerHTML=blockheight;
        }

        if (keypress=="77" && e.shiftKey==true){
            console.log("m and shift pressed together");
            blockwidth= blockwidth - 10;
            blockheight= blockheight - 10;
            document.getElementById("currentwidth",).innerHTML=blockwidth;
            document.getElementById("currentheight",).innerHTML=blockheight;
        }
    }