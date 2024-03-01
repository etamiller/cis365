// /* add code below this */

// if (iBill && iBill !=0)
// {
// console.log("For bill of $" + bill + " the tip should be $" + tip);
// }
// else
// {
//     console.log(`${bill} is not a valid number`);
// }

//creating array of bill totals
const billTotals = [50., 150.00, 20.00, 500.00]
const tips = [];

for (let total of billTotals){
    let tip;
    if (total < 30)
        tip = total * 0.30;
    else if (total >= 30 && total <= 75)
        tip = total * 0.20;
    else
        tip = total * 0.10;

//ternary 
//tip = total < 30 ? total *0.30 : total * 0.10;

    tips.push(tip);
}


for (let i=0; i<billTotals.length; i++) {
    console.log("For bill of $" + billTotals[i] + " the tip should be $" + tips[i]);
}