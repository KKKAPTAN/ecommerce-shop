const table = document.getElementById('table-body');
const items = JSON.parse(localStorage.getItem('cart'));
const body = document.body;
couponApplied = false;

const removeFromCart = (element) => {
    const key = element.getAttribute('data-key');
    element.parentNode.parentNode.remove();

    const indexToRemove = items.findIndex(item => item.key === key);
    
    if (indexToRemove !== -1) {
        items.splice(indexToRemove, 1);
        console.log(items);
        
        if (items.length === 0) {
            localStorage.removeItem('cart');

            document.getElementById('cart-empty').style.display = 'flex';
            document.getElementById('cart').style.display = 'none';
            document.getElementById('cart-add').style.display = 'none';
        } else {
            localStorage.setItem('cart', JSON.stringify(items));
        }
    }
    calcTotal(couponApplied);
}

const calcTotal = (couponApplied) => {
    let result = 0;
    let finalPrice;
    const total = document.querySelectorAll('#subtotal');
    total.forEach(sub => {
        thisSubTotal = parseFloat(sub.innerHTML.replace('$', ''))
        result += thisSubTotal;
    })
    if (couponApplied) {
        finalPrice = result - result * (25/100)
    } else {
        finalPrice = result;
    }
    document.getElementById('cart-subtotal').innerText = "$" + result;
    document.getElementById('total').innerText = "$" + finalPrice;
    return finalPrice;
}

const updateQuantity = (event) => {
    const thisRow = event.target.parentNode.parentNode;
    const value = event.target.value;
    const price = thisRow.querySelector('#price').innerText;
    thisRow.querySelector('#subtotal').innerText = "$" + parseFloat(price.replace('$', '')) * value;
    calcTotal(couponApplied);
}

const rowBuilder = (index) => {
    return `
        <td><a style="cursor:pointer;" data-key='${items[index].key}' class="remove-item" onclick="removeFromCart(this)"><i class="far fa-times-circle"></i></a></td>
        <td><img src="${items[index].image}" alt=""></td>
        <td>${items[index].name}</td>
        <td id="price">${items[index].price}</td>
        <td><input onchange="updateQuantity(event)" type="number" min=1 value="${items[index].quantity}"></td>
        <td id="subtotal">$${parseFloat(items[index].price.replace('$', '')) * items[index].quantity}</td>
        </tr>
    `
}

if (items) {
    document.getElementById('cart-empty').style.display = 'none';
    for (let i = 0; i < items.length; i++) {
        table.insertAdjacentHTML('beforeend', rowBuilder(i));
    }
} else {
    document.getElementById('cart').style.display = 'none';
    document.getElementById('cart-add').style.display = 'none';
}

calcTotal(false);

const logGenerator = (message, type) => {
    return `<div class="log ${type}">${message}</div>`;
}

document.querySelector('.apply-coupon button').addEventListener('click', () => {
    let value = document.querySelector('.apply-coupon input').value;
    if (value == document.getElementById('total').innerHTML.replace('$', '')) {
        document.getElementById('coupon-sale').innerHTML = '25%';
        couponApplied = true;
        calcTotal(couponApplied)
        document.querySelector('.apply-coupon input').value = null;
        body.insertAdjacentHTML('afterbegin', logGenerator('Coupon Applied!', 'success'));
    } else {
        body.insertAdjacentHTML('afterbegin', logGenerator('Coupon unavailable', 'error'));
        document.querySelector('.apply-coupon input').value = null;
    }
    const log = document.querySelector('.log');

    setTimeout(() => {
        log.style.top = '5%';
        setTimeout(() => {
            log.style.top = '-20%';
            setTimeout(() => {
                log.remove();
            }, 300);
        }, 2000);
    }, Math.random() * 100);
})

document.getElementById('proceedToCheckout').addEventListener('click', () => {
    const checkoutParam = document.getElementById('total').innerText;
    window.location.href = `checkout.html?checkoutParam=${encodeURIComponent(checkoutParam)}`;
})