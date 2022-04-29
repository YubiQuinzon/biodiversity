// First graph - Line graph
Plotly.newPlot("plotArea", [{x: [1, 2, 3], y: [10, 20, 30]}]);

// Second graph - bar graph
var trace = {
    x: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: "bar"
};
var data = [trace];

var layout = {
    title: "'Bar' Chart",
    xaxis: {title: "Drinks"},
    yaxis: {title: "% of Drinks Ordered"}
};

Plotly.newPlot("plotArea2", data, layout);

// Third graph - pie graph
var trace = {
    labels: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: "pie"
};
var data = [trace];

var layout = {
    title: "'pie' Chart",
    xaxis: {title: "Drinks"},
    yaxis: {title: "% of Drinks Ordered"}
};

Plotly.newPlot("plotArea3", data, layout);

// Fourth graph - scatter plot
var trace1 = {
    x: [1,2,3,4,5],
    y: [1,6,3,6,1],
    mode: 'markers',
    type: 'scatter',
    name: 'Team A',
    text: ['Team 1', 'Team 2', 'Team 3', 'Team 4', 'Team 5', 'Team 6'],
    marker: {size:12}
};

var trace2 = {
    x: [1.5, 2.5, 3.5, 4.5, 5.5],
    y: [4, 1, 7, 1, 4],
    mode: 'lines+markers',
    type: 'scatter',
    name: 'Team B',
    text: ['B-a', 'B-b', 'B-c', 'B-d', 'B-e'],
    marker: { size: 12 }
  };
  
var data = [trace1, trace2];

var layout = {
    title: "'scatter' plot",
    xaxis: {
        title: "Drinks",
        range: [0.75, 5.25]
    },
    yaxis: {
        title: "% of Drinks Ordered",
        range: [0, 8]
    }
}

Plotly.newPlot("plotArea4", data, layout);






/// PRACTIVE JAVASCRIPT METHODS






// doubling the numbers in a numbered list
var numbers = [1,2,3,4,5];

// using the for.each method to iterate a list. However, cannot augment the array itself
numbers.forEach(number => {
    console.log("for Each method: " + number * 2);
});

// using the map function - this iterates through the list and can perform functions to augment the array
var doubled = numbers.map(function(num){
    return num * 2;
});
console.log("Map method: " + doubled); // returns the augmented array and stored to the variable double

// Using the FAT ARROW method
var fatArrowDubs = numbers.filter(num => num * 2);
console.log("Fat arrow method: " +fatArrowDubs);

// Using map to return an array that contains the city property from each object in the 'cities' array
var cities = [
    {
      "Rank": 1,
      "City": "San Antonio ",
      "State": "Texas",
      "Increase_from_2016": "24208",
      "population": "1511946"
    },
    {
      "Rank": 2,
      "City": "Phoenix ",
      "State": "Arizona",
      "Increase_from_2016": "24036",
      "population": "1626078"
    },
    {
      "Rank": 3,
      "City": "Dallas",
      "State": "Texas",
      "Increase_from_2016": "18935",
      "population": "1341075"
    }
];

var cityNames = cities.map(function(city){
    return city.City;
});
console.log(cityNames);


// Only return the even numbers of a list
// Using for each method and appending to a list
var numbers_list = [13,22,36,54,55];

var evenNumbers = [];

numbers_list.forEach(function(num){
    if (num % 2 == 0){
        evenNumbers.push(num)
    }
});

console.log("For Each method: " +evenNumbers); // prints out the list containing the even numbers

// Using the filter method - iterates through the array, applies function to each element, return the augmented array
var evenNums = numbers_list.filter(function(num){
    return num % 2 == 0;
});
console.log("Filter method: " +evenNums);

// Filter method to include animals with names only starting with the letter s
var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];

var startS = words.filter(function(name){
    return name.charAt(0) == 's';
});

console.log(startS);

// Using the sorted method to sort the ages of a family - if positive, the order is flipped
var familyAge = [3,2,39,37,9];

// Using fat arrow
var sortedAge = familyAge.sort((a,b) => a - b);
console.log("Fat arrow method: " +sortedAge);

var sortedAges = familyAge.sort(function(a,b){
    return a-b;
});

console.log("Non fatarrow method: " +sortedAges);

// Getting a range of objects in an array or a specific object given the index
var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];

console.log("Using the slice method: " + words.slice(0,3)) // prints everything but the last index [0-2]