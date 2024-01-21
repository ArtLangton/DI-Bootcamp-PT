(function(userName) {
    const navbar = document.querySelector('.navbar');
    const welcomeDiv = document.createElement('div');
    welcomeDiv.innerHTML = `Welcome, ${userName}! <img src="profpic.webp" alt="Profile Picture">`;
    navbar.appendChild(welcomeDiv);
  })("John");
