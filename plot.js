// Printing all the data in the console
console.log(cityGrowths);

// Sorts and augments the array of cities in descending order of population growth/ returns the augmented array
var sortedCities = cityGrowths.sort((firstCityObject, secondCityObject) =>

    // If the outcome is positive, switch the positions - but we are reversing, so it stays the same
    firstCityObject.Increase_from_2016 - secondCityObject.Increase_from_2016).reverse();

console.log(sortedCities);

// Returning the top 5 of the sorted list
console.log(sortedCities.slice(0,5))

// Creating an array of JUST the top 5 city NAMES
var top5CityNames = (sortedCities.map(city => city.City)).slice(0,5);
console.log(top5CityNames); 

// Creating an array of JUST the top 5 city COUNTS WRONG!!
var top5CityGrowths0 = (sortedCities.map(city => city.Increase_from_2016)).slice(0,5);
console.log(top5CityGrowths0);  // However this returns an array of strings!

// Creating an array of JUST the top 5 city COUNTS FIXED
var top5CityGrowths1 = (sortedCities.map(city => parseInt(city.Increase_from_2016))).slice(0,5);
console.log(top5CityGrowths1);  //we parsed the speicifc component of the data to be in!

// Using the array of name and the numbered array - we can create a bar graph of the data
var trace = {
    x: top5CityNames,
    y: top5CityGrowths1,
    type: "bar"
  };
var data = [trace];

var layout = {
    title: "Most Rapidly Growing Cities",
    xaxis: {title: "City" },
    yaxis: {title: "Population Growth, 2016-2017"}
};

Plotly.newPlot("bar-plot", data, layout);