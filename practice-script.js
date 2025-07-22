// console.log("Hello from practice-script.js!");

// var projectTitle = "My Portfolio";
//  console.log(projectTitle);

// let skillsCount = 5;
// if (skillsCount > 3) {
// console.log("You have lots of skills!");
//  }

// const aboutMe = "Web developer passionate about building projects.";
//  console.log(aboutMe);

// var featuredProject = "Portfolio Website";
//  let skillsCount = 5;
// const siteOwner = "Lynn Kamau";
//  featuredProject = "MyCodeKenyaPortfolio";
// skillsCount = 8;

// console.log(featuredProject); // This will log the updated project title
// console.log(skillsCount);   // This will log the updated skills count
// console.log(siteOwner);     // This will log the site owner's name  

// let projectGallery = "Gallery Section";      // camelCase
// let SkillsList = "Skills Section";           // UpperCamelCase (not recommended for variables)
// let about_me_section = "About Section";      // snake_case

// let projectTitle = 'Portfolio Website';
// /let aboutSection = "About Me";
// let welcomeMessage = `Welcome to my site!`;
// let projectDescription = 'It\'s a great project!';
// let multiLineWelcome = `
// Welcome to my portfolio!
// Check out my projects below.
// `;
// let name = 'Lynn Kamau';
// let greeting = `Hello, my name is ${name}. Welcome to my portfolio!`;
// let projectsCount = 1;
// let summary = `I have ${projectsCount} featured project.`;

// console.log(greeting);
// console.log(summary);

// const projectCount = 8;
// const averageRating = 4.7;
// console.log(typeof projectCount);    // 'number'
// console.log(typeof averageRating);   // 'number'

// const completedProjects = 5;
// const totalProjects = 8;
// const projectsLeft = totalProjects - completedProjects;
// const doubleProjects = totalProjects * 2;
// const halfProjects = totalProjects / 2;
// const bonusProjects = totalProjects + 2;

// console.log(projectsLeft);
// console.log(doubleProjects);
// console.log(halfProjects);
// console.log(bonusProjects);

// const rating = 4.7;
// console.log(Math.round(rating));
// console.log(Math.floor(rating));
// console.log(Math.ceil(rating));
// console.log(Math.random());

// const badges = 17;
// const projects = 5;
// const badgesPerProject = Math.floor(badges / projects);
// const badgesLeft = badges % projects;
// console.log(`Each project gets ${badgesPerProject} badges.`);
// console.log(`Badges left over: ${badgesLeft}`);

// const squared = 3 ** 2;
// const cubed = 2 ** 3;
// console.log(squared);
// console.log(cubed);

// console.log(0.1 + 0.2);
// console.log(1 / 0);
// console.log(10 / 'portfolio');

// const project = {
//   title: "JavaScript Portfolio",
//   description: "A personal website to showcase my projects and skills.",
//   stars: 42,
//   featured: true
// };

// console.log(project.title);
// console.log(project.stars);
// console.log(project.featured);
// console.log(typeof project);

// let projectDescription;
// console.log(projectDescription); // undefined

// const teamMember = {
//   name: "Lynn"
// };
// console.log(teamMember.bio); // undefined

// let projectImage = null;
// console.log(projectImage); // null

// const anotherMember = {
//   name: "Kamau",
//   bio: null
// };
// console.log(anotherMember.bio); // null

// Uncomment the next line to see a ReferenceError:
// console.log(nonExistentVariable);

// let isFeatured = true;
// let hasProfile = false;

// const projectStars = 42;
// const isPopular = projectStars > 50;
// console.log(isPopular); // false

// let age = 30;
// console.log(age == 30);  // true
// console.log(age === 30); // true

// console.log(10 == '10');   // true
// console.log(10 === '10');  // false

// let featuredCount = 5;
// let featuredCountString = '5';
// console.log(featuredCount == featuredCountString);  // true
// console.log(featuredCount === featuredCountString); // false

// let projectTitle = "My Portfolio";
// console.log(projectTitle);
// let projectYear = 2025;

// Math.max(5, 8, 2) // max 
// 8
// Math.floor(7.99) //flooe
// 7
// Math.max() //max
// -Infinity

// console.log('hey');

// parseFloat("20.34543543");
// 20.34543543
// Math.round(4.7);   // returns 5
// 5
// Math.floor(4.7);   // returns 4
// 4
// Math.ceil(4.1);    // returns 5
// 5
// Date.now();
// 1753116880848

// function definition
// function calculateBill() {
//   // this is the function body
//   console.log("Running Calculate Bill!!");
// }

// calculateBill(); //you can call it or run it manually in the console

// function calculateBill() {
//   console.log("Running Calculate Bill!!");
//   const total = 100 * 1.13;
//   console.log(total);
// }

// calculateBill();

// function calculateBill() {
//   const total = 100 * 1.13;
//   return total;
// }

// console.log(calculateBill());

// function calculateBill() {
//   const total = 100 * 1.13;
//   return total;
// }

// const myTotal = calculateBill();
// console.log(`Your total is $${calculateBill()}`);

// function formatProjectTitle(title) {
//   return `Project: ${title}`;
// }

// console.log(formatProjectTitle("JavaScript Portfolio"));

// This is an anonymous function stored in a variable
// const formatSkill = function(skill) {
//   return `Skill: ${skill}`;
// };

// console.log(formatSkill("JavaScript"));

// Function expression to format a portfolio section
// const formatSection = function(sectionName) {
//   return `Section: ${sectionName}`;
// };

// console.log(formatSection("About Me"));

// Calling the function before it's defined
// console.log(formatProjectTitle("Portfolio Hoisting"));

// function formatProjectTitle(title) {
//   return `Project: ${title}`;
// }

// Trying to call the function expression before it's defined
// Error: Cannot access 'formatSection' before initialization
// console.log(formatSection("About Hoisting"));

// const formatSection = function(sectionName) {
//   return `Section: ${sectionName}`;
// };

// const formatProjectTitle = (title) => {
//   return `Project: ${title}`;
// };
// console.log(formatProjectTitle("Arrow Portfolio"));

// const formatSkill = skill => `Skill: ${skill}`;
// console.log(formatSkill("CSS"));

// This will NOT work as expected:
// Uncaught SyntaxError: Unexpected token ':'
// const createProject = title => { title: title, completed: false };
// console.log(createProject("Portfolio Website")); //undefined
// This will work as expected:
// const createProject = title => ({ title: title, completed: false });    
// console.log(createProject("Portfolio Website"));

// (function () {
//   console.log("Setting up your portfolio...");
//   // You could initialize some portfolio data here
// })();
// // Passing Arguments to an IIFE
// (function (section) {
//   console.log(`Initializing the ${section} section!`);
// })("Projects");

// const project = {
//   title: "JavaScript Portfolio",
//   showDetails: function () {
//     console.log(`Project: ${this.title}`);
//     return `Project: ${this.title}`;
//   }
// };

// Call the method
// documentation // Uncaught ReferenceError: documentation is not defined
// project.showDetails();

// Shorthand Method Syntax
// const project = {
//   title: "JavaScript Portfolio",
//   // Shorthand method
//   showDetails() {
//     console.log(`Project: ${this.title}`);
//   }
// };

// project.showDetails();

// Arrow Functions as Methods
// const project = {
//   title: "JavaScript Portfolio",
//   showDetails: () => {
//     // 'this' does NOT refer to the project object here
//     console.log(`Project: ${this.title}`);
//   }
// };

// project.showDetails(); // Likely prints 'Project: undefined'

// const project = {
//   title: "JavaScript Portfolio",
//   showDetails: function showDetails() {
//     console.log(this);
//     console.log(`Project: ${this.title}`);
//   }
// };
// project.showDetails();

// Accessing properties with this
// const profile = {
//   name: "Lynn Developer",
//   sayHi: function sayHi() {
//     console.log(`Hey ${this.name}`);
//     return `Hey ${this.name}`;
//   }
// };

// profile.sayHi();

// setTimeout(function () {
//   console.log("Portfolio loaded! Ready to showcase your projects.");
// }, 1000); // Runs after 1 second
// setTimeout(() => {
//   console.log("This message appears after 2 seconds!");
// }, 2000);

// //Callback Functions in Methods
// const profile = {
//   name: "Lynn Developer",
//   yellHi() {
//     console.log(`HEY ${this.name.toUpperCase()}!`);
//   }
// };
// setTimeout(() => profile.yellHi(), 1500);

// Global Variables and Functions Available in the Global Scope
// const portfolioOwner = 'Lynn Kamau'; // global variable
// let portfolioTheme = 'Light Theme'; // global variable
// var projectCount = 5; // global variable
// function showPortfolioInfo() {
//   console.log(`Owner: ${portfolioOwner}, Theme: ${portfolioTheme}, Projects: ${projectCount}`);
// }

//Owner: Lynn Kamau, Theme: Light Theme, Projects: 5
// window.portfolioOwner
// undefined
// window.portfolioTheme
// undefined
// window.projectCount
// 5

// showPortfolioInfo();

// function sayHi() {
//   console.log('Hi from your portfolio!');
// }

// Hoisting Example
// sayHi(); // works
// window.sayHi(); // also works

// const portfolioYear = 2025;

// function showTheme() {
//   const theme = 'Light Theme'; // local variable
//   console.log(`Current theme: ${theme}`);   
// }

// showTheme();
// console.log(portfolioYear); // 2025

//Functions Accessing Outside Variables
// const portfolioYear = 2025;

// function showTheme() {
//   console.log(portfolioYear); // 2025
//   const theme = 'Light Theme'; // local variable
//     console.log(`Current theme: ${theme}`);
// }

// showTheme();

//Block Scope With If Statements
//let and const variables are block-scoped
// if (true) {
//   var isPortfolioLive = true;
// }
// console.log(isPortfolioLive); 

// // Declaring Variables Outside the Block

// let theme;
// if (true) {
//   theme = 'Light';
// }
// console.log(theme); // 'Light'

//Block Scope With Loops
//var leaks outside the block
// for (var i = 0; i < 5; i++) { //starts at 0 ends at 5
//   console.log(i);
// }
// console.log(i);

// //let doesn't leak outside the block
// for (let j = 0; j < 3; j++) {
//   console.log(j);
// }
// console.log(j); // ReferenceError: j is not defined

// // Variable Look-Up
// const siteName = "CodeKenya";

// function logsite(){
//     console.log(`Welcome to ${siteName}!`);
// }

// function go(){
//     const sitename = 'MyCodeKenyaPortfolio';
//     logsite(); // This will log "Welcome to CodeKenya!"
// }
// go() //Calling the function go


// // Variable Shadowing Example
// const featuredProject = 'Portfolio Website';

// function logProject() {
//   console.log(featuredProject);
// }

// function go() {
//   const featuredProject = 'Blog Platform';
//   logProject();
// }

// go(); // Logs 'Portfolio Website'

// //Function Parameters and Local Variables
// function logProject(project) {
//   console.log(project);
// }

// function go() {
//   const project = 'Blog Platform';
//   logProject('E-Commerce Site');
// }

// go(); // Logs 'E-Commerce Site'

// //Function Scope for Functions
// function showProfile(name) {
//   function shout() {
//     console.log(name.toUpperCase());
//   }
//   shout();
// }

// showProfile('lynn'); // Logs 'LYNN'
// showWelcome();

// function showWelcome() {
//   console.log('Welcome to your portfolio!');
//   console.log(getProjectCount(3));
// }

// function getProjectCount(count) {
//   return `You have ${count} projects.`;
// }

// console.log(projectCount);
// var projectCount = 10;
// // This will log 'undefined' because of hoisting
// // The variable declaration is hoisted, but the assignment is not

// console.log(portfolioYear);
// let portfolioYear = 2025;
// // This will throw a ReferenceError because 'portfolioYear' is not hoisted
// // console.log(portfolioOwner); // ReferenceError: Cannot access 'portfolioOwner' before initialization

// console.log(portfolioOwner);
// const portfolioOwner = 'Lynn Kamau';
// // This will throw a ReferenceError because 'portfolioOwner' is not hoisted
// // console.log(portfolioOwner); // ReferenceError: Cannot access 'portfolioOwner' before initialization

// function outer() { //Calling the outer function
//   // This is a variable in the outer function scope
//   const outerVar = 'Portfolio Owner: Lynn Kamau';

// // This is a variable in the global scope
// // This function exists inside the outer function
// // It can access variables from the outer function
//   function inner() { // Calling the inner function
//     // This is a variable in the inner function scope
//     const innerVar = 'Project: JavaScript Portfolio';
//     console.log(innerVar);
//     console.log(outerVar);
//   }

//   inner();
// }

// outer();

// Example of a closure in JavaScript
// A closure is a function that retains access to its outer scope even after the outer function has finished executing.
// This allows the inner function to access variables from the outer function even after it has returned.
// function outer() {
//   const outerVar = 'Portfolio Owner: Lynn Kamau';

//   function inner() { //This is a function expression, returns nothing when called
//     const innerVar = 'Project: JavaScript Portfolio'; //local variable so we console.log it
//     // The inner function can access both its own variables and the outer function's variables
//     console.log(innerVar);
//     console.log(outerVar);
//   }

//   return inner;
// }
// // Calling the outer function returns the inner function
// // The inner function is stored in a variable and can be called later

// //It calls the outer function and returns the inner function
// // This allows the inner function to access the outer function's variables
// const innerFn = outer(); //A variable that holds the outer function
// innerFn();

// // Example of a closure in JavaScript
// function createCounter() {           
//   let count = 0; // This variable is private to the closure
//   return function() { // This inner function forms a closure         
//     count++; // It can access and modify the outer variable
//     return count; // It returns the updated count
//   };
// }
// const counter = createCounter(); // Create a new counter instance
// console.log(counter()); // 1
// console.log(counter()); // 2


// function createGreeting(greeting = "") { //creating a function that takes a greeting parameter
//   const myGreet = greeting.toUpperCase(); //This variable is private to the closure
//   // The inner function forms a closure, allowing it to access myGreet

//   return function(name) { // This inner function takes a name parameter
//     return `${myGreet} ${name}`; // It returns a greeting message using the outer variable
//   };
// }

// const sayHello = createGreeting('hello'); // Creating a greeting function for "hello"
// // Creating a greeting function for "welcome"
// const sayWelcome = createGreeting('welcome');
// const sayGoodMorning = createGreeting('good morning'); // Creating a greeting function for "good morning"
// const sayGoodbye = createGreeting('goodbye'); // Creating a greeting function for "goodbye"

// console.log(sayGoodMorning('Lynn'));
// console.log(sayHello('Mwende'));  
// console.log(sayWelcome('Kamau'));
// console.log(sayGoodbye('Lynn Mwende Kamau')); 

//PRIVATE VARIABLES IN CLOSURES
// A closure can be used to create private variables that are not accessible from outside the function 
// This allows you to encapsulate data and provide controlled access through methods.
// function createGame(gameName) { // creating a function that takes a gameName parameter
//   // This variable is private to the closure
//   let score = 0;
//   var gameScore = 0; // This variable is private to the closure
//   const game = gameName.toUpperCase(); // This variable is private to the closure but can't be update

//   return function win() {
//     score++, gameScore++;
//     return `Your ${gameName} score is ${score} Fulltime score is ${gameScore} and the game is ${game}`;
//   };
// }

// const hockeyGame = createGame('Hockey');
// const soccerGame = createGame('Soccer');

// console.log(hockeyGame()); 
// console.log(hockeyGame());
// console.log(soccerGame());
// console.log(soccerGame());

// // DOM Exploration
// console.log("=== DOM Exploration ===");

// // Document information
// console.log("Document title:", document.title);
// console.log("Document URL:", window.location.href);

// // Browser information
// console.log("Browser width:", window.innerWidth);
// console.log("Browser height:", window.innerHeight);

// // Navigator information
// console.log("Browser:", navigator.userAgent);
// console.log("Platform:", navigator.platform);

// // Get the body element
// console.log(document.body);

// // Get all elements with a specific tag
// console.log(document.querySelectorAll('h1'));

// // Get the first element with a specific tag
// console.log(document.querySelector('h1'));


// // Experiment: Loading JavaScript in the Head
// console.log("=== Head Script Experiment ===");

// // Try to select the main heading
// const mainHeading = document.querySelector('h1');
// console.log('Main Heading:', mainHeading);

// Experiment: Using DOMContentLoaded
// This event fires when the initial HTML document has been completely loaded and parsed
// It does not wait for stylesheets, images, and subframes to finish loading
// console.log("=== DOMContentLoaded Experiment ==="); 

// // Function to run when the DOM is fully loaded
// // This function will be called when the DOMContentLoaded event is fired
// // It ensures that the DOM is ready before we try to access elements
// // This is a good practice to avoid errors when trying to access elements that haven't been loaded yet
// function initializePortfolio() {
//   const mainHeading = document.querySelector('h1');
//   console.log('Main Heading (DOMContentLoaded):', mainHeading);
// }

// // Listen for the DOMContentLoaded event before running our function
// // This ensures that our function runs only after the DOM is fully loaded
// // This is important to ensure that we can access elements in the DOM without errors
// document.addEventListener('DOMContentLoaded', initializePortfolio);
// Selecting the first paragraph element
console.log("=== Selecting First Element ===");
const firstParagraph = document.querySelector('p'); // This will select the first <p> element in the document
console.log('First Paragraph:', firstParagraph);

// Selecting all elements with the class 'project-item'
console.log("=== Selecting All Elements ===");
const allProjectItems = document.querySelectorAll('.project-item');
console.log('All Project Items (NodeList):', allProjectItems);

// You can access individual elements by index
console.log('First Project Item:', allProjectItems[0]); //Counter starts at 0
console.log('Second Project Item:', allProjectItems[1]);

// Selecting a div with the class 'skill-item'
console.log("=== Specific Selectors ===");
const skillSection = document.querySelector('div.skill-item');//This selects the div with the class 'skill-item'
console.log('Skill Section:', skillSection); 

// Selecting an image inside a 'project-item'
const projectImage = document.querySelector('.project-item img');
console.log('First Project Image:', projectImage); 

// Selecting the specific project by its ID
const betaProject = document.querySelector('#portfolio-project-beta'); // This selects the element with the ID 'portfolio-project-beta'
// This is useful for selecting a specific project or section in your portfolio
console.log('Beta Project:', betaProject); 

// First, select a parent element, e.g., the 'skill-item' div
console.log("=== Searching Within Elements ===");
const skillContainer = document.querySelector('.skill-item');
console.log('Skill Container:', skillContainer);

// Now, select an element *inside* the skillContainer
const firstSkillListItem = skillContainer.querySelector('li');
console.log('First Skill List Item:', firstSkillListItem);

// Select all list items within the skillContainer
const allSkillListItems = skillContainer.querySelectorAll('li');
console.log('All Skill List Items:', allSkillListItems);

// Selecting elements by tag name
console.log("=== Selecting by Tag Name ===");  
const h1Tag = document.querySelector('h1'); // This selects the first <h1> tag in the document
console.log('First <h1> Tag:', h1Tag);

console.log("=== Selecting by Tag Name ===");  
const allH2Tags = document.querySelector('h2'); // This selects the first <h1> tag in the document
console.log('All <h2> Tags:', allH2Tags);

// Selecting The image inside the project-item that has the ID portfolio-project-beta
const betaProjectImage = document.querySelector('#portfolio-project-beta img'); // This selects the image inside the project-item with ID 'portfolio-project-beta'
console.log('Beta Project Image:', betaProjectImage);

//Selecting The <ul> element within the skill-item
const skillList = document.querySelector('.skill-item ul'); // This selects the <ul> element inside the 'skill-item' div
console.log('Skill List:', skillList);