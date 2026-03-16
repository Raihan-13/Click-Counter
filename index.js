let count=document.querySelector("#count");
let btnMainus=document.querySelector("#btnMainus");
let btnPlus=document.querySelector("#btnPlus");
let btnReset=document.querySelector("#reset");


let counter=0;

btnMainus.addEventListener("click",function(){
    counter--;
    count.innerText=counter;
});
btnPlus.addEventListener("click",function(){
    counter++;
    count.innerText=counter;
});
btnReset.addEventListener("click",function(){
    count.innerText=(counter=0);
});
