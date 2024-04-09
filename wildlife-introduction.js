function loadJSONData() {
    
    const storedData = localStorage.getItem('wildlife_data');
    if (storedData) {
       
        updateDOM(JSON.parse(storedData));
    } else {
        
        fetch('wildlife-introduction.json')
            .then(response => response.json())
            .then(data => {
               
                localStorage.setItem('wildlife_data', JSON.stringify(data));
             
                updateDOM(data);
            })
            .catch(error => console.error('Error fetching JSON data:', error));
    }
}


function updateDOM(data) {
    const contentSection = document.getElementById('content');

   
    contentSection.innerHTML = '';

    const mainSection = data.sections.find(section => section.title === "Exploring Sri Lanka's Diverse Wildlife");
    if (mainSection) {
        const mainSectionElement = createSectionElement(mainSection);
        contentSection.appendChild(mainSectionElement);
    }

    const sinharajaSection = data.sections.find(section => section.title === "Sinharaja Rainforest Reserve");
    if (sinharajaSection) {
        const sinharajaSectionElement = createSectionElement(sinharajaSection);
        contentSection.appendChild(sinharajaSectionElement);
    }

    
    const animalsTable1 = createAnimalsTable(data.animals.slice(0, 3));
    contentSection.appendChild(animalsTable1);

  
    const udawalaweSection = data.sections.find(section => section.title === "Udawalawe National Park");
    if (udawalaweSection) {
        const udawalaweSectionElement = createSectionElement(udawalaweSection);
        contentSection.appendChild(udawalaweSectionElement);
    }

   
    const animalsTable2 = createAnimalsTable(data.animals.slice(3, 6));
    contentSection.appendChild(animalsTable2);

    const hortonPlainsSection = data.sections.find(section => section.title === "Horton Plains National Park");
    if (hortonPlainsSection) {
        const hortonPlainsSectionElement = createSectionElement(hortonPlainsSection);
        contentSection.appendChild(hortonPlainsSectionElement);
    }

    
    const animalsTable3 = createAnimalsTable(data.animals.slice(6));
    contentSection.appendChild(animalsTable3);
}


function createSectionElement(section) {
    const sectionElement = document.createElement('div');
    sectionElement.classList.add('wildlife-location');

    const titleElement = document.createElement('h2');
    titleElement.textContent = section.title;

    const infoElement = document.createElement('div');
    infoElement.classList.add('location-info');
    infoElement.innerHTML = `<p>${section.content}</p>`;

    sectionElement.appendChild(titleElement);
    sectionElement.appendChild(infoElement);

    if (section.image) {
        const imageElement = document.createElement('img');
        imageElement.src = section.image;
        imageElement.alt = section.title;
        infoElement.appendChild(imageElement);
    }

    return sectionElement;
}


function createAnimalsTable(animals) {
    const tableElement = document.createElement('table');
    const tbodyElement = document.createElement('tbody');

    animals.forEach(animal => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${animal.name}</td>
            <td>${animal.description}</td>
            <td>${animal.image ? `<img src="${animal.image}" alt="${animal.name}" width="400" height="300">` : ''}</td>
        `;
        tbodyElement.appendChild(row);
    });

    tableElement.appendChild(tbodyElement);
    return tableElement;
}


window.onload = loadJSONData;


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

