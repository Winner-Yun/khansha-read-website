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

// Update total cart price with conversion to USD
function updateTotal() {
    let totalInRiel = 0;
    const exchangeRate = 4090; // 1 USD = 4090 Riel

    // Sum all individual item totals in Riel (each 'មុឺន' equals 10,000 Riel)
    document.querySelectorAll('.total-price').forEach(function (totalPriceCell) {
        let totalInMun = parseFloat(totalPriceCell.innerText.replace('មុឺន ​៛', '').trim());
        totalInRiel += totalInMun * 10000; // Convert 'មុឺន' to Riel
    });

    // Convert to USD
    let totalInUSD = totalInRiel / exchangeRate;

    // Display the total price in both Riel and USD
    console.log("Total in Riel: " + totalInRiel.toFixed(2) + "៛");
    console.log("Total in USD: $" + totalInUSD.toFixed(2));

    // Update the UI to show the total in Riel and USD
    document.querySelector('.cart-total-display').innerText = 
        "សរុប: " + totalInRiel.toLocaleString() + "៛ (≈ $" + totalInUSD.toFixed(2) + ")";
}

// Call updateTotal initially to calculate the total on page load
updateTotal();

document.getElementById('payment-method').addEventListener('change', function() {
    var paymentMethod = this.value;

    // Hide all payment forms
    document.querySelectorAll('.payment-form').forEach(function(form) {
        form.classList.add('d-none');
    });

    // Show the selected payment form
    if (paymentMethod === 'qr-code') {
        document.getElementById('qr-code-info').classList.remove('d-none');
    } else if (paymentMethod === 'bank-transfer') {
        document.getElementById('bank-transfer-info').classList.remove('d-none');
    } else if (paymentMethod === 'credit-card') {
        document.getElementById('credit-card-form').classList.remove('d-none');
    }
});

/*pay form*/

document.addEventListener("DOMContentLoaded", function () {
    const paymentMethod = document.getElementById("payment-method");
    const qrCodeInfo = document.getElementById("qr-code-info");
    const bankTransferInfo = document.getElementById("bank-transfer-info");
    const creditCardForm = document.getElementById("credit-card-form");
    const payButton = document.querySelector("[data-bs-target='#successModal']");
    const navigationText = document.querySelector(".navigation-text"); // Add this line to select the navigation-text element

    function validateForm() {
        let isValid = false;
        const selectedMethod = paymentMethod.value;

        if (selectedMethod === "qr-code") {
            const qrPaymentId = document.getElementById("qr-payment-id").value.trim();
            isValid = qrPaymentId !== "";
        } 
        else if (selectedMethod === "bank-transfer") {
            const bankPaymentId = document.getElementById("bank-payment-id").value.trim();
            isValid = bankPaymentId !== "";
        } 
        else if (selectedMethod === "credit-card") {
            const cardholder = document.querySelector("#credit-card-form input[placeholder='Cardholder Name']").value.trim();
            const cardNumber = document.querySelector("#credit-card-form input[placeholder='Card Number']").value.trim();
            const expiryDate = document.querySelector("#credit-card-form input[placeholder='Expiry Date (MM/YY)']").value.trim();
            const cvv = document.querySelector("#credit-card-form input[placeholder='CVV']").value.trim();
            isValid = cardholder !== "" && cardNumber !== "" && expiryDate !== "" && cvv !== "";
        }

        payButton.disabled = !isValid;

        // Hide the navigation text if the form is valid
        if (isValid) {
            navigationText.classList.add("d-none");
        } else {
            navigationText.classList.remove("d-none");
        }
    }

    function updatePaymentForm() {
        qrCodeInfo.classList.add("d-none");
        bankTransferInfo.classList.add("d-none");
        creditCardForm.classList.add("d-none");

        if (paymentMethod.value === "qr-code") {
            qrCodeInfo.classList.remove("d-none");
        } else if (paymentMethod.value === "bank-transfer") {
            bankTransferInfo.classList.remove("d-none");
        } else if (paymentMethod.value === "credit-card") {
            creditCardForm.classList.remove("d-none");
        }

        validateForm(); // Check if button should be enabled when switching methods
    }

    // Listen for changes in payment method selection
    paymentMethod.addEventListener("change", updatePaymentForm);

    // Listen for input changes in all required fields
    document.querySelectorAll("input").forEach(input => {
        input.addEventListener("input", validateForm);
    });

    // Initially disable the button
    payButton.disabled = true;
});
