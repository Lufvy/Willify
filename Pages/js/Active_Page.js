document.addEventListener("DOMContentLoaded", function() {
    var currentPage = location.pathname.split('/').pop(); // Get the current page filename
    var navLinks = document.querySelectorAll('.nav-link'); // Get all navigation links

    navLinks.forEach(function(link) {
        var linkPage = link.getAttribute('href').split('/').pop(); // Get the link's page filename
        if (linkPage === currentPage) {
            link.classList.add('active'); // Add 'active' class to the current page's link
        }
    });


        // const urlParams = new URLSearchParams(window.location.search);
        // const username = urlParams.get('username');
        // const signUpButton = document.querySelector('.signup_button a');
        
    
        // if (username) {
        //     signUpButton.textContent = 'Logout';
        //     signUpButton.href = '/Pages/html/Home_Page.html'; // Add the logout functionality here
        //     document.querySelector('.logo-container').insertAdjacentHTML('afterend', `<p class="welcome-message">Welcome, ${username}!</p>`);

        //     const navLinks = document.querySelectorAll('.nav-link');
        //     navLinks.forEach(link => {
        //         const href = link.getAttribute('href');
        //         link.setAttribute('href', `${href}?username=${encodeURIComponent(username)}`);
        //     });
        // } else {
        //     signUpButton.style.display = 'block';
        // }


    
});