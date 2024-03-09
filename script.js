const API = "https://api.adviceslip.com/advice";
const dice = document.getElementById("dice");
const adviceNbr =document.getElementById("Advice-number")
const adviceTxt = document.getElementById("Advice-text-id");


dice.addEventListener("click", getAdvice);

getAdvice()

function getAdvice(){
    fetch (API) 
    .then(response => response.json()) 
    .then((data) => data.slip)
    .then((slip) => {
        adviceNbr.innerHTML = slip.id ;
        adviceTxt.innerHTML= slip.advice;
    });
};
