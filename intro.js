let hambar=document.querySelector(".hambar");

let active=document.querySelector(".fixedIntro-container");
hambar.addEventListener("click",function(){
     active.classList.toggle("active");

})