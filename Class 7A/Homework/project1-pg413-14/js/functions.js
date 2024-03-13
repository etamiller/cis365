/* define your functions here */

function calculateTotal(quantity, price) {
    product = quantity * price;
    return product;
}

function outputCartRow(item, quantity) {
        document.write('<tr>')
        document.write('<td><img src="images/'+ item.product.filename + '"></td>')
        document.write('<td>'+item.product.title+'</td>')
        document.write('<td>' + quantity + '</td>')
        document.write('<td>'+item.product.price.toFixed(2) + '</td>')
        document.write('<td>' + calculateTotal(quantity,item.product.price).toFixed(2) + '</td>')
        document.write('</tr>')
}
