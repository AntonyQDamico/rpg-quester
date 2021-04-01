/*
 * import needed information from the locations and monsters files
 * files should be in the same directory as generateQuest.js
 * requires package.json to have "type" : "module"
 */
import * as locations from './locations.js'
import * as monsters from './monsters.js'


//defines the quest types that can be randomly chosen
const questTypes = ['Explore','Gather','Hunt'];

/*
 * generateRandomQuest picks a random quest using information from the quest types, locations, and monsters
 * @param {none}                 No parameters provided
 * @return {string}              returns the final quest message as a string, also prints the message to the console
 */
function generateRandomQuest() {
    //pick a random quest type, random location, and random monster in that location
    const chosenQuest = questTypes[Math.floor(Math.random() * questTypes.length)];
    const chosenLocation = locations.getLocation();
    const chosenMonster = monsters.getMonster(chosenLocation.type);

    //pick random resource and sub-location from the location
    const chosenSubLocation = locations.getSubLocation(chosenLocation);
    const chosenResource = locations.getResource(chosenLocation);
    //pick random monster part and monster group size of the monster
    const chosenMonsterPart = monsters.getMonsterPart(chosenMonster);
    const chosenMonsterNumber = monsters.getMonsterNumber(chosenMonster);

    //find which quest type was chosen and provide a quest using the chosen location and monster information
    switch (chosenQuest){
        case 'Explore':
            //Explore quest has you find the treasure/dungeon in a sub-location of the chosen location, also warns of nearby monsters
            var finalQuestString = `There have been rumors about a ${chosenLocation.treasure} in the ` 
            + `${chosenSubLocation} of the ${chosenLocation.type}. You should go check it out. ` 
            + `Watch out though, I have heard about ${chosenMonster.type} in the area.`;
            console.log(finalQuestString);
            return finalQuestString;

        case 'Gather':
            //Gather quest has you find resources and monster parts from a location
            var finalQuestString = `We are running low on ${chosenResource} and ${chosenMonsterPart}. `
            + `Could you go get some from the ${chosenLocation.type}?`;
            console.log(finalQuestString);
            return finalQuestString;

        case 'Hunt':
            //Hunt quest has you deal with a group of monsters, brining back some monster parts as proof
            var finalQuestString = `${chosenMonster.type} have been harassing the village. I need you `
            + `to deal with ${chosenMonsterNumber} of them to keep their numbers in check. Bring back `
            + `some ${chosenMonsterPart} as proof.`;
            console.log(finalQuestString);
            return finalQuestString;

        default:
            //defaults to no available quests
            var finalQuestString = 'I have no more quests for you.';
            console.log(finalQuestString);
            return finalQuestString;
    }

}
//generate the random quest and print to the console
generateRandomQuest();

//Testing lines
// generateRandomQuest();
// generateRandomQuest();
