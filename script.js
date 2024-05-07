
    let currentStep = 1;

    function renderModalContent(step) {
        const modalBody = document.querySelector('.modal-body');

        if (step === 1) {
            // Step 1: Display basic user information form
            modalBody.innerHTML = `
            <h5>Order Form - Step 1 of 4</h5>
            <form id="orderFormStep1" class="needs-validation" novalidate>
                <div class="mb-3">
                    <label for="fullname" class="form-label">Full Name</label>
                    <input type="text" class="form-control" id="fullname" placeholder="Enter your full name" required>
                    <div class="invalid-feedback">Please enter your full name.</div>
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label">Email Address</label>
                    <input type="email" class="form-control" id="email" placeholder="juandelacruz@gmail.com" required>
                    <div class="invalid-feedback">Please enter a valid email address.</div>
                </div>
                <div class="mb-3">
                    <label for="phone" class="form-label">Phone Number</label>
                    <input type="tel" class="form-control" id="phone" placeholder="09000000000" required>
                    <div class="invalid-feedback">Please enter a valid 11-digit phone number.</div>
                </div>
                <button type="button" class="btn btn-primary" onclick="validateStep1()">Next</button>
            </form>
            `;
        } else if (step === 2) {
            // Step 2: Choose delivery/pickup and provide additional instructions
            modalBody.innerHTML = `
                <h5>Order Form - Step 2 of 4</h5>
                <form id="orderFormStep2" class="needs-validation" novalidate>
                    <div class="mb-3">
                        <label for="dateOfOrder" class="col-sm-3 col-form-label">Date of Order</label>
                        <div class="col-sm-4">
                        <input type="date" class="form-control" id="dateOfOrder" required>
                        <div class="invalid-feedback">Please select a date for the order.</div>
                    </div>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Preference</label><br>
                        <input type="radio" id="delivery" name="deliveryPreference" value="delivery" onchange="toggleDeliveryPickup('delivery')" required>
                        <label for="delivery">Delivery</label>
                        <input type="radio" id="pickup" name="deliveryPreference" value="pickup" onchange="toggleDeliveryPickup('pickup')" required>
                        <label for="pickup">Pickup</label>
                        <div class="invalid-feedback">Please select delivery or pickup.</div>
                    </div>
                    <div id="deliveryAddress" class="mb-3" style="display: none;">
                        <label for="address" class="form-label">Delivery Address</label>
                        <input type="text" class="form-control" id="address" placeholder="House #/Street, Barangay, City/Municipality" required>
                        <div class="invalid-feedback">Please enter the delivery address.</div>
                    </div>
                    <div id="pickupLocation" class="mb-3" style="display: none;">
                        <label for="pickupLocation" class="form-label">Pickup Location</label>
                        <input type="text" class="form-control" id="pickupLocation" placeholder="Enter pickup location" required>
                        <div class="invalid-feedback">Please enter the pickup location.</div>
                    </div>
                    <div class="mb-3">
                        <label for="specialInstructions" class="form-label">Additional Note(Optional)</label>
                        <textarea class="form-control" id="specialInstructions" rows="3" placeholder="Enter any special instructions"></textarea>
                    </div>
                    <button type="button" class="btn btn-secondary me-2" onclick="backStep()">Back</button>
                    <button type="button" class="btn btn-primary" onclick="validateStep2()">Next</button>
                </form>
            `;
        } else if (step === 3) {
            // Step 3: Choose products with quantity selection
            modalBody.innerHTML = `
                <h5>Order Form - Step 3 of 4</h5>
                <form id="orderFormStep3" class="needs-validation" novalidate>
                    <div class="mb-3">
                        <label for="productSelection" class="form-label">Product Selection</label><br>
                        <div class="form-check">
                            <input type="checkbox" id="product1" name="product" value="Diwata Pares Overload" class="form-check-input">
                            <label for="product1" class="form-check-label">Diwata Pares Overload (P100)</label>
                            <input type="number" id="quantity1" name="quantity" min="1" value="1" class="form-control ms-2" style="width: 70px;">
                        </div>
                        <div class="form-check">
                            <input type="checkbox" id="product2" name="product" value="Diwata Fried Siken" class="form-check-input">
                            <label for="product2" class="form-check-label">Diwata Fried Siken (P75)</label>
                            <input type="number" id="quantity2" name="quantity" min="1" value="1" class="form-control ms-2" style="width: 70px;">
                        </div>
                        <div class="form-check">
                            <input type="checkbox" id="product3" name="product" value="Diwata Lugaw Plain" class="form-check-input">
                            <label for="product3" class="form-check-label">Diwata Lugaw Plain (P50)</label>
                            <input type="number" id="quantity3" name="quantity" min="1" value="1" class="form-control ms-2" style="width: 70px;">
                        </div>
                        <div class="form-check">
                            <input type="checkbox" id="product4" name="product" value="Diwata Lugaw Premium" class="form-check-input">
                            <label for="product4" class="form-check-label">Diwata Lugaw Premium (P100)</label>
                            <input type="number" id="quantity4" name="quantity" min="1" value="1" class="form-control ms-2" style="width: 70px;">
                        </div>
                        <div class="invalid-feedback" id="productError">Please select at least one product with a valid quantity.</div>
                    </div>
                    <button type="button" class="btn btn-secondary me-2" onclick="backStep()">Back</button>
                    <button type="button" class="btn btn-primary" onclick="validateStep3()">Next</button>
                </form>
            `;
        } else if (step === 4) {
            // Step 4: Choose payment method and enter payment details
            modalBody.innerHTML = `
                <h5>Order Form - Step 4 of 4</h5>
                <form id="orderFormStep4" class="needs-validation" novalidate>
                    <div class="mb-3">
                        <label for="paymentMethod" class="form-label">Payment Method</label><br>
                        <input type="radio" id="creditCard" name="paymentMethod" value="creditCard" onclick="showCreditCardFields()">
                        <label for="creditCard">Credit Card</label>
                        <input type="radio" id="paypal" name="paymentMethod" value="paypal" onclick="hideCreditCardFields()">
                        <label for="paypal">PayPal</label>
                        <input type="radio" id="cashOnDelivery" name="paymentMethod" value="cashOnDelivery" onclick="hideCreditCardFields()">
                        <label for="cashOnDelivery">Cash on Delivery</label>
                        <div class="invalid-feedback" id="paymentMethodError">Please select a payment method.</div>
                    </div>
                    <div id="creditCardFields" style="display: none;">
                        <div class="mb-3">
                            <label for="cardNumber" class="form-label">Card Number</label>
                            <input type="text" class="form-control" id="cardNumber" placeholder="Enter card number" required>
                            <div class="invalid-feedback">Please enter a valid card number.</div>
                        </div>
                        <div class="mb-3">
                            <label for="expiryDate" class="form-label">Expiry Date</label>
                            <input type="text" class="form-control" id="expiryDate" placeholder="MM/YYYY" required>
                            <div class="invalid-feedback">Please enter a valid expiry date (MM/YYYY format).</div>
                        </div>
                        <div class="mb-3">
                            <label for="cvv" class="form-label">CVV</label>
                            <input type="text" class="form-control" id="cvv" placeholder="Enter CVV" required>
                            <div class="invalid-feedback">Please enter a valid CVV.</div>
                        </div>
                    </div>
                    <button type="button" class="btn btn-secondary me-2" onclick="backStep()">Back</button>
                    <button type="button" class="btn btn-primary" onclick="validateStep4()">Place Order</button>
                </form>
            `;
        }

        currentStep = step;
    }

    function validateStep1() {
        const form = document.getElementById('orderFormStep1');
        if (form.checkValidity()) {
            // If form is valid, proceed to the next step
            nextStep(); // Call your nextStep function to move to the next step
        } else {
            // If form is invalid, display custom validation messages
            form.classList.add('was-validated');
        }
    }

    function validateStep2() {
        const form = document.getElementById('orderFormStep2');
        const deliveryRadio = document.getElementById('delivery');
        const pickupRadio = document.getElementById('pickup');
        const deliveryAddress = document.getElementById('address');
        const pickupLocation = document.getElementById('pickupLocation');
        
        // Check if either delivery or pickup is selected
        if (!deliveryRadio.checked && !pickupRadio.checked) {
            alert('Please select delivery or pickup.');
            return;
        }
    
        // If delivery is selected, validate the delivery address
        if (deliveryRadio.checked && !deliveryAddress.value.trim()) {
            alert('Please enter the delivery address.');
            deliveryAddress.focus();
            return;
        }
    
        // If pickup is selected, validate the pickup location
        if (pickupRadio.checked && !pickupLocation.value.trim()) {
            alert('Please enter the pickup location.');
            pickupLocation.focus();
            return;
        }
    
        // Proceed to the next step if all validations pass
        nextStep();
    }

    function validateStep3() {
        const form = document.getElementById('orderFormStep3');
        const checkboxes = document.querySelectorAll('input[name="product"]:checked');
        let valid = false;

        checkboxes.forEach(checkbox => {
            const quantityInput = document.getElementById('quantity' + checkbox.id.slice(-1));
            if (quantityInput.value > 0) {
                valid = true;
            }
        });

        if (!valid) {
            const productError = document.getElementById('productError');
            productError.style.display = 'block';
            return;
        }

        // Proceed to the next step if at least one product with valid quantity is selected
        nextStep();
    }

    function validateStep4() {
        const form = document.getElementById('orderFormStep4');
        const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked');
    
        // Reset validation state
        form.classList.remove('was-validated');
        document.getElementById('paymentMethodError').style.display = 'none';
        document.getElementById('cardNumber').classList.remove('is-invalid');
        document.getElementById('expiryDate').classList.remove('is-invalid');
        document.getElementById('cvv').classList.remove('is-invalid');
    
        if (!paymentMethod) {
            // If no payment method is selected
            document.getElementById('paymentMethodError').style.display = 'block';
            return;
        }
    
        if (paymentMethod.value === 'creditCard') {
            // If credit card payment is selected, validate credit card details
            const cardNumber = document.getElementById('cardNumber').value.trim();
            const expiryDate = document.getElementById('expiryDate').value.trim();
            const cvv = document.getElementById('cvv').value.trim();
    
            if (!cardNumber || cardNumber.length !== 16 || !/^\d+$/.test(cardNumber)) {
                document.getElementById('cardNumber').classList.add('is-invalid');
                return;
            }
    
            if (!expiryDate || !/^\d{2}\/\d{4}$/.test(expiryDate)) {
                document.getElementById('expiryDate').classList.add('is-invalid');
                return;
            }
    
            if (!cvv || !/^\d{3,4}$/.test(cvv)) {
                document.getElementById('cvv').classList.add('is-invalid');
                return;
            }
        }
    
        // Proceed to place order if all validations pass
        placeOrder();
    }
    
    
    function hideCreditCardFields() {
        document.getElementById('creditCardFields').style.display = 'none';
    }

    // Helper functions for card number, expiry date, and CVV validation
    function isValidCardNumber(cardNumber) {
        // Implement your credit card number validation logic
        // For example, check if it's a valid format and passes Luhn algorithm
        return cardNumber.length === 16 && /^\d+$/.test(cardNumber); // Example validation logic
    }

    function isValidExpiryDate(expiryDate) {
        // Implement your expiry date validation logic
        // For example, check if it's in MM/YYYY format and a valid future date
        return /^\d{2}\/\d{4}$/.test(expiryDate); // Example validation logic for MM/YYYY format
    }

    function isValidCVV(cvv) {
        // Implement your CVV validation logic
        // For example, check if it's a 3 or 4-digit number
        return /^\d{3,4}$/.test(cvv); // Example validation logic for 3 or 4-digit CVV
    }
    

    function openOrderModal() {
        currentStep = 1;
        renderModalContent(currentStep);
        const modal = new bootstrap.Modal(document.getElementById('orderModal'));
        modal.show();
    }

    function openOrderModal() {
        currentStep = 1;
        renderModalContent(currentStep);
        const modal = new bootstrap.Modal(document.getElementById('orderModal'));
        modal.show();
    }

    function nextStep() {
        renderModalContent(currentStep + 1);
    }

    function backStep() {
        renderModalContent(currentStep - 1);
    }

    function showCreditCardFields() {
        document.getElementById('creditCardFields').style.display = 'block';
    }

    function hideCreditCardFields() {
        document.getElementById('creditCardFields').style.display = 'none';
    }

    function toggleDeliveryPickup(type) {
        const deliveryAddress = document.getElementById('deliveryAddress');
        const pickupLocation = document.getElementById('pickupLocation');

        if (type === 'delivery') {
            deliveryAddress.style.display = 'block';
            pickupLocation.style.display = 'none';
        } else if (type === 'pickup') {
            deliveryAddress.style.display = 'none';
            pickupLocation.style.display = 'block';
        }
    }


    function placeOrder() {
        // Close the Order Form modal if open
        const orderModal = document.getElementById('orderModal');
        const bootstrapModal = bootstrap.Modal.getInstance(orderModal);
        if (bootstrapModal) {
            bootstrapModal.hide();
        }

        // Simulate loading spinner for 3 seconds
        const placeOrderButton = document.querySelector('.btn-primary');
        placeOrderButton.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> The Diwata is now placing your order...';
        placeOrderButton.disabled = true;

        setTimeout(function() {
            // After 3 seconds, show payment success modal
            const modal = new bootstrap.Modal(document.getElementById('paymentSuccessModal'));
            modal.show();

            // Reset the "Place Order" button
            placeOrderButton.innerHTML = 'Place Order';
            placeOrderButton.disabled = false;

            // Reset modal content to initial step
            renderModalContent(1);
        }, 3000);
    }
