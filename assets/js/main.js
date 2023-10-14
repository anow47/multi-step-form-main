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

////////// Step 1 personal information //////////
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

////////// Step 2 Selct plan //////////
//Select your mothely plan or yearly plan
nextButton[1].addEventListener('click', () => {
	toNextForm()
})
const selectPlan = document.querySelector('.select_plan_container')
const prices = [
    {
        label: ["mo"],
        arcade: [9],
        advanced: [12],
        pro: [15],
    },
    { 
        label: ["mo", "yr"],
        arcade: [9, 90],
        advanced: [12, 120],
        pro: [15, 150],
    }
]
let currentPriceIndex = 0

function updateSelectPlan() {
    const item = prices[currentPriceIndex]
    selectPlan.innerHTML = `
        <div class="plans flex space-between">
            <div class="plan activePlan">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g fill="none" fill-rule="evenodd"><circle cx="20" cy="20" r="20" fill="#FFAF7E"/><path fill="#FFF" fill-rule="nonzero" d="M24.995 18.005h-3.998v5.998h-2v-5.998H15a1 1 0 0 0-1 1V29a1 1 0 0 0 1 1h9.995a1 1 0 0 0 1-1v-9.995a1 1 0 0 0-1-1Zm-5.997 8.996h-2v-1.999h2v2Zm2-11.175a2.999 2.999 0 1 0-2 0v2.18h2v-2.18Z"/></g></svg>
                <div class="plan_info">
                    <h4>Arcade</h4>
                    <span class="monthplan">$${item.arcade[currentPriceIndex]}/${item.label[currentPriceIndex]}</span>
                    <span class="year"></span>
                </div>
            </div>
            <div class="plan">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g fill="none" fill-rule="evenodd"><circle cx="20" cy="20" r="20" fill="#F9818E"/><path fill="#FFF" fill-rule="nonzero" d="M25.057 15H14.944C12.212 15 10 17.03 10 19.885c0 2.857 2.212 4.936 4.944 4.936h10.113c2.733 0 4.943-2.08 4.943-4.936S27.79 15 25.057 15ZM17.5 20.388c0 .12-.108.237-.234.237h-1.552v1.569c0 .126-.138.217-.259.217H14.5c-.118 0-.213-.086-.213-.203v-1.583h-1.569c-.126 0-.217-.139-.217-.26v-.956c0-.117.086-.213.202-.213h1.584v-1.554c0-.125.082-.231.203-.231h.989c.12 0 .236.108.236.234v1.551h1.555c.125 0 .231.083.231.204v.988Zm5.347.393a.862.862 0 0 1-.869-.855c0-.472.39-.856.869-.856.481 0 .87.384.87.856 0 .471-.389.855-.87.855Zm1.9 1.866a.86.86 0 0 1-.87-.852.86.86 0 0 1 .87-.855c.48 0 .87.38.87.855a.86.86 0 0 1-.87.852Zm0-3.736a.862.862 0 0 1-.87-.854c0-.472.39-.856.87-.856s.87.384.87.856a.862.862 0 0 1-.87.854Zm1.899 1.87a.862.862 0 0 1-.868-.855c0-.472.389-.856.868-.856s.868.384.868.856a.862.862 0 0 1-.868.855Z"/></g></svg>
                <div class="plan_info">
                    <h4>Advanced</h4>
                    <span class="monthplan">$${item.advanced[currentPriceIndex]}/${item.label[currentPriceIndex]}</span>
                    <span class="year"></span>
                </div>
            </div>
            <div class="plan">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g fill="none" fill-rule="evenodd"><circle cx="20" cy="20" r="20" fill="#483EFF"/><path fill="#FFF" fill-rule="nonzero" d="M26.666 13H13.334A3.333 3.333 0 0 0 10 16.333v7.193a3.447 3.447 0 0 0 2.14 3.24c1.238.5 2.656.182 3.56-.8L18.52 23h2.96l2.82 2.966a3.2 3.2 0 0 0 3.56.8 3.447 3.447 0 0 0 2.14-3.24v-7.193A3.333 3.333 0 0 0 26.666 13Zm-9.333 6H16v1.333a.667.667 0 0 1-1.333 0V19h-1.333a.667.667 0 0 1 0-1.334h1.333v-1.333a.667.667 0 1 1 1.333 0v1.333h1.333a.667.667 0 1 1 0 1.334Zm7.333 2a2.667 2.667 0 1 1 0-5.333 2.667 2.667 0 0 1 0 5.333ZM26 18.333a1.333 1.333 0 1 1-2.667 0 1.333 1.333 0 0 1 2.667 0Z"/></g></svg>
                <div class="plan_info">
                    <h4>Pro</h4>
                    <span class="monthplan">$${item.pro[currentPriceIndex]}/${item.label[currentPriceIndex]}</span>
                    <span class="year"></span>
                </div>
            </div>
        </div>
        <div class="radio flex justify-center align-center">
            <p class="monthly">Monthly</p>
            <label class="switch">
                <input type="checkbox" id="change">
                <span class="slider round"></span>
            </label>
            <p class="yearly">Yearly</p>
        </div>
    `
}
updateSelectPlan()
//this adds active class to the selected plan.
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
const changePlanButton = document.getElementById('change')
const yearplan = document.querySelectorAll('.year')

//This function add textContent to empty year span.
function addYearPlan() {
    if(changePlanButton.checked){
        yearplan.forEach(plan => {
            plan.textContent = '2 months free'
        })
    }else{
        yearplan.forEach(plan => {
            plan.textContent = ''
        })
    }
}
//when this radio changes, prices change and current index prices updates.
changePlanButton.addEventListener('change', () => {
    addYearPlan()
})

////////// Step 3 Addons //////////
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

////////// Step 4 Confirm Data //////////
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
                <h4>Arcade(<span>${item.name}</span>)</h4>
                <button class="change">Change</button>
            </div>
            <span class="first-span">$${item.arcade}/${item.label}</span>
        </div>
        <div class="hr"></div>
        <div class="total_plan flex space-between">
            <h4>Online service</h4>
            <span class="item-span">+$${item.onlineService}/${item.label}</span>
        </div>
        <div class="total_plan flex space-between">
            <h4>Larger storage</h4>
            <span class="item-span">+$${item.largerStorage}/${item.label}</span>
        </div>
        </div>
        <div class="total_price flex align-center space-between">
            <p class="flex">Total (per <span class="ym-span">${item.planName}</span>)</p>
            <span class="total-span">+$${item.total}/${item.label}</span>
        </div>
    `
}
updateSummary()

const changeButton = document.querySelector('.change')
changeButton.addEventListener('click', () => {
    currentIndex = 1
    updateSummary()
})
