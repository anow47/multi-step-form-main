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
nextButton[0].addEventListener('click', () => {  
    if(userInput.value !== "" && emailInput.value !== "" && phoneInput.value !== ""){
        toNextForm()
	}
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
        arcade: [9, 90],
        onlineService: [1, 10],
        largerStorage: [2, 20],
        total: [12, 120],
    },
]

const summary = plan.map(item => {
    return `
        <div class="total">
          <div class="total_plan flex space-between">
            <div class="y_or_m">
              <h4>Arcade(<span class="mo-span">Monthly</span><span>Yearly</span>)</h4>
              <button class="change">change</button>
            </div>
            <span class="first-span mo-span">$${item.arcade[0]}/mo</span>
          </div>
          <div class="hr"></div>
          <div class="total_plan flex space-between">
            <h4>Online service</h4>
            <span class="mo-span">+$${item.onlineService[0]}/mo</span>
          </div>
          <div class="total_plan flex space-between">
            <h4>Larger storage</h4>
            <span class="mo-span">+$${item.largerStorage[0]}/mo</span>
          </div>
        </div>
        <div class="total_price flex align-center space-between">
          <p class="flex">Total (per / <span class="mo-span">month</span><span class="yr-span">year</span>)</p>
          <span class="total-span mo-span">+$${item.total[0]}/mo</span>
        </div>
    `
})
document.querySelector('.summary').innerHTML = summary
