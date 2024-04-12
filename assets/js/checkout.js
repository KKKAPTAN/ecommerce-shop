const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const checkoutParam = urlParams.get('checkoutParam');

document.getElementById('totalPrice').innerText = `${checkoutParam}`;
amount = JSON.parse(localStorage.getItem('cart')).length;

if (amount > 5) {
    document.getElementById('itemsAmount').innerText = `${amount} товарів`;
} else if (amount > 1 && amount < 5){
    document.getElementById('itemsAmount').innerText = `${amount} товари`;
} else {
    document.getElementById('itemsAmount').innerText = `${amount} товар`;
}

localStorage.removeItem('cart');