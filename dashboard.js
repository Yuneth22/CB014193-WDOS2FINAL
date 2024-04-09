document.addEventListener('DOMContentLoaded', function() {
    const subscriptionsList = document.getElementById('subscriptionsList');
    const subscriptions = JSON.parse(localStorage.getItem('subscriptions')) || [];

    subscriptions.forEach(email => {
        const li = document.createElement('li');
        li.textContent = email;
        subscriptionsList.appendChild(li);
    });
});
