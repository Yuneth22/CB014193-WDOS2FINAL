document.addEventListener('DOMContentLoaded', function () {
    const headerTitle = document.getElementById('headerTitle');
    const habitatsTitle = document.getElementById('habitatsTitle');
    const leopardHabitats = document.getElementById('leopardHabitats');
    const threatsTitle = document.getElementById('threatsTitle');
    const leopardThreats = document.getElementById('leopardThreats');
  
    fetch('srilankanleopard.json')
      .then(response => response.json())
      .then(data => {
        headerTitle.textContent = data.headerTitle;
        habitatsTitle.textContent = data.habitatsTitle;
        threatsTitle.textContent = data.threatsTitle;
  
        data.habitats.forEach((habitat, index) => {
          const habitatDiv = document.getElementById(`habitat${index + 1}`);
          habitatDiv.querySelector('h3').textContent = habitat.title;
          habitatDiv.querySelector('p').textContent = habitat.description;
          habitatDiv.querySelector('iframe').src = habitat.mapSrc;
        });
  
        data.threats.forEach((threat, index) => {
          const threatDiv = document.getElementById(`threat${index + 1}`);
          threatDiv.querySelector('img').src = threat.imageSrc;
          threatDiv.querySelector('h3').textContent = threat.title;
          threatDiv.querySelector('p').textContent = threat.description;
          threatDiv.querySelector('a').href = threat.link;
        });
  
        // Storing in localStorage pls work for once
        window.localStorage.setItem('srilankanleopard_data', JSON.stringify(data));
      })
      .catch(error => console.error('Error fetching data:', error));
  });




  //newsletter stuff


  
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
  