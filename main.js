// 1. make 2 boxes
// 2. make 2 dropdown lists
// 3. get exchange rate information
// 4. selecting an item from the dropdown list changes to it - clink event
// 5. enter the amount and currency exchange occurs
// 6. selecting an item from another dropdown list changes to that currency
// 7. read currency units in Korean
// 8. change the number first in the box below

//use Object(객체)
let currencyRatio = {
  USD: {
    KRW: 1341.68, // USD to KRW
    USD: 1,
    CAD: 1.38, // USD to CAD
    unit: "달러",
  },
  KRW: {
    KRW: 1,
    USD: 0.00075,
    CAD: 0.001,
    unit: "원",
  },
  CAD: {
    KRW: 970.71,
    USD: 0.72,
    CAD: 1,
    unit: "캐드",
  },
};

//get value from Object
console.log(currencyRatio.USD.unit);
console.log(currencyRatio["USD"]["unit"]);
console.log(currencyRatio["USD"].unit);

console.log(document.querySelectorAll("#from-currency-list a")); // All a tag

let fromCurrency = "USD";
let toCurrency = "USD";

document.querySelectorAll("#from-currency-list a").forEach((menu) =>
  menu.addEventListener("click", function () {
    // add event 'click' to function 'menu'
    //1. Get the button.
    //2. Replace the value in the button.
    document.getElementById("from-button").textContent = this.textContent;

    //3. Save the selected currency value in a variable.
    fromCurrency = this.textContent;
    console.log("fromCurrency: ", fromCurrency);
  })
);

document.querySelectorAll("#to-currency-list a").forEach((menu) =>
  menu.addEventListener("click", function () {
    document.getElementById("to-button").textContent = this.textContent;
    toCurrency = this.textContent;
  })
);
