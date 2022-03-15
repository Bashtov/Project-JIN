const sidebar = document.querySelector('.sidebar')
const mainSlide = document.querySelector('.main-slide')
const downBtn = document.querySelector('.down-button')
const upBtn = document.querySelector('.up-button')
const slidesCount = mainSlide.querySelectorAll('div').length
const container = document.querySelector('.container')

let activeSlideIndex = 0

sidebar.style.top = `-${(slidesCount - 1) * 100}vh`

upBtn.addEventListener('click',()=>{
  changeSlide('up')
})
downBtn.addEventListener('click',()=>{
  changeSlide('down')
})

setInterval(changeSlide, 5000)

function changeSlide(direction) {

    activeSlideIndex++
    if (activeSlideIndex === slidesCount){
      activeSlideIndex = 0
    }
  const height = container.clientHeight
  mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`
  sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`
}
