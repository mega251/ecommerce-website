// Retrieve the HTML element with the id 'container' and store it in the constant 'container'
const container = document.getElementById('container');

// Retrieve the HTML element with the id 'register' and store it in the constant 'registerBtn'
const registerBtn = document.getElementById('register');

// Retrieve the HTML element with the id 'login' and store it in the constant 'loginBtn'
const loginBtn = document.getElementById('login');

// Add a click event listener to the 'registerBtn' element
registerBtn.addEventListener('click', () => {
    // When 'registerBtn' is clicked, add the CSS class 'active' to the 'container' element
    container.classList.add("active");
});

// Add a click event listener to the 'loginBtn' element
loginBtn.addEventListener('click', () => {
    // When 'loginBtn' is clicked, remove the CSS class 'active' from the 'container' element
    container.classList.remove("active");
});


