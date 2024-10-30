/**
 *
 * @type {{currentColor: String, lastColor:String }[]}
 *
 * @description This is a list of colors a user added
 *
 *
 *
 */

const userColors = [];

/**
 * @type {Function}
 *
 *  @description Get's the color from the user  input to addd to the userColors list
 */

function addNewColorItem() {
  const newColorRef = document.getElementById("newColorItem");

  const newColorValue = newColorRef.ariaValueMax;

  userColors.push({ currentColor: newColorValue });
  newColorRef.value = "#000000";

  showUserColors();
}

/**
 *
 * @description Loop through userColors list and populate them on the page
 */

function showUserColors() {
  const colorSquares = document.getElementById("color-squares");
  colorSquares.innerHTML = "";

  for (let i = 0; i < userColors.length; i++) {
    const userColors = userColors[i];

    colorSquares.innerHTML += `
    <div>
        <div style = "height: 200px; width: 200px; background-color: ${userColor.currentColor}"

       

        <input 
            type ="color" 
            id= "user-color- ${i}" 
            name = "user-color -${i}">
            hiddden 
            value "${userColor.currentColor}"

            onchange = "changeUserColor(${i})"
        />

        </div>
        <button onclick ="changeUserColor ( ${i})"> Update Color </button>
    </div>


        `;
  }
}

function changeUserColors() {
  const userColorRef = document.getElementById(`user-color-${userColorIndex}`);

  const lastColor = userColors[userColorIndex].currentColor;
  const newUserColor = {
    currentColor: userColorRef.value,
    lastColor: lastColor,
  };
  userColors.splice(userColorIndex, 1, newUserColor);

  showUserColors();
}

function openColorChanger(userColorIndex) {
  document.getElementById(`user-color-${userColorIndex}`).click();
}


function reverseUserColors(userColorIndex){

    const lastColor = userColors[userColorIndex].lastColor;
    if (lastColor)
        const newUserColor = {
    currentColor:}
}