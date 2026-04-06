 
const moneyInp = document.querySelector(".dol-inp") as HTMLInputElement;
const pepNum = document.querySelector(".pepNum") as HTMLInputElement;
const amountInp = document.querySelector(".am-inp") as HTMLInputElement;
const totalInp = document.querySelector(".to-inp") as HTMLInputElement;
const customInp = document.querySelector(".custom") as HTMLInputElement;
const reset = document.querySelector(".reset") as HTMLButtonElement;

const buttonsArr = document.querySelectorAll<HTMLButtonElement>(".tup-btn");

 
let currentTip = 0;

 
function calculateTip() {
  const money = parseFloat(moneyInp.value) || 0;
  const people = parseFloat(pepNum.value) || 1;

  if (currentTip === 0) return;

  const totalTip = money * (currentTip / 100);
  const tipPerPerson = totalTip / people;
  const totalPerPerson = (money + totalTip) / people;

  amountInp.value = tipPerPerson.toFixed(2);
  totalInp.value = totalPerPerson.toFixed(2);
}
 
 
buttonsArr.forEach(btn => {
  btn.addEventListener("click", () => {
  
    buttonsArr.forEach(b => b.classList.remove("active"));
     
    btn.classList.add("active");

    customInp.value = "";

    const percent = parseFloat(btn.textContent || "0");
    currentTip = percent;

    calculateTip();
  });
});
 

 
customInp.addEventListener("input", () => {
  const value = customInp.value;

 
  buttonsArr.forEach(b => b.classList.remove("active"));

  if (value === "") return;

  currentTip = parseFloat(value);
  calculateTip();
});

 
moneyInp.addEventListener("input", calculateTip);

 
pepNum.addEventListener("input", calculateTip);

 
reset.addEventListener("click", () => {
  moneyInp.value = "";
  pepNum.value = "";
  customInp.value = "";
  amountInp.value = "0.00";
  totalInp.value = "0.00";
  currentTip = 0;

  buttonsArr.forEach(b => b.classList.remove("active"));
});