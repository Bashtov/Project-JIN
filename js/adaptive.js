const mediaQuery = window.matchMedia('(max-width: 768px)')//проверяем чтобы vw был меньше 768px
const boardAdaptive = document.querySelector('#board')
const windowInnerWidth = document.documentElement.clientWidth//ширина девайса

if(mediaQuery.matches){
    boardAdaptive.style.width = boardAdaptive.style.height = windowInnerWidth - (0.1 * windowInnerWidth) +'px' //новое значение board
}else{
    boardAdaptive.style.width = boardAdaptive.style.height = 500 + 'px'
}