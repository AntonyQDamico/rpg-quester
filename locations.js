/*
TODOs:
* Figure out structure for combining with generateQuest.js
* Make locations objects
* Pick a random location function
* 
*/

const locationsArr = [];

function locationFactory(type, subLocation, treasure, resources){
    let locationObject = {
        type,
        subLocation,
        treasure,
        resources
    }
    locationsArr.push(locationObject);
    return locationObject
}

function getLocation(){
    const randomLocation = Math.floor(Math.random() * locationsArr.length)
    return locationsArr[randomLocation]
}

locationFactory('forest', ['glade','deep woods','thicket'], 'hermit shack', ['flowers','wood','mushrooms']);
locationFactory('swamp', ['freshwater','estuary','marshland'], 'hidden temple', ['fish','herbs','peat']);
locationFactory('mountain', ['mines','peak','cave'], 'city of gold', ['ore','stone','jems']);

//Testing lines
// console.log(locationsArr);
// console.log(getLocation());
