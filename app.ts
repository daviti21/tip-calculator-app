const form = document.querySelector("#form") as HTMLFormElement;
const reset = document.querySelector(".reset") as HTMLButtonElement

const moneyInp = document.querySelector(".dol-inp") as HTMLInputElement;
const pepNum = document.querySelector(".pepNum") as HTMLInputElement;
const amountInp = document.querySelector(".am-inp") as HTMLInputElement;
const totalInp = document.querySelector(".to-inp") as HTMLInputElement;
const customInp = document.querySelector(".custom") as HTMLInputElement;

const btn5 = document.querySelector("#btn5") as HTMLButtonElement;
const btn10 = document.querySelector("#btn10") as HTMLButtonElement;
const btn15 = document.querySelector("#btn15") as HTMLButtonElement;
const btn25 = document.querySelector("#btn25") as HTMLButtonElement;
const btn50 = document.querySelector("#btn50") as HTMLButtonElement;
 
 
 
 
 function calculateTip(tipPerecent: number){
   const moneyQuantity: number = parseFloat(moneyInp.value);
 const pepQuantity: number = parseFloat(pepNum.value) || 1

  const total: number = moneyQuantity * (tipPerecent / 100);
  const amount:number = total / pepQuantity;
  const totalPerPerson:number = (moneyQuantity + total) / pepQuantity;
totalInp.value = totalPerPerson.toFixed(2)
  amountInp.value =  amount.toFixed(2)
   
 }

 btn5.addEventListener("click", () => calculateTip(5));
 btn10.addEventListener("click", () => calculateTip(10));
 btn15.addEventListener("click", () => calculateTip(15));
 btn25.addEventListener("click", () => calculateTip(25));
 btn50.addEventListener("click", () => calculateTip(50));
 
  customInp.addEventListener("input", () => {
       const value = customInp.value;

    if (value === "") return;  

    const customQuantity = parseFloat(value);
    calculateTip(customQuantity);
     buttonsArr.forEach(b => {
    b.classList.remove("active");
    b.style.backgroundColor = "#00474b";
    b.style.color = "#fff";
  });
  })

  const buttonsArr = document.querySelectorAll<HTMLButtonElement>(".tup-btn");
  buttonsArr.forEach(btn => {
  btn.addEventListener("click", () => {
     
    buttonsArr.forEach(b => {
      b.classList.remove("active");
      b.style.backgroundColor = "#00474b"; 
      b.style.color = "#fff";               
    });

     
    btn.classList.add("active");
    btn.style.backgroundColor = "#24c4ad"; 
    btn.style.color = "#00474b";
  });
});
  
 
 
 reset.addEventListener("click", () => {
      window.location.reload()
})