var moneyInp = document.querySelector(".dol-inp");
var pepNum = document.querySelector(".pepNum");
var amountInp = document.querySelector(".am-inp");
var totalInp = document.querySelector(".to-inp");
var customInp = document.querySelector(".custom");
var reset = document.querySelector(".reset");
var buttonsArr = document.querySelectorAll(".tup-btn");
var currentTip = 0;
function calculateTip() {
    var money = parseFloat(moneyInp.value) || 0;
    var people = parseFloat(pepNum.value) || 1;
    if (currentTip === 0)
        return;
    var totalTip = money * (currentTip / 100);
    var tipPerPerson = totalTip / people;
    var totalPerPerson = (money + totalTip) / people;
    amountInp.value = tipPerPerson.toFixed(2);
    totalInp.value = totalPerPerson.toFixed(2);
}
buttonsArr.forEach(function (btn) {
    btn.addEventListener("click", function () {
        buttonsArr.forEach(function (b) { return b.classList.remove("active"); });
        btn.classList.add("active");
        customInp.value = "";
        var percent = parseFloat(btn.textContent || "0");
        currentTip = percent;
        calculateTip();
    });
});
customInp.addEventListener("input", function () {
    var value = customInp.value;
    buttonsArr.forEach(function (b) { return b.classList.remove("active"); });
    if (value === "")
        return;
    currentTip = parseFloat(value);
    calculateTip();
});
moneyInp.addEventListener("input", calculateTip);
pepNum.addEventListener("input", calculateTip);
reset.addEventListener("click", function () {
    moneyInp.value = "";
    pepNum.value = "";
    customInp.value = "";
    amountInp.value = "0.00";
    totalInp.value = "0.00";
    currentTip = 0;
    buttonsArr.forEach(function (b) { return b.classList.remove("active"); });
});
