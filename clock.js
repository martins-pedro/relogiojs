function clock() {
    let clockHour = document.querySelector('#hour')
    let clockMinutes = document.querySelector('#minute')
    let clockSeconds = document.querySelector('#second')
    let amPm = document.querySelector('.am-pm')
    
    let data = new Date();
    let hour = data.getHours();
    let minutes = data.getMinutes();
    let seconds = data.getSeconds();

    if(hour > 12) {
        hour = hour - 12
        amPm.innerHTML = 'PM'
    } else {
        amPm.innerHTML = 'AM'
    };
    if(hour < 10) hour = '0' + hour;
    if(minutes < 10) minutes = '0' + minutes;
    if(seconds < 10) seconds = '0' + seconds;    

    clockHour.innerHTML = `<h2>${hour}</h2><span class="spanClock">Hour</span>`
    clockMinutes.innerHTML = `<h2>${minutes}</h2><span class="spanClock">Minutes</span>`
    clockSeconds.innerHTML = `<h2>${seconds}</h2><span class="spanClock">Seconds</span>`
}

setInterval(() => {
    clock()
}, 1000);