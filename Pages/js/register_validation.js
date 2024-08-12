document.getElementById('regisform').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    // Get the form values
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const age = document.getElementById('age').value;
    const gender = document.querySelector('input[name="gender"]:checked')

    if(username === '' && email === '' && password === '' && age === '' && !gender){
        alert('Please fill in all fields.')
    }else if (username == '') {
        alert('Please enter the username.');
        event.preventDefault();

    } else if (email == '' ) {
        alert('Please enter the email.');
        event.preventDefault();

    } else if(!email.endsWith('@gmail.com')){
        alert('Email must be end with "@gmail.com".')
        event.preventDefault();

    } else if (password == '') {
        alert('Please enter the password.');
        event.preventDefault();

    } else if (password.length < 8) {
        alert('Password must be 8 character or more.');
        event.preventDefault();

    } else if (age == '') {
        alert('Please enter the age.');
        event.preventDefault();

    } else if (age < 13) {
        alert('Age must be more than 12.');
        event.preventDefault();
        
    }else if(!gender){
        alert('Please select the gender.');
    }
    else{

        window.location.href = '/Pages/html/Home_Page.html';
    }
    
     

 
});

