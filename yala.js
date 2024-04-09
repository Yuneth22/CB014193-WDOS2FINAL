window.addEventListener('DOMContentLoaded', () => {
    fetch('yala.json')
        .then(response => response.json())
        .then(data => {
            document.getElementById('indigenousTitle').textContent = data.indigenous.title;
            document.getElementById('indigenousContent').textContent = data.indigenous.paragraph;
            document.getElementById('historyTitle').textContent = data.history.title;
            document.getElementById('historyContent').textContent = data.history.paragraph;
            document.getElementById('culturalTitle').textContent = data.cultural.title;
            document.getElementById('culturalContent').textContent = data.cultural.paragraph;
            document.getElementById('tourismTitle').textContent = data.tourism.title;
            document.getElementById('tourismContent1').textContent = data.tourism.paragraph1;
            document.getElementById('tourismContent2').textContent = data.tourism.paragraph2;
            document.getElementById('tourismContent3').textContent = data.tourism.paragraph3;
        })
        .catch(error => console.error('Error fetching data:', error));
});


//newsletter tuff


function subscribe() {
    const emailInput = document.getElementById('emailInput');
    const email = emailInput.value.trim();
  
    if (!email) {
        alert("Please enter a valid email address.");
        return;
    }
  
    let subscriptions = JSON.parse(localStorage.getItem('subscriptions')) || [];
    subscriptions.push(email);
    localStorage.setItem('subscriptions', JSON.stringify(subscriptions));
  
    emailInput.value = ''; // Clear input after subacaribe
  
    alert("Thank you for subscribing!");
  }
  
  // Check if user is admin to let him see that button
  const isAdmin = true; 
  if (isAdmin) {
    const adminButton = document.createElement('button');
    adminButton.textContent = "Admin Dashboard";
    adminButton.addEventListener('click', function() {
        window.location.href = "dashboard.html";
    });
  
    document.querySelector('footer').appendChild(adminButton);
  
  }
  
  
  
  // Check if user is authenticated
  const isAuthenticated = true; 
  if (isAuthenticated) {
      const isAdmin = true; 
      if (isAdmin) {
         
          document.getElementById('subscribeButton').style.display = 'block';
      } else {
         
          document.getElementById('subscribeButton').style.display = 'block';
          
          const dashboardButton = document.getElementById('dashboardButton');
          if (dashboardButton) {
              dashboardButton.remove();
          }
      }
  }