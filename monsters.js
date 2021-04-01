//holds all of the monster objects
const monsterArr = [];

/*
 * locationFactory combines the provided information into a monster object and then adds it to the monster array
 * @param {string}  type         The name of the monster
 * @param {array}   monsterParts Loot or resources that can be gained by defeating the monster, array of strings
 * @param {array}   habitat      The locations that a monster can be found in, array of strings that match "types" in location array
 * @param {array}   groupSize    Defines how large a group of monsters can be. Two Numbers, first is minimum size, second is maximum
 * @return {object}              Object that defines a monster, containing the parameters above
 */
function monsterFactory(type, monsterParts, habitat, groupSize){
    //combine the provided parameters into an object
    let monsterObject = {
        type,
        monsterParts,
        habitat,
        groupSize
    }
    //add the monster object to the monsters array
    monsterArr.push(monsterObject);
    //return the monster objected created for use
    return monsterObject;
}
/*
 * getMonster picks a random monster from the given location
 * @param {string}  location     The location to pull a random monster from
 * @return {object}              Object that defines a monster
 */
function getMonster(location){
    //filter the monster array down to just those in the provided location
    const localMonsters = monsterArr.filter(eachMonster => eachMonster.habitat.includes(location));
    //get a random index for monsters in the provided location
    const randomMonster = Math.floor(Math.random() * localMonsters.length);
    //return the monsters object in the index of the random number
    return localMonsters[randomMonster];
}
/*
 * getMonsterPart picks a random monster part from the given monster
 * @param {object}  monster      The monster to pull a random monster part from
 * @return {string}              The chosen monster part
 */
function getMonsterPart(monster){
    //get a random index for the monster parts array inside of the monster object
    const randomMonsterPart = Math.floor(Math.random() * monster.monsterParts.length);
    //return the monster part in the index of the random number
    return monster.monsterParts[randomMonsterPart];
}
/*
 * getMonsterNumber picks a random  group size of the given monster
 * @param {object}  monster      The monster to pull a random group size for
 * @return {number}              The number of monsters in the group
 */
function getMonsterNumber(monster){
    //get a random number between minimum group size and max group size
    const randomMonsterNumber = Math.floor(Math.random() * (monster.groupSize[1] - monster.groupSize[0])) + monster.groupSize[0];
    //return the random number
    return randomMonsterNumber;
}
//creating six generic monsters
monsterFactory('skeletons',['bones', 'arrows'],['forest','swamp'],[3,8]);
monsterFactory('bats',['bat wings','guano'],['swamp','mountain'],[1,4]);
monsterFactory('goblins',['coin','rags','teeth'],['forest', 'mountain'],[5,10]);
monsterFactory('cyclopses',['toes','rags','meat'],['mountain'],[1,1]);
monsterFactory('bandits',['coin','weapons','armor'],['forest'],[3,5]);
monsterFactory('spiders',['silk','spider fangs','glands'],['swamp'],[5,7]);

//exporting the monsters array and get functions to be used in generateQuest.js
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
