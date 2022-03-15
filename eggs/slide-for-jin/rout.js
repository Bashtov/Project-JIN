let numOfClick = 0
const avatar = document.querySelector('.avatar')
avatar.addEventListener('click', () => {
  numOfClick += 1
  if(numOfClick === 10){
    window.location.href = "../eggs/slide-for-jin/jin.html"
  }
})