var canvas = new fabric.canvas('myCanvas')

avenger_x = 10;
avenger_y = 10;

block_image_width = 30;
block_image_height = 30;

var avenger_object = "";
var block_image_object = "";

function avenger_update()
{
    fabric.Img.fromURL("player.png",function(Img)
    {
        avenger_object = Img;
        avenger_object.scaleToWidth(150);
        avenger_object.scaleToHeight(140);
        avenger_object.set({

        top:avenger_y,
        left:avenger_x
        } );

        canvas.add(avenger_object);
    }  
    );
}



function new_image(get_Img)
{
    fabric.Img.fromURL(get_Img , function(Img)
    {
        block_image_object = Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({

        top:avenger_y,
        left:avengerr_x
        } );
        canvas.add(block_image_object);
    }  
    );
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e)
{
ascci=e.keyCode;
console.log(ascci);

if(ascci=='80' && e.shiftKey==true)
{
console.log("Shift and p key are pressed together");
block_image_width =block_image_width +10;
block_image_height =block_image_height +10;
document.getElementById("current_width").innerHTML = block_image_width;
document.getElementById("current_height").innerHTML = block_image_height;

}
if(ascci=='77' && e.shiftKey==true)
{
console.log("Shift and m key are pressed together");
block_image_width =block_image_width -10;
block_image_height =block_image_height -10;
document.getElementById("current_width").innerHTML = block_image_width;
document.getElementById("current_height").innerHTML = block_image_height;

}

if(ascci=='38')
{
   Up();
    console.log("up");

}

if(ascci=='40')
{
   down();
    console.log("down");

}

if(ascci=='39')
{
   right();
    console.log("right");

}

if(ascci=='37')
{
   left();
    console.log("left");

}




if(ascci=='70')
{
   new_image("ironman_face.png");
    console.log("f");

}

if(ascci=='66')
{
   new_image("spiderman_body.png");
    console.log("b");

}

if(ascci=='76')
{
   new_image("hulk_legs.png");
    console.log("l");

}
if(ascci=='84')
{
   new_image("captain_america_left_hand.png");
    console.log("a");

}
if(ascci=='82')
{
   new_image("thor_right_hand.png");
    console.log("r"); 

}


}


function Up()
{
    if(avenger_y >= 0 )
        { 
            avenger_y = avenger_y - block_image_height;
            console.log("block image height = " + block_image_height);
            console.log("When up arrow key is pressed, X = " + avenger_x + " , Y = " + avenger_y);
            canvas.remove(avenger_object);
            player_update();
            }

}

function down()
{
    if(avenger_y <= 600 )
        { 
            avenger_y = avenger_y + block_image_height;
            console.log("block image height = " + block_image_height);
            console.log("When up arrow key is pressed, X = " + avenger_x + " , Y = " + avenger_y);
            canvas.remove(avenger_object);
            player_update();
            }
}

function right()
{
    if(player_x <= 1000 )
        { 
            avenger_x = avenger_x + block_image_height;
            console.log("block image height = " + block_image_height);
            console.log("When up arrow key is pressed, X = " + avenger_x + " , Y = " + avenger_y);
            canvas.remove(avenger_object);
            player_update();
            }
}

function left()
{
    if(player_x >= 0 )
        { 
            avenger_x= avenger_x - block_image_height;
            console.log("block image height = " + block_image_height);
            console.log("When up arrow key is pressed, X = " + avenger_x + " , Y = " + avenger_y);
            canvas.remove(avenger_object);
            player_update();
            }
}