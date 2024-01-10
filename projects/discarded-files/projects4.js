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
    //console.log(mapping);

    for (let i = 0; i < mapping.length; i++) {
      let h1 = Object.keys(mapping[i])[0];
      let subArray = mapping[i][h1];

      document.querySelector(`.projectImg${i}`).src = subArray[0].img;
      document.querySelector(`.title${i}`).innerHTML = h1;
      document.querySelector(`.para${i}`).innerHTML = subArray[0].para;
      document.querySelector(`.client${i}`).innerHTML = subArray[0].Client;
      document.querySelector(`.location${i}`).innerHTML = subArray[0].Location;
    }

    for (let i = 0; i < mapping2.length; i++) {
      let h1 = Object.keys(mapping2[i])[0];
      let subArray = mapping2[i][h1];

      document.querySelector(`.projectImg2-${i}`).src = subArray[0].img;
      document.querySelector(`.title2-${i}`).innerHTML = h1;
      document.querySelector(`.para2-${i}`).innerHTML = subArray[0].para;
      document.querySelector(`.client2-${i}`).innerHTML = subArray[0].Client;
      console.log(
        (document.querySelector(`.location2-${i}`).innerHTML =
          subArray[0].Location)
      );
    }

    for (let i = 0; i < mapping3.length; i++) {
      let h1 = Object.keys(mapping3[i])[0];
      let subArray = mapping3[i][h1];

      document.querySelector(`.projectImg3-${i}`).src = subArray[0].img;
      document.querySelector(`.title3-${i}`).innerHTML = h1;
      document.querySelector(`.para3-${i}`).innerHTML = subArray[0].para;
      document.querySelector(`.client3-${i}`).innerHTML = subArray[0].Client;
      document.querySelector(`.location3-${i}`).innerHTML =
        subArray[0].Location;
    }

    for (let i = 0; i < mapping4.length; i++) {
      let h1 = Object.keys(mapping4[i])[0];
      let subArray = mapping4[i][h1];
      console.log(h1);

      document.querySelector(`.projectImg4-${i}`).src = subArray[0].img;
      document.querySelector(`.title4-${i}`).innerHTML = h1;
      document.querySelector(`.para4-${i}`).innerHTML = subArray[0].para;
      document.querySelector(`.client4-${i}`).innerHTML = subArray[0].Client;
      document.querySelector(`.location4-${i}`).innerHTML =
        subArray[0].Location;
    }

    for (let i = 0; i < mapping5.length; i++) {
      let h1 = Object.keys(mapping5[i])[0];
      let subArray = mapping5[i][h1];
      console.log(h1);

      document.querySelector(`.projectImg5-${i}`).src = subArray[0].img;
      document.querySelector(`.title5-${i}`).innerHTML = h1;
      document.querySelector(`.para5-${i}`).innerHTML = subArray[0].para;
      document.querySelector(`.client5-${i}`).innerHTML = subArray[0].Client;
      document.querySelector(`.location5-${i}`).innerHTML =
        subArray[0].Location;
    }

    for (let i = 0; i < mapping6.length; i++) {
      let h1 = Object.keys(mapping6[i])[0];
      let subArray = mapping6[i][h1];
      console.log(h1);

      document.querySelector(`.projectImg6-${i}`).src = subArray[0].img;
      document.querySelector(`.title6-${i}`).innerHTML = h1;
      document.querySelector(`.para6-${i}`).innerHTML = subArray[0].para;
      document.querySelector(`.client6-${i}`).innerHTML = subArray[0].Client;
      document.querySelector(`.location6-${i}`).innerHTML =
        subArray[0].Location;
    }

    for (let i = 0; i < mapping7.length; i++) {
      let h1 = Object.keys(mapping7[i])[0];
      let subArray = mapping7[i][h1];
      console.log(h1);

      document.querySelector(`.projectImg7-${i}`).src = subArray[0].img;
      document.querySelector(`.title7-${i}`).innerHTML = h1;
      document.querySelector(`.para7-${i}`).innerHTML = subArray[0].para;
      document.querySelector(`.client7-${i}`).innerHTML = subArray[0].Client;
      document.querySelector(`.location7-${i}`).innerHTML =
        subArray[0].Location;
    }
  }
};
xhttp.open("GET", "projects.json", true);
xhttp.send();
