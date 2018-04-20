//Updating objects in an immutable way
const meal = {
    id: 1,
    description: 'Breakfast',
};

const updatedMeal = {
    ...meal, //spread operator. Node.js does not support spread operator on objects, it is only meant to be for arrays/iterables: https://stackoverflow.com/questions/40066731/node-v6-failing-on-object-spread
    //description: 'Brunch' //this will overwrite 'Breakfast'
    calories: 600,
};

console.log (meal, updatedMeal);

//excercise: https://jsbin.com/desugo/1/edit?js,console

//-------------------------------------------------

//Destructuring + Rest for deleting a property or picking only the properities you need

const { description, calories } = updatedMeal;

console.log(description, calories);

const { id, ...mealWithoutId } = updatedMeal; //the id is picked in a seperate variable called id and the rest of the elements are stored in mealWithoutId object

console.log(mealWithoutId);


// excercise: https://jsbin.com/sudefuc/edit?js,console

const meal2 = {
    description: 'Dinner',
  };
  // 1. In an Immutable way, add a property to the
  // meal called calories setting it's value to 200,
  // then log the result to the console
  
  const mealWithCalories = {
    ...meal2,
    calories: 200
  };
  
  console.log(mealWithCalories);
  
  // 2. In an Immutable way, increase the calories 
  // by 100 and print the result to the console
  
  const mealWithIncreasedCalories = {
    ...mealWithCalories,
    calories: mealWithCalories.calories + 100,
  };
  
  console.log(mealWithIncreasedCalories);
  
  // 3. In an Immutable way, remove the calories property and log the result to the console
  
  const {calories2, ...mealWithOutCalories} = mealWithIncreasedCalories;
    
  console.log(mealWithOutCalories);


//----------------------------------------------

// Updating arrays in an immutable way
const meals = [
  {id: 1, description: 'Breakfast', calories: 420 },  
  {id: 2, description: 'Lunch', calories: 520 },  
];

const meal3 = {
    id: 3,
    description: 'Snacks',
    calories: 180,
};

const updatedMeals = [...meals, meal3];

console.log(meals, updatedMeals);


// Updating arrays using map function

const numbers = [1, 2, 3];

function double(number) {
    return number * 2;
}

const doubleNumbers = numbers.map(double);
console.log(doubleNumbers);

const updatedMealsDescription = updatedMeals.map(updateDescription);

function updateDescription(meal) {
    if(meal.id === 2) { //just for this example
        return {
            ...meal,
            description: 'Early Lunch',
        }
    } 
    return meal;
}

console.log(updatedMealsDescription);

//-------------------------------------------

// Removing an item from an array in an immutable way using filter function

const filteredMeals = updatedMeals.filter(function(meal) {
    return meal.id !== 1;
});

console.log(filteredMeals);

//excercise: https://jsbin.com/sitibof/1/edit?js,console

// 1. create a constant named friends, 
// which is an array that contains 2 
// names of your choosing.

const friends = ['Rashid', 'Noor'];

// 2. Create a new constant named updatedFriends, 
// which includes the friends array values plus 
// one additional name

const updatedFriends = [...friends, 'Tim'];

console.log(updatedFriends);

// 3. Create a new constant named friendNameLengths, 
// which is based on the array updatedFriends, 
// but instead of having the friends names, 
// have the array store the length of each persons name.

const friendNameLengths = updatedFriends.map((friend) => {
  return friend.length;
});

console.log(friendNameLengths);

// 4. Create a new constant named shorterNamedFriends, 
// which will be a list of the friends except the friend with the longest name.

const shorterNamedFriends = updatedFriends.filter((friend) => {
  return friend.length < 6;
});

console.log(shorterNamedFriends);

// 5. Print each variable to the console.

// Solution can be seen at: 
// https://jsbin.com/vutatag/1/edit?js,console


//-----------------------------------------
// Summarize info on arrays using reduce function

const numbers2 = [1, 2, 3];

function sum(x, y) {
    return x + y;
}

const total = numbers2.reduce(sum);

//Note: Watch the udemy for video for further clearance on the topic: https://www.udemy.com/functional-programming-for-beginners-with-javascript/learn/v4/t/lecture/9270694?start=0

//Challenge: Calculate the average grade of the following array

const grades = [60, 55, 80, 90, 99, 92, 75, 72];

const sum2 = (acc, grade) => {
    return acc + grade;
}

const count = grades.length;

const total2 = grades.reduce(sum2);

console.log(total2, total2 / count);

//now count how many A's, B's, ... are there in the grades array

const groupByGrade = (acc, grade) => {
    const { a = 0, b = 0, c = 0, d = 0, f = 0 } = acc; //destructuring the grades from the accumulator with a default value of 0
    if(grade >= 90) {
        return { ...acc, a: a + 1 };
    } else if (grade >= 80) {
        return { ...acc, b: b + 1 };
    } else if (grade >= 70) {
        return { ...acc, d: d + 1 };
    } else {
        return { ...acc, f: f + 1 };
    }
}

const letterGradeCount = grades.reduce(groupByGrade, {}); //the second param to reduce is the value of accumulator.

console.log(letterGradeCount);


// excercise: https://jsbin.com/mibipen/1/edit?js,console

const reviews = [4.5, 4.0, 5.0, 2.0, 1.0, 5.0, 3.0, 4.0, 1.0, 5.0, 4.5, 3.0, 2.5, 2.0];

const groupByReview = (acc, review) => {
    const count = acc[review] || 0; // || operator is used to check if a value is defined, otherwise will get the value provided after it.
    return { ...acc, [review]: count + 1 };
}
  
const countGroupByReview = reviews.reduce(groupByReview, {});

console.log(countGroupByReview);


//TIP: Explain computed property names
//Computed property names for objects: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#Computed_property_names
// Computed property names (ES2015)
var i = 0;
var a = {
  ['foo' + ++i]: i,
  ['foo' + ++i]: i,
  ['foo' + ++i]: i
};

console.log(a)

var param = 'size';
var config = {
  [param]: 12,
  ['mobile' + param.charAt(0).toUpperCase() + param.slice(1)]: 4
};

console.log(config); // {size: 12, mobileSize: 4}


//-------------------------------
//Introduction to currying

/*
function greet(greeting, name) {
    return `${greeting} ${name}`;
}
*/

const greet = (greeting) => {
    return function(name) {
        return `${greeting} ${name}`;
    }    
}

console.log(greet('Good morning')('James'));

const friends2 = ['Ahmad', 'Rashid', 'Tim'];

const friendGreetings = friends2.map(greet('Good morning'));

console.log(friendGreetings)

//Higher order functions are those which takes a function as a parameter or returns a function.
//i.e. map is a higher order function

//Closures are functions that access and use variables that are not directly passed into the function because of the placement of the function relative to the variables; i.e. in the greet function, the returned function is a closure as it accesses greeting param which was not passed to it directly. 

//Excercise: https://jsbin.com/yepovem/1/edit?js,console

// Functional Programming for Beginners Excercise

// create transforms to go from studentGrades, to studentFeedback

const studentGrades = [ 
    {name: 'Joe', grade: 88},
    {name: 'Jen', grade: 94},
    {name: 'Steph', grade: 77},
    {name: 'Allen', grade: 60},
    {name: 'Gina', grade: 54}, 
  ];
 
const messages = {
    a: 'Excellent Job',
    b: 'Nice Job',
    c: 'Well done',
    d: 'What happened',
    f: 'Not good',
  };

function letterGrade(points){
    if(points >= 90){
      return 'a';
    } else if (points >= 80){
      return 'b'; 
    } else if (points >= 70){
      return 'c'; 
    } else if (points >= 60){
      return 'd'; 
    } else {
      return 'f'; 
    }
  }  

function feedBack(feedBackRules) {
    return function(student) {
        const grade = letterGrade(student.grade);
        const message = feedBackRules[grade];

        return `${message} ${student.name}, you got ${grade}`;
    }
}
//Expected output
/*
studentFeedback === [
  'Nice Job Joe, you got an b', 
  'Excellent Job Jen, you got an a', 
  'Well done Steph, you got an c', 
  'What happened Allen, you got an d', 
  'Not good Gina, you got an f'
]
*/

//Currying
//Currying is the transformation that we did over the greet function by transforming it from two params to one and moved the other param to a function that is returned by greet function.
//

//Partial Application
//Specializing a more general function for example:

//our general function
function greet2(greeting) {
    return function (name) {
        return `${greeting} ${name}`;
    }
}

//here we are specializing it
const morningGreetingFunction = greet('Good morning'); //partial application of a curried function
const eveningGreetingFunction = greet('Good evening');

console.log(morningGreetingFunction('Tim'));
console.log(eveningGreetingFunction('Tim'));

//Rewriting the greet2 function using Ramda JS library

const greet3 = R.curry((greeting, name) => `${greeting} ${name}`);

//this way
console.log(greet3('Good morning')('Aemal'));

//or this way (the Ramda way)
console.log(greet3('Good morning', 'Aemal'));

const morningGreetingFunction2 = greet3('Good morning');
const eveningGreetingFunction2 = greet3('Good evening');

console.log(morningGreetingFunction2('Tim'));
console.log(eveningGreetingFunction2('Tim'));

//or with map function

const friends3 = ['Khan', 'Noor', 'Tim'];

const friendsGreetings = friends3.map(greet3('Good morning'));

console.log(friendsGreetings);

//-----------------------------------------------
//Pure functions
/*

It is a function that creates and returns value based on the input parameters and causing no side effects (i.e. does not mutate the params)

Pure Function Rules:
1. Must have input parameters
2. Must not use any stateful values (i.e. should not depend on the values outside the function or params that could change over time)
3. Must return a value based on the input parameters
4. Must not cause any side effects (i.e. the code should not cause change outside of itself)

*/
function add(x, y) {
    return x + y;
}

const add2 = (x, y) => x + y;

/*

Why use pure functions?
1. Reusable
2. Composable
3. Easy to test
4. Easy to cache
5. more...

*/

// Function composition
// It is about making new functions out of other functions

const sentence = 'The only failure is giving up!';

const wordList = R.split(' ', sentence);

console.log(wordList);

const wordCount = R.length(R.split(' ', sentence));

console.log(wordCount);

const countWords = R.compose(R.length, R.split); //composing two functions into one from right to left

console.log(countWords(' ', sentence));

const countWords2 = R.compose(R.length, R.split(' ')); //as all Ramda functions are curried, we can use the magic of currying

console.log(countWords2(sentence));


//pipe function
//it is almost exactly like compose but it is read from left to right

const countWords3 = R.pipe(R.split(' '), R.length);
console.log(countWords3(sentence));

//Excercise: https://jsbin.com/gopaned/1/edit?js,console

// NOTE: If you get stuck, you can get some hints from 
// the following jsbin: 
// https://jsbin.com/gikuwol/edit?js,console

//Solution: https://jsbin.com/qeraloxode/6/edit?js,console

// Count how many numbers there are in the following 
// sentence, using functional composition

const sentence2 = 'PechaKucha is a presentation style in which 20 slides are shown for 20 seconds each (6 minutes and 40 seconds in total).';

/*
//The ugly way
const test = numbersInString(sentence);

const test2 = test.map(function(a) {
  return parseInt(a);
})

const test3 = test2.filter(function(a) {
  return Number.isInteger(a)
})


console.log(test3.length)
*/

//the beautiful way

const numbersInString = R.pipe(
  R.split(''), 
  R.map(parseInt), 
  R.filter(Number.isInteger), 
  R.length
);

console.log(numbersInString(sentence2));

expect(numbersInString(sentence2)).toBe(7); 

console.log('If you see this printed in the console, the test passed!');

//Check out Tachyons CSS library: http://jsbin.com/razofij/edit?html,output

/*
Note: As a functional programmer you are interested in 
1) Data (immutable data)
2) Functions (pure functions)

One thing that seperates object oriented programmers from functional programmers is that functional programmers don't combine data with functions.

We will use hyperscript and hyperscript-helpers libraries to transfoer our data into HTML.

*/

//Examples of hyperscript-helpers:

const myHeading = tags.h1('Hello World!');

console.log(myHeading);

//we can simplify it in a few ways:
//const h1 = tags.h1;
//const mySecondHeading = h1("Hello World!");

//or the preferred way would be to use destructuring:
const { h1 } = tags;
const myThirdHeading = h1("Hello World!");

//now you can add the HTML elements on the app div as following:
const objNode = document.getElementById('app');

objNode.appendChild(myHeading);

//an example of table using Tachyons: https://jsbin.com/ruyixox/edit?html,output


//--------------------------------
// Transforming data into HTML & CSS
/* 

Follow the single responsibility principle
For example, we need the following functions to produce a table from this link: https://jsbin.com/ruyixox/edit?html,output

[ ] Cell
[ ] mealRow
[ ] headerRow
[ ] totalRow
[ ] mealBody
[ ] mealHeader
[ ] mealsTable

*/

const MEALS = [
    { description: 'Breakfast', calories: 460 },
    { description: 'Snack', calories: 180 },
    { description: 'Lunch', calories: 600 },
];

const { td, th, tr, tbody, thead, table } = tags;

function cell(tag, className, value) {
    return tag({ className }, value);
}

function mealRow(className, meal) {
    return tr({ className }, [
        cell(td, 'pa2', meal.description),
        cell(td, 'pa2 tr', meal.calories),
    ]);
}

function mealsBody(className, meals) {
    const rows = R.map(R.partial(mealRow, ['stripe-dark']), meals); // R.partial function is used to use curry on uncurried functions. If the mealRow function was curried, we could use partial applications but using R.partial we can use noncurried functions as partial application.
    const rowsWithTotal = R.append(totalRow(meals), rows);
    return tbody({ className }, rowsWithTotal);
}

const headerRow = tr([ //given that the header row never changes dynamically, it doesn't need to be in a function.
        cell(th, 'p2 tl', 'Meal'),
        cell(th, 'p2 tr', 'Calories'),
    ]);

const mealHeader = thead(headerRow); //Meal header doesn't change either, therefore it is not a function.

function totalRow(meals) {
    const total = R.pipe(
        R.map(meal => meal.calories),
        R.reduce((acc, calories) => acc + calories, 0), // 0 is the initial value for the reduce function accumulator   
        )(meals); //meals is the array of objects passed to the function that R.pipe returns.

    return tr({ className: 'bt b' }, [
        cell(td, 'pa2 tr', 'Total:'),
        cell(td, 'pa2 tr', total),
    ]);
}

function mealsTable(meals) {
    return table({ className: 'mw5 center w-100 collapse'}, [
        mealHeader,
        mealsBody('', meals),
    ]);
}

const node = document.getElementById('app');

const view = mealsTable(MEALS);

node.appendChild(view);

//Find an alternative of printing this HTML table here: https://jsbin.com/nusobel/edit?js,output

//-------------------------------------
//Declarative vs. Imperative Programming
//Imagine if you have to give your home address to someone, is it good to just give the address and they find out the direction or you ask them where you stand right now, then you give them exact directions. Giving exact directions is imperative and giving just the address is declarative.
//jQuery vs. React or jQuery vs. Functional Programm as we did in the above

//Example of Imperative here: https://jsbin.com/timubuj/edit?js,output

/*
What is Functional Programming?
Functional programming is a style of programming where you use pure functions almost exclusively.

Reasons for why using pure functions:
1. Reusable often in the ways you haven't anticipated
2. Composible in a way so you can combine functions in order to make a new function
3. Easy to test, you just create some input data, pass it to the function and check the return value
4. Cacheable, as pure functions always return the same value for a given input, it is easy to cache computationally expensive function calls
5. Parallelizable, pure functions allow for parallel execution because there is no accessing shared state

Important Note: Functional programming doesn't eleminate 100% state, it eleminates side effects (i.e. changing the data passed to it), otherwise an app without state doesn't make any sense.

Notes:
* Obviously your app needs state but it should be used in a controlled way
* Sprinkling your application state all over your app in an uncontrolled way your code gets dirty and harder to work with
* Most hard to solve bugs are state related

*/