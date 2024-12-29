function KeepDateChange(){
    let date = new Date();
    const totalDays = document.getElementById('total-active-days');
    const totalHours = document.querySelector('.hours');
    const totalMin = document.querySelector('.minutes');
    const totalSec = document.querySelector('.seconds');
    let OlympicDate = new Date("2028-7-21");
    let DateDiff = OlympicDate-date;
    let Days = Math.floor(DateDiff/(1000*60*60*24));
    totalDays.innerHTML = Days;
    let Hours = Math.floor(DateDiff/(1000*60*60)%24);
    totalHours.innerHTML = Hours; 
    let mins = Math.floor((DateDiff/(1000*60))%60);
    totalMin.innerHTML = mins;
    let secons = Math.floor(DateDiff/(1000)%60);
    totalSec.innerHTML = secons;
}
setInterval(KeepDateChange,1);
