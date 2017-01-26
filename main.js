
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

// find the item with the currency code of GBP
var foundOut = items.filter(function(array, index){
  //empty variable to store object
  var titleOf;
  //if statement searching for GBP
  if (items[index].currency_code == "GBP") {
    //store GBP item into variable
    titleOf = items[index].title;
  }
  //return correct item to foundOut variable
   return titleOf;
});
//two new variables for price and title;
var beerTitle;
var beerPrice;
//for each'd my way into title and price
foundOut.forEach(function(product) {
beerTitle = product.title;
beerPrice = product.price;
 });
//console.log the concat of beer title, beer price;
console.log(beerTitle + " costs " + '£' + beerPrice );

/**********************************************************
Question #4

**********************************************************/
// create variable to hold woody things
var findWoodItems = items.filter(function(array, index){
      //empty variable inside to hold objects
    var woodyItems;

      //for each item that has a material that contains wood,
      //add to woodyItems;
    if (items[index].materials.includes('wood')) {
      //woody item is the item at the index being searched
      woodyItems = items[index];
  }
//return array of objects
return woodyItems;


});
//console.log the wood items that were found...
console.log(findWoodItems);



/**********************************************************
Question #5

**********************************************************/
//search for material amount greater than or equal to eight
var findMaterialAmount = items.filter(function(array, index){
      //empty variable inside to hold objects
    var numofMaterial;

  //look for all material amounts greater than or equal to 8 in each //array
    if (items[index].materials.length >= 8) {
      //add each item with 8 or more...
      numofMaterial = items[index];
  }
//return array of objects
return numofMaterial;


});
//log items
console.log(findMaterialAmount);

/**********************************************************
Question #6

**********************************************************/

var findSellerMade = items.filter(function(array, index){
      //empty variable inside to hold objects
    var theyMadeIt;

      //for each item that has a material that contains wood,
      //add to woodyItems;
    if (items[index].who_made.includes('i_did')) {
      //woody item is the item at the index being searched
      theyMadeIt = items[index];
  }
//return array of objects
return theyMadeIt;


});
//console.log the wood items that were found...
console.log(findSellerMade.length + " were made by their sellers!");
