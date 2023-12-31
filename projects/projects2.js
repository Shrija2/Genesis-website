let acc = document.getElementsByClassName("accordianProjects");

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");

    var list = this.nextElementSibling;
    if (list.style.display === "block") {
      list.style.display = "none";
    } else {
      list.style.display = "block";
    }
  });
}

let acc2 = document.getElementsByClassName("accordianProjectsIndividual");

for (let i = 0; i < acc2.length; i++) {
  acc2[i].addEventListener("click", function () {
    this.classList.toggle("active");

    var details = this.nextElementSibling;
    if (details.style.display === "block") {
      details.style.display = "none";
    } else {
      details.style.display = "block";
    }
  });
}

/*
function handleMappingItemClick(item, listElement) {
  item.addEventListener("click", function () {
    listElement.innerHTML = "";

    // Handle the click event for the individual items in the mapping array
    let firstParameter = Object.keys(item)[0];
    let paragraph = document.createElement("p");
    paragraph.textContent = firstParameter;
    listElement.appendChild(paragraph);
  });
}


var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    let response = JSON.parse(xhttp.responseText);

    let mapping = response[0].LandResourceMapping;
    let mapping2 = response[1].ForestryNaturalResources;

    let listElement = document.querySelector(".list");
    let listElement2 = document.querySelector(".list2");

    for (let i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function () {
        listElement.innerHTML = "";
        listElement2.innerHTML = "";

        if (i === 0) {
          for (let j = 0; j < mapping.length; j++) {
            let item = mapping[j];
            handleMappingItemClick(item, listElement);
          }
        } else if (i === 1) {
          for (let j = 0; j < mapping2.length; j++) {
            let item = mapping2[j];
            handleMappingItemClick(item, listElement2);
          }
          
        }
      });
    }
  }
};


xhttp.open("GET", "projects.json", true);
xhttp.send();*/

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    let response = JSON.parse(xhttp.responseText);

    function displayParaValues(mapping) {
      for (let i = 0; i < mapping.length; i++) {
        let subArray = mapping[i][Object.keys(mapping[i])[0]]; // Get the inner array
        for (let j = 0; j < subArray.length; j++) {
          let paraValue = subArray[j].para;
          let clientValue = subArray[j].Client;
          let locationValue = subArray[j].Location;
          let timelineValue = subArray[j].Timeline;

          document.querySelector(".para1").innerHTML = paraValue;
          document.querySelector(".client1").innerHTML = clientValue;
          document.querySelector(".location1").innerHTML = locationValue;
          document.querySelector(".timeline1").innerHTML = timelineValue;
        }
      }
    }

    // "LandResourceMapping" array
    let landResourceMapping = response[0].LandResourceMapping;
    displayParaValues(landResourceMapping);

    // "ForestryNaturalResources" array
    let forestryNaturalResources = response[1].ForestryNaturalResources;
    displayParaValues(forestryNaturalResources);

    // "UrbanMap" array
    let urbanMap = response[2].UrbanMap;
    displayParaValues(urbanMap);

    // "HazardStudies" array
    let hazardStudies = response[3].HazardStudies;
    displayParaValues(hazardStudies);

    // "RSLUP" array
    let RSLUP = response[4].RSLUP;
    displayParaValues(RSLUP);

    // "Training" array
    let training = response[5].Training;
    displayParaValues(training);
  }
};
xhttp.open("GET", "projects.json", true);
xhttp.send();
