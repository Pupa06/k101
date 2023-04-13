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
