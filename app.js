let turn = true
let player1 = 0
let player2 = 0

window.onload = () => {
    document.getElementById("dice").className = "bi bi-dice-1-fill"
}

function roll() {
    const val = parseInt(Math.random()*6 + 1)
    if (turn) {
        player1 += val
        document.getElementById("1").textContent = player1
        document.getElementById("dice").className = `bi bi-dice-${val}-fill`
        turn = !turn
    } else {
        player2 += val
        document.getElementById("2").textContent = player2
        document.getElementById("dice").className = `bi bi-dice-${val}-fill`
        turn = !turn
    }
    if(player1 >= 30) {
        document.getElementById("result").textContent = "Player 1 is the winner!!🥳"
        document.getElementById("dice").remove();
    } else if (player2 >= 30) {
        document.getElementById("result").textContent = "Player 2 is the winner!!🥳"
    }
}