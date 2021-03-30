/*
TODOs:
* Figure out structure for combining with generateQuest.js
* Make monster objects
* Pick a random monster function
* 
*/

const monsterArr = [];

function monsterFactory(type, monsterParts, habitat, groupSize){
    let monsterObject = {
        type,
        monsterParts,
        habitat,
        groupSize
    }
    monsterArr.push(monsterObject);
    return monsterObject;
}

function getMonster(location){
    const localMonsters = monsterArr.filter(eachMonster => eachMonster.habitat.includes(location));
    const randomMonster = Math.floor(Math.random() * localMonsters.length);
    return localMonsters[randomMonster];
}

function getMonsterPart(monster){
    const randomMonsterPart = Math.floor(Math.random() * monster.monsterParts.length);
    return monster.monsterParts[randomMonsterPart];
}

function getMonsterNumber(monster){
    const randomMonsterNumber = Math.floor(Math.random() * (monster.groupSize[1] - monster.groupSize[0])) + monster.groupSize[0];
    return randomMonsterNumber;
}

monsterFactory('skeletons',['bones', 'arrows'],['forest','swamp'],[3,8]);
monsterFactory('bats',['bat wings','guano'],['swamp','mountain'],[1,4]);
monsterFactory('goblins',['coin','rags','teeth'],['forest', 'mountain'],[5,10]);
monsterFactory('cyclopses',['eye','rags','meat'],['mountain'],[1,1]);
monsterFactory('bandits',['coin','weapons','armor'],['forest'],[3,5]);
monsterFactory('spiders',['silk','spider fangs','glands'],['swamp'],[5,7]);

export {monsterArr, getMonster, getMonsterPart, getMonsterNumber};

//Testing lines
// console.log(monsterArr);
// console.log(getMonster('swamp'))
// console.log(getMonster('forest'))
// console.log(getMonster('mountain'))
// console.log(getMonsterPart(getMonster('swamp')));
// console.log(getMonsterPart(getMonster('forest')));
// console.log(getMonsterPart(getMonster('mountain')));
// console.log(getMonsterNumber(getMonster('swamp')));
// console.log(getMonsterNumber(getMonster('forest')));
// console.log(getMonsterNumber(getMonster('mountain')));
