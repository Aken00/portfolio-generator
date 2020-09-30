const profileDataArgs = process.argv.slice(2, process.argv.length);

const [name, github] = profileDataArgs;

// const name = profileDataArgs[0];
// const github = profileDataArgs[1];

const fs = require('fs');

const generatePage = require('./src/page-template.js');

// console.log(profileDataArgs);

// // const animalArray = ['dog', 'cat', 'pig'];

// // animalArray.push('cow');

// // const personObj = {
// //   name: 'Lernantino',
// //   age: 99
// // };

// // personObj.age = 100;
// // personObj.occupation = 'Developer';

// // Notice the lack of parentheses around the `profileDataArr` parameter?
// const printProfileData = profileDataArr => {
//   // This...
//   for (let i = 0; i < profileDataArr.length; i += 1) {
//     console.log(profileDataArr[i]);
//   }

//   console.log('================');

//   // Is the same as this...
//   profileDataArr.forEach(profileItem => 
//     console.log(profileItem));

//   };

// const message = 'Hello Node!';

// if (true === true) {
//   const message = 'Hello ES6!';
//   let sum = 5;
//   sum += 10;
//   console.log(message);
//   console.log(sum);
// }

// console.log(message);
// console.log(sum);


// const generatePage = (userName, githubName) => `Name: ${userName}, Github: ${githubName}`;



fs.writeFile('./index.html', generatePage(name, github), err => {
  if (err) throw new Error(err);

  console.log('Portfolio complete! Check out index.html to see the output!');
});