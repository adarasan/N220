function choosePrimaryOption(choice) {
  const subChoices = document.getElementById("subChoices");
  const subChoiceTitle = document.getElementById("subChoiceTitle");
  const subOptions = document.getElementById("subOptions");

  subChoices.style.display = "block";
  subOptions.innerHTML = ""; // Clear previous options

  if (choice === "vacation") {
    subChoiceTitle.textContent = "Choose your vacation type:";
    addButton("US", () => chooseSecondaryOption("insideVacation"));
    addButton("MEXICO", () => chooseSecondaryOption("outsideVacation"));
  } else if (choice === "concert") {
    subChoiceTitle.textContent = "Choose your concert setting:";
    addButton("Indoor Concert", () => chooseSecondaryOption("indoorConcert"));
    addButton("Outdoor Concert", () => chooseSecondaryOption("outdoorConcert"));
  }
}

function chooseSecondaryOption(choice) {
  const subChoiceTitle = document.getElementById("subChoiceTitle");
  const subOptions = document.getElementById("subOptions");

  subOptions.innerHTML = ""; // Clear previous options

  if (choice === "insideVacation") {
    subChoiceTitle.textContent = "Choose your transport:";
    addButton("Road Trip", () => chooseTransport("roadTrip"));
    addButton("Board a Plane", () => chooseTransport("plane"));
  } else if (choice === "outsideVacation") {
    subChoiceTitle.textContent = "Choose your transport:";
    addButton("Road Trip", () => chooseTransport("roadTrip"));
    addButton("Board a Plane", () => chooseTransport("plane"));
  } else if (choice === "indoorConcert") {
    subChoiceTitle.textContent = "Choose artist type:";
    addButton("Band", () => displayResult("You chose an Indoor Band Concert!"));
    addButton("Solo Artist", () =>
      displayResult("You chose an Indoor Solo Artist Concert!")
    );
  } else if (choice === "outdoorConcert") {
    subChoiceTitle.textContent = "Choose artist type:";
    addButton("Band", () => chooseBandTime("outdoorBand"));
    addButton("Solo Artist", () => chooseSoloTime("outdoorSolo"));
  }
}

function chooseTransport(transport) {
  const subChoiceTitle = document.getElementById("subChoiceTitle");
  const subOptions = document.getElementById("subOptions");

  subOptions.innerHTML = ""; // Clear previous options

  if (transport === "roadTrip") {
    subChoiceTitle.textContent = "Choose your road trip vehicle:";
    addButton("RV - Small", () =>
      displayResult("You chose a Small RV Road Trip!")
    );
    addButton("RV - Big", () => displayResult("You chose a Big RV Road Trip!"));
    addButton("Fast Car - 4 Cylinder", () =>
      displayResult("You chose a 4-Cylinder Fast Car Road Trip!")
    );
    addButton("Fast Car - 6 Cylinder", () =>
      displayResult("You chose a 6-Cylinder Fast Car Road Trip!")
    );
  } else if (transport === "plane") {
    subChoiceTitle.textContent = "Choose flight class:";
    addButton("First Class", () =>
      displayResult("You chose a First Class Flight!")
    );
    addButton("Commercial", () =>
      displayResult("You chose a Commercial Flight!")
    );
  }
}

function chooseBandTime(choice) {
  const subChoiceTitle = document.getElementById("subChoiceTitle");
  const subOptions = document.getElementById("subOptions");

  subOptions.innerHTML = ""; // Clear previous options
  subChoiceTitle.textContent = "Choose time for the Band Concert:";
  addButton("Day", () =>
    displayResult("You chose an Outdoor Band Concert during the Day!")
  );
  addButton("Night", () =>
    displayResult("You chose an Outdoor Band Concert at Night!")
  );
}

function chooseSoloTime(choice) {
  const subChoiceTitle = document.getElementById("subChoiceTitle");
  const subOptions = document.getElementById("subOptions");

  subOptions.innerHTML = ""; // Clear previous options
  subChoiceTitle.textContent = "Choose time for the Solo Artist Concert:";
  addButton("Day", () =>
    displayResult("You chose an Outdoor Solo Artist Concert during the Day!")
  );
  addButton("Night", () =>
    displayResult("You chose an Outdoor Solo Artist Concert at Night!")
  );
}

function addButton(text, onClick) {
  const subOptions = document.getElementById("subOptions");
  const button = document.createElement("button");
  button.textContent = text;
  button.onclick = onClick;
  button.classList.add("option-button");
  subOptions.appendChild(button);
}

function displayResult(message) {
  const result = document.getElementById("result");
  result.textContent = message;
}
