function selector(id){
  return document.getElementById(id)
}

let tickSound = selector('tickSound')

// clock hands
let secondHand = selector('second')
let minHand = selector('minute')
let hourHand = selector('hour')

// clock digits
let hourTxt = selector('hours')
let minTxt = selector('minutes')
let secTxt = selector('seconds')

function updateTime(){
  let time = new Date()

  let currentHour = time.getHours() % 12
  let currentMin = time.getMinutes()
  let currentSec = time.getSeconds()

  // Update digital time
  hourTxt.textContent = String(currentHour).padStart(2,'0')
  minTxt.textContent = String(currentMin).padStart(2,'0')
  secTxt.textContent = String(currentSec).padStart(2,'0')

  // Smooth rotation calculations
  let hourDeg = (360 / 12) * currentHour + (30 * currentMin / 60) - 90
  let minDeg  = (360 / 60) * currentMin + (6 * currentSec / 60) - 90
  let secDeg  = (360 / 60) * currentSec - 90

  hourHand.style.transform = `rotate(${hourDeg}deg)`
  minHand.style.transform = `rotate(${minDeg}deg)`
  secondHand.style.transform = `rotate(${secDeg}deg)`


  tickSound.currentTime = 0
  tickSound.play()
}

// Run every second
setInterval(updateTime, 1000)

// Initial call
updateTime()
