// function timer(){
//     console.log("seconds");

// }
// setInterval(timer,500)

// function timeOut(){
//     console.log("time");

// }

// setTimeout(timeOut,3000)


// var count = 0;

// function timer(){
//     count++
//     console.log(count);

// }
// setInterval(timer,1000)

// var count = 0;
// var interval;
// function timer(){
//     count++
//     console.log(count);

// }

// interval = setInterval(timer, 1000)

// setInterval(function(){
//     clearInterval(interval)
// },5000)


var min = 0;
var sec = 0;
var msec = 0;
var minHeading = document.getElementById("min")
var secHeading = document.getElementById("sec")
var msecHeading = document.getElementById("msec")
var interval = null;

function timer() {
    msec++
    if (msec >= 100) {
        sec++
        msec = 0;
    }
    else if (sec >= 60) {
        min++
        sec = 0;
    }
    minHeading.innerHTML = min;
    secHeading.innerHTML = sec;
    msecHeading.innerHTML = msec;

}
function start() {
    if (interval === null) {
        interval = setInterval(timer, 10)
    }
}

function stop(){
    clearInterval(interval)
}

function reset(){
    min = 0;
    sec = 0;
    msec = 0;
    minHeading.innerHTML = min;
    secHeading.innerHTML = sec;
    msecHeading.innerHTML = msec;
    stop()
}