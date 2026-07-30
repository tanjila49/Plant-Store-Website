//Date
let date = new Date();
let y = date.getFullYear();
let m = date.getMonth() + 1;
let d = date.getDate();
document.getElementById("date").textContent = d + "/" + m + "/" + y;


//Time  -  12 HOUR FORMAT
function updateclock(){
    let time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    let ampm = hours >= 12 ? 'PM' : 'AM';
    
    // Convert to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // 0 becomes 12
    
    // Add leading zeros
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    
    document.getElementById("date-time").textContent = hours + ":" + minutes + ":" + seconds + " " + ampm;
}
setInterval(updateclock, 1000);
updateclock();