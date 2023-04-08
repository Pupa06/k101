
const number = document.querySelector('#phone-number');
const plus = document.querySelector('#phone-plus');
const minus = document.querySelector('#phone-minus');

plus.addEventListener('click', function (e) {
    let phone = parseInt(number.value);
    phone++;
    number.value = phone;

});

minus.addEventListener('click', function (e) {
    let phone = parseInt(number.value);
    if (phone >= 1) {
        phone--;
        number.value = phone;
    }
});

