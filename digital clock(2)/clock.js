const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minutes");
const secondEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");

function updateclock(){
  let h = new Date().getHours();
  let ampm = h >= 12 ? "pm" : "am"
  ampmEl.textContent = ampm
  h = h % 12;
  h = h != 0 ? h : 12;
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  
  console.log(h , m , s , ampm)
    // let d = new Date();
    // let h = new Date().getHours();
    // let m = new Date().getMinutes();
    // let s = new Date().getSeconds();
    // // let ampm = "AM";

    // if(h>12){
    //     h = h-12;
    //     ampm = "PM";
    // }
    hourEl.innerText = h;
    minuteEl.innerText = m;
    secondEl.innerText = s;
  
}

setInterval(()=>{
  updateclock()
}, 1000);

