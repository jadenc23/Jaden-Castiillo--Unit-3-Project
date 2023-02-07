/* Declare variables below to save the different sections (divs) of your story*/
let story_opening = document.querySelector(".story-opening")
let button1 = document.querySelector(".option-one")
let button2 = document.querySelector(".option-two")
let FigureInWindow = document.querySelector(".figure-in-window")
let OptionOneScreen = document.querySelector(".option-one-screen")
let OptionTwoScreen = document.querySelector(".option-two-screen")
let button3 = document.querySelector(".Second-Option-One")
let button4 = document.querySelector(".Second-Option-Two")



 
button1.onclick=function(){ 
  story_opening.style.display = "none"
OptionOneScreen.style.display = "block"
};
button2.onclick=function(){ 
  story_opening.style.display = "none"
OptionTwoScreen.style.display = "block"
};
button3.onclick=function(){
  OptionOneScreen.style.display = "block"
};
button4.onclick=function(){
  OptionTwoScreen.style.display = "block"
};

/*When you're ready to make event handlers, uncomment the code below. Then fill in the blanks with the correct variables!
INSERT_VARIABLE.onclick=function(){

};


INSERT_VARIABLE.onclick=function(){

};

*/
