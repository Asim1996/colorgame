var numcolor=6;
var color=generaterandomcolor(numcolor);
var square=document.querySelectorAll(".square");
var choice=document.querySelector("#choice");
var find=document.querySelector("h1 span");
var message=document.querySelector("#message")
var h1=document.querySelector("h1")
var reset=document.querySelector("#reset") 
var easy=document.querySelector("#easy");
var hard=document.querySelector("#hard");


//var selectedcolor=color[2];
var selectedcolor=pickcolor();
//find.textContent=selectedcolor;

//EASY BUTTON
easy.addEventListener("click",function(){
easy.classList.add("selected");
hard.classList.remove("selected");
numcolor=3;
color=generaterandomcolor(numcolor);
 selectedcolor=pickcolor();
find.textContent = selectedcolor;
h1.style.background="steelblue";
message.textContent="";
for(var i=0;i<square.length;i++)
{
if(color[i])
	square[i].style.background=color[i];
else
	square[i].style.display="none";


}})

//HARD BUTTON
hard.addEventListener("click",function(){
easy.classList.remove("selected");
hard.classList.add("selected");
	numcolor = 6;
	color = generaterandomcolor(numcolor);
	selectedcolor = pickcolor();
	find.textContent =selectedcolor;
	message.textContent="";
	h1.style.background="steelblue";
	for(var i = 0; i < square.length; i++) {
		square[i].style.background = color[i];
		square[i].style.display = "block";
}})



//RESET BUTTON
reset.addEventListener("click",function(){
color=generaterandomcolor(numcolor);
selectedcolor=pickcolor();
find.textContent=selectedcolor;
h1.style.background="steelblue";
reset.textContent="New Game";
message.textContent="";
for(var i=0;i<square.length;i++)
{
square[i].style.background=color[i];
}
})


//MAIN CODE

for(var i=0;i<square.length;i++)
{
//add initial color to square

square[i].style.background=color[i];
//add click listener to square
square[i].addEventListener("click",function(){
//alert(this.style.background);
var clickedcolor=this.style.backgroundColor;
if(clickedcolor===selectedcolor)
{
	message.textContent="Correct";
	reset.textContent="Play Again";
	changecolor(clickedcolor);
	h1.style.background=clickedcolor;
}
else
{
	message.textContent="Try Again";
	this.style.background="#232323";
}
})}

function changecolor(x)
{
for(var i=0;i<square.length;i++)
{
square[i].style.background=x;
}

}
//FUNCTION FOR RANDOM COLOR PICKING
function pickcolor()
{
var random=Math.floor(Math.random()*color.length);
return color[random];
}


//FUNCTION FOR GENERATING RANDOM COLOR
function generaterandomcolor(num){
var arr=[]; 
for(var z=0;z<num;z++)
{
 	arr.push(rndmclr());
 }
return arr;
}
function rndmclr(){
	var r=Math.floor(Math.random()*256);
 	var g=Math.floor(Math.random()*256);
 	var b=Math.floor(Math.random()*256);
 	
return "rgb("+r+", "+g+", "+b+ ")"; 	
}
