const names = require('./names');
const hobbies = require('./hobbies');

function peopleInfo () {
    const objName = names('Francesco', 'Vita')
    return {
        firstName: objName.firstName,
        lastName: objName.lastName,
        hobbies: hobbies('calcio', 'cinema', 'kart')
    }
};

console.log(peopleInfo());