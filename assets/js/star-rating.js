document.querySelectorAll('.star-rating input').forEach((input) => {
    input.addEventListener('change', function() {
      const allLabels = document.querySelectorAll('.star-rating label');
      allLabels.forEach((label) => {
        label.style.color = '#ccc';
      });
  
      const value = parseInt(input.value);
      for (let i = 1; i <= value; i++) {
        document.querySelector(`label[for="star${i}"]`).style.color = '#f39c12';
      }
    });
  });
  