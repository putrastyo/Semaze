// PLAY GAME

window.addEventListener('keydown', playGame)
const countdown = document.getElementById('count')
const play = document.getElementById('play')

let counter = 3

function playGame(e){
  if(e.keyCode == 32){
    setTimeout(() => {
      timerGame()
    }, 4000);
    countdown.style.fontSize = '100px'
    countdown.innerHTML = '3'

    let count = setInterval(() => {
      // if(counter <= 1){
      //   clearInterval(count)
      // }

      setTimeout(() => {
        clearInterval(count)
        countdown.innerHTML = 'START!'
      }, 2000);

      setTimeout(() => {
        play.style.display = 'none'
      }, 3000);

      --counter
      countdown.innerHTML = counter 
    }, 1000)
  }
}

const canvas = document.getElementById("canvas");
const overlay = document.getElementById("overlay");

canvas.width = 1000
canvas.height = 600

overlay.style.width = canvas.width + 'px'
overlay.style.height = canvas.height + 'px'

const ctx = canvas.getContext("2d");

// 1 = tembok, 0 = jalurlet counter = 2
const maze = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1],
    [1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
    [1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

const tembok = []
function drawMaze() {

  for (let i = 0; i < maze.length; i++) {
    for (let j = 0; j < maze[i].length; j++) {
      let y = i * 40
      let x = j * 40
      if (maze[i][j] === 1) { 
        ctx.fillStyle = "black"; // Warna tembok
        tembok.push({x: x, y: y})
      } else {
        ctx.fillStyle = "white"; // Warna jalur
      }
      ctx.fillRect(x , y, 40, 40);
    }
  }
}

drawMaze();

// ctx.fillStyle = 'red'
// ctx.fillRect(204,46,26,26)

ctx.fillStyle = 'green'

const xGreen = 920;
const yGreen = 520;
ctx.fillRect(xGreen, yGreen, 40, 40)

// SPAWN CHARACTER
document.addEventListener('DOMContentLoaded', function(){
  const spawn = document.createElement('div');
  spawn.style.position = 'absolute';
  spawn.style.top = 1*46+'px';
  spawn.style.left = 5*40+'px';
  spawn.style.width = '26px';
  spawn.style.height = '26px';
  spawn.style.backgroundColor = 'red';
  overlay.appendChild(spawn)
})

// MOUSE ACTION
const span = document.getElementById('span')
const overlayRect = overlay.getBoundingClientRect()
const gameover = document.getElementById('gameover')
const win = document.getElementById('win')

overlay.addEventListener('mousemove', function(e){
  let cursorX = e.clientX - overlayRect.left;
  let cursorY = e.clientY - overlayRect.top;
  
  overlay.innerHTML = '';
  const char = {
    x: cursorX-15+1,
    y: cursorY-15+2,
    w: 28,
    h: 28
  }

  update(char);

  const cursorBox = document.createElement('div');
  cursorBox.style.position = 'absolute';
  cursorBox.style.top = cursorY - 13 + 'px';
  cursorBox.style.left = cursorX - 15 + 'px';
  cursorBox.style.width = char.w + 'px';
  cursorBox.style.height = char.h + 'px';
  cursorBox.style.backgroundColor = 'red';
  overlay.appendChild(cursorBox);
})

function charMove(){

}

function update(chara){
  let uniqueTembok = [...new Set(tembok)]
  
  uniqueTembok.forEach(function(data, index) {
    // console.log(index)
    if(
      chara.x <= data.x + 40 && 
      chara.y+chara.h-1 >= data.y &&      
      chara.y+1<= data.y + 40 && 
      chara.x+chara.w-2 >= data.x
    ){gameover.style.display = 'flex'}

    if(chara.y + chara.h-10 >= yGreen && chara.x >= xGreen){
      win.style.display = 'flex'
    }
  })

}

const playAgain = document.getElementById('play-again')
const retry = document.getElementById('retry')

playAgain.addEventListener('click', hideGameover)
retry.addEventListener('click', hideGameover)

function hideGameover(){
  location.reload()
  gameover.style.display = 'none'
  win.style.display = 'none'
}

const timer = document.getElementById('timer')

function timerGame(){
  let s = 45;
  let intervalTimer = setInterval(() => {
    timer.innerHTML = --s

    if(s == 0 || gameover.style.display == 'flex'){
      clearInterval(intervalTimer)
      gameover.style.display = 'flex'
    } else if (win.style.display == 'flex'){
      clearInterval(intervalTimer)
      win.style.display = 'flex'
    }
  }, 1000);
}