let parolaUtente = document.getElementById('testo');

let btn = document.getElementById("bottone");

const check = function () {

    if (parolaUtente.value == '') {

        alert('non hai inserito nulla')
    }
    else if (isPalindroma(parolaUtente.value)) {

        document.getElementById('messaggio').innerHTML = 'La tua parola è Palindroma';

    } else {

        document.getElementById('messaggio').innerHTML = 'La tua parola non è Palindroma';
       
    }
    
    document.getElementById("testo").value ='';
}

btn.addEventListener("click", check);
