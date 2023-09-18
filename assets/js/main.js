const nextButton = document.querySelectorAll('.buttons .btn')
const backButton = document.querySelectorAll('.buttons .back')
const confirmButton = document.querySelector('.confirm')
const activeStepNum = document.querySelectorAll('.step__num')
const pages = document.querySelectorAll('.home__main .page')
const userInput = document.querySelector("[name='username']")
const emailInput = document.querySelector("[name='useremail']")
const phoneInput = document.querySelector("[name='userphone']")

let currentActivePage = 0
let currentActiveNum = 0

//this function gets the next form page and activate page number 
function toNextForm () {
    activeStepNum.forEach(el => {
        el.classList.remove('active')
    })
    //checks the active page number index
    currentActiveNum < activeStepNum.length? currentActiveNum++ : currentActiveNum = 0
    activeStepNum[currentActiveNum].classList.add('active')
    //loop through all pages index to show next page
    pages.forEach(function (el) {
        el.style.display = "none"
    })
    currentActivePage < pages.length ? currentActivePage++ : currentActivePage = 0
    pages[currentActivePage].style.display = "block"
}

function toPrevForm() {
    activeStepNum.forEach(el => {
      el.classList.remove('active');
    });
  
    // Decrease the currentActiveNum to go back to the previous step
    currentActiveNum > 0 ? currentActiveNum-- : (currentActiveNum = activeStepNum.length - 1);
    activeStepNum[currentActiveNum].classList.add('active');
  
    // Hide all pages
    pages.forEach(el => {
      el.style.display = 'none';
    });
  
    // Decrease the currentActivePage to go back to the previous page
    currentActivePage > 0 ? currentActivePage-- : (currentActivePage = pages.length - 1);
    pages[currentActivePage].style.display = 'block';
  }
  
  // Call toPrevForm when you want to go back to the previous step and page
  
backButton[0].addEventListener('click', () => {
    toPrevForm()
})
backButton[1].addEventListener('click', () => {
    toPrevForm()
})
backButton[2].addEventListener('click', () => {
    toPrevForm()
})

//When click on confirm button steps end and the last page apears
confirmButton.addEventListener('click', () => {
    const finishUp = document.querySelector('.Finishing_up')
    const thankYou = document.querySelector('.thank_you')

    finishUp.style.display === "block"? finishUp.style.display = "none" : ""
    thankYou.style.display = "block"
})

// Form inputs validation
nextButton[0].addEventListener('click', () => {  
  toNextForm()
    if(userInput.value !== "" && emailInput.value !== "" && phoneInput.value !== ""){
  }
})

//Select your mothely plan or yearly plan
nextButton[1].addEventListener('click', () => {
    toNextForm()
})
//Pick up oddons 
nextButton[2].addEventListener('click', () => {
    toNextForm()
})