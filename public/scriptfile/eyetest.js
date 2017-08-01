var square=document.querySelectorAll(".square");
var show = document.querySelector("#display");
var reset=document.querySelector("#reset");
var countdown=document.querySelector("#countdown"); 
var change=document.querySelector("#change");
var one=document.querySelector(".one");
var two=document.querySelector(".two");
var three=document.querySelector(".three");
var four=document.querySelector(".four");

var numcolor=35;
var color=[];
var point = 0;
var r,g,b,o,q;
var arr=[];
var selectedcolor;
res();
counter();
var seconds=30;
function counter()
{
  function secondPassed() {
    countdown.innerHTML =seconds;
    if (seconds == 0) {
        clearInterval(countdownTimer);
        countdown.innerHTML = "Time's Up";
        change.innerHTML="";
        gameLost();
    } else {
        seconds--;
    }
}
var countdownTimer = setInterval(secondPassed, 1000);
}

function res()
{
color=generaterandomcolor(numcolor);

for(var i=0;i<square.length;i++)
{
square[i].style.background=color[i];
square[i].addEventListener("click",function(){
var clickedcolor=this.style.backgroundColor;
if(clickedcolor===selectedcolor)
{
point++;
show.textContent = point;
 res();
}
});
}}
function generaterandomcolor(num){
r=Math.floor(Math.random()*256);
g=Math.floor(Math.random()*256);
b=Math.floor(Math.random()*256);

  var min=0.1;
  var max=0.9;
o=Number(((Math.random()*(max-min))+min).toFixed(1));
q=Number(((Math.random()*(max-min))+min).toFixed(1));
arr=[];
//Gives a particular color and then we provide this color to the entire grid
for(var z=0;z<num;z++)
{
      arr.push("rgba("+r+", "+g+", "+b+", "+o+")");
}
var y=Math.floor(Math.random()*35);
arr[y]="rgba("+r+", "+g+", "+b+", "+q+")";
selectedcolor=arr[y];

return arr;
}

function gameLost() {
  if(point<=10)
  {
  	one.classList.add("basic");
  	reset.textContent="PLAY AGAIN"
  black();
  
      
  }
  else if(point>10 && point<=20)
  {
  	two.classList.add("basic");
 	reset.textContent="PLAY AGAIN"
 black();
 	}
 	else if(point>20&&point<=30)
 	{
 		three.classList.add("basic");
 		reset.textContent="PLAY AGAIN"
 	black();

 }
 else
 {
  four.classList.add("basic");   
reset.textContent="PLAY AGAIN"
black();
}
}



reset.addEventListener("click",function(){
one.classList.remove("basic");    
two.classList.remove("basic");    
three.classList.remove("basic");    
four.classList.remove("basic");    

reset.textContent="New Game";
res();
show.textContent=0;
point=0;
counter();
seconds=30;
countdown.innerHTML = ""
change.innerHTML="sec";
})
function black()
{
  for(var i=0;i<square.length;i++)
      square[i].style.backgroundColor="#232323";
}

