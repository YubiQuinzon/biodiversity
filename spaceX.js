// Making API calls frome spaceX

// Defining the SpaceX API url
const url = "https://api.spacexdata.com/v2/launchpads";

// Making a call to the API, retrieving the data, printing it to the console
d3.json(url).then(receivedData => console.log(receivedData));
    // d3.json() returns a JS promise by placing a API call - once api call completed proceeds to next to '.then'
    // recievedData is the arbitrary paramater name that the data is assigned to
    // anything after the fat arrow is the function that is applied the recieved data

// Print the first object in the array of objects from the first data
d3.json(url).then(spaceXResults => console.log(spaceXResults[0]));

// Printing just the full name
d3.json(url).then(spaceXResults => console.log(spaceXResults[0].full_name));

// Because location is a dictionary, we can also input a key to get the value for latitude
d3.json(url).then(spaceXResults => console.log(spaceXResults[0].location.latitude));