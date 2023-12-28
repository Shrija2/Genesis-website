let acc = document.getElementsByClassName("accordianProjects");
let i;

for (i = 0; i < acc.length; i++) {
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
    console.log(mapping);

    let listElement = document.querySelector(".list");
    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function () {
        listElement.innerHTML = "";

        for (let j = 0; j < mapping.length; j++) {
          let firstParameter = Object.keys(mapping[j])[0];
          let paragraph = document.createElement("p");
          paragraph.textContent = firstParameter;
          listElement.appendChild(paragraph);
        }
      });
    }
  }
};

xhttp.open("GET", "projects.json", true);
xhttp.send();
