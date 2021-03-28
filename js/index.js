content = document.querySelectorAll('.content');
// Functions to manage contents
function contentActions(){
    content.forEach(element => {
        element.title = element.textContent;
    });
}
contentActions();

// Function to be called when timer needs to go down
function changeCountDown(){
    countdown = document.querySelector('#timer');
    setInterval(() => {
        if(countdown.textContent >= 1){
            countdown.textContent = countdown.textContent - 1;
        }
    }, 1000);
}
changeCountDown();

// function to change the window size to full screen

function changeWindowSize(){
    if(!document.fullscreenElement){
        document.documentElement.requestFullscreen();
    }else{
        document.exitFullscreen();
    }
   
}

function isFullscreen(){
    // Check if windows is in full screen
    if(!document.fullscreenElement){
        return false;
    }return true;
}
if(!isFullscreen()){
    // alert("For better user experience, please switch to fullscreen mode.\nClick anywhere to change the windw to fullscreen.");
    console.warn("For better user experience, please switch to fullscreen mode.");
}