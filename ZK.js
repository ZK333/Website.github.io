const word=document.getElementById("word")
const names=document.getElementById("name")
const setting=document.getElementById("setting")
const intro =document.getElementById("intro")
const p= document.getElementById("p"); 
const b1=document.getElementById("1")
const b2=document.getElementById("2")
const b3=document.getElementById("3") // Theme button
const b4=document.getElementById("4")
const b5=document.getElementById("5")

var z=0; 


function change(){
    word.innerHTML=names.value 
}

document.addEventListener('keydown', logKey);

function logKey(e){
    key=e.keyCode;
 key=parseInt(key); 

    if(parseInt(key)==13){
        change(); 
    }
}

function Random(){
}

function light(){
    document.body.style.backgroundImage = "url('')"; 
    var element = document.body;
    element.classList.toggle("light-mode");
}


