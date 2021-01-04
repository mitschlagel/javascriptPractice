// Setup
const CONTACTS = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop) {
    // Only change code below this line
    for (let i = 0; i < CONTACTS.length; i++) {
        if (name == CONTACTS[i]['firstName']) {
            if (CONTACTS[i].hasOwnProperty(prop)) {
                return CONTACTS[i][prop];
            } else if (!CONTACTS[i].hasOwnProperty(prop)) {
                return 'No such property';
            }
        }
    }    

    return 'No such contact';
}
// Only change code above this line


console.log(lookUpProfile("Kristian", "lastName"));