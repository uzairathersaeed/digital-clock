const hourElement =document.getElementById("hour");
const minuteElement = document.getElementById("minutes")
const secondElement = document.getElementById("seconds")
const amPmElement = document.getElementById("ampm")
function digitalClock(){
    let date = new Date();
    let hr = date.getHours()
    let min = date.getMinutes()
    let sec = date.getSeconds()
    let amPm = "AM"
    if(hr === 0){
        hr = 12;
    }
    if (hr>=12){
        hr =hr-12;
        amPm = "PM";
    }

    hr =hr<10?"0"+hr: hr
    min =min<10?"0"+min: min
    sec =sec<10?"0"+sec: sec

    hourElement.innerText = hr;
    minuteElement.innerText = min
    secondElement.innerText = sec
    amPmElement.innerText = amPm
    setTimeout(()=>{
        digitalClock()
    },1000)
}
digitalClock()