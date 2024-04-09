function loadData() {
  const data = JSON.parse(localStorage.getItem('wildlifeData'));

  if (!data) {
    fetch('Wildlife-conservation.json')
      .then(response => response.json())
      .then(data => {
        localStorage.setItem('wildlifeData', JSON.stringify(data));
        return { data }
      });
  }
  
  return { data }
}


document.addEventListener('DOMContentLoaded', () => {

  let wildlifeData = localStorage.getItem('wildlifeData');
  
  if (wildlifeData) {
  
    wildlifeData = JSON.parse(wildlifeData); 
  } else {

    fetch('Wildlife-conservation.json')
      .then(response => response.json())
      .then(data => {
     
        localStorage.setItem('wildlifeData', JSON.stringify(data));
        wildlifeData = data;
      });
  }


  populatePage(wildlifeData);

});

function populatePage(data) {

}


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
