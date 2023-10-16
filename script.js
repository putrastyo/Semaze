// RIGHT CLICK DISABLE
document.addEventListener('contextmenu',e=>e.preventDefault()) 

// PLAY GAME
const playButton = document.getElementById('play-btn')
playButton.addEventListener('click', playGame)

// AUDIO
const bgmGamemenu = document.getElementById('bgm-gameMenu')
const bgmPlay = document.getElementById('bgm-play')
const sfxLose = document.getElementById('sfx-lose')
const sfxWin = document.getElementById('sfx-win')
const sfxCrowded = document.getElementById('sfx-crowded')

const countdown = document.getElementById('count')
const play = document.getElementById('play')

const gameMenu = document.getElementById('game-menu')

let counter = 5
function playGame(e){
  playButton.style.display = 'none'
  gameMenu.style.display = 'none'
  setTimeout(() => {
    bgmGamemenu.pause()
    bgmPlay.play()
    timerGame()
  }, 6000);
  setTimeout(() => {
    spawnChar.style.display = 'none'
  }, 6300);
  countdown.style.fontSize = '100px'
  countdown.innerHTML = '5'
  getReady.style.display = 'block'

  let count = setInterval(() => {
    setTimeout(() => {
      clearInterval(count)
      countdown.innerHTML = 'START!'
    }, 4000);

    setTimeout(() => {
      play.style.display = 'none'
      getReady.style.display = 'none'
    }, 5000);

    --counter
    countdown.innerHTML = counter 
  }, 1000)
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
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
];

const tembok = []

const charImage = new Image()
charImage.src = 'images/char.png'

function drawMaze() {

  for (let i = 0; i < maze.length; i++) {
    for (let j = 0; j < maze[i].length; j++) {
      let y = i * 40
      let x = j * 40
      if (maze[i][j] === 1) { 
        tembok.push({x: x, y: y})
        ctx.fillStyle = "black"; // Warna TEMBOK
      } else if (maze[i][j] === 0) {
        ctx.fillStyle = "white"; // Warna jalur
      } else {
        ctx.fillStyle = "green"; // Warna FINISH
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
const getReady = document.getElementById('getReady');

window.addEventListener('load', function(){
  const spawn = document.createElement('div');
  spawn.style.position = 'absolute';
  spawn.style.top = 1*46+(overlayRect.top)+'px';
  spawn.style.left = 5*40+(overlayRect.left)+'px';
  spawn.style.width = '22px';
  spawn.style.height = '18px';
  spawn.style.backgroundImage = "url('images/char.png')";
  spawn.style.backgroundSize = 'cover';
  spawn.id = 'spawnChar'

  const cust = document.createElement('div');
  cust.style.position = 'absolute';
  cust.style.top = 12*47+(overlayRect.top)+'px';
  cust.style.left = 23*40+4+(overlayRect.left)+'px';
  cust.style.width = '30px';
  cust.style.height = '30px';
  cust.style.backgroundImage = "url('images/cust_pixel.png')";
  cust.style.backgroundSize = 'cover';
  cust.id = 'custChar'
  
  const spawnChar = document.getElementById('spawnChar')
  getReady.style.top = 1*46+(overlayRect.top)+'px';
  getReady.style.left = 5*40+(overlayRect.left)+'px';
  document.body.appendChild(spawn);
  document.body.appendChild(cust);
  bgmGamemenu.play()
})

// MOUSE ACTION
const span = document.getElementById('span')
const overlayRect = overlay.getBoundingClientRect()
const timeout = document.getElementById('timeout')
const gameover = document.getElementById('gameover')
const win = document.getElementById('win')

overlay.addEventListener('mousemove', charMove)

const playAgain = document.getElementById('play-again')
const retry = document.getElementById('retry')
const retry2 = document.getElementById('retry-timeout')

playAgain.addEventListener('click', hideGameover)
retry.addEventListener('click', hideGameover)
retry2.addEventListener('click', hideGameover)

const timer = document.getElementById('timer')
function hideGameover(){
  location.reload()
}

function charMove(e){
  let cursorX = e.clientX - overlayRect.left;
  let cursorY = e.clientY - overlayRect.top;
  
  overlay.innerHTML = '';
  const char = {
    x: cursorX-15+1,
    y: cursorY-15+2,
    w: 22,
    h: 18
  }

  update(char);

  const cursorBox = document.createElement('div');
  cursorBox.style.position = 'absolute';
  cursorBox.style.top = cursorY - 13 + 'px';
  cursorBox.style.left = cursorX - 15 + 'px';
  cursorBox.style.width = char.w + 'px';
  cursorBox.style.height = char.h + 'px';
  cursorBox.style.backgroundImage = "url('images/char.png')";
  cursorBox.style.backgroundSize = 'cover';
  overlay.appendChild(cursorBox);
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
    ){
      gameover.style.display = 'flex'
      sfxLose.play()
      bgmPlay.pause()
    }
    
    if(chara.y + chara.h-10 >= yGreen && chara.x >= xGreen){
      win.style.display = 'flex'
      sfxWin.play()
      sfxCrowded.play()
      bgmPlay.pause()
    }
  })

}

function timerGame(){
  let s = 40;
  let intervalTimer = setInterval(() => {
    timer.innerHTML = --s

    if(s == 0){
      clearInterval(intervalTimer)
      gameover.style.display = 'flex'
      sfxLose.play()
      bgmPlay.pause()
    } else if (win.style.display == 'flex'){
      clearInterval(intervalTimer)
    } else if (gameover.style.display == 'flex'){
      clearInterval(intervalTimer)
    }
  }, 1000);
}
