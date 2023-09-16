const nextButton = document.querySelectorAll('.buttons .btn')
const confirmButton = document.querySelector('.confirm')
const activeStepNum = document.querySelectorAll('.step__num')
const pages = document.querySelectorAll('.home__main .page')

let currentActivePage = 0
let currentActiveNum = 0

nextButton.forEach(btn => {
  //loop through the button to show next page
  btn.addEventListener('click', () => {
    //loop through the side numer to indicate active page number
    activeStepNum.forEach(el => {
      el.classList.remove('active')
    })
    //checks the active page nuber index
    if(currentActiveNum < activeStepNum.length){
      currentActiveNum++
    }else{
      currentActiveNum = 0
    }
    activeStepNum[currentActiveNum].classList.add('active')
    //loop through all pages index to show next page
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
})


confirmButton.addEventListener('click', () => {
  if(document.querySelector('.Finishing_up').style.display === "block"){
    document.querySelector('.Finishing_up').style.display = "none"
  }
  document.querySelector('.thank_you').style.display = "block"
})

