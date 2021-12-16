// ANDMETE KÄTTESAAMINE
let borsiElektriHind = 30
var days_prices = [];
var current_hour = getCurrentHour()

// GET CURRENT DAY PRICES
function getCurrentPrice(){
	fetch('https://dashboard.elering.ee/api/nps/price?start=2021-12-16T00%3A00%3A00.999Z&end=2021-12-16T23%3A59%3A59.999Z')
  	.then(response => response.json())
  	.then(data => {
      	console.log(data)
      	console.log(data.data.ee[0].price)  
		days_prices = data.data.ee
		refreshPrices()
 	});
}