// // STRINGS 
// let firstVariable = 'Hello World'
// let secondVariable = undefined;
// let yourName = 'Aj';

// firstVariable = 1337
// secondVariable = firstVariable
// secondVariable = 'Good Morning'

// let output =`Hello my name is ${yourName}`
// console.log(output);

// //BOOLEANS
// const a = 4;
// const b = 53;
// const c = 57;
// const d = 16;
// const e = 'Kevin';


// console.log(a < b);
// console.log(c > d);
// console.log('Name' === 'Name');

// console.log(true || false);
// console.log(false && false && false && false && false || true);
// console.log(false && false)
// console.log(e && 'Kevin');
// console.log(a + b == c)
// console.log(a && a || d);
// console.log(48 && 48);

// //the Farm
// let animal = prompt('Name an animal')
// if (animal != "cow") {
//     console.log("we don't know that animal")
// }
// else if (animal === 'cow'){
//     console.log('Moooooooooooooooooooooooo')
// }

// //Driver's Ed
// let currentAge = prompt('what is your current age?')

// if (currentAge >= 16) {
//     console.log('here are the keys')
// }
// else if (currentAge < 16) {
//     console.log("sorry you're too young")
// }
// else if (currentAge > 100) {
//     console.log("Your're too old to drive, go home")
// }

//LOOPS
// let i1 = 0
// let i2 = 10
// let i3 = 12

// // for(let i1 =0; i1 < 12, i1++;) {
//     console.log(i1)
// / }
// // for(let i2 = 10; i2 <= 400; i2++) {
//     console.log(i2)
// / }
// for(let i3 =0; i3 <= 4000; i3 += 3) {
//     console.log(i3)
// }
// console.log(i <= 100)

// //

// for(let i4 = 1; i4 <= 100; i4++) {
    // if(i4 % 2 == 0){
    //     console.log(${i4}` <-- is an even number`)
    // }
//     if (i4 > 0 && !(i4 % 5)) {
//         console.log(`i found a ${i4}. High five!`)
//     }
// }
// for(let i5 = 0; i5 <= 100; i++) {
//     if (i5 > 0 && !(i5 % 5)) {
//         console.log(`i found a ${i5}. High Five!`)
//     }
//     if (i5 < 0 && !(i5 % 3)) {
//         console.log(`i found a ${i5}. Three is a crowd`)
//     }
// }

// D
// let totalBalance = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let bank_account = 0;

// totalBalance.forEach(Element => {
//     bank_account += element
// });

// console.log(bank_account)

// // OR

// let bank_account_2 = 0;

// for(i = 0; i <= 10; i++) {
//     bank_account_2 += i;
// }
// console.log(bank_account_2)

// let bank_account_3 = 0;
// for(i =o; i >= 100; i++) {
//     bank_account_3 += i * 2
// }
// console.log(bank_account_3)
// //The Basics

//Get Even

//Give Me 5

//Savings Account



//ARRAYS & CONTROL FLOW

// quotes = ["don't get high on your own supply", "nobody owes you anything", "you vs. you"]

// //E

// const myArray = [5, 10, 100, 20]
// myArray.push['Aegon', 'Testing']
// myArray.shift[myArray]
// myArray.unshift['Bob Marley']
// myArray.pop()
// myArray.reverse()

// console.log(myArray)

// //F

// let biggieSmall = prompt('Enter any number within 1-100')
// if(biggieSmall <= 100) {
//     console.log('little number')
// }
// else if (biggieSmall >= 100) {
//     console.log('big number')
// }

// //G

// let monkeyValue = prompt('enter any number within 1-100')
// if (monkeyValue < 5) {
//     console.log('little number')
// }
// if (monkeyValue < 10) {
//         console.log('big number')
//     }

// else {
//     console.log('monkey')
// }

//H

// const kristynsCloset = [
//     "left shoe",
//     "cowboy boots",
//     "right sock",
//     "GA hoodie",
//     "green pants",
//     "yellow knit hat",
//     "marshmallow peeps"
//   ];
  
//   console.log(`kristyn is rocking that ${kristynsCloset[2]} today!`)
//   kristynsCloset.splice(6,0,'raybans')
//   console.log(kristynsCloset)
// kristynsCloset.splice(5, 1, 'stained knit hat')

// const thomsCloset = [
//     [
//       // These are Thom's shirts
//       "grey button-up",
//       "dark grey button-up",
//       "light blue button-up",
//       "blue button-up",
//     ],[
//       // These are Thom's pants
//       "grey jeans",
//       "jeans",
//       "PJs"
//     ],[
//       // Thom's accessories
//       "wool mittens",
//       "wool scarf",
//       "raybans"
//     ]
//   ];
// thomsCloset[1].pop()
// thomsCloset[1].push('Footie Pjs')
// console.log(`Thom is looking devilish in his ${thomsCloset[0][1]}, and his ${thomsCloset[1][2]}, and look at his ${thomsCloset[2][2]}`)

// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let printCool = function(name) {
//     this.name = name
// }
// name = prompt('what is your name')
// console.log(`${this.name} is cool`)

// let calculateCube = (length, width, height) => {
    
//     let volume = length * height * width
//     console.log(`this cube has a volume of ${volume}`)
// }
// calculateCube(20,20,20)

////////////////////////////////////////////////////////////////////////////

// function isVowel(letter){

// let vowels = ['a','e','i','o','u']

// for( i = 0; i < vowels.length; i++) {
//     if (letter === vowels[i]){

//         return true;
//     }
// }

// return false;

// }

// console.log("e is vowel ",isVowel('e'))

//////////////////////////////////////////////////////////////

// function getTwoLengths (a,b) {
//        let arr = []
//        for (var i = 0; i < arguments.length; i++) {
//         arr.push(arguments[i].length)
//        }

//        return arr;
//     }

//     console.log(getTwoLengths('sociology', 'philosophy'))

//     //Simplified version
//     //getTwoLengths
// function getTwoLengths(string1, string2){
//     return [string1.length, string2.length];
// }

// //Example 2

//     function getMoreLengths (a,b,c,d) {
//         let arr = []
//         for (var i = 0; i < arguments.length; i++) {
//          arr.push(arguments[i].length)
//         }
 
//         return arr;
//      }

//      console.log(getTwoLengths('sociology', 'philosophy', 'psychology', 'pizza'))
//  function getMultipleLengths(strings){
//     const output = []
//     for(let string of strings) {
//         output.push(string.length)
//     }
//     return output
//  }

//  console.log(getMultipleLengths('charles', 'hector', 'aj', 'rico'))

    //  //Max of three
    //  function maxOfThree(a,b,c) {
    //     let max = a;
    //     if(b > max) max = b
    //     if(c > max) max =c
    //     return max;
    //  }
    //  console.log(maxOfThree(907,67, 19)) 

     ///////////////////////////////////////////////////

    //  function printLongestWord(arr) {
    //     let aWord = ''
    //     for (let i = 0; i < arr.length; i++) {

    //         if (aWord.length < arr[i].length) {
    //             aWord = arr[i]
    //         }
    //     }

    //     return aWord
    //  }

    //  console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));

    ////////////////////////////////////////////////////////

    let userOne = {
         name: 'jason',
         email: 'jason@-0.com',
         age: 30,
        purchased: []
        
    }
userOne.age = ++userOne.age
    userOne.email = 'jason@newEmail.com';
    console.log(userOne)

userOne.location = ('Denver,CO')

userOne.purchased.push('carbohydrates', 'peace of mind', 'Merino jodhpurs')

userOne.friend = {
  name: "Batman",
  age: 85,
  location: 'Denver, CO',
  purchased: []
}

console.log(userOne.friend.name)
console.log(userOne.friend.location)

userOne.friend.age = 55;

userOne.friend.purchased.push('the one ring')
userOne.friend.purchased.push('A latte')

console.log(userOne.friend.purchased[1])

for(let i = 0; i < userOne.purchased.length; i++) {
console.log(userOne.purchased[i])
}

for(let i = 0; i < userOne.friend.purchased.length; i++) {
  console.log(userOne.friend.purchased[i])
}

   function updateUser() {
    userOne.age = ++userOne.age;
    console.log(userOne.name.toUpperCase())
   }
   
updateUser()

function oldAndLoud(person){
person.age = ++person.age;
    console.log(person.name.toUpperCase())
   }

   oldAndLoud(userOne)