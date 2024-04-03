let bill = document.querySelector('#bill-input');
let people = document.querySelector('#people-input');
let tipAmount = document.querySelector('#tip-amount-value');
let totalAmount = document.querySelector('#total-amount-value');


function validateInput() {
    if (Number(bill.value) > 9999 || Number(bill.value) < 0) {
        bill.value = Math.min(Math.max(bill.value, 0), 9999);
        alert("Só são aceitos cálculos de contas de números até 4 dígitos e positivos.");
    }
    if (Number(people.value) < 1) {
        people.value = Math.max(people.value, 1);
        alert("O número de pessoas não pode ser menor que 1.");
    }
}

bill.addEventListener('input', validateInput);
people.addEventListener('input', validateInput);


function calculateTip(percent) {
    validateInput(); 
    let billValue = Number(bill.value);
    let peopleCount = Number(people.value);
    let tipPerPerson = (billValue * percent) / peopleCount;
    let totalPerPerson = (billValue * (1 + percent)) / peopleCount;

    tipAmount.textContent = tipPerPerson.toFixed(2).replace(".", ",");
    totalAmount.textContent = totalPerPerson.toFixed(2).replace(".", ",");
}


document.querySelector('#cinco').addEventListener('click', () => calculateTip(0.05));
document.querySelector('#dez').addEventListener('click', () => calculateTip(0.10));
document.querySelector('#quinze').addEventListener('click', () => calculateTip(0.15));
document.querySelector('#vinte_e_cinco').addEventListener('click', () => calculateTip(0.25));
document.querySelector('#cinquenta').addEventListener('click', () => calculateTip(0.50));


document.querySelector('#reset').addEventListener('click', () => {
    bill.value = '';
    people.value = '';
    tipAmount.textContent = '0,00';
    totalAmount.textContent = '0,00';
});
