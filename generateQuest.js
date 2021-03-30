/*
TODOs:
* Pick a random quest function
* Make quest templates
* Pull information from chosen location/monster
* Print final message
*/

import * as locations from './locations.js'
import * as monsters from './monsters.js'

const questTypes = ['Explore','Gather','Hunt'];

function generateRandomQuest() {
    const chosenQuest = questTypes[Math.floor(Math.random() * questTypes.length)];
    const chosenLocation = locations.getLocation();
    const chosenMonster = monsters.getMonster(chosenLocation.type);

    const chosenSubLocation = locations.getSubLocation(chosenLocation);
    const chosenResource = locations.getResource(chosenLocation);
    const chosenMonsterPart = monsters.getMonsterPart(chosenMonster);
    const chosenMonsterNumber = monsters.getMonsterNumber(chosenMonster);

    var finalQuestString = '';

    switch (chosenQuest){
        case 'Explore':
            finalQuestString = `There have been rumors about a ${chosenLocation.treasure} in the ${chosenSubLocation} of ${chosenLocation.type}. \
            You should go check it out. Watch out though, I have heard about ${chosenMonster.type} in the area.`;
            console.log(finalQuestString);
            return finalQuestString;

        case 'Gather':
            finalQuestString = `We are running low on ${chosenResource} and ${chosenMonsterPart}. Could you go get some from ${chosenLocation.type}?`;
            console.log(finalQuestString);
            return finalQuestString;

        case 'Hunt':
            finalQuestString = `${chosenMonster.type} have been harassing the village. I need you to deal with ${chosenMonsterNumber} \
            of them to keep them in check. Bring back some ${chosenMonsterPart} as proof.`;
            console.log(finalQuestString);
            return finalQuestString;

        default:
            finalQuestString = 'I have no more quests for you.';
            console.log(finalQuestString);
            return finalQuestString;
    }

}

generateRandomQuest();

//Testing lines
generateRandomQuest();
generateRandomQuest();
