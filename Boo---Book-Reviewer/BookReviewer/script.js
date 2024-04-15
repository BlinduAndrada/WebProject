const loginButton = document.getElementById('.loginButton');
const signupButton=document.getElementById('.signupButton');

  // Add click event listener
  loginButton.addEventListener('click', function() {
    // Navigate to the login page when the button is clicked
    window.location.href = '../LogIn/login.html';
  });

  signupButton.addEventListener('click',function (){
    window.location.href='';

  });