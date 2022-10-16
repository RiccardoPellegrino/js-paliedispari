let parolaUtente = document.getElementById('testo');

let btn = document.getElementById("bottone");

const check = function () {
  
    if (parolaUtente.value == '') {
        document.getElementById('messaggio').innerHTML = '';
        alert('Non hai inserito una parola')
    }
    else if (isPalindroma(parolaUtente.value)) {

        document.getElementById('messaggio').innerHTML = 'La tua parola è Palindroma';

    } else {

        document.getElementById('messaggio').innerHTML = 'La tua parola non è Palindroma';

    }

    document.getElementById("testo").value = '';
}

btn.addEventListener("click", check);






let numeroUtente = document.getElementById("numero");

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");

const check1 = function () {

    const numeroParsato = parseInt(numeroUtente.value);

    if (controllaInput(numeroParsato)){

        let numeroRandom = getRandomNumber(1, 5);
        let numeroFinale = (numeroParsato + numeroRandom);

        document.getElementById('messaggio3').innerHTML = "Il computer ha generato casualmente "+ numeroRandom + " sommato al tuo "+numeroParsato +" si ottiene " + numeroFinale;

        if(numeroFinale % 2 == 0){
            document.getElementById('messaggio2').innerHTML = "Hai vinto";
        }
        else{
            document.getElementById('messaggio2').innerHTML = "Hai Perso";
        }

       
    }
    document.getElementById("numero").value = '';
}

btn1.addEventListener("click", check1);


const check2 = function () {

    const numeroParsato = parseInt(numeroUtente.value);

    if (controllaInput(numeroParsato)){

        let numeroRandom = getRandomNumber(1, 5);
        let numeroFinale = (numeroParsato + numeroRandom);

        document.getElementById('messaggio3').innerHTML = "Il computer ha generato casualmente "+ numeroRandom + " sommato al tuo "+numeroParsato +" si ottiene " + numeroFinale;

        if(numeroFinale % 2 != 0){
            document.getElementById('messaggio2').innerHTML = "Hai vinto";
        }
        else{
            document.getElementById('messaggio2').innerHTML = "Hai Perso";
        }

       
    }
    document.getElementById("numero").value = '';
}

btn2.addEventListener("click", check2);


let btnReset = document.getElementById("btn-reset");

btnReset.addEventListener("click", function(){
    window.location.reload();
});
