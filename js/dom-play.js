//alert("Hello from DOM Play!");

//document.querySelector(".chandler").style.backgroundColor=("orange")

function highlight(el){
    
    if(el.style.backgroundColor== 'green'){
        el.style.backgroundColor='white';
    }else{
        el.style.backgroundColor='green';
    }
    
}

function highlightActor(actor){
    
    const spans = document.querySelectorAll("div#friends span");
    for(const mySpan of spans){
        if(mySpan.dataset.actor == actor){
            mySpan.style.backgroundColor='green';
        }else{
            mySpan.style.backgroundColor='white';
        }
    }
    
}

function myAlert(){
    alert("I'm clicked")
}

const spans = document.querySelectorAll("div#friends span");
console.log(spans);

for(const mySpan of spans){
    mySpan.addEventListener("click",function(ev){
        highlightActor(mySpan.dataset.actor);
    });
}
