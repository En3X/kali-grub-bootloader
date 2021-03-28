const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "June",
"July", "Aug", "Sept", "Oct", "Nov", "Dec"
];

function dayDate(){
    daySection = document.querySelector("#day");
    monthSection = document.querySelector("#month");
    hourSection = document.querySelector("#hour");
    minuteSection = document.querySelector("#minute");
    divider = document.querySelector('#divider');
    setInterval(()=>{
        date = new Date();
        daySection.textContent = date.getDate();
        monthSection.textContent = monthNames[date.getMonth()];
        
        hour = date.getHours();
        minutes = date.getMinutes();
        if(hour<10){
            hour = '0'+hour;
        }
        if(minutes<10){
            minutes = '0'+minutes;
        }
        hourSection.textContent = hour;
        minuteSection.textContent = minutes;
        if(divider.style.opacity != 0){
            divider.style.opacity = 0;
        }else{
            divider.style.opacity = 1;
        }
    },1000);

}

dayDate();