const mediaQuery = window.matchMedia('(max-width: 768px)')
const boardAdaptive = document.querySelector('#board')
const windowInnerWidth = document.documentElement.clientWidth
const windowInnerHeight = document.documentElement.clientHeight

if(mediaQuery.matches){
    boardAdaptive.style.width = boardAdaptive.style.height = windowInnerWidth - (0.1 * windowInnerWidth) +'px'
}