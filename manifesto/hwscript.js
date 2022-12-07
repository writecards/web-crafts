

let smallBlur = 0;
let bigBlur = 0;



// document.querySelector(".main").onscroll = function(){addBlur()};

//document.querySelector(".main").addEventListener("scroll", addBlur());

function addBlur(){
    console.log("scrolling")
  let smallBlurText = document.querySelector(".blurry");
  let bigBlurText = document.querySelector(".blurry-r")
//   smallBlurText.style.textShadow = "0 0 " + smallBlur + "px px rgba(0, 0,0, 1)";
//   bigBlurText.style.textShadow = "0 0 " + bigBlur + "px px rgba(0, 0,0, 1)";
smallBlurText.style.filter = "blur(0.3rem);"
bigBlurText.style.filter = "blur(1.5rem);"
    
    smallBlurText.style.color = "red"
  
  if(smallBlur<100){
    smallBlur +=20;
  }
}
