let cell = document.querySelectorAll(".cell")
let resetBtn = document.querySelector('.res')
let win = document.querySelector('.status')

//Creating Score

let score={
    X:0,
    O:0,
    Tie:0
}

const scoreX=document.getElementById('scoreX')
const scoreO = document.getElementById('scoreO')
const scoreTie = document.getElementById('scoreTie')



let currentPlayer = 'X'
let board = Array(9).fill('')

const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];


function checkWinner() {
    for (const pattern of winPattern) {
        const [a, b, c] = pattern
        if (board[a] && board[a] === board[b] && board[b] === board[c]) {
            return board[a] //winner X or O
        }

    }
    return board.includes('') ? null : 'Tie'
    //continue or tie
}


cell.forEach((ele, ind) => {
    ele.addEventListener('click', () => {
        if (board[ind] !== '' || checkWinner()) return;
        board[ind] = currentPlayer
        ele.textContent = currentPlayer
            ele.classList.remove('X', 'O');
        // Add current player class
        ele.classList.add(currentPlayer);
        let result = checkWinner()
        if (result) {
            if (result === 'Tie') {
                score.Tie++
                win.textContent = "Result: Tie"
                scoreTie.textContent=score[result]
            }
            else {
                score[result]++
                win.textContent = `Result: ${result} Wins`

                if(result=='X') {
                    scoreX.textContent=score[result]
                }
                else{
                    scoreO.textContent=score[result]
                }
            }
                
            return
        }

        currentPlayer = currentPlayer === 'X' ? 'O' : 'X'

    })
})

resetBtn.addEventListener('click',()=>{
    board.fill('')
    cell.forEach((ele)=>{
        ele.textContent=''
    })
})






