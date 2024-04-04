
let bill = document.querySelector('#bill-input');
let people = document.querySelector('#people-input');
let tipAmount = document.querySelector('#tip-amount-value');
let totalAmount = document.querySelector('#total-amount-value');
const fivePerCent = document.querySelector('#cinco');
const tenPerCent = document.querySelector('#dez');
const fifteenPerCent = document.querySelector('#quinze');
const twentyFivePerCent = document.querySelector('#vinte_e_cinco');
const fiftyPerCent = document.querySelector('#cinquenta');
document.querySelector("#txt").style.display = "none";

const modal = document.querySelector("#modal");
const content = document.querySelector("#content");
const customInput = document.querySelector("#Custom-input");
const calculate = document.querySelector("#calculate");
const inputContainer = document.querySelector("#input-container");

modal.style.display = "none";
    content.style.display = "none";
    customInput.style.display = "none";
    calculate.style.display = "none";
    inputContainer.style.display = "none";

bill.addEventListener('input', function() {
    if(Number(bill.value) > 9999 || Number(bill.value) < 0) {
        this.value = 9999;
        console.error("Só são aceitos calculos de contas de números até 4 digitos e positivos");
    }
});

people.addEventListener('input', function() {
    if(Number(bill.value) > 9999) {
        this.value = 9999
    }
});

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
        bill.style.border = "3px red solid";
        document.querySelector("#txt").style.display = "inline";
        bill.focus();
        
      } else {
        bill.style.border = "none";
        document.querySelector("#txt").style.display = "none";
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

  document.querySelector('#Custom').addEventListener('click', function () {
    modal.style.display = "flex";
    content.style.display = "flex";
    customInput.style.display = "flex";
    calculate.style.display = "flex";
    inputContainer.style.display = "flex";

    customInput.style.border = "none"
    document.querySelector("#warningtxt").style.display = "none";

     
    
});

document.querySelector("#x").addEventListener("click", () => {
    modal.style.display = "none";
    content.style.display = "none";
    customInput.style.display = "none";
    calculate.style.display = "none";
    inputContainer.style.display = "none";
    customInput.value = "";
})

calculate.addEventListener("click", function() {
    
    if(Number(customInput.value) > 0) {
        calculateTip(Number(customInput.value)/100);
        modal.style.display = "none";
    content.style.display = "none";
    customInput.style.display = "none";
    calculate.style.display = "none";
    inputContainer.style.display = "none";
    customInput.value = "";
        
    } else {
        document.querySelector("#warningtxt").style.display = "inline";
        customInput.style.border = "3px red solid";
        customInput.focus();
    }
})


  document.querySelector('#reset').addEventListener('click', function(){
    bill.value = '';
    people.value = '';
    tipAmount.textContent = 0;
    totalAmount.textContent = 0;
  })
