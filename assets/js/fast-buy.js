

/*Form*/

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