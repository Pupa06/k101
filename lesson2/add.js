const btn = document.querySelectorAll('button');
btn.forEach(function (button, index) {
    button.addEventListener('click', function (e) {
        let btnItem = e.target
        let product = btnItem.parentElement
        let productImg = product.querySelector("img").src
        let productName = product.querySelector("h4").textContent
        let productSpan = product.querySelector("span").textContent

        addCart(productImg, productName, productSpan)
    })
})

function addCart(productImg, productName, productSpan) {
    const addtr = document.createElement("tr")
    let cartItem = document.querySelectorAll("tbody tr")
    for (let i = 0; i < cartItem.length; i++) {
        let product = document.querySelectorAll(".title1")
        if (product[i].innerHTML == productName) {
            alert("Sản phẩm của bạn đã có trong giỏ hàng")
            return;
        }
    }
    const trContent = '<td style="display: flex;align-items: center;"><img style="width: 70px" src="' + productImg + '" alt=""><span class = title1 >' + productName + '</span></td><td><p><span class = "price">' + productSpan + '</span><sup>đ</sup></p></td><td><input style="width: 30px;outline: none;" type="number" value="1" min="1"></td><td class = "delete" style="cursor: pointer;">Xóa</td>'
    addtr.innerHTML = trContent
    const cartTable = document.querySelector("tbody")
    cartTable.append(addtr)
    cartTotal()
    deleteCart()
}

// total price
function cartTotal() {
    let cartItem = document.querySelectorAll("tbody tr")
    let totalPrice = 0
    for (let i = 0; i < cartItem.length; i++) {
        let inputValue = cartItem[i].querySelector("input").value
        let producPrice = cartItem[i].querySelector(".price").innerHTML
        total = inputValue * producPrice * 1000
        totalPrice += total
    }
    let cartTotalA = document.querySelector(".price-total span")
    let cartTotalB = document.querySelector(".shopping span")
    cartTotalA.innerHTML = totalPrice.toLocaleString('de-DE')
    cartTotalB.innerHTML = totalPrice.toLocaleString('de-DE')
    inputChange()
}
// delete cart
function deleteCart() {
    let cartItem = document.querySelectorAll("tbody tr")
    for (let i = 0; i < cartItem.length; i++) {
        let product1 = document.querySelectorAll(".delete")
        product1[i].addEventListener("click", function (e) {
            let deleteCart = e.target
            let cartItem1 = deleteCart.parentElement
            cartItem1.remove()
            cartTotal()
        })
    }
}

function inputChange(){
    let cartItem = document.querySelectorAll("tbody tr")
    for (let i = 0; i < cartItem.length; i++) {
        let product2 = cartItem[i].querySelector("input")
        product2.addEventListener("change",function() {
        cartTotal()
        })
    }
}

let cartBtn = document.querySelector(".fa-circle-xmark")
let cartShow = document.querySelector(".fa-cart-shopping")

cartShow.addEventListener("click",function(){
document.querySelector(".cart").style.right = "0"
})
cartBtn.addEventListener("click",function(){
document.querySelector(".cart").style.right = "-100%"
})

