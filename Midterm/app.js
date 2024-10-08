const trackList = [];

function addItem() {
  // clear the text
  document.querySelector("#summary").innerHTML = ``;

  document.querySelector("#list").innerHTML = ``;

  // get the value from the input and add it to a variable.
  const newAddItem = parseFloat(document.getElementById("item").innerHTML);

  // then whats inside the variable gets put inside the array.

  trackList.push(newAddItem);

  // display list of  track list HTML ID

  document.querySelector("#list").innerHTML = `<li>${trackList}</li>`;
}

function summarizeList() {
  // const totalItem = document.getElementById("summary").innerHTML;

  let totalItem = 0;

  for (let i = 0; i < trackList.length; i++) {
    totalItem += trackList[i];
  }

  document.getElementById("summary").innerHTML += totalItem.length + "<br />";

  document.getElementById("summary").innerHTML += trackList.length + "<br />";

  document.getElementById("summary").innerHTML += trackList[0] + "<br />";

  document.getElementById("summary").innerHTML += trackList.length - 1;
}
