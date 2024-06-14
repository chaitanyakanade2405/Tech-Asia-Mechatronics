document.addEventListener('DOMContentLoaded', function() {
  const loginForm = document.getElementById('login-form');
  const signupForm = document.getElementById('signup-form');
  const recoverForm = document.getElementById('recover-form');
  const loginLink = document.getElementById('login-link');
  const signupLink = document.getElementById('signup-link');
  const recoverLink = document.getElementById('recover-link');
  const backToLoginLink = document.getElementById('back-to-login-link');
  const togglePasswordIcons = document.querySelectorAll('.toggle-password');

  loginLink.addEventListener('click', function(event) {
      event.preventDefault();
      loginForm.classList.remove('inactive');
      signupForm.classList.add('inactive');
      recoverForm.classList.add('inactive');

      setTimeout(() => {
        loginForm.classList.add('active');
        signupForm.classList.remove('active');
        recoverForm.classList.remove('active');
      }, 500); // Duration of the slideOut animation
  });

  signupLink.addEventListener('click', function(event) {
      event.preventDefault();
      signupForm.classList.remove('inactive');
      loginForm.classList.add('inactive');
      recoverForm.classList.add('inactive');

      setTimeout(() => {
        signupForm.classList.add('active');
        loginForm.classList.remove('active');
        recoverForm.classList.remove('active');
      }, 500); // Duration of the slideOut animation
  });

  recoverLink.addEventListener('click', function(event) {
      event.preventDefault();
      recoverForm.classList.remove('inactive');
      loginForm.classList.add('inactive');
      signupForm.classList.add('inactive');

      setTimeout(() => {
        recoverForm.classList.add('active');
        loginForm.classList.remove('active');
        signupForm.classList.remove('active');
      }, 500); // Duration of the slideOut animation
  });

  backToLoginLink.addEventListener('click', function(event) {
      event.preventDefault();
      loginForm.classList.remove('inactive');
      signupForm.classList.add('inactive');
      recoverForm.classList.add('inactive');

      setTimeout(() => {
        loginForm.classList.add('active');
        signupForm.classList.remove('active');
        recoverForm.classList.remove('active');
      }, 500); // Duration of the slideOut animation
  });

  togglePasswordIcons.forEach(icon => {
      icon.addEventListener('click', function() {
          const input = this.previousElementSibling;
          const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
          input.setAttribute('type', type);
          this.textContent = type === 'password' ? '👁️' : '🙈'; // Change icon if needed
      });
  });
});
