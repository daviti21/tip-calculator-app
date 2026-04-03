var form = document.querySelector("#form");
var reset = document.querySelector(".reset");
var moneyInp = document.querySelector(".dol-inp");
var pepNum = document.querySelector(".pepNum");
var amountInp = document.querySelector(".am-inp");
var totalInp = document.querySelector(".to-inp");
var customInp = document.querySelector(".custom");
var btn5 = document.querySelector("#btn5");
var btn10 = document.querySelector("#btn10");
var btn15 = document.querySelector("#btn15");
var btn25 = document.querySelector("#btn25");
var btn50 = document.querySelector("#btn50");
function calculateTip(tipPerecent) {
    var moneyQuantity = parseFloat(moneyInp.value);
    var pepQuantity = parseFloat(pepNum.value) || 1;
    var total = moneyQuantity * (tipPerecent / 100);
    var amount = total / pepQuantity;
    var totalPerPerson = (moneyQuantity + total) / pepQuantity;
    totalInp.value = totalPerPerson.toFixed(2);
    amountInp.value = amount.toFixed(2);
}
btn5.addEventListener("click", function () { return calculateTip(5); });
btn10.addEventListener("click", function () { return calculateTip(10); });
btn15.addEventListener("click", function () { return calculateTip(15); });
btn25.addEventListener("click", function () { return calculateTip(25); });
btn50.addEventListener("click", function () { return calculateTip(50); });
customInp.addEventListener("input", function () {
    var value = customInp.value;
    if (value === "")
        return;
    var customQuantity = parseFloat(value);
    calculateTip(customQuantity);
    buttonsArr.forEach(function (b) {
        b.classList.remove("active");
        b.style.backgroundColor = "#00474b";
        b.style.color = "#fff";
    });
});
var buttonsArr = document.querySelectorAll(".tup-btn");
buttonsArr.forEach(function (btn) {
    btn.addEventListener("click", function () {
        buttonsArr.forEach(function (b) {
            b.classList.remove("active");
            b.style.backgroundColor = "#00474b";
            b.style.color = "#fff";
        });
        btn.classList.add("active");
        btn.style.backgroundColor = "#24c4ad";
        btn.style.color = "#00474b";
    });
});
reset.addEventListener("click", function () {
    window.location.reload();
});
