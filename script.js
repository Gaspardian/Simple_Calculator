let x = document.getElementById('display_two'); // riga principale
let y = document.getElementById('display_one'); // riga secondaria in alto
let z = null; // variabile per calcolo matematico
let provvisorio = "0";
let memoria = null;
let lastNumber = null;
let lastOperator = null;
let operatore = false;

//dichiaro funzione per associare i numeri alle variabili
function setNumber(number) {
    if (provvisorio == "0") {
        if (number == ".") {
            provvisorio += number;
            console.log("uno");
            console.log(provvisorio);
        } else {
            provvisorio = number;
            console.log("due");
            console.log(provvisorio);
        }
    } else {
        let valoreRigaDue = provvisorio;
        if (number == "." && (valoreRigaDue.indexOf(".") > 0)) {
            //se c'è già un punto, non scrivere altri punti
        } else {
            provvisorio += number;
            console.log("tre");
        }
    }
    x.innerHTML = provvisorio;
    operatore = false;
}

function setOperator(value) {
    if (y.innerHTML[y.innerHTML.length - 1] == "=") {
        y.innerHTML = x.innerHTML + value;
    } else {
        if (operatore == true) {
            y.innerHTML = y.innerHTML.slice(0, -1);
            y.innerHTML += value;
        } else {
            if (y.innerHTML == 0) {
                y.innerHTML = x.innerHTML + value;
            } else {
                if (x.innerHTML[0] == "-") {
                    y.innerHTML += "(" + x.innerHTML + ")" + value;
                } else {
                    y.innerHTML += x.innerHTML + value;
                }
            }
        }
    }
    lastNumber = x.innerHTML;
    lastOperator = value;
    y.style.visibility = "visible";
    provvisorio = "0";
    operatore = true;
}

function getResult() {
    //oltre a restituire un risultato, se premuto più volte deve restituire 
    //l'ultimo operatore e il valore immesso e continuare a restituire un risultato
    if (y.innerHTML[y.innerHTML.length - 1] == "=") {
        z = eval(x.innerHTML + lastOperator + lastNumber);
        console.log(z);
        y.innerHTML = x.innerHTML + lastOperator + lastNumber + "=";
        x.innerHTML = z;
    } else {
        lastNumber = x.innerHTML;
        z = eval(y.innerHTML + x.innerHTML);
        console.log(z);
        y.innerHTML += x.innerHTML + "=";
        x.innerHTML = z;
    }
}

function canc() {
    x.innerHTML = "0";
    y.innerHTML = "0";
    z = null;
    provvisorio = "0";
    uguale = false;
    console.log("Le variabili sono azzerate");
    y.style.visibility = "hidden";
    operatore = false;
    lastNumber = null;
    lastOperator = null;
}

function back() {
    if (x.innerHTML.length > 1) {
        let back = x.innerHTML.slice(0, -1);
        x.innerHTML = back;
        provvisorio = back;
    } else {
        x.innerHTML = "0";
        provvisorio = "0";
    }
}

// tasti funzione memoria
function memAggiungi() {
    document.querySelector(".memRich").classList.remove("disabledbutton");
    document.querySelector(".memCanc").classList.remove("disabledbutton");
    memoria = x.innerText;
}
function memCanc() {
    document.querySelector(".memRich").classList.add("disabledbutton");
    document.querySelector(".memCanc").classList.add("disabledbutton");
    memoria = null;
}
function memRichiamo() {
    if (memoria != null) {
        x.innerHTML = memoria;
        provvisorio = memoria;
    }
}
// altre funzioni
function piuMeno() {
    if (x.innerHTML == 0) {
        //non fare nulla
    } else {
        if (x.innerHTML[0] != "-") {
            provvisorio = "-" + x.innerHTML;
            x.innerHTML = provvisorio;
        } else if (x.innerHTML[0] == "-") {
            let togliMeno = x.innerHTML.replace("-", "");
            provvisorio = togliMeno;
            x.innerHTML = provvisorio;
        }
    }
}

function percentuale() {
    if (y.innerHTML == 0) {
        //non fare nulla
    } else {
        operatore = false;
        x.innerHTML = lastNumber * x.innerHTML / 100;
    }
}
