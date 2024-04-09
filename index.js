const loadData = () => {
  const data = JSON.parse(localStorage.getItem("pageData"));
  if (data) {
    document.title = data.title;
    document.querySelector("header h1").textContent = data.header.title;
    populateMain(data.main);
  } else {
    fetch("index.json")
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem("pageData", JSON.stringify(data));
        document.title = data.title;
        document.querySelector("header h1").textContent = data.header.title;
        populateMain(data.main);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }
};

const populateMain = (mainData) => {
  mainData.sections.forEach((section) => {
    if (section.id === "main-image") {
      const mainImage = document.createElement("img");
      mainImage.src = section.img.src;
      mainImage.alt = section.img.alt;
      document.querySelector("#main-image").appendChild(mainImage);
    } else if (section.id === "introduction") {
      const introduction = document.createElement("p");
      introduction.textContent = section.content;
      document.querySelector("#introduction").appendChild(introduction);
    } else if (section.id.startsWith("biodiversity")) {
      const biodiversity = document.createElement("div");
      biodiversity.classList.add("biodiversity");
      const title = document.createElement("h2");
      title.textContent = section.title;
      biodiversity.appendChild(title);
      section.sections.forEach((subsection) => {
        const subsectionDiv = document.createElement("div");
        subsectionDiv.classList.add("subsection");
        const subsectionTitle = document.createElement("h3");
        subsectionTitle.textContent = subsection.title;
subsectionDiv.appendChild(subsectionTitle);
        if (subsection.img) {
          const subsectionImg = document.createElement("img");
          subsectionImg.src = subsection.img.src;
          subsectionImg.alt = subsection.img.alt;
          subsectionDiv.appendChild(subsectionImg);
        }
        subsection.content.forEach((paragraph) => {
          const p = document.createElement("p");
          p.textContent = paragraph.text;
          subsectionDiv.appendChild(p);
        });
        biodiversity.appendChild(subsectionDiv);
      });
      document.querySelector("#biodiversity").appendChild(biodiversity);
    } else if (section.id === "experience-beauty") {
      const experience = document.createElement("div");
      experience.classList.add("experience");
      const title = document.createElement("h2");
      title.textContent = section.title;
      experience.appendChild(title);
      const cta = document.createElement("a");
      cta.textContent = section.cta.text;
      cta.href = section.cta.href;
      experience.appendChild(cta);
      document.querySelector("#experience-beauty").appendChild(experience);
    }
  });
};

loadData();


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





