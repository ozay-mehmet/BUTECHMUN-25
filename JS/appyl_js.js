document.addEventListener('DOMContentLoaded', () => {
    const applyButtons = document.querySelectorAll('.apply-btn');
    
    applyButtons.forEach(button => {
      button.addEventListener('click', () => {
        window.open('https://docs.google.com/forms/d/e/1FAIpQLScJkIwrbKvzO1J2C50BlLdEJYhURAY0rHJ76Cp5DQ5xOOIGiQ/viewform?usp=dialog', '_blank');
      });
    });
  });