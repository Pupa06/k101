function upadateCaseNumber(product, price, isIncreasing) {
    const caseInput = document.getElementById(product + '-number');
    let caseNumber = caseInput.value;
    if (isIncreasing) {
        caseNumber = parseInt(caseNumber) + 1;
    }

    else if (caseNumber > 0) {
        caseNumber = parseInt(caseNumber) - 1;
    }

    caseInput.value = caseNumber;
    // update case total 
    const caseTotal = document.getElementById(product + '-total');
    caseTotal.innerText = caseNumber * price;
    calculateTotal();
}

document.getElementById('case-plus').addEventListener('click', function () {
    upadateCaseNumber('case', 500, true);
});

document.getElementById('case-minus').addEventListener('click', function () {
    upadateCaseNumber('case', 500, false);
});

// phone prcie update using add event linstner 
document.getElementById('phone-plus').addEventListener('click', function () {
    upadateCaseNumber('phone', 850, true);
});


document.getElementById('phone-minus').addEventListener('click', function () {
    upadateCaseNumber('phone', 850, false);
});

document.getElementById('iphone-plus').addEventListener('click', function () {
    upadateCaseNumber('iphone', 1100, true);
});

document.getElementById('iphone-minus').addEventListener('click', function () {
    upadateCaseNumber('iphone', 1100, false);
});


const orderForm = document.getElementById("order-form");
const orderSummary = document.getElementById("order-summary");
const totalPrice = document.getElementById("total-price");

let products = {
    "iphone11": 850,
    "iphone11Pro": 500,
    "iphone12Pro": 1100
};

orderForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = event.target.elements["name"].value;
    const email = event.target.elements["email"].value;
    const product = event.target.elements["product"].value;
    const quantity = event.target.elements["quantity"].value;

    const price = products[product] * quantity;

    const row = document.createElement("tr");
    row.innerHTML = `
  <td>${name}</td>
  <td>${email}</td>
  <td>${product}</td>
  <td>${quantity}</td>
  <td>${price}</td>
`;

    orderSummary.querySelector("tbody").appendChild(row);

    let currentTotalPrice = Number(totalPrice.textContent);
    totalPrice.textContent = currentTotalPrice + price;

    event.target.reset();
});