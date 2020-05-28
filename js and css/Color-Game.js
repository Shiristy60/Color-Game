var numSquares=6;
var color=[];
var pickedColor;

var resetBtn=document.getElementById("reset");
var square = document.querySelectorAll(".square");
var colorDisplay=document.getElementById("colorDisplay");
var message=document.getElementById("message");
var h1=document.getElementsByTagName("h1")[0];
var modeBtns=document.querySelectorAll(".mode");

init();

function init(){
        setUpModeButtons();
        setUpSquares();
        reset();
}

function setUpModeButtons(){
    for(var i=0; i<modeBtns.length; i++)
    {
        //modeBtns event listeners
        modeBtns[i].addEventListener("click", function()
        {
            modeBtns[0].classList.remove("selected");
            modeBtns[1].classList.remove("selected");
            this.classList.add("selected");
            
            this.textContent==="Easy" ? numSquares=3 : numSquares=6;
            reset();
        });
    }  
}

function setUpSquares(){
    for(var i=0; i < square.length; i++)
    {
        square[i].style.background= color[i];
        //add listeners to square
        square[i].addEventListener("click", function()
        {
            //grab color of clicked square
            var clickedColor=this.style.background;
            //compare color to picked color
            if(clickedColor===pickedColor)
            {
                message.textContent="CORRECT!";
                changeColor(clickedColor);
                h1.style.background=pickedColor;
                resetBtn.textContent="Play Again?"
            }
            else{
                this.style.background="#232323";
                message.textContent="TRY AGAIN!"
            }
        })
    }
}

function reset(){
    color=generateRandomColor(numSquares);
    //pick a new random color from the array
    pickedColor=pickColor();
    //change the rgb value of the picked color in the h1 tag.
    colorDisplay.textContent=pickedColor;
    //change the background color of the squares
    for(var i=0; i<square.length; i++){
        if(color[i])
        {
            square[i].style.display="block";
            square[i].style.background=color[i];
        }
        else
            square[i].style.display="none";

    }
    h1.style.background="steelblue";
    message.textContent="";
    resetBtn.textContent="NEW COLORS";
}

for(var i=0; i < square.length; i++)
{
    square[i].style.background= color[i];
    //add listeners to square
    square[i].addEventListener("click", function(){
        //grab color of clicked square
        var clickedColor=this.style.background;
        //compare color to picked color
        if(clickedColor===pickedColor)
        {
            message.textContent="CORRECT!";
            changeColor(clickedColor);
            h1.style.background=pickedColor;
            resetBtn.textContent="Play Again?"
        }
        else{
            this.style.background="#232323";
            message.textContent="TRY AGAIN!"
        }
    })
}

function changeColor(color){
    //loop through all squares
    for(var i=0; i<square.length; i++){
    //change color of the square
        square[i].style.background=color;
    }
    
}

function pickColor(){
    var random=Math.floor(Math.random() * color.length) ;
    return color[random];
}

function generateRandomColor(num){
    //make an array
    var arr=[];
    //add num random colors to array
    for(var i=0; i<num; i++)
    {
        //get  a random color
        arr[i]=randomColor();
    }
    //return that array
    return arr;
}

function randomColor(){
    //pick a "red" from 0-255
    var red=Math.floor(Math.random() * 256);
    //pick a "green" from 0-255
    var green=Math.floor(Math.random() * 256);
    //pick a "blue" from 0-255
    var blue=Math.floor(Math.random() * 256);
    return "rgb(" + red + ", " + green + ", " + blue + ")";
}

resetBtn.addEventListener("click", function(){
    reset();
})
//    ANOTHER WAY OF CODING THE BUTTONS
/*easy.addEventListener("click", function(){
    hard.classList.remove("selected");
    easy.classList.add("selected");
    
    numSquares=3;
    color=generateRandomColor(numSquares);
    pickedColor=pickColor();
    colorDisplay.textContent=pickedColor;
    for(var i=0; i<square.length; i++)
    {
        square[i].style.background=color[i];
    }
    h1.style.background="steelblue";
    for(var i=0; i<square.length; i++)
    {
        if(i<3)
            square[i].style.background=color[i];
        else
            square[i].style.display="none";

    }
})

hard.addEventListener("click", function(){
    hard.classList.add("selected");
    easy.classList.remove("selected");

    numSquares=6;
    color=generateRandomColor(numSquares);
    pickedColor=pickColor();
    colorDisplay.textContent=pickedColor;
    for(var i=0; i<square.length; i++)
    {
        square[i].style.background=color[i];
        square[i].style.display="block";
    }
    h1.style.background="steelblue";
});*/
