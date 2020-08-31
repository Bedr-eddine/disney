//scroll en cliquant sur le boutton 'V'
function scrolFunc1(){window.scroll({left:0, top:1050, behavior: "smooth"})};
function scrolFunc2(){window.scroll({left:0, top:500, behavior: "smooth"})};
if(window.matchMedia("(max-width: 768px)").matches){
    
    document.getElementById("down").addEventListener('click', scrolFunc1 );
    
} else if ((window.matchMedia("(min-width: 769px)").matches)){
    
    document.getElementById("down").addEventListener('click', scrolFunc2 );
}



//faire apparaitre la navbar en scrollant
window.onscroll = ()=>{if( document.documentElement.scrollTop >350 ){
    
    document.querySelector('.hidden').style.display = "block";
    document.getElementById('hidden-btn').style.display = "block";
    document.getElementById('top-btn').style.backgroundColor = "#040714";
    } else{
        document.getElementById('hidden-btn').style.display = "none";
        document.getElementById('top-btn').style.backgroundColor = "transparent";
        document.querySelector('.hidden').style.display = "none";
    }
}



//faire apparaitre le bouton en bas en scrollant
let maDiv = document.getElementById("bottom-div");

var myScrollFunc = function() {
  let y = window.scrollY;
  if (y > 800) {
    maDiv.style.opacity = ".8"
  } else {
    maDiv.style.opacity = "0"
  }
};

window.addEventListener("scroll", myScrollFunc);
