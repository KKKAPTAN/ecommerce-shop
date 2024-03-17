
function load(entry) {
    const products = entry.querySelectorAll('.product-container .product');
    const productManage = entry.querySelector('.product-container');
    for (let i = 0; i < products.length; i++) {
        setTimeout(() => {
            products[i].classList.add('active');        
        }, i * 100);
    }
    setTimeout(() => {
        productManage.style.overflow = "unset";
    }, products.length * 100);
}

function observeIntersection(targetElement) {
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.intersectionRatio >= 0.4) {
                load(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.4 });

    observer.observe(targetElement);
}

const targetElements = document.querySelectorAll('#feature-products');

targetElements.forEach(observeIntersection);