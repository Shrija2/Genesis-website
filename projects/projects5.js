let land = document.querySelector(".land");
let projectsList = document.getElementById("projectsList");

land.addEventListener("click", function () {
  if (projectsList.style.display === "block") {
    projectsList.style.display = "none";
  } else {
    projectsList.style.display = "block";
  }

  projectsList2.style.display = "none";
  projectsList7.style.display = "none";
  projectsList3.style.display = "none";
  projectsList4.style.display = "none";
  projectsList5.style.display = "none";
  projectsList6.style.display = "none";
});

let forest = document.querySelector(".forest");
let projectsList2 = document.getElementById("projectsList2");
forest.addEventListener("click", function () {
  if (projectsList2.style.display === "block") {
    projectsList2.style.display = "none";
  } else {
    projectsList2.style.display = "block";
  }
  projectsList.style.display = "none";
  projectsList7.style.display = "none";
  projectsList3.style.display = "none";
  projectsList4.style.display = "none";
  projectsList5.style.display = "none";
  projectsList6.style.display = "none";
});

let urban = document.querySelector(".urban");
let projectsList3 = document.getElementById("projectsList3");
urban.addEventListener("click", function () {
  if (projectsList3.style.display === "block") {
    projectsList3.style.display = "none";
  } else {
    projectsList3.style.display = "block";
  }
  projectsList.style.display = "none";
  projectsList2.style.display = "none";
  projectsList4.style.display = "none";
  projectsList5.style.display = "none";
  projectsList6.style.display = "none";
  projectsList7.style.display = "none";
});

let hazard = document.querySelector(".hazard");
let projectsList4 = document.getElementById("projectsList4");
hazard.addEventListener("click", function () {
  if (projectsList4.style.display === "block") {
    projectsList4.style.display = "none";
  } else {
    projectsList4.style.display = "block";
  }
  projectsList.style.display = "none";
  projectsList2.style.display = "none";
  projectsList7.style.display = "none";
  projectsList3.style.display = "none";
  projectsList5.style.display = "none";
  projectsList6.style.display = "none";
});

let risk = document.querySelector(".risk");
let projectsList5 = document.getElementById("projectsList5");
risk.addEventListener("click", function () {
  if (projectsList5.style.display === "block") {
    projectsList5.style.display = "none";
  } else {
    projectsList5.style.display = "block";
  }
  projectsList.style.display = "none";
  projectsList2.style.display = "none";
  projectsList3.style.display = "none";
  projectsList4.style.display = "none";
  projectsList7.style.display = "none";
  projectsList6.style.display = "none";
});

let training = document.querySelector(".training");
let projectsList6 = document.getElementById("projectsList6");
training.addEventListener("click", function () {
  if (projectsList6.style.display === "block") {
    projectsList6.style.display = "none";
  } else {
    projectsList6.style.display = "block";
  }
  projectsList.style.display = "none";
  projectsList2.style.display = "none";
  projectsList3.style.display = "none";
  projectsList4.style.display = "none";
  projectsList5.style.display = "none";
  projectsList7.style.display = "none";
});

let uav = document.querySelector(".uav");
let projectsList7 = document.getElementById("projectsList7");
uav.addEventListener("click", function () {
  if (projectsList7.style.display === "block") {
    projectsList7.style.display = "none";
  } else {
    projectsList7.style.display = "block";
  }
  projectsList.style.display = "none";
  projectsList2.style.display = "none";
  projectsList3.style.display = "none";
  projectsList4.style.display = "none";
  projectsList5.style.display = "none";
  projectsList6.style.display = "none";
});

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    let response = JSON.parse(xhttp.responseText);

    let mapping = response[0].LandResourceMapping;
    let mapping2 = response[1].ForestryNaturalResources;
    let mapping3 = response[2].UrbanMap;
    let mapping4 = response[3].HazardStudies;
    let mapping5 = response[4].RSLUP;
    let mapping6 = response[5].Training;
    let mapping7 = response[6].UAV;

    var parentContainer = document.getElementById("projectsList");

    // Loop through the JSON data using a for loop
    for (var i = 0; i < mapping.length; i++) {
      var newDiv = document.createElement("div"); // Create a new div element

      // Set attributes or content based on the item data
      newDiv.id = "item" + mapping[i].id; // You can set a unique ID for each div
      newDiv.className = "itemClass"; // Set a common class or customize based on your needs

      //Create a div to put img elemnt inside it
      var projectImgDiv = document.createElement("div");
      projectImgDiv.className = "projectImg-div";

      let img = document.createElement("img"); //Create img element

      img.className = "projectImg"; //give img class name

      img.src = mapping[i].img; //Set the src atrribute of th img

      projectImgDiv.appendChild(img); //append the img to the new div
      newDiv.appendChild(projectImgDiv);

      // Create another div inside newDiv
      var innerDiv = document.createElement("div");
      var title = document.createElement("h3");
      var para = document.createElement("p");
      var client = document.createElement("p");
      var location = document.createElement("p");
      innerDiv.className = "innerDivClass";
      title.innerHTML = `<h3>${mapping[i].title}</h3>`;
      para.innerHTML = `<p>${mapping[i].para}</p>`;
      client.innerHTML = `<p><span>Client: </span>${mapping[i].Client}</p>`;
      location.innerHTML = `<p><span>Location: </span>${mapping[i].Location}</p>`;

      // Append the innerDiv to newDiv
      newDiv.appendChild(innerDiv);
      innerDiv.appendChild(title);
      innerDiv.appendChild(para);
      innerDiv.appendChild(client);
      innerDiv.appendChild(location);

      // Append the new div to the parent container
      parentContainer.appendChild(newDiv);
    }

    //FOREST
    var forest = document.getElementById("projectsList2");
    // Loop through the JSON data using a for loop FOREST
    for (var i = 0; i < mapping2.length; i++) {
      var newDiv = document.createElement("div"); // Create a new div element

      newDiv.id = "item" + mapping2[i].id;
      newDiv.className = "itemClass";

      var projectImgDiv = document.createElement("div");
      projectImgDiv.className = "projectImg-div";

      let img = document.createElement("img"); //Create img element

      img.className = "projectImg"; //give img class name

      img.src = mapping2[i].img; //Set the src atrribute of th img

      projectImgDiv.appendChild(img); //append the img to the new div
      newDiv.appendChild(projectImgDiv);

      // Create another div inside newDiv
      var innerDiv = document.createElement("div");
      var title = document.createElement("h3");
      var para = document.createElement("p");
      var client = document.createElement("p");
      var location = document.createElement("p");
      innerDiv.className = "innerDivClass";
      title.innerHTML = `<h3>${mapping2[i].title}</h3>`;
      para.innerHTML = `<p>${mapping2[i].para}</p>`;
      client.innerHTML = `<p><span>Client: </span>${mapping2[i].Client}</p>`;
      location.innerHTML = `<p><span>Location: </span>${mapping2[i].Location}</p>`;

      newDiv.appendChild(innerDiv);
      innerDiv.appendChild(title);
      innerDiv.appendChild(para);
      innerDiv.appendChild(client);
      innerDiv.appendChild(location);

      forest.appendChild(newDiv);
    }

    //URBAN
    var urban = document.getElementById("projectsList3");
    // Loop through the JSON data using a for loop FOREST
    for (var i = 0; i < mapping3.length; i++) {
      var newDiv = document.createElement("div"); // Create a new div element

      newDiv.id = "item" + mapping3[i].id;
      newDiv.className = "itemClass";

      var projectImgDiv = document.createElement("div");
      projectImgDiv.className = "projectImg-div";

      let img = document.createElement("img"); //Create img element

      img.className = "projectImg"; //give img class name

      img.src = mapping3[i].img; //Set the src atrribute of th img

      projectImgDiv.appendChild(img); //append the img to the new div
      newDiv.appendChild(projectImgDiv);

      // Create another div inside newDiv
      var innerDiv = document.createElement("div");
      var title = document.createElement("h3");
      var para = document.createElement("p");
      var client = document.createElement("p");
      var location = document.createElement("p");
      innerDiv.className = "innerDivClass";
      title.innerHTML = `<h3>${mapping3[i].title}</h3>`;
      para.innerHTML = `<p>${mapping3[i].para}</p>`;
      client.innerHTML = `<p><span>Client: </span>${mapping3[i].Client}</p>`;
      location.innerHTML = `<p><span>Location: </span>${mapping3[i].Location}</p>`;

      newDiv.appendChild(innerDiv);
      innerDiv.appendChild(title);
      innerDiv.appendChild(para);
      innerDiv.appendChild(client);
      innerDiv.appendChild(location);

      urban.appendChild(newDiv);
    }

    //HAZARD
    var hazard = document.getElementById("projectsList4");
    // Loop through the JSON data using a for loop FOREST
    for (var i = 0; i < mapping4.length; i++) {
      var newDiv = document.createElement("div"); // Create a new div element

      newDiv.id = "item" + mapping4[i].id;
      newDiv.className = "itemClass";

      var projectImgDiv = document.createElement("div");
      projectImgDiv.className = "projectImg-div";

      let img = document.createElement("img"); //Create img element

      img.className = "projectImg"; //give img class name

      img.src = mapping4[i].img; //Set the src atrribute of th img

      projectImgDiv.appendChild(img); //append the img to the new div
      newDiv.appendChild(projectImgDiv);

      // Create another div inside newDiv
      var innerDiv = document.createElement("div");
      var title = document.createElement("h3");
      var para = document.createElement("p");
      var client = document.createElement("p");
      var location = document.createElement("p");
      innerDiv.className = "innerDivClass";
      title.innerHTML = `<h3>${mapping4[i].title}</h3>`;
      para.innerHTML = `<p>${mapping4[i].para}</p>`;
      client.innerHTML = `<p><span>Client: </span>${mapping4[i].Client}</p>`;
      location.innerHTML = `<p><span>Location: </span>${mapping4[i].Location}</p>`;

      newDiv.appendChild(innerDiv);
      innerDiv.appendChild(title);
      innerDiv.appendChild(para);
      innerDiv.appendChild(client);
      innerDiv.appendChild(location);

      hazard.appendChild(newDiv);
    }

    //RSLUP
    var RSLUP = document.getElementById("projectsList5");
    // Loop through the JSON data using a for loop FOREST
    for (var i = 0; i < mapping5.length; i++) {
      var newDiv = document.createElement("div"); // Create a new div element

      newDiv.id = "item" + mapping5[i].id;
      newDiv.className = "itemClass";

      var projectImgDiv = document.createElement("div");
      projectImgDiv.className = "projectImg-div";

      let img = document.createElement("img"); //Create img element

      img.className = "projectImg"; //give img class name

      img.src = mapping5[i].img; //Set the src atrribute of th img

      projectImgDiv.appendChild(img); //append the img to the new div
      newDiv.appendChild(projectImgDiv);

      // Create another div inside newDiv
      var innerDiv = document.createElement("div");
      var title = document.createElement("h3");
      var para = document.createElement("p");
      var client = document.createElement("p");
      var location = document.createElement("p");
      innerDiv.className = "innerDivClass";
      title.innerHTML = `<h3>${mapping5[i].title}</h3>`;
      para.innerHTML = `<p>${mapping5[i].para}</p>`;
      client.innerHTML = `<p><span>Client: </span>${mapping5[i].Client}</p>`;
      location.innerHTML = `<p><span>Location: </span>${mapping5[i].Location}</p>`;

      newDiv.appendChild(innerDiv);
      innerDiv.appendChild(title);
      innerDiv.appendChild(para);
      innerDiv.appendChild(client);
      innerDiv.appendChild(location);

      RSLUP.appendChild(newDiv);
    }

    //TRAINING
    var training = document.getElementById("projectsList6");
    // Loop through the JSON data using a for loop FOREST
    for (var i = 0; i < mapping6.length; i++) {
      var newDiv = document.createElement("div"); // Create a new div element

      newDiv.id = "item" + mapping6[i].id;
      newDiv.className = "itemClass";

      var projectImgDiv = document.createElement("div");
      projectImgDiv.className = "projectImg-div";

      let img = document.createElement("img"); //Create img element

      img.className = "projectImg"; //give img class name

      img.src = mapping6[i].img; //Set the src atrribute of th img

      projectImgDiv.appendChild(img); //append the img to the new div
      newDiv.appendChild(projectImgDiv);

      // Create another div inside newDiv
      var innerDiv = document.createElement("div");
      var title = document.createElement("h3");
      var para = document.createElement("p");
      var client = document.createElement("p");
      var location = document.createElement("p");
      innerDiv.className = "innerDivClass";
      title.innerHTML = `<h3>${mapping6[i].title}</h3>`;
      para.innerHTML = `<p>${mapping6[i].para}</p>`;
      client.innerHTML = `<p><span>Client: </span>${mapping6[i].Client}</p>`;
      location.innerHTML = `<p><span>Location: </span>${mapping6[i].Location}</p>`;

      newDiv.appendChild(innerDiv);
      innerDiv.appendChild(title);
      innerDiv.appendChild(para);
      innerDiv.appendChild(client);
      innerDiv.appendChild(location);

      training.appendChild(newDiv);
    }

    //UAV
    var uav = document.getElementById("projectsList7");
    // Loop through the JSON data using a for loop FOREST
    for (var i = 0; i < mapping7.length; i++) {
      var newDiv = document.createElement("div"); // Create a new div element

      newDiv.id = "item" + mapping7[i].id;
      newDiv.className = "itemClass";

      var projectImgDiv = document.createElement("div");
      projectImgDiv.className = "projectImg-div";

      let img = document.createElement("img"); //Create img element

      img.className = "projectImg"; //give img class name

      img.src = mapping7[i].img; //Set the src atrribute of th img

      projectImgDiv.appendChild(img); //append the img to the new div
      newDiv.appendChild(projectImgDiv);

      // Create another div inside newDiv
      var innerDiv = document.createElement("div");
      var title = document.createElement("h3");
      var para = document.createElement("p");
      var client = document.createElement("p");
      var location = document.createElement("p");
      innerDiv.className = "innerDivClass";
      title.innerHTML = `<h3>${mapping7[i].title}</h3>`;
      para.innerHTML = `<p>${mapping7[i].para}</p>`;
      client.innerHTML = `<p><span>Client: </span>${mapping7[i].Client}</p>`;
      location.innerHTML = `<p><span>Location: </span>${mapping7[i].Location}</p>`;

      newDiv.appendChild(innerDiv);
      innerDiv.appendChild(title);
      innerDiv.appendChild(para);
      innerDiv.appendChild(client);
      innerDiv.appendChild(location);

      uav.appendChild(newDiv);
    }
  }
};
xhttp.open("GET", "projects5.json", true);
xhttp.send();
