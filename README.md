# RPG Random Quest Generator
> Get a random RPG quest hook. Find your next adventure, help gather resources, or defend the town you don't know what quest you'll get.

## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)

## General info
Codecademy Project 'Mixed Messages'
The prompt for this project is to create a random message generator that is made up of at least three different pieces of data.

I took this project to make the message a character would say to you as they provide you a new quest.
The quests can be of three major architypes:
* Exploration
* Gathering Materials
* Hunting Monsters
Information for the quest is pulled from two major catagories:
* Locations
* Monsters

### Project Goals
1. Get more experience working with git and github
2. Write clear project documentation
3. Learn how to include information from differnt files when running the main project file

### General Structure/Flow
1. Pick a random quest type. This determines the output message structure.
2. Pick a location. All locations will work for all quest types.
3. Pick a monster, depends on location. Some monsters can only be found in specific locations.
4. Pull information from chosen location and monster objects.
5. Combine information into final message
6. Print final message to command line

## Technologies
Project created with:
* JavaScript
* Node v14.16.0

## Setup
Run the program by calling the generateQuest.js file in the console while other supplementary files (locations.js and monsters.js) are in the same directory.

## Code Examples
`node generateQuest.js`

## Features
List of features ready and TODOs for future development
* no features yet

To-do list:
* Pick a random quest type
* Pick a random location
* Pick a random monster based on the location picked. Some monsters will only work with some locations.
* Make output message templates
* Generate location objects/database {zone, sub-zone, resourse list}
* Generate monster objects/database {type, loot list, location, group size}

## Status
Project is: _in progress_

## Inspiration
Codecademy Project 'Mixed Messages'

## Contact
Created by AntonyQDamico
