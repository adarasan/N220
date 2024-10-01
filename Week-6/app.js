// creat two reference variables for the input

const num1 = document.getElementById("num1");

const num2 = document.getElementById("num2");

// create the reference variable for the output

const output = document.getElementById("output");

// function for adding the two numbers

function addNums() {
  const sum = parseFloat(num1.value) + parseFloat(num2.value);

  output.innerHTML = sum;
}

// function for adding the two numbers

function timesNums() {
  const product = parseFloat(num1.value) * parseFloat(num2.value);

  output.innerHTML = product;
}
