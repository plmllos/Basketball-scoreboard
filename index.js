let scoreHome = 0
let scoreGuest = 0
let foulHome = 0
let foulGuest = 0

let homeScoreEl = document.getElementById("home-score")
let guestScoreEl = document.getElementById("guest-score")
let foulHomeEl = document.getElementById("foul-home")
let foulGuestEl = document.getElementById("foul-guest")

let increment1 = document.getElementById("increment-btn1")
let increment2 = document.getElementById("increment-btn2")
let increment3 = document.getElementById("increment-btn3")
let increment4 = document.getElementById("increment-btn4")
let increment5 = document.getElementById("increment-btn5")
let increment6 = document.getElementById("increment-btn6")
let increment7 = document.getElementById("increment-btn7")
let increment8 = document.getElementById("increment-btn8")
let newGame = document.getElementById("new-btn")

increment1.addEventListener("click", function() {
    incrementValue1(1)
    displayValue(homeScoreEl, scoreHome)
})

increment2.addEventListener("click", function() {
    incrementValue1(2)
    displayValue(homeScoreEl, scoreHome)
})

increment3.addEventListener("click", function() {
    incrementValue1(3)
    displayValue(homeScoreEl, scoreHome)
})

increment4.addEventListener("click", function() {
    incrementValue2(1)
    displayValue(guestScoreEl, scoreGuest)
})

increment5.addEventListener("click", function() {
    incrementValue2(2)
    displayValue(guestScoreEl, scoreGuest)
})

increment6.addEventListener("click", function() {
    incrementValue2(3)
    displayValue(guestScoreEl, scoreGuest)
})

function incrementValue1(num1) {
    scoreHome += num1
}
function incrementValue2(num2) {
    scoreGuest += num2
}

function displayValue(display, score) {
    if (score < 10) {
        display.textContent = "00" + score
    } else if (score >= 10 && score < 100) {
        display.textContent = "0" + score
    } else {
        display.textContent = score
    }
}

increment7.addEventListener("click", function() {
    incrementValue3(1)
    displayFoul(foulHomeEl, foulHome)
})

increment8.addEventListener("click", function() {
    incrementValue4(1)
    displayFoul(foulGuestEl, foulGuest)
})

function incrementValue3(num3) {
    foulHome += num3
}

function incrementValue4(num4) {
    foulGuest += num4
}

function displayFoul(displayF, scoreF) {
    if (scoreF < 10) {
        displayF.textContent = "0" + scoreF
    } else {
        displayF.textContent = scoreF
        }
}

newGame.addEventListener('click', function(){
    scoreHome = 0
    scoreGuest = 0
    foulHome = 0
    foulGuest = 0
    homeScoreEl.textContent = "000"
    guestScoreEl.textContent = "000"
    foulHomeEl.textContent = "00"
    foulGuestEl.textContent = "00"
})