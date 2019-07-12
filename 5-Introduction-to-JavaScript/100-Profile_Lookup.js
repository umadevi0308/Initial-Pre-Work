/*This lesson tells us how the lookUp functions checks the Profile. 
lookUp function  checks if the  name is an actual contact's firstName and the given property (prop) is a property of that contact.*/
//Setup
var contacts = [
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

function lookUpProfile(name, prop){
// Only change code below this line
  for (var i = 0; i < contacts.length; i++) {
    if(contacts[i].firstName === name) {
        return contacts[i][prop] || "No such property";
    }
}
return "No such contact";
}

// Change these values to test your function
var data = lookUpProfile("Kristian", "likes");
