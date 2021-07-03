// const person = {
//     name: 'mike',
//     age: 26,
//     location: {
//         city: 'Hutt city',
//         temp: 16
//     }
// }
// const {name: firstName = 'Anonymous',age} = person;

// console.log(`${firstName} is ${age}.`);

// const {temp: temperature, city} = person.location
// if (city && temperature){
//     console.log(`It's ${temperature}c in ${city}`);
// }


// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holidy',
//     publisher: {
//         name: 'Penguin'
//     }
// }

// const {name: publisherName = 'Self-Published'} = book.publisher;

// console.log(publisherName);


// const address = ['1299 S Juniper Street', 'The Hutt', 'Wellington', '5012'];
// const [, , region, ] = address;
// console.log(`You are in ${region}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [drink, , medium] = item;

console.log(`A medium ${drink} costs ${medium}`);
