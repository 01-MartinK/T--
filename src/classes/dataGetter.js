
// GETTING DATA
let borsiElektriHind = 30
let borsiElektriKeskmineHind = 0
var daySTR = getCurrentDay()

var days_prices = [];
var date = getCurrentYear()+"-"+getCurrentMonth()+"-"+getCurrentDay()+"T00%3A00%3A00.999Z&end="+getCurrentYear()+"-"+getCurrentMonth()+"-"+getCurrentDay()+"T23%3A59%3A59.999Z";
var url = "https://dashboard.elering.ee/api/nps/price?start="+date;

getCurrentPrice()
// GETTING MARKET DATA
// GET CURRENT DAY PRICES
function getCurrentPrice(){
	fetch(url)
  	.then(response => response.json())
  	.then(data => {
		days_prices = data.data.ee
		borsiElektriHind = getHourPrice(getCurrentHour()-1)
		getDayAverage()
 	});
}

// GET A SPECIFIC HOURS PRICE
function getHourPrice(hour){
	if (hour > 23){
		hour = hour-20
	}else{
		return days_prices[hour-1].price
	}
}

// GET DAY AVERAGE PRICE
function getDayAverage(){
	borsiElektriKeskmineHind = avg(days_prices)
	console.log(borsiElektriKeskmineHind)
}