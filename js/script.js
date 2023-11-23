
const primoNumero = parseInt(prompt("inserisci primo numero"));

const secondoNumero = parseInt(prompt("inserisci secondo numero"));


let winnerNumber;

winnerNumber = document.getElementById ("number");


if (primoNumero > secondoNumero){
    winnerNumber.innerHTML = primoNumero;

} else if (secondoNumero > primoNumero){

    winnerNumber.innerHTML = secondoNumero;
} else{

    winnerNumber.innerHTML = "Nullo"
}
