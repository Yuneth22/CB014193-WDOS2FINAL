document.addEventListener("DOMContentLoaded", function() {
    
    var wilpattuData = JSON.parse(window.localStorage.getItem("wilpattuData"));
  
  
    if (!wilpattuData) {
      
      fetch("wilpattu.json")
        .then(response => response.json())
        .then(data => {
       
          window.localStorage.setItem("wilpattuData", JSON.stringify(data));
        
          renderPage(data);
        })
        .catch(error => console.error("Error fetching JSON data:", error));
    } else {
    
      renderPage(wilpattuData);
    }
    
    function renderPage(data) {
    
      document.title = data.header.title;
  
     
      document.querySelector("header h1").textContent = data.header.title;
  
     
      data.sections.forEach(section => {
        var sectionElement = document.getElementById(section.id);
        if (sectionElement) {
          sectionElement.querySelector("h2").textContent = section.title;
          sectionElement.querySelector("p").textContent = section.content;
          if (section.fact) {
            var factElement = document.createElement("p");
            factElement.textContent = section.fact;
            sectionElement.querySelector(".chatbox1").appendChild(factElement);
          }
        }
      });
  
      
      document.querySelector("footer p").innerHTML = data.footer.copyright;
    }
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