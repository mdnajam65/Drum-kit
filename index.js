let size=document.querySelectorAll(".drum").length;
for(let i=0;i<size;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var btntext=this.innerHTML;
        makesound(btntext);
        animation(btntext)
    });
     
    
}

document.addEventListener("keypress",function(event){
    makesound(event.key);
    animation(event.key);
});

function makesound(key){
    switch(key){
        case "w":
            var audio=new Audio('../sounds/tom-1.mp3');
            audio.play();  
        case "a":
            var audio=new Audio('../sounds/tom-2.mp3');
     audio.play();
        case "s":
            var audio=new Audio('../sounds/tom-3.mp3');
     audio.play();
        case "d":
            var audio=new Audio('../sounds/tom-4.mp3');
     audio.play();
        case "j":
            var audio=new Audio('../sounds/crash.mp3');
     audio.play();
        case "k":
            var audio=new Audio('../sounds/snare.mp3');
     audio.play();
        case "l":
            var audio=new Audio('../sounds/kick-bass.mp3');
     audio.play();
        default :
        console.log(key);     
    }
}

function animation(w){
    var effect=document.querySelector("."+w);
    effect.classList.add("pressed");
    
    setTimeout(function(){
        effect.classList.remove("pressed");
    },200);
}
