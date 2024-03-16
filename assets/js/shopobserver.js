function load(entry) {
    const products = entry.querySelectorAll('.product-container .product');
    for (let i = 0; i < products.length; i++) {
        setTimeout(() => {
            products[i].classList.add('active');        
        }, i * 100);
    }
}

function observeIntersection(targetElement) {
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.intersectionRatio >= 0.1) {
                load(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    observer.observe(targetElement);
}

const targetElements = document.querySelectorAll('#feature-products');

targetElements.forEach(observeIntersection);