

for (let i = 0; i < document.querySelectorAll(".drum").length; i++)
    document.querySelectorAll("button")[i].addEventListener("click", clickk);

function clickk() {
    // alert(this.innerText);
    let Sound;
    switch (this.innerText) {
        case 'w':
            Sound = new Audio("./sounds/tom-1.mp3");
            Sound.play();
            break;
        case 'a':
            Sound = new Audio("sounds/tom-2.mp3");
            Sound.play();
            break;
        case 's':
            Sound = new Audio("sounds/tom-3.mp3");
            Sound.play();
            break;
        case 'd':
            Sound = new Audio("sounds/tom-4.mp3");
            Sound.play();
            break;
        case 'j':
            Sound = new Audio("sounds/snare.mp3");
            Sound.play();
            break;
        case 'k':
            Sound = new Audio("sounds/kick-bass.mp3");
            Sound.play();
            break;
        case 'l':
            Sound = new Audio("sounds/crash.mp3");
            Sound.play();
            break;
        case 'i':
            Sound = new Audio("sounds/ride.wav");
            Sound.play();
            break;
        case 'm':
            Sound = new Audio("sounds/hihat-open.wav");
            Sound.play();
            break;
        case 'c':
            Sound = new Audio("sounds/hihat-close.wav");
            Sound.play();
            break;

    }

}

document.addEventListener("keypress", KeyPressed);

function KeyPressed(event) {
    // console.log(event.key);
    switch (event.key) {
        case 'w':
            Sound = new Audio("./sounds/tom-1.mp3");
            Sound.play();
            document.querySelector(".w").style.border = "10px solid #fff";
            break;
        case 'a':
            Sound = new Audio("sounds/tom-2.mp3");
            Sound.play();
            document.querySelector(".a").style.border = "10px solid #fff";
            break;
        case 's':
            Sound = new Audio("sounds/tom-3.mp3");
            Sound.play();
            document.querySelector(".s").style.border = "10px solid #fff";
            break;
        case 'd':
            Sound = new Audio("sounds/tom-4.mp3");
            Sound.play();
            document.querySelector(".d").style.border = "10px solid #fff";
            break;
        case 'j':
            Sound = new Audio("sounds/snare.mp3");
            Sound.play();
            document.querySelector(".j").style.border = "10px solid #fff";
            break;
        case 'k':
            Sound = new Audio("sounds/kick-bass.mp3");
            Sound.play();
            document.querySelector(".k").style.border = "10px solid #fff";
            break;
        case 'l':
            Sound = new Audio("sounds/crash.mp3");
            Sound.play();
            document.querySelector(".l").style.border = "10px solid #fff";
            break;
        case 'i':
            Sound = new Audio("sounds/ride.wav");
            Sound.play();
            document.querySelector(".i").style.border = "10px solid #fff";
            break;
        case 'm':
            Sound = new Audio("sounds/hihat-open.wav");
            Sound.play();
            document.querySelector(".m").style.border = "10px solid #fff";
            break;
        case 'c':
            Sound = new Audio("sounds/hihat-close.wav");
            Sound.play();
            document.querySelector(".c").style.border = "10px solid #fff";
            break;
    }
}

document.addEventListener("keyup", KeyReleased);

function KeyReleased(event) {
    switch (event.key) {
        case 'w':
            document.querySelector(".w").style.border = "10px solid #404B69";
            break;
        case 'a':
            document.querySelector(".a").style.border = "10px solid #404B69";
            break;
        case 's':
            document.querySelector(".s").style.border = "10px solid #404B69";
            break;
        case 'd':
            document.querySelector(".d").style.border = "10px solid #404B69";
            break;
        case 'j':
            document.querySelector(".j").style.border = "10px solid #404B69";
            break;
        case 'k':
            document.querySelector(".k").style.border = "10px solid #404B69";
            break;
        case 'l':
            document.querySelector(".l").style.border = "10px solid #404B69";
            break;
        case 'i':
            document.querySelector(".i").style.border = "10px solid #404B69";
            break;
        case 'm':
            document.querySelector(".m").style.border = "10px solid #404B69";
            break;
        case 'c':
            document.querySelector(".c").style.border = "10px solid #404B69";
            break;
    }
}