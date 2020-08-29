//scroll en cliquant sur le boutton 'V'
function scrolFunc(){window.scroll({left:0, top:650, behavior: "smooth"})};
document.getElementById("down").addEventListener('click', scrolFunc );

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
// window.onscroll = ()=>{if( document.documentElement.scrollTop < 350 ){
    
//     document.querySelector('.hidden').classList.remove('visibl');
//     document.getElementById('hidden-btn').setAttribute('hidden');
//     document.getElementById('top-btn').classList.remove('bg-nav');
//     }
// }