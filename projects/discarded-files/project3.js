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

    let listElement = document.querySelector(".list");
    let listElement2 = document.querySelector(".list2");
    let listElement3 = document.querySelector(".list3");
    let listElement4 = document.querySelector(".list4");
    let listElement5 = document.querySelector(".list5");
    let listElement6 = document.querySelector(".list6");

    for (let i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function () {
        listElement.innerHTML = "";
        listElement2.innerHTML = "";
        listElement3.innerHTML = "";
        listElement4.innerHTML = "";
        listElement5.innerHTML = "";
        listElement6.innerHTML = "";

        if (i === 0) {
          for (let j = 0; j < mapping.length; j++) {
            let firstParameter = Object.keys(mapping[j])[0];
            let paragraph = document.createElement("p");
            paragraph.textContent = firstParameter;
            paragraph.classList.add("projectDetails");
            listElement.appendChild(paragraph);

            let subArray = mapping[j][Object.keys(mapping[j])[0]];
            for (let x = 0; x < subArray.length; x++) {
              let paraValue = subArray[x].para;
              let clientValue = subArray[x].Client;
              let locationValue = subArray[x].Location;
              let timelineValue = subArray[x].Timeline;

              let projectDetailsElements =
                document.querySelectorAll(".projectDetails");
              projectDetailsElements.forEach(function (element) {
                element.addEventListener("click", function () {
                  document.querySelector(".popup1").innerHTML = paraValue;
                  document.querySelector(".popup2").innerHTML = clientValue;
                  document.querySelector(".popup3").innerHTML = locationValue;

                  console.log(locationValue);

                  let popup = document.querySelector(".popup");

                  if (popup.style.display === "block") {
                    popup.style.display = "none";
                  } else {
                    popup.style.display = "block";
                  }
                  console.log(popup);
                });
              });
            }
          }
        } else if (i === 1) {
          for (let j = 0; j < mapping2.length; j++) {
            let firstParameter = Object.keys(mapping2[j])[0];
            let paragraph = document.createElement("p");
            paragraph.textContent = firstParameter;
            listElement2.appendChild(paragraph);
          }
        } else if (i === 2) {
          for (let j = 0; j < mapping3.length; j++) {
            let firstParameter = Object.keys(mapping3[j])[0];
            let paragraph = document.createElement("p");
            paragraph.textContent = firstParameter;
            listElement3.appendChild(paragraph);
          }
        } else if (i === 3) {
          for (let j = 0; j < mapping4.length; j++) {
            let firstParameter = Object.keys(mapping4[j])[0];
            let paragraph = document.createElement("p");
            paragraph.textContent = firstParameter;
            listElement4.appendChild(paragraph);
          }
        } else if (i === 4) {
          for (let j = 0; j < mapping5.length; j++) {
            let firstParameter = Object.keys(mapping5[j])[0];
            let paragraph = document.createElement("p");
            paragraph.textContent = firstParameter;
            listElement5.appendChild(paragraph);
          }
        } else if (i === 5) {
          for (let j = 0; j < mapping6.length; j++) {
            let firstParameter = Object.keys(mapping6[j])[0];
            let paragraph = document.createElement("p");
            paragraph.textContent = firstParameter;
            listElement6.appendChild(paragraph);
          }
        }
      });
    }
  }
};

xhttp.open("GET", "projects.json", true);
xhttp.send();
