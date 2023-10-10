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
backButton[0].addEventListener('click', () => toPrevForm())
backButton[1].addEventListener('click', () => toPrevForm())
backButton[2].addEventListener('click', () => toPrevForm())

//Step 1 personal information
// Form inputs validation
const nameError = document.getElementById('nameError')
const emailError = document.getElementById('emailError')
const phoneError = document.getElementById('phoneError')
//If the input field is empty, error message will apear on the form input
nextButton[0].addEventListener('click', () => {
    if(!userInput.value){
        nameError.textContent = 'this field is required'
        userInput.style.borderColor = "red"
    }else if (!emailInput.value){
        emailError.textContent = 'this field is required'
        emailInput.style.borderColor = "red"
        
    } else if(!phoneInput.value){
        phoneError.textContent = 'this field is required'
        phoneInput.style.borderColor = "red"
    } else{
        toNextForm()
	}
})
//checks if the input is filled with info, removes the error message
userInput.addEventListener('input', () => {
    nameError.textContent = ''
    userInput.style.borderColor = "#d6d9e6"
})
emailInput.addEventListener('input', () => {
    emailError.textContent = ''
    emailInput.style.borderColor = "#d6d9e6"
})
phoneInput.addEventListener('input', () => {
    phoneError.textContent = ''
    phoneInput.style.borderColor = "#d6d9e6"
})

//Step 2 Selct plan
//Select your mothely plan or yearly plan
nextButton[1].addEventListener('click', () => {
	toNextForm()
})

const planList = document.querySelectorAll('.plan')
planList.forEach(plan => {
    plan.addEventListener('click', () => {
        planList.forEach(el => {
            el.classList.remove('activePlan')
		})
		plan.classList.add('activePlan')
	})
})
//use toggle to change the value
function showHidenPlan() {
    const pickPlan = document.getElementById('pick')
    const monthplan = document.querySelectorAll('.monthplan')
    const yearplan = document.querySelectorAll('.yearplan')

    if(pickPlan.checked){
        monthplan.forEach(mo => {
            mo.style.display = "none"
        })
        yearplan.forEach(yr => {
            yr.style.display = "block"
        })
    }else{
        monthplan.forEach(mo => {
            mo.style.display = "block"
        })
        yearplan.forEach(yr => {
            yr.style.display = "none"
        })
    }
}

//Step 3 Addons
//Pick up oddons 
nextButton[2].addEventListener('click', () => {
  toNextForm()
})

const allCheckboxs = document.querySelectorAll('.pick_add_on .inside-box input')
const addActiveAddons = document.querySelectorAll('.pick_add_on')
//add active the main div onclick and check in input checkbox with its index
//but there's a bug! when user clicks on the acuall input check box, it works without the active calss.
addActiveAddons.forEach((pick) => {
    pick.addEventListener('click', () => {
        allCheckboxs.forEach((input) => {
            if(input === pick.querySelector('input')){
                input.checked = !input.checked
            }
        })
        pick.classList.toggle('add-on-active')
    })
})

//Step 4 Confirm Data
//When click on confirm button steps end and the last page apears
confirmButton.addEventListener('click', () => {
    const finishUp = document.querySelector('.Finishing_up')
    const thankYou = document.querySelector('.thank_you')

    finishUp.style.display === "block"? finishUp.style.display = "none" : ""
    thankYou.style.display = "block"
})

const plan = [
    {
        label: ["mo"],
        name: ["Monthly"],
        planName: ["month"],
        arcade: [1],
        onlineService: [1],
        largerStorage: [2],
        total: [12],
    },
    { 
        label: ["yr"],
        name: ["Yearly"],
        planName: ["year"],
        arcade: [90],
        onlineService: [10],
        largerStorage: [20],
        total: [120],
    }
]
const summaryElement = document.querySelector('.summary')
let currentIndex = 0

function updateSummary () {
    const item = plan[currentIndex]
    summaryElement.innerHTML =  `
        <div class="total">
        <div class="total_plan flex space-between">
            <div class="y_or_m">
                <h4>Arcade(<span>${item.name[0]}</span>)</h4>
                <button class="change">Change</button>
            </div>
            <span class="first-span">$${item.arcade[0]}/${item.label[0]}</span>
        </div>
        <div class="hr"></div>
        <div class="total_plan flex space-between">
            <h4>Online service</h4>
            <span class="item-span">+$${item.onlineService[0]}/${item.label[0]}</span>
        </div>
        <div class="total_plan flex space-between">
            <h4>Larger storage</h4>
            <span class="item-span">+$${item.largerStorage[0]}/${item.label[0]}</span>
        </div>
        </div>
        <div class="total_price flex align-center space-between">
            <p class="flex">Total (per <span class="ym-span">${item.planName[0]}</span>)</p>
            <span class="total-span">+$${item.total[0]}/${item.label[0]}</span>
        </div>
    `
}
updateSummary()

const changeButton = document.querySelector('.change')
    changeButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % plan.length
    updateSummary()
})
