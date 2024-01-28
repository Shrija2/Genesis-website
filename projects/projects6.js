function projectTitle(projectTitleNumber) {
  let button = document.querySelector(`.projectTitle${projectTitleNumber}`);
  let projectsList = document.getElementById(
    `projectsList${projectTitleNumber}`
  );

  document.querySelectorAll(".active").forEach(function (btn) {
    btn.classList.remove("active");
    if (projectsList.style.display === "block") {
      projectsList.style.display = "none";
    }
  });
  if (!button.classList.contains("active")) {
    button.classList.add("active");
  }

  document.querySelectorAll("[id^='projectsList']").forEach(function (list) {
    list.style.display = "none";
  });

  // Toggle the display of the clicked project list
  if (projectsList.style.display === "block") {
    projectsList.style.display = "none";
  } else {
    projectsList.style.display = "block";
  }
}

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    let response = JSON.parse(xhttp.responseText);

    let mapping1 = response[0].LandResourceMapping;
    let mapping2 = response[1].ForestryNaturalResources;
    let mapping3 = response[2].UrbanMap;
    let mapping4 = response[3].HazardStudies;
    let mapping5 = response[4].RSLUP;
    let mapping6 = response[5].Training;
    let mapping7 = response[6].UAV;
    let mapping8 = response[7].metric;
    let mapping9 = response[8].photogrammetry;
    let mapping10 = response[9].bamboo;
    let mapping11 = response[10].dataCollection;

    function createProjectElement(mappingItem, parentId) {
      var newDiv = document.createElement("div");

      newDiv.className = "itemClass";

      var projectImgDiv = document.createElement("div");
      projectImgDiv.className = "projectImg-div";

      let img = document.createElement("img");
      img.className = "projectImg";
      img.src = mappingItem.img;

      projectImgDiv.appendChild(img);
      newDiv.appendChild(projectImgDiv);

      var innerDiv = document.createElement("div");
      var title = document.createElement("h3");
      var para = document.createElement("p");
      var client = document.createElement("p");
      var location = document.createElement("p");
      innerDiv.className = "innerDivClass";
      title.innerHTML = `<h3>${mappingItem.title}</h3>`;
      para.innerHTML = `<p>${mappingItem.para}</p>`;
      client.innerHTML = `<p><span>Client: </span>${mappingItem.Client}</p>`;
      location.innerHTML = `<p><span>Location: </span>${mappingItem.Location}</p>`;

      newDiv.appendChild(innerDiv);
      innerDiv.appendChild(title);
      innerDiv.appendChild(para);
      innerDiv.appendChild(client);
      innerDiv.appendChild(location);

      document.getElementById(parentId).appendChild(newDiv);
    }

    //LAND
    for (var i = 0; i < mapping1.length; i++) {
      createProjectElement(mapping1[i], "projectsList1");
    }

    //FOREST
    for (var i = 0; i < mapping2.length; i++) {
      createProjectElement(mapping2[i], "projectsList2");
    }
    //URBAN
    for (var i = 0; i < mapping3.length; i++) {
      createProjectElement(mapping3[i], "projectsList3");
    }

    // HAZARD STUDIES
    for (var i = 0; i < mapping4.length; i++) {
      createProjectElement(mapping4[i], "projectsList4");
    }

    // RSLUP
    for (var i = 0; i < mapping5.length; i++) {
      createProjectElement(mapping5[i], "projectsList5");
    }

    // TRAINING
    for (var i = 0; i < mapping6.length; i++) {
      createProjectElement(mapping6[i], "projectsList6");
    }

    // UAV
    for (var i = 0; i < mapping7.length; i++) {
      createProjectElement(mapping7[i], "projectsList7");
    }

    // METRIC
    for (var i = 0; i < mapping8.length; i++) {
      createProjectElement(mapping8[i], "projectsList8");
    }

    // PHOTOGRAMMETRY
    for (var i = 0; i < mapping9.length; i++) {
      createProjectElement(mapping9[i], "projectsList9");
    }

    // BAMBOO
    for (var i = 0; i < mapping10.length; i++) {
      createProjectElement(mapping10[i], "projectsList10");
    }

    // DATA COLLECTION
    for (var i = 0; i < mapping11.length; i++) {
      createProjectElement(mapping11[i], "projectsList11");
    }
  }
};
xhttp.open("GET", "projects5.json", true);
xhttp.send();
