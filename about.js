// haber js
let hambar=document.querySelector(".hambar");

let active=document.querySelector(".about-fixedContainer");
hambar.addEventListener("click",function(){
     active.classList.toggle("active");

})


// hamber end



let b1=document.querySelectorAll(".b1");

b1.forEach(function(main){

let btn= main.querySelector(".buttons"); 
btn.addEventListener("click",function(){

 b1.forEach(function(copy){

    if(copy !==b1){
        copy.classList.remove("active")
    }
 })

    main.classList.toggle("active");
})

})

// let btn=document.querySelectorAll(".buttons");


// btn.forEach(function(btns){

//     btns.addEventListener("click",function(e){

//   let tr=  e.currentTarget.parentElement.parentElement;

//    if(tr==""){
//     tr.classList.toggle("active");
//    }


 

//     })
// })
    
    
