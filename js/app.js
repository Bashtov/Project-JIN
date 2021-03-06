const mediaQuery = window.matchMedia('(min-width: 768px)')//проверяем ширину экрана >768px
const windowInnerWidth = document.documentElement.clientWidth
const startBtn = document.querySelector('#start')
const screens = document.querySelectorAll('a[href*="#"]')
const timeList = document.querySelector('#set-time-screen')
const timeEl = document.querySelector('#time')
const board = document.querySelector('#board')
const colors = ['red', 'blue', 'white', 'green', 'orange', 'yellow']
const resetBtn = document.querySelector('#resetBtn')
const navEl = document.querySelectorAll('#navEl')
document.body.style.overflow="hidden" //запрещаем скролл для всего документа

if(mediaQuery.matches){
  board.style.width = board.style.height = 500+'px'//новое значени board
}

let score = 0
let time = 0


//событе с момента выбора времени запускает игру
timeList.addEventListener('click', (event) => {
  if (event.target.classList.contains('time-btn')){
    time = parseInt(event.target.getAttribute('data-time'))
    window.scrollTo({ 
      top: document.body.scrollHeight,
      behavior: "smooth"
    })
    for(let el of navEl){ //блокируем navbar
      el.style.pointerEvents = "none"
      el.style.cursor = "default"
    }
    startGame()
  }
})

board.addEventListener('click', event => {
  if (event.target.classList.contains('circle')){
    score++
    event.target.remove()
    creatRandomCircle()
  }
})


//скролл по кнопкам навигации
for (let screen of screens) {
    screen.addEventListener('click', (e) => {
        e.preventDefault()
        const blockID = screen.getAttribute('href')
        document.querySelector('' + blockID).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    })  
}

function startGame(){
  resetGame()
  //для избежания сбоев в работе таймера при повторном запуске
  let interval = setInterval(decreaseTime, 1000) 
  setTimeout(() => { clearInterval(interval)}, (time + 2) * 1000)
  setTime(time)
  creatRandomCircle()
}

//Таймер
function decreaseTime() {
  if(time === 0){
    finishGame()
  }else if(time > 0) {
    let current = --time
    if(current < 10){
      current = `0${current}`
    }
    setTime(current)
  }
}

function setTime(value) {
  timeEl.innerHTML = `00:${value}`
}

function finishGame() {
  timeEl.parentNode.classList.add('hide')
  board.innerHTML = `<h1>Ваш счет: <span class="primary">${score}</span></h1>`
  resetBtn.style.visibility = 'visible'
  for(let el of navEl){
    el.style.pointerEvents = "auto"
    el.style.cursor = "auto"
  } 
  if(score === 30){
    window.location.href = "../eggs/board-sources/index.html"
  }
}

function resetGame(){
  timeEl.parentNode.classList.remove('hide')
  resetBtn.style.visibility = 'hidden'
  board.innerHTML = ''
}

function creatRandomCircle() {
  const circle = document.createElement('div')
  const size = getRandomNumber(10, 60)
  const {width, height} = board.getBoundingClientRect()
  const x = getRandomNumber(0, width - size)
  const y = getRandomNumber(0, height - size)

  circle.classList.add('circle')
  circle.style.width = `${size}px`
  circle.style.height = `${size}px`
  circle.style.top = `${y}px`
  circle.style.left = `${x}px`
  circle.style.background = getRandomColor()

  board.append(circle)
}

function getRandomColor() {
  let color = colors[Math.round(Math.random() * (colors.length - 1))]
  return color
}

function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min)
}
