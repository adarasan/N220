function getTotal() {
  let principleP = parseFloat(document.getElementById("p").value);
  let interestR = parseFloat(document.getElementById("i").value);
  let timeT = parseFloat(document.getElementById("t").value);

  let interestTotal = (principleP * interestR * timeT) / 100;
  let grandTotal = principleP + interestTotal;

  document.querySelector("#answer").innerHTML = `
  With a beginging principle of $${principleP} and 
  with a growth rate of $${interestR} for $${timeT}
  year(s), the total interest is $${interestTotal.toFixed(2)}
  with a frand total of $${grandTotal.toFixed(2)}
  
  `;
}
