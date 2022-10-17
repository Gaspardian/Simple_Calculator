//funzioni keypress

document.addEventListener("keydown", tastogiu);
document.addEventListener("keyup", tastosu);

function tastogiu(e) {
    console.log("tasto premuto", e);
    if (event.key == "1") {
        setNumber("1");
        document.querySelector(".one").style = "opacity: 0.5";
    }
    if (event.key == "2") {
        setNumber("2");
        document.querySelector(".two").style = "opacity: 0.5";
    }
    if (event.key == "3") {
        setNumber("3");
        document.querySelector(".three").style = "opacity: 0.5";
    }
    if (event.key == "4") {
        setNumber("4");
        document.querySelector(".four").style = "opacity: 0.5";
    }
    if (event.key == "5") {
        setNumber("5");
        document.querySelector(".five").style = "opacity: 0.5";
    }
    if (event.key == "6") {
        setNumber("6");
        document.querySelector(".six").style = "opacity: 0.5";
    }
    if (event.key == "7") {
        setNumber("7");
        document.querySelector(".seven").style = "opacity: 0.5";
    }
    if (event.key == "8") {
        setNumber("8");
        document.querySelector(".eight").style = "opacity: 0.5";
    }
    if (event.key == "9") {
        setNumber("9");
        document.querySelector(".nine").style = "opacity: 0.5";
    }
    if (event.key == "0") {
        setNumber("0");
        document.querySelector(".zero").style = "opacity: 0.5";
    }
    if (event.key == ".") {
        setNumber(".");
        document.querySelector(".dot").style = "opacity: 0.5";
    }
    //----------------------------------------//
    if (event.key == "Delete") {
        canc();
        document.querySelector(".delete").style = "opacity: 0.5";
    }
    if (event.key == "Backspace") {
         back();
        document.querySelector(".back").style = "opacity: 0.5";
    }
    if (event.key == "%") {
        percentuale();
        document.querySelector(".perc").style = "opacity: 0.5";
    }
    if (event.key == "y") {
        setOperator("**");
        document.querySelector(".elev").style = "opacity: 0.5";
    }
    if (event.key == "/") {
        setOperator("/");
        document.querySelector(".divid").style = "opacity: 0.5";
    }
    if (event.key == "*") {
        setOperator("*");
        document.querySelector(".moltip").style = "opacity: 0.5";
    }
    if (event.key == "-") {
        setOperator("-");
        document.querySelector(".minus").style = "opacity: 0.5";
    }
    if (event.key == "+") {
        setOperator("+");
        document.querySelector(".plus").style = "opacity: 0.5";
    }
    if (event.key == "=" || event.key == "Enter") {
        getResult();
        document.querySelector(".result").style = "opacity: 0.5";
    }
    //----------------------------------------------//
    if (event.key == "m") {
        document.querySelector(".piuMeno").style = "opacity: 0.5";
        piuMeno();
    }
    if (event.key == "r") {
        let tastoRichiamo = document.querySelector(".memRich");
        if (tastoRichiamo.classList.contains("disabledbutton") == true) {
            //non fa nulla
        } else {
            tastoRichiamo.classList.add("opac_05");
            memRichiamo();
        }
    }
    if (event.key == "p") {
        document.querySelector(".memAgg").classList.add("opac_05");
        memAggiungi();
    }
    if (event.key == "q") {
        let tastoCancMemoria = document.querySelector(".memCanc");
        if (tastoCancMemoria.classList.contains("disabledbutton") == true) {
            //non fa nulla
        } else {
           // tastoCancMemoria.style = "opacity: 0.5";
        };
    }
}

function tastosu(e) {
    console.log("tasto rilasciato", e);
    if (event.key == "1") {
        document.querySelector(".one").style = "opacity: 1";
    }
    if (event.key == "2") {
        document.querySelector(".two").style = "opacity: 1";
    }
    if (event.key == "3") {
        document.querySelector(".three").style = "opacity: 1";
    }
    if (event.key == "4") {
        document.querySelector(".four").style = "opacity: 1";
    }
    if (event.key == "5") {
        document.querySelector(".five").style = "opacity: 1";
    }
    if (event.key == "6") {
        document.querySelector(".six").style = "opacity: 1";
    }
    if (event.key == "7") {
        document.querySelector(".seven").style = "opacity: 1";
    }
    if (event.key == "8") {
        document.querySelector(".eight").style = "opacity: 1";
    }
    if (event.key == "9") {
        document.querySelector(".nine").style = "opacity: 1";
    }
    if (event.key == "0") {
        document.querySelector(".zero").style = "opacity: 1";
    }
    if (event.key == ".") {
        document.querySelector(".dot").style = "opacity: 1";
    }
    //----------------------------------------//
    if (event.key == "Delete") {
        document.querySelector(".delete").style = "opacity: 1";
    }
    if (event.key == "Backspace") {
        document.querySelector(".back").style = "opacity: 1";
    }
    if (event.key == "%") {
        document.querySelector(".perc").style = "opacity: 1";
    }
    if (event.key == "y") {
        document.querySelector(".elev").style = "opacity: 1";
    }
    if (event.key == "/") {
        document.querySelector(".divid").style = "opacity: 1";
    }
    if (event.key == "*") {
        document.querySelector(".moltip").style = "opacity: 1";
    }
    if (event.key == "-") {
        document.querySelector(".minus").style = "opacity: 1";
    }
    if (event.key == "+") {
        document.querySelector(".plus").style = "opacity: 1";
    }
    if (event.key == "=" || event.key == "Enter") {
        document.querySelector(".result").style = "opacity: 1";
    }
    //----------------------------------------------//
    if (event.key == "m") {
        document.querySelector(".piuMeno").style = "opacity: 1";
    }
    if (event.key == "r") { 
        let tastoRichiamo = document.querySelector(".memRich");
        if (tastoRichiamo.classList.contains("disabledbutton") == true) {
            //non fa nulla
        } else {
            tastoRichiamo.classList.remove("opac_05");
        }
    }
    if (event.key == "p") {
        document.querySelector(".memAgg").classList.remove("opac_05");
    }
    if (event.key == "q") {
        let tastoCancMemoria = document.querySelector(".memCanc");
        if (tastoCancMemoria.classList.contains("disabledbutton") == true) {
            //non fa nulla
        } else {
            memCanc();
        };
    }
}
