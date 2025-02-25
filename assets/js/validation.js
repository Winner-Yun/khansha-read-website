// Validation for the form
(function () {
    'use strict';
    var forms = document.querySelectorAll('.needs-validation');
  
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          // Password validation logic: Check if new password and confirm password match
          var newPassword = document.getElementById('newPassword');
          var confirmPassword = document.getElementById('confirmPassword');
          var confirmPasswordError = document.getElementById('confirmPasswordError');
  
          if (newPassword.value !== confirmPassword.value) {
            confirmPassword.classList.add('is-invalid');
            confirmPasswordError.textContent = 'ពាក្យសម្ងាត់មិនត្រូវគ្នា។'; // Khmer translation for "Passwords do not match"
            event.preventDefault(); // Prevent form submission if passwords do not match
          } else {
            confirmPassword.classList.remove('is-invalid');
            confirmPasswordError.textContent = '';
          }
  
          // Now proceed with form validation
          if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
          }
  
          // Add Bootstrap validation class to show validation state
          form.classList.add('was-validated');
        }, false);
      });
  })();

  
  (function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
})()