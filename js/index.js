document.body.onload = ()=>{
    content = document.querySelectorAll('.content');
    // Functions to manage contents
    function contentActions(){
        content.forEach(element => {
            element.title = "Go to fullscreen mode";
            element.addEventListener('click', () =>{
                changeWindowSize();
            })

        })
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
            content.forEach(element => element.title="Go normal mode");
            document.documentElement.requestFullscreen();
        }else{
            content.forEach(element => element.title="Go fulscreen mode");
            document.exitFullscreen();
        }

        
    }

}