/**
 * 1. create a variable tracking current count
 *
 * 2. create a function addCount to add to the currentCount then update the "counter" p tag
 *
 *
 *
 *
 */

let currentCount = 0;

function showCurrentCount() {
  document.querySelector("#counter").innerHTML = currentCount;
}

showCurrentCount();

function addCount() {
  currentCount++;

  showCurrentCount();
}
