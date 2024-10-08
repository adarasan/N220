const flightTimes = [];

// Function to add time and update the display

function addTime() {
  // Get the time entered by the user
  const newTimeInput = document.getElementById("newTimie");

  const newTime = parseFloat(newTimeInput.value);

  // Only add valid numbers (non-negative and not NaN)

  if (!isNaN(newTime) && newTime >= 0) {
    // Add the time to the list of flight times

    flightTimes.push(newTime);

    // Update the p tag to show all the times

    document.getElementById(
      "listOfTimes"
    ).innerText = `Times: ${flightTimes.join(", ")}`;

    // Calculate the average time

    const sum = flightTimes.reduce((a, b) => a + b, 0);
    const average = (sum / flightTimes.length).toFixed(2);

    // Update the h4 tag to show the average of the times
    document.getElementById(
      "averageTime"
    ).innerText = `Average Time: ${average}`;
  }

  // Clear the input after adding the time

  newTimeInput.value = "";
}
