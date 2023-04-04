// let a = 'hi my name is harshil';
// if(a){
//     console.log(`a is ${a}`);
// }
// a += 'hey you!';
// if(a){
//     console.log(`a is ${a}`);
// }


// let food = ['dosa','panipuri','pizza','pavbhaji']

// let a = food.includes('panipuri',2);
// console.log(a);


// function diceRoll(){
//     console.log(Math.floor(Math.random()*6 + 1));
// }

// diceRoll();
// diceRoll();
// diceRoll();
// diceRoll();
// diceRoll();
// diceRoll();


// function isValidPassword(password, username){
//     if(password.length >= 8 && password.indexOf(' ') === -1 && password.indexOf(username) === -1){
//         return true;
//     }
//     return false;
// }


// console.log(isValidPassword('89Fjj1nms','dogLuvr'));
// console.log(isValidPassword('dogluvr123!','dogluvr'));



// function averageOfNumbers(arr){
//     let total = 0;
//     for(let i of arr){
//         total += i;
//     }
//     return total/arr.length;
// }

// console.log(averageOfNumbers([0,50]));
// console.log(averageOfNumbers([75,76,80,95,100]));


// function isPanagram(s){
//     s = s.toLowerCase();
//     let sentence = "abcdefghijklmnopqrstuvwxyz";
//     for(let i of sentence){
//         if(s.indexOf(i) === -1){
//             return false;
//         }
//     }
//     return true;
// }


// console.log(isPanagram('The quick brown Fox jumps over the lazy dog'));
// console.log(isPanagram('The quick brown Fox jumps over the dog'));


// function getCard(){
//     let v = [1,2,3,4,5,6,7,8,9,10,'J','Q','K','A'];
//     let s= ['clubs','speads','hearts','diamonds'];
//     const obj = {
//         value: v[Math.floor(Math.random()*v.length)],
//         suit: s[Math.floor(Math.random()*s.length)]
//     }
//     return obj;
// }

// console.log(getCard());

// function func(){
//     alert('congrates! you spend 5000 ms in this site');
// }

// setTimeout(func,5000);


// const books = [{
//     title: 'Good Omens',
//     authors: ['Terry Pratchett', 'Neil Gaiman'],
//     rating: 4.25,
//     genres: ['fiction', 'fantasy']
//   },
//   {
//     title: 'Changing My Mind',
//     authors: ['Zadie Smith'],
//     rating: 3.83,
//     genres: ['nonfiction', 'essays']
//   },
//   {
//     title: 'Bone: The Complete Edition',
//     authors: ['Jeff Smith'],
//     rating: 4.42,
//     genres: ['fiction', 'graphic novel', 'fantasy']
//   },
//   {
//     title: 'American Gods',
//     authors: ['Neil Gaiman'],
//     rating: 4.11,
//     genres: ['fiction', 'fantasy']
//   },
//   {
//     title: 'A Gentleman in Moscow',
//     authors: ['Amor Towles'],
//     rating: 4.36,
//     genres: ['fiction', 'historical fiction']
//   },
//   {
//     title: 'The Name of the Wind',
//     authors: ['Patrick Rothfuss'],
//     rating: 4.54,
//     genres: ['fiction', 'fantasy']
//   },
//   {
//     title: 'The Overstory',
//     authors: ['Richard Powers'],
//     rating: 4.19,
//     genres: ['fiction', 'short stories']
//   },
//   {
//     title: 'The Way of Kings',
//     authors: ['Brandon Sanderson'],
//     rating: 4.65,
//     genres: ['fantasy', 'epic']
//   },
//   {
//     title: 'Lord of the flies',
//     authors: ['William Golding'],
//     rating: 3.67,
//     genres: ['fiction']
//   }
// ]

// const getBooks = books.filter(book => (
//     book.genres.includes('fiction')
// ))



// const reviews = [5,6,3,4,5];

// const f = (arr) => {
//   const sum = arr.reduce((sum,r) => sum +r);
//   const max = Math.max(...arr);
//   const min = Math.min(...arr);
//   const avg = sum/arr.length;
//   return {
//     sum,
//     max,
//     min,
//     avg
//   }
// }

// const ans = f(reviews);


console.log(this);