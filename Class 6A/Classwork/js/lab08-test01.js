/* add code below this */

let bill = prompt("What is the bill total?");
let iBill = Number(bill);

const TIP_PERCENTAGE = 0.10;
let tip = iBill * TIP_PERCENTAGE;

if (iBill && iBill !=0)
{
console.log("For bill of $" + bill + " the tip should be $" + tip);
}
else
{
    console.log(`${bill} is not a valid number`);
}