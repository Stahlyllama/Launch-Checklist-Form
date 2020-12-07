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
//if Pilot Name entered value doesn't meet text data type this error is thrown
    if (!isNaN(pilotNameInput.value)){
      alert("Invalid Pilot Entry: Text is Required for Name Fields");
      event.preventDefault();
    };
//if coPilot Name entered value doesn't meet text data type this error is thrown
    if (!isNaN(copilotNameInput.value)) {
      alert("Invalid CoPilot Entry: Text is Required for Name Fields");
      event.preventDefault();
    };
//if numbers are not given for value of fuel or cargo mass, this error is thrown.
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
  fetch("https://handlers.education.launchcode.org/static/planets.json")
  .then(response => response.json()) 
  .then(function(json) {
  let div = document.getElementById("missionTarget");
  let bonusDestination = Math.floor(Math.random() *json.length)
  div.innerHTML = `<h2>Mission Destination</h2>
                        <ol>
                          <li>Name: ${json[bonusDestination].name}</li>
                          <li>Diameter: ${json[bonusDestination].diameter}</li>
                          <li>Star: ${json[bonusDestination].star}</li>
                          <li>Distance from Earth: ${json[bonusDestination].distance}</li>
                          <li>Number of Moons: ${json[bonusDestination].moons}</li>
                     </ol>
                     <img src ="${json[bonusDestination].image}"/>`  
      console.log('success', data);
  });
});