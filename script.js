const bill = document.querySelector('#bill-input');
const people = document.querySelector('#people-input');
const tipAmount = document.querySelector('#tip-amount-value');
const totalAmount = document.querySelector('#total-amount-value');

function validateInput(input, max) {
    if (Number(input.value) > max || Number(input.value) < 0) {
        input.value = input.value > max ? max : 0;
        alert("A entrada deve ser um número positivo até " + max + ".");
    }
}

bill.addEventListener('input', () => validateInput(bill, 9999));
people.addEventListener('input', () => validateInput(people, 9999));


function calculateTip(percent) {
    let billValue = Number(bill.value);
    let peopleCount = Number(people.value) || 1;
    let tip = (billValue * percent) / peopleCount;
    let total = (billValue + billValue * percent) / peopleCount;

    tipAmount.textContent = tip.toFixed(2).replace(".", ",");
    totalAmount.textContent = total.toFixed(2).replace(".",",");
}

document.querySelectorAll('.tip-button').forEach(button => {
    button.addEventListener('click', function() {
        calculateTip(parseFloat(this.dataset.tipPercent));
    });
});

document.querySelector('#reset').addEventListener('click', function() {
    bill.value = 0;
    people.value = 0;
    tipAmount.textContent = '0,00';
    totalAmount.textContent = '0,00';
});

