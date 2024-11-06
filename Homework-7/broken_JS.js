let CompArray = ["Rock", "Paper", "Scissors"];
let innerScore = 0;

function RPS(numb) {
  let randNum = Math.floor(Math.random() * CompArray.length);
  let CompDecision = CompArray[randNum];

  console.log(`Computer Selection: ${CompDecision}`);
  console.log(`User Selection: ${CompArray[numb]}`);

  document.getElementById(
    "resultDecision"
  ).innerHTML = `Result Decision: ${CompDecision}`;

  if (numb === randNum) {
    innerScore -= 0.5; // tie
  } else if (numb === 0) {
    // user chooses rock
    if (CompDecision === "Paper") {
      innerScore -= 1; // rock loses to paper
    } else if (CompDecision === "Scissors") {
      innerScore += 1; // rock beats scissors
    }
  } else if (numb === 1) {
    // user chooses paper
    if (CompDecision === "Rock") {
      innerScore += 1; // paper beats rock
    } else if (CompDecision === "Scissors") {
      innerScore -= 1; // paper loses to scissors
    }
  } else if (numb === 2) {
    // user chooses scissors
    if (CompDecision === "Rock") {
      innerScore -= 1; // scissors loses to rock
    } else if (CompDecision === "Paper") {
      innerScore += 1; // scissors beats paper
    }
  }

  // Update score after each play
  document.getElementById("Score").innerHTML = `Score: ${innerScore}`;
}
