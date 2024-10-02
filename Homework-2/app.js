// Dating  simple calc

const numTicket = 3;

const valueTickets = 14;

document.getElementById("ticketNum").innerHTML += numTicket;

document.getElementById("ticketCost").innerHTML += valueTickets;

document.getElementById("ttCost").innerHTML += numTicket * valueTickets;

// Shopping simple cal

const bankAccount = 235.87;

const shirtCost = 35;
const pantsCost = 75;
const shoesCost = 60;

const totalCost1 = bankAccount - (shirtCost + shoesCost + pantsCost);

document.getElementById("bank").innerHTML += totalCost1;

const jacketCost = 70;

const totalCost2 = totalCost1 - jacketCost;

document.getElementById("addJacket").innerHTML += totalCost2 > 0;

//pizza

const totalPizza = 4;
const pizzaSlice = 8;

const studentEats = 2.5;

const studentTotal = (pizzaSlice / studentEats) * totalPizza;

const amountTotal = (pizzaSlice % studentEats) * totalPizza;

document.getElementById("profPizza1").innerHTML += Math.floor(studentTotal);

document.getElementById("profPizza2").innerHTML += amountTotal;

//monty's mega bar

const adultValue = 12;
const childValue = 6;

const drinkValue = 1.5;

const finalPrice = 2 * adultValue + childValue + 3 * drinkValue;

document.getElementById("Monty").innerHTML += finalPrice;

// Average Earned Tip

const weekOne = 202.45;

const weekTwo = 134.97;

const weekThree = 256.63;

const weekFour = 178.22;

const weeklyAverage = (weekFour + weekOne + weekThree + weekTwo) / 4;

document.getElementById("tips").innerHTML += weeklyAverage.toFixed(2);
