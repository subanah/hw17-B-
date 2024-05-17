let clrgen = document.querySelector("#clrgen");
let clrbtn = document.querySelector(".clrbtn");

clrbtn.addEventListener('click' , function(){
   let red = Math.round(Math.random() * 255);
   let blue = Math.round(Math.random() * 255);
   let green = Math.round(Math.random() * 255);

    console.log(red);
    console.log(blue);
    console.log(green);
   clrgen.style.background = `rgb(${red}, ${green}, ${blue})`

});