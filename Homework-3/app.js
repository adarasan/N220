//var num1 = parseFloat(document.getElementById("nInput").value);
//var fNum1 = num1.toFixed(2);

function addNums() {
  var textInput2 = parseFloat(document.getElementById("tInput").value);

  var numberInput2 = parseFloat(document.getElementById("nInput").value);

  var numberInput3 = parseFloat(document.getElementById("nInput").value);

  document.getElementById("pfResults").innerHTML =
    "Float Results: " + textInput2(1 + numberInput2 * numberInput3);
}

// /style>
//<script type="text/javascript">
//function numStrings() {
//var textInput = document.getElementById("tInput").value;
//var numberInput = document.getElementById("nInput").value;
// console.log(
//  "Text Input Field: " + textInput + "(" + typeof textInput + ")"
// );
// console.log(
//    "Number Input Field: " + numberInput + "(" + typeof numberInput + ")"
//  );
// document.getElementById("sResults").innerHTML =
//   "First Results: " + textInput + numberInput;
// }

// function addNums() {
//  var textInput2 = parseFloat(document.getElementById("tInput").value);
//  var numberInput2 = parseFloat(document.getElementById("nInput").value);
// console.log(
//     "Text Input Field: " + textInput2 + "(" + typeof textInput2 + ")"
// );
// console.log(
// "Number Input Field: " +
//   numberInput2 +
//    "(" +
//  typeof numberInput2 +
//  ")"
// );
// document.getElementById("pfResults").innerHTML =
//    "parseFloat Results: " + (textInput2 + numberInput2);
//}
//</script>
