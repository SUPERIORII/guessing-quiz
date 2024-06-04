let inputNumber = document.querySelector('.guess-number');
const btn = document.querySelector('.btn');
const resetBtn = document.querySelector('.reset-btn');
const guessDuration = document.querySelector('.guess-duration');
const alertNote = document.querySelector('.alert');
const generalContainer = document.querySelector('.general-container')


let randomNmber = Math.floor(Math.random() *100);
let tryDuration = 0;
let miniNum = 1;
let maxNum = 100;

btn.addEventListener('click', ()=>{
    let formatedInput = parseFloat(inputNumber.value)
    tryDuration= tryDuration + 1;
   
    //comparing the random number to the input value
    if(formatedInput === randomNmber) {
        alert('you win')
        alertNote.innerHTML = `Yahhh You won it! the Number was ${randomNmber}
        you guessed in ${tryDuration} Guesses `
        alertNote.style.display = 'block';
        generalContainer.classList.add('reset');

    }else if(isNaN(formatedInput)|| formatedInput === '') {
        alert('please enter a valid number')
    }else if (formatedInput < randomNmber) {
        alert('too low, TRY AGAIN')
    } else if(formatedInput>randomNmber) {
        alert('too high, TRY AGIN')
    }
        

    resetBtn.addEventListener('click', ()=>{
        generalContainer.classList.remove('reset')
        inputNumber.value = ''
        alertNote.innerHTML = ''
        tryDuration = 0
    })

})
