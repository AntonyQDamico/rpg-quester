/*
TODOs:
* Pick a random quest function
* Make quest templates
* Pull information from chosen location/monster
* Print final message
*/

import * as locations from locations.js
import * as monsters from monsters.js

const questTypes = ['Explore','Gather','Hunt']; // Quest types available

function generateRandomQuest() {
    const chosenQuest = questTypes[Math.floor(Math.random() * questTypes.length)];
    const chosenLocation = locations.getLocation();
    const chosenMonster = monsters.getMonster(chosenLocation);
    var finalQuestString = '';

    switch (chosenQuest){
        case 'Explore':
            finalQuestString = `There have been rumors about a ${treasure} in the ${subLocation} of ${chosenLocation}. \
            You should go check it out. Watch out though, I have heard about ${chosenMonster} in the area.`;
            console.log(finalQuestString);
            return finalQuestString;

        case 'Gather':
            finalQuestString = `We are running low on ${resource} and ${monsterPart}. Could you go get some from ${chosenLocation}?`;
            console.log(finalQuestString);
            return finalQuestString;

        case 'Hunt':
            finalQuestString = `${chosenMonster} have been harassing the village. I need you to deal with ${monsterNumber} \
            of them to keep them in check. Bring back some ${monsterPart} as proof.`;
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
