document.querySelectorAll('.plus-btn').forEach((btn) => {
    btn.addEventListener('click', function () {
        let row = this.closest('tr');
        let quantityInput = row.querySelector('.quantity');
        let quantity = parseInt(quantityInput.value);

        if (quantity < 3) {
            quantity++;
            quantityInput.value = quantity;
            row.querySelector('.total-price').innerText =  (quantity * parseFloat(row.dataset.price))+ "មុឺន ​៛" ;
            row.querySelector('.minus-btn').disabled = false;

            if (quantity === 3) {
                this.disabled = true;
            }
        }

        updateTotal();
    });
});

document.querySelectorAll('.minus-btn').forEach((btn) => {
    btn.addEventListener('click', function () {
        let row = this.closest('tr');
        let quantityInput = row.querySelector('.quantity');
        let quantity = parseInt(quantityInput.value);

        if (quantity > 1) {
            quantity--;
            quantityInput.value = quantity;
            row.querySelector('.total-price').innerText = (quantity * parseFloat(row.dataset.price)) + "មុឺន ​៛";
            row.querySelector('.plus-btn').disabled = false;

            if (quantity === 1) {
                this.disabled = true;
            }
        }

        updateTotal();
    });
});

document.querySelectorAll('.plus-btn2').forEach((btn) => {
    btn.addEventListener('click', function () {
        let row = this.closest('tr');
        let quantityInput = row.querySelector('.quantity');
        let quantity = parseInt(quantityInput.value);

        if (quantity < 3) {
            quantity++;
            quantityInput.value = quantity;
            row.querySelector('.total-price').innerText =  (quantity * parseFloat(row.dataset.price))+ "មុឺន ​៛" ;
            row.querySelector('.minus-btn2').disabled = false;

            if (quantity === 3) {
                this.disabled = true;
            }
        }

        updateTotal();
    });
});

document.querySelectorAll('.minus-btn2').forEach((btn) => {
    btn.addEventListener('click', function () {
        let row = this.closest('tr');
        let quantityInput = row.querySelector('.quantity');
        let quantity = parseInt(quantityInput.value);

        if (quantity > 1) {
            quantity--;
            quantityInput.value = quantity;
            row.querySelector('.total-price').innerText = (quantity * parseFloat(row.dataset.price)) + "មុឺន ​៛";
            row.querySelector('.plus-btn2').disabled = false;

            if (quantity === 1) {
                this.disabled = true;
            }
        }

        updateTotal();
    });
});

// Remove product from cart
document.querySelectorAll('.remove-btn').forEach((btn) => {
    btn.addEventListener('click', function () {
        let row = this.closest('tr');
        row.remove();

        updateTotal();
        checkIfCartIsEmpty();
    });
});

// Update total cart price
function updateTotal() {
    let total = 0;
    document.querySelectorAll('.total-price').forEach(function (totalPriceCell) {
        total += parseFloat(totalPriceCell.innerText.replace('', ''));
    });

    console.log("Total Cart Price: $" + total.toFixed(2)); // You can display the total elsewhere as needed
}

// Check if the cart is empty
function checkIfCartIsEmpty() {
    const cartRows = document.querySelectorAll('tbody tr');
    const emptyMsg = document.querySelector('.empty-cart-msg');
    const checkoutBtn = document.querySelector('.checkout-btn');

    if (cartRows.length === 0) {
        emptyMsg.classList.remove('d-none');
        checkoutBtn.disabled = true;
    } else {
        emptyMsg.classList.add('d-none');
        checkoutBtn.disabled = false;
    }
}

updateTotal(); // Call this initially to calculate the total on page load