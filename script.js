// Write your JavaScript code here!

window.addEventListener("load", function () {
  let form = document.querySelector("form");

  let pilotNameInput = document.querySelector("input[name=pilotName]");
  let copilotNameInput = document.querySelector("input[name=copilotName]");
  let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
  let cargoMassInput = document.querySelector("input[name=cargoMass]");

  form.addEventListener("submit", function (event) {
    if (
      pilotNameInput.value === "" ||
      copilotNameInput.value === "" ||
      fuelLevelInput.value === "" ||
      cargoMassInput.value === ""
    ) {
      alert("All fields are required!");
      event.preventDefault();
    };

    if (!isNaN(pilotNameInput.value) || !isNaN(copilotNameInput.value)) {
      alert("Invalid Entry: Text is Required for Name Fields");
      event.preventDefault();
    };

    if (isNaN(fuelLevelInput.value) || isNaN(cargoMassInput.value)) {
      alert("Invalid Entry: Numbers  are Required for Fuel and Cargo Fields");
      event.preventDefault();
    };

    pilotStatus.innerHTML = `${pilotNameInput.value} is ready for launch.`;
    copilotStatus.innerHTML = `${copilotNameInput.value} is ready for launch`;

    if (fuelLevelInput.value < 10000) {
      document.getElementById("faultyItems").style.visibility = "visible";
      document.getElementById("fuelStatus").innerHTML =
        "Too Low; not Enough Fuel for the Journey.";
      document.getElementById("launchStatus").innerHTML =
        "Shuttle not ready for Launch!";
      document.getElementById("launchStatus").style.color = "red";
    }else if(cargoMassInput.value > 10000){
       document.getElementById("faultyItems").style.visibility="visible";
       document.getElementById("cargoStatus").innerHTML = "Too Much Mass for Take Off!"
       document.getElementById("launchStatus").innerHTML = "Shuttle not ready for Launch!";
       document.getElementById("launchStatus").style.color = "red";
    }else {
      document.getElementById("launchStatus").innerHTML = "Shuttle is ready for Launch!";
      document.getElementById("launchStatus").style.color = "green";
    }
       event.preventDefault();
  });
});

async function getPlanets(){
   let url = "https://handlers.education.launchcode.org/static/planets.json;"
   try {
      let res = await fetch(url);
      return await res.json();
   } catch(error){
      console.log(error);
   }
}
async function renderPlanets(){
   let planets = await getPlanets();
   let html = ' ' ;
   planets.forEach(planet=> {
      let htmlSegment = `<div id="missionTarget">
                        <img src="${planet.imageURL}">
                        <h2>Mission Destination</h2>
                        <ol>
                          <li>"Name": ${planet.name}</li>
                          <li>"Diameter": ${planet.diameter}</li>
                          <li>"Star": ${planet.star}</li>
                          <li>"Distance from Earth": ${planet.distance}</li>
                          <li>"Number of Moons": ${planet.moons}</li>
                     </ol>
                     </div>`;
                     html += htmlSegment;
   });
let container = document.querySelector('.container');
container.innerHTML=html;
}
renderPlanets();
fetch("https://handlers.education.launchcode.org/static/planets.json")
.then(response => response.json())  // transform data into json
.then(data =>{   //create and append the li's to the ul?
   console.log('Success:', data);
})
.catch((error)=>{
   console.error('Error:', error);
});
