// Simple add to cart functionality for multiple products
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const productName = this.getAttribute('data-product');
        alert(`${productName} added to cart!`);
    });
});
