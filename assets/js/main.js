const nextButton = document.querySelector('.btn')
const activeStepNum = document.querySelectorAll('.step__num')
const pages = document.querySelectorAll('.home__main .page')

let currentActivePage = 0
let currentActiveNum = 0

nextButton.addEventListener('click', () => {
  activeStepNum.forEach(el => {
    el.classList.remove('active')
  })
  if(currentActiveNum < activeStepNum.length){
    currentActiveNum++
  }else{
    currentActiveNum = 0
  }
  activeStepNum[currentActiveNum].classList.add('active')

  pages.forEach(function (el) {
    el.style.display = "none"
  })
    if(currentActivePage < pages.length){
      currentActivePage++
    }else{
      currentActivePage = 0
    }
    pages[currentActivePage].style.display = "block"
})

// activeStepNum.forEach(function (el) {
//   activeStepNum.forEach(function(el) {
//     el.classList.remove('active')
//   })
//     el.classList.add('active')
// })

