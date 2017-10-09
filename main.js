console.log('connected');
var cities = ['nyc', 'sf', 'la', 'sydney', 'austin']; //this is an array - it holds all the names of the cities

cities.forEach(function(city) { //this targets the array named "cities" and calls the forEach method (the forEach method will only run the function for the number of times which are the same as the number of items (objects?) in an array). The forEach method takes a function as an argument, and in this case we have called the functions parameter "city"
  addToList(city) //then we run the function "addToList" and pass the parameter "city" onto the "addToList" function
})

function addToList(city) {
    $('#city-type').append('<option>' + city.toUpperCase() + '</option>')
} 

	$("#city-type").change(changeBackground);

function changeBackground() {
  var selectBox = event.target
  var input = selectBox.value.toLowerCase()
  cities.forEach(function(cityName) {
    if (input === cityName) {
       clearBackground()
       $('body').addClass(cityName)
    }
  })
}

function clearBackground() {
  $('body').removeClass('nyc sf la austin sydney')
}
