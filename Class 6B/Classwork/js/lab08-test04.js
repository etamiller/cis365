// Create a new variable named countries whose value is an array returned 
// from the split() function. Pass the supplied csv variable as an argument to 
// split().// 

const countries = csv.split(",");
console.log(countries);

// Convert the countries array into the delimited string using join().
countries.join();
console.log(countries);

// •  Output if csv and countries are arrays using isArray().
console.log(Array.isArray(countries));
console.log(Array.isArray(csv));

// •  Sort the countries array using sort().
countries.sort();
console.log(countries);

// •  Reverse the sort using reverse().
countries.reverse();
console.log(countries);

// •  Remove the first element in countries using shift().
countries.shift();
console.log(countries);

// •  Remove the last element in countries using pop().
countries.pop();
console.log(countries);

// •  Add two new elements to the front of the array using unshift().
countries.unshift("Panama", "The Bahamas");
console.log(countries);

// •  Search for the country named Germany using includes().
console.log(countries.includes("Germany"));

// •  Find the index for the country named Germany using indexOf().
console.log(countries.indexOf("Germany"))

// •  Make a new array by extracting from the countries array using splice()
newArray = countries.splice(0);
console.log(newArray);


console.log('---------------------');

// there are other array methods which you will learn in Ch 10 */


// use a loop to output all cities whose continent=="NA"
for (let c of cities)
{
   if (c.continent == "NA")
      console.log(c);
}

console.log('---------------------');

// use a loop to output gallery names whose country=="USA"
for (let g of galleries)
{
   if (g.location.country == "USA")
      console.log(g.name);
}

console.log('---------------------');

// convert JSON colorsAsString to js object
const colors = JSON.parse(colorsAsString);

// use a loop to output color name if luminance < 75
for (let c of colors)
{
   if (c.luminance < 75)
      console.log(c.name);
}

console.log('---------------------');

// use two nested loops - outer: loop thru colors
// for (let c of colors) {
//    let sum = 0;
//    for (let rgb of c.rgb) sum += rgb;
//    console.log(`${c.name} rgb=${sum}`);
// }

console.log('---------------------');

/* use a loop output using document.write a unordered
   list of links to the galleries in the galleries array.
   Make the label of the link the name property, and the href
   the url property */

//how to print html onto javascript page
document.write(`<h2>Hello World</h2>`);

document.write(`<ul>`)
const firstItem = 'First Item';






