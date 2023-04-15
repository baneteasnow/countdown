// clock - ok

const clockEl = document.querySelector("#clock")

function timer() {
	let timeDate = new Date().toLocaleDateString()
	let time = new Date().toLocaleTimeString()
	clockEl.innerHTML = `${timeDate} <br /> ${time}`
}

setInterval(timer, 1000)

// countdown timer

const displayDays = document.querySelector("#display-days")
const displayHours = document.querySelector("#display-hours")
const displayMinutes = document.querySelector("#display-minutes")
const displaySeconds = document.querySelector("#display-seconds")

const bali = new Date("Oct 26, 2023 23:00:00 GMT+08:00").toLocaleString(
	"en-US",
	{ timeZone: "Asia/Makassar" }
)

function countDown() {
	const today = new Date()
	const theDate = new Date(bali)

	const totalSeconds = (theDate - today) / 1000 // convert milliseconds to seconds
	const seconds = Math.floor(totalSeconds % 60) // find seconds left
	const minutes = Math.floor((totalSeconds / 60) % 60) // find minutes left
	const hours = Math.floor((totalSeconds / 3600) % 24) // find hours left
	const days = Math.floor(totalSeconds / 3600 / 24)
	displayDays.innerHTML = days
	displayHours.innerHTML = formatTime(hours)
	displayMinutes.innerHTML = formatTime(minutes)
	displaySeconds.innerHTML = formatTime(seconds)
}
function formatTime(time) {
	return time < 10 ? `0${time}` : `${time}`
}

countDown()

setInterval(countDown, 1000)
