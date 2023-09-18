const todayDiv = document.getElementById('today')
const timeDiv = document.getElementById('time')
const hourDiv = document.getElementById('hour')
const minuteDiv = document.getElementById('minute')
const secondDiv = document.getElementById('second')

function getTime() {
    let now = new Date()
    let year = now.getFullYear()
    let month = now.getMonth() + 1
    let date = now.getDate()
    let hour = now.getHours()
    let minute = now.getMinutes()
    let second = now.getSeconds()

    month = month < 10 ? `0${month}` : `${month}`
    date = date < 10 ? `0${date}` : `${date}`
    hour = hour < 10 ? `0${hour}` : `${hour}`
    minute = minute < 10 ? `0${minute}` : `${minute}`
    second = second < 10 ? `0${second}` : `${second}`

    todayDiv.textContent = `${year}. ${month}. ${date}`
    timeDiv.textContent = `${hour} : ${minute} : ${second}`
}

function getTime2() {
    let now = new Date()
    let hour = now.getHours()
    if(hour>12) hour -= 12
    let minute = now.getMinutes()
    let second = now.getSeconds()

    let hr = hour * 30 + minute * 0.5 + second * 1/120
    let mn = minute * 6 + second * 0.1
    let sc = second * 6

    hourDiv.style.transform = `rotate(${hr}deg)`
    minuteDiv.style.transform = `rotate(${mn}deg)`
    secondDiv.style.transform = `rotate(${sc}deg)`
}

getTime()
setInterval(getTime, 1000)
getTime2()
setInterval(getTime2, 1000)
