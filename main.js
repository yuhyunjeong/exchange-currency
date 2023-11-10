// 1. make 2 boxes
// 2. make 2 dropdown lists
// 3. get exchange rate information
// 4. selecting an item from the dropdown list changes to it - clink event
// 5. enter the amount and currency exchange occurs
// 6. selecting an item from another dropdown list changes to that currency
// 7. change the number first in the box below
// 8. read currency units in Korean

//use Object(객체)
let currencyRatio = {
  USD: {
    KRW: 1310.65, // USD to KRW
    USD: 1,
    CAD: 1.38, // USD to CAD
    unit: "달러",
  },
  KRW: {
    KRW: 1,
    USD: 0.00076,
    CAD: 0.0011,
    unit: "원",
  },
  CAD: {
    KRW: 950.28,
    USD: 0.73,
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
    document.getElementById("from-input").value = null;
    // add event 'click' to function 'menu'
    //1. Get the button.
    //2. Replace the value in the button.
    document.getElementById("from-button").textContent = this.textContent;

    //3. Save the selected currency value in a variable.
    fromCurrency = this.textContent;
    console.log("fromCurrency: ", fromCurrency);

    document.getElementById("from-unit").textContent =
      currencyRatio[fromCurrency].unit;
  })
);

document.querySelectorAll("#to-currency-list a").forEach((menu) =>
  menu.addEventListener("click", function () {
    document.getElementById("to-input").value = null;

    document.getElementById("to-button").textContent = this.textContent;
    toCurrency = this.textContent;

    document.getElementById("to-unit").textContent =
      currencyRatio[toCurrency].unit;
  })
);

// 1. when entering key
// 2. currency exchange occurs
// 3. show the value

function convert(type) {
  //console.log("keyup: ");

  if (type == "from") {
    //convert
    // currency-exchange = money * exchange rate
    let amount = document.getElementById("from-input").value;
    let convertedAmount = amount * currencyRatio[fromCurrency][toCurrency];
    console.log("환전결과!:", convertedAmount);

    document.getElementById("to-input").value = convertedAmount;
  } else {
    //convert
    // currency-exchange = money * exchange rate
    let amount = document.getElementById("to-input").value;
    let convertedAmount = amount * currencyRatio[toCurrency][fromCurrency];
    console.log("환전결과!:", convertedAmount);

    document.getElementById("from-input").value = convertedAmount;
  }
}
