
let bill = document.querySelector('#bill-input');
let people = document.querySelector('#people-input');
let tipAmount = document.querySelector('#tip-amount-value');
let totalAmount = document.querySelector('#total-amount-value');
const fivePerCent = document.querySelector('#cinco');
const tenPerCent = document.querySelector('#dez');
const fifteenPerCent = document.querySelector('#quinze');
const twentyFivePerCent = document.querySelector('#vinte_e_cinco');
const fiftyPerCent = document.querySelector('#cinquenta');


function calculateTip(percent) {
      let tip = Number(bill.value) * percent;
      const tipInitial = tip;
      let total;

      Number(people.value) > 0 ? tip=(tip/Number(people.value)).toFixed(2) : tip=tip.toFixed(2);
      tipAmount.textContent=(String(tip)).replace(".",",");
      
      Number(people.value) > 0 ? total = ((tipInitial + Number(bill.value))/people.value).toFixed(2) : total = (tipInitial + Number(bill.value)).toFixed(2);
      totalAmount.textContent=(String(total)).replace(".",",");
      
      if (Number(bill.value) === 0) {
        tipAmount.textContent = '0';
        totalAmount.textContent = '0';
        
      }

  }
  
  
  document.querySelector('#cinco').addEventListener('click', function () {
      let tip = calculateTip(0.05);
  });
  
  document.querySelector('#dez').addEventListener('click', function () {
      let tip = calculateTip(0.10);
  });
  
  document.querySelector('#quinze').addEventListener('click', function () {
      let tip = calculateTip(0.15);
  });
  
  document.querySelector('#vinte_e_cinco').addEventListener('click', function () {
      let tip = calculateTip(0.25);
  });
  
  document.querySelector('#cinquenta').addEventListener('click', function () {
      let tip = calculateTip(0.50);
  });

  document.querySelector('#reset').addEventListener('click', function(){
    bill.value = 0;
    people.value = 0;
    tipAmount.textContent = 0;
    totalAmount.textContent = 0;
  })