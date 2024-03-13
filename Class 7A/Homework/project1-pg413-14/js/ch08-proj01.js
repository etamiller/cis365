
const tax_rate = prompt('Enter tax rate (e.g. 0.10)');
const shipping_threshold = prompt('Enter shipping threshold (e.g. 1000)');

/* add loop and other code here ... in this simple exercise we are not
   going to concern ourselves with minimizing globals, etc */

for (c of cart) {
   console.log(c);
   outputCartRow(c, c.quantity);

}

   let subtotal = 0;
   for (c of cart) {
      subtotal += calculateTotal(c.quantity,c.product.price);
   }   

   tax = subtotal * tax_rate;

   let shipping = 0;
   if (subtotal < shipping_threshold) {
       shipping = 40;
   }
   else {
       shipping = 0;
   }

   grandTotal = subtotal + tax + shipping;



document.write('<tr class="totals"><td colspan="4">Subtotal</td><td id = "subtotal">'+ subtotal.toFixed(2)+'</td></tr>')
document.write('<tr class="totals"><td colspan="4">Tax</td><td id = "subtotal">'+ tax.toFixed(2)+'</td></tr>')
document.write('<tr class="totals"><td colspan="4">Shipping</td><td id = "subtotal">'+ shipping.toFixed(2)+'</td></tr>')
document.write('<tr class="totals"><td colspan="4" class = "focus">GrandTotal</td><td class = "focus" id = "subtotal">'+ grandTotal.toFixed(2)+'</td></tr>')

