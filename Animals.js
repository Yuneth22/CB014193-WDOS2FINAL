document.addEventListener("DOMContentLoaded", function() {

    let jsonData = localStorage.getItem('animalsData');
    if (!jsonData) {
        
        fetch('Animals.json')
            .then(response => response.json())
            .then(data => {
                localStorage.setItem('animalsData', JSON.stringify(data));
                populateContent(data);
            })
            .catch(error => {
                console.error('Error fetching JSON data:', error);
            });
    } else {
        
        populateContent(JSON.parse(jsonData));
    }

    function populateContent(data) {
        
        document.getElementById("title").textContent = data.title;

        populateContentBox("content-box1", data.contentBox1);
        populateContentBox("content-box2", data.contentBox2);
        populateContentBox("content-box3", data.contentBox3);
        populateContentBox("content-box4", data.contentBox4);
    }


function populateContentBox(elementId, contentData) {
    const element = document.getElementById(elementId);
    contentData.content.forEach(item => {
        const section = document.createElement("section");
        const title = document.createElement("h2");
        const description = document.createElement("p");
        const link = document.createElement("a");
        title.textContent = item.title;
        description.textContent = item.description;
        link.href = item.link; 
        link.textContent = item.linkText; 
        section.appendChild(title);
        section.appendChild(description);
        section.appendChild(link); 
        element.appendChild(section);
    });
}

});



//newsletter stuuff


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

