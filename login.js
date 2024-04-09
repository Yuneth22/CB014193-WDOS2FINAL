
function login(event) {
    event.preventDefault(); 

    const username = document.getElementById('Username').value;
    const password = document.getElementById('Password').value;


    if (username.trim() === '' || password.trim() === '') {
        document.getElementById('error').innerText = 'Username and password are required.';
        return;
    }


    window.location.href = "index.html";
}
