//   Digital clock &  Analog Clock

let Digital_Time = document.querySelector(".digital-clock-box");

setInterval(function () {
    let time = new Date().toLocaleTimeString();
    Digital_Time.innerHTML = time;

    // Analog Clock
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    hrotation = 30 * htime + mtime / 2;
    mrotation = 6 * mtime;
    srotation = 6 * stime;
    
    hour.style.transform = `rotate(${hrotation}deg)`
    minutes.style.transform = `rotate(${mrotation}deg)`
    seconds.style.transform = `rotate(${srotation}deg)`
}, 1000);

