let homeScore = 0
let guestScore = 0
let foulHome = 0
let foulGuest = 0

let homeScoreEl = document.getElementById("home-score")
let guestScoreEl = document.getElementById("guest-score")
let foulHomeEl = document.getElementById("foul-home")
let foulGuestEl = document.getElementById("foul-guest")

function increment1() {
    homeScore += 1
    if (homeScore < 10) {
        homeScoreEl.textContent = "00" + homeScore
    } else if (homeScore >= 10 && homeScore < 100) {
        homeScoreEl.textContent = "0" + homeScore
    } else {
        homeScoreEl.textContent = homeScore
    }
}

function increment2() {
    homeScore += 2
    if (homeScore < 10) {
        homeScoreEl.textContent = "00" + homeScore
    } else if (homeScore >= 10 && homeScore < 100) {
        homeScoreEl.textContent = "0" + homeScore
    } else {
        homeScoreEl.textContent = homeScore
    }
}

function increment3() {
    homeScore += 3
    if (homeScore < 10) {
        homeScoreEl.textContent = "00" + homeScore
    } else if (homeScore >= 10 && homeScore < 100) {
        homeScoreEl.textContent = "0" + homeScore
    } else {
        homeScoreEl.textContent = homeScore
    }
}

function increment4() {
    guestScore += 1
    if (guestScore < 10) {
        guestScoreEl.textContent = "00" + guestScore
    } else if (guestScore >= 10 && guestScore < 100) {
        guestScoreEl.textContent = "0" + guestScore
    } else {
        guestScoreEl.textContent = guestScore
    }
}

function increment5() {
    guestScore += 2
    if (guestScore < 10) {
        guestScoreEl.textContent = "00" + guestScore
    } else if (guestScore >= 10 && guestScore < 100) {
        guestScoreEl.textContent = "0" + guestScore
    } else {
        guestScoreEl.textContent = guestScore
    }
}

function increment6() {
    guestScore += 3
    if (guestScore < 10) {
        guestScoreEl.textContent = "00" + guestScore
    } else if (guestScore >= 10 && guestScore < 100) {
        guestScoreEl.textContent = "0" + guestScore
    } else {
        guestScoreEl.textContent = guestScore
    }
}

function incrementFaulHome() {
    foulHome += 1
    if (foulHome < 10) {
        foulHomeEl.textContent = "0" + foulHome
    } else {
        foulHomeEl.textContent = foulHome
    }
    
}

function incrementFaulGuest() {
    foulGuest += 1
    if (foulGuest < 10) {
        foulGuestEl.textContent = "0" + foulGuest
    } else {
        foulGuestEl.textContent = foulGuest
    }
}

function startNewGame() {
    homeScore = 0
    guestScore = 0
    foulHome = 0
    foulGuest = 0
    homeScoreEl.textContent = "000"
    guestScoreEl.textContent = "000"
    foulHomeEl.textContent = "00"
    foulGuestEl.textContent = "00"
}