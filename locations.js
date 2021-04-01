//holds all of the location objects
const locationsArr = [];

/*
 * locationFactory combines the provided information into a location object and then adds it to the location array
 * @param {string}  type         The name of location
 * @param {array}   subLocation  Sub-regions within the locaion, array of strings
 * @param {string}  treasure     The main treasure/dungeon found in the location
 * @param {array}   resources    Resources found within the location, array of strings
 * @return {object}              Object that defines a location, containing the parameters above
 */
function locationFactory(type, subLocation, treasure, resources){
    //combine given parameters into an object
    let locationObject = {
        type,
        subLocation,
        treasure,
        resources
    }
    //add the new object to the locations array
    locationsArr.push(locationObject);
    //return the object in case it needs to be used
    return locationObject
}
/*
 * getLocation picks a random location from the locations array
 * @param {none}                 No parameters provided
 * @return {object}              Object that defines a location
 */
function getLocation(){
    //get a random index of locations array
    const randomLocation = Math.floor(Math.random() * locationsArr.length)
    //return the location object in the index of the random number
    return locationsArr[randomLocation]
}
/*
 * getSubLocation picks a random sub-location from the location object provided
 * @param {object}               Location object
 * @return {string}              The chosen sub-location
 */
function getSubLocation(location){
    //get a random index for sub-locations array inside of the location object
    const randomSubLocation = Math.floor(Math.random() * location.subLocation.length);
    //return the sub-location string in the index of the random number
    return location.subLocation[randomSubLocation];
}
/*
 * getResource picks a random resource from the location object provided
 * @param {object}               Location object
 * @return {string}              The chosen resource
 */
function getResource(location){
    //get a random index for the resource array inside of the location object
    const randomResource = Math.floor(Math.random() * location.resources.length);
    //return the resource string in the index of the random number
    return location.resources[randomResource];
}
//creating three generic locations
locationFactory('forest', ['glade','deep woods','thicket'], 'hermit shack', ['flowers','wood','mushrooms']);
locationFactory('swamp', ['freshwater','estuary','marshland'], 'hidden temple', ['fish','herbs','peat']);
locationFactory('mountain', ['mines','peak','cave'], 'city of gold', ['ore','stone','jems']);

//exporting the location array, and the get functions to be used in generateQuest.js
export {locationsArr, getLocation, getSubLocation, getResource};

//Testing lines
// console.log(locationsArr);
// console.log(getLocation());
// console.log(getSubLocation(getLocation()));
// console.log(getResource(getLocation()));
