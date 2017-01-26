
/**********************************************************
Question #1

**********************************************************/

//description below in more complicated version :)

var priced = items.map(function(array, index){
  var prices = [];
  prices = items[index].price;
  return prices;


});

var priceSum = priced.reduce(function(a,b){
  return a + b;
});

var priceAvg = priceSum / priced.length;

console.log(priceAvg.toFixed(2));

/* Longer Apples to Apples Answer Below *************
//create variable to hold array of prices
var priced = items.map(function(array, index){
  //set up inside variable for price array
  var prices =[];
  //test to see if currency is GBP
  if (items[index].currency_code == "GBP") {
  //if GBP, convert to USD
  prices = items[index].price * 1.26;
  //otherwise test to see if USD (not some other)
  //test to make sure price is listed
  } else if (items[index].currency_code == "USD" && items[index].price != undefined  ) {
  // log each price into new array
  prices = items[index].price;

}
//console.log(prices);
//return array into variable priced
return prices;

});
//log priced to check if is an array and no undefined issues
console.log(priced);

// create a sum of all prices from priced var
var priceAverage = priced.reduce(function(a,b){
  return a + b;
})

//take price sum and divide by price array length (creating average)
var priceAverageDiv = priceAverage / priced.length;
//console log answer with 2 decimal places
//answer is not the same because I converted the GBP into USD;
console.log(priceAverageDiv.toFixed(2));
*/
/**********************************************************
Question #2

**********************************************************/

var pricedBetween = items.filter(function(array, index){

  var titles;

  if (items[index].currency_code == "USD" && items[index].price > 14 && items[index].price < 18) {
  // log each price into new array
  return titles = items[index].title;
  }

  //console.log(titles);
  return titles;
});

//for my own understanding ----------------------------------
//created forEach to loop over each object abnd print product title;
//
//  pricedBetweenTitles = pricedBetween.forEach(function(product) {
//  console.log( product.title);
//  });
//
//--------------------------------------------------------


console.log(pricedBetween);
//console.log(items[0].price)
//console.log(items[0].currency_code)

//console.log(typeof priced);

/**********************************************************
Question #3

**********************************************************/
function findIt(item) {

return items.currency_code === 'GBP';
}

var foundOut = items.filter(findIt);

foundOut.

console.log(foundOut);




/**********************************************************
Question #4

**********************************************************/





/**********************************************************
Question #5

**********************************************************/





/**********************************************************
Question #6

**********************************************************/
