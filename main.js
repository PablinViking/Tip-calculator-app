// -------> Bridge to HTML <------- //
let billInput = document.querySelector(".calculator-section__bill-input");

let nPoepleInput = document.querySelector(".calculator-section__n-people-input");

let selectTipButtons = [...document.querySelectorAll(".calculator-section__button")];

let selectTipInput = document.querySelector(".calculator-section__button--input-n");

// Display //
let tipAmountDisplay = document.querySelector(".display-section__digit--tip-amount");

let totalPersonDiplay = document.querySelector(".display-section__digit--total");

// Message //
let message = [...document.querySelectorAll(".calculator-section__message")];

// Reset Button //
let resetBtn = document.querySelector(".display-section__reset-btn");

// -------> Variables <------- //
let bill = billInput.value;

let nPoeple = nPoepleInput.value;

let tipPct = null;

let buttonValue = null;

let tipPctCustom = selectTipInput.value;

let tipPerPerson = null;

let totalTip = null;

let totalPerPerson = null;





// -------> Principal Function <------- //

let functionForTipPctButton = () => {

    tipPct = buttonValue;

    if ((bill == (0 || "")) || (nPoeple == (0 || ""))) {

        if (bill == (0 || "")) {
            message[0].style.display = "inline";
        } else {
            message[0].style.display = "none";
        }
        if (nPoeple == (0 || "")) {
            message[1].style.display = "inline";
        } else {
            message[1].style.display = "none";
        }

    } else {
        message[0].style.display = "none";
        message[1].style.display = "none";

        totalTipCalcu(tipPct);
        console.log(totalTip);

        tipPerPersonCalcu(totalTip);
        console.log(tipPerPerson);

        totalPerPersonCalcu(totalTip);
        console.log(totalPerPerson);

        tipAmountDisplay.innerHTML = tipPerPerson.toFixed(2);

        totalPersonDiplay.innerHTML = totalPerPerson.toFixed(2);
    }
}


let functionForTipPctCustom = () => {
    tipPctCustom = selectTipInput.value;
    console.log(tipPctCustom);

    if ((bill == (0 || "")) || (nPoeple == (0 || ""))) {

        if (bill == (0 || "")) {
            message[0].style.display = "inline";
        } else {
            message[0].style.display = "none";
        }
        if (nPoeple == (0 || "")) {
            message[1].style.display = "inline";
        } else {
            message[1].style.display = "none";
        }

    } else {
        message[0].style.display = "none";
        message[1].style.display = "none";

        totalTipCalcu(tipPctCustom);
        console.log(totalTip);

        tipPerPersonCalcu(totalTip);
        console.log(tipPerPerson);

        totalPerPersonCalcu(totalTip);
        console.log(totalPerPerson);

        tipAmountDisplay.innerHTML = tipPerPerson.toFixed(2);

        totalPersonDiplay.innerHTML = totalPerPerson.toFixed(2);
    }
}


selectTipButtons.forEach(button => {
    button.addEventListener("click", (event) => {
        deleteClass();
        button.classList.toggle("calculator-section__button-selected");

        buttonValue = button.value;

        functionForTipPctButton();
    });
});


selectTipInput.addEventListener("click", () => {
    deleteClass();
    
    buttonValue = null;
    
    functionForTipPctCustom();
});

selectTipInput.addEventListener("keyup", () => {
    functionForTipPctCustom();
});


billInput.addEventListener("keyup", () => {
    bill = billInput.value;

    if (buttonValue == null) {
        functionForTipPctCustom();
    } else {
        functionForTipPctButton();
    }

});


nPoepleInput.addEventListener("keyup", () => {
    nPoeple = nPoepleInput.value;

    if (buttonValue == null) {
        functionForTipPctCustom();
    } else {
        functionForTipPctButton();
    }
});


// Calculation Functions
let totalTipCalcu = (pct) => {
    totalTip = (pct * bill) / 100;
}

let tipPerPersonCalcu = (totalTip) => {
    tipPerPerson = totalTip / nPoeple;
}

let totalPerPersonCalcu = (totalTip) => {
    totalPerPerson = (bill / nPoeple) + (totalTip / nPoeple);
}


// Delete Class Function
let deleteClass = () => {
    selectTipButtons.forEach(button => {
        button.classList.remove("calculator-section__button-selected");
    });
}


// Reset Button
resetBtn.addEventListener("click", ()=>{
    billInput.value = "";
    deleteClass();
    selectTipInput.value = "";
    nPoepleInput.value = "";
    tipAmountDisplay.innerHTML = "0.00";
    totalPersonDiplay.innerHTML = "0.00";

    bill = billInput.value;
    nPoeple = nPoepleInput.value;
    tipPct = null;
    buttonValue = null;
    tipPctCustom = selectTipInput.value;
    tipPerPerson = null;
    totalTip = null;
    totalPerPerson = null;

    message[0].style.display = "none";
    message[1].style.display = "none";
});