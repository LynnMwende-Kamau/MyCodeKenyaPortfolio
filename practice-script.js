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
// // document.addEventListener('DOMContentLoaded', initializePortfolio);
// // Selecting the first paragraph element
// console.log("=== Selecting First Element ===");
// const firstParagraph = document.querySelector('p'); // This will select the first <p> element in the document
// console.log('First Paragraph:', firstParagraph);

// // Selecting all elements with the class 'project-item'
// console.log("=== Selecting All Elements ===");
// const allProjectItems = document.querySelectorAll('.project-item');
// console.log('All Project Items (NodeList):', allProjectItems);

// // You can access individual elements by index
// console.log('First Project Item:', allProjectItems[0]); //Counter starts at 0
// console.log('Second Project Item:', allProjectItems[1]);

// // Selecting a div with the class 'skill-item'
// console.log("=== Specific Selectors ===");
// const skillSection = document.querySelector('div.skill-item');//This selects the div with the class 'skill-item'
// console.log('Skill Section:', skillSection); 

// // Selecting an image inside a 'project-item'
// const projectImage = document.querySelector('.project-item img');
// console.log('First Project Image:', projectImage); 

// // Selecting the specific project by its ID
// const betaProject = document.querySelector('#portfolio-project-beta'); // This selects the element with the ID 'portfolio-project-beta'
// // This is useful for selecting a specific project or section in your portfolio
// console.log('Beta Project:', betaProject); 

// // First, select a parent element, e.g., the 'skill-item' div
// console.log("=== Searching Within Elements ===");
// const skillContainer = document.querySelector('.skill-item');
// console.log('Skill Container:', skillContainer);

// // Now, select an element *inside* the skillContainer
// const firstSkillListItem = skillContainer.querySelector('li');
// console.log('First Skill List Item:', firstSkillListItem);

// // Select all list items within the skillContainer
// const allSkillListItems = skillContainer.querySelectorAll('li');
// console.log('All Skill List Items:', allSkillListItems);

// // Selecting elements by tag name
// console.log("=== Selecting by Tag Name ===");  
// const h1Tag = document.querySelector('h1'); // This selects the first <h1> tag in the document
// console.log('First <h1> Tag:', h1Tag);

// console.log("=== Selecting by Tag Name ===");  
// const allH2Tags = document.querySelector('h2'); // This selects the first <h1> tag in the document
// console.log('All <h2> Tags:', allH2Tags);

// // Selecting The image inside the project-item that has the ID portfolio-project-beta
// const betaProjectImage = document.querySelector('#portfolio-project-beta img'); // This selects the image inside the project-item with ID 'portfolio-project-beta'
// console.log('Beta Project Image:', betaProjectImage);

// //Selecting The <ul> element within the skill-item
// const skillList = document.querySelector('.skill-item ul'); // This selects the <ul> element inside the 'skill-item' div
// console.log('Skill List:', skillList);

// // Accessing Element Properties
// console.log("=== Element Properties ===");
// const projectTitle = document.querySelector('.project-item h2');
// console.log('Project Title Element:', projectTitle);

// // Get the parent element
// const projectContainer = projectTitle.parentElement;
// console.log('Parent Container of Project Title:', projectContainer);

// // Get and log text content
// console.log('Project Title Text:', projectTitle.textContent);

// // Get and log inner HTML
// console.log('Project Title Inner HTML:', projectTitle.innerHTML);

// // Get and log outer HTML
// console.log('Project Title Outer HTML:', projectTitle.outerHTML);

// // Get and log classes
// console.log('Project Container Classes:', projectContainer.classList);

// // Getters and Setters
// console.log("=== Getters and Setters ===");

// // Select the main heading
// const mainHeading = document.querySelector('h1'); // This selects the first <h1> element in the document

// // Using textContent as a getter (reading the value)
// console.log('Original Main Heading Text:', mainHeading.textContent); // This logs the text content of the main heading

// // Using textContent as a setter (updating the value)
// // This doesn't  change the HTML Code, it only updates the text content of the element
// // This is useful for dynamically updating the content of your portfolio without reloading the page
// mainHeading.textContent = 'My Dynamic Portfolio!'; // This updates the text content of the main heading to 'My Dynamic Portfolio!'


// // Log the updated value to confirm
// console.log('Updated Main Heading Text:', mainHeading.textContent);

// // textContent vs innerText
// console.log("=== textContent vs innerText ===");

// const mainHeadingWithSpan = document.querySelector('h1');

// console.log('textContent:', mainHeadingWithSpan.textContent);
// console.log('innerText:', mainHeadingWithSpan.innerText);

// // innerHTML and outerHTML
// console.log("=== innerHTML and outerHTML ===");

// const projectAlphaDiv = document.querySelector('.project-item');
// console.log('Original Project Alpha innerHTML:', projectAlphaDiv.innerHTML);
// console.log('Original Project Alpha outerHTML:', projectAlphaDiv.outerHTML);

// // Change the innerHTML of Project Alpha
// projectAlphaDiv.innerHTML = '<h2>New Project Title</h2><p>This project has been updated dynamically!</p><img src="./assets/img/projects/usapp.png" alt="Updated Project Image">';

// // You could also replace the entire element using outerHTML (use with caution!)
// // const skillSection = document.querySelector('.skill-item');
// // skillSection.outerHTML = '<section class="new-skills"><h3>My Asidome Skills</h3></section>';

// // Appending with textContent
// console.log("=== Appending TextContent ===");

// const pizzaCounter = document.querySelector('.pizza');
// console.log('Original Pizza Text:', pizzaCounter.textContent);

// // Append a pizza emoji
// pizzaCounter.textContent = `${pizzaCounter.textContent} 🍕`;
// console.log('Updated Pizza Text:', pizzaCounter.textContent);

// // Appending with insertAdjacentText
// console.log("=== insertAdjacentText ===");

// const pizzaCounter = document.querySelector('.pizza');
// console.log('Original Pizza Text (insertAdjacent):', pizzaCounter.textContent);

// // Add a pizza emoji to the end of the text content
// pizzaCounter.insertAdjacentText('beforeend', '🍕');
// console.log('Updated Pizza Text (insertAdjacent):', pizzaCounter.textContent);

// // Exploring insertAdjacentText positions
// console.log("=== insertAdjacentText Positions ===");

// const articleElement = document.querySelector('article.item');

// // Insert text before the article element
// articleElement.insertAdjacentText('beforebegin', '🍕');

// // Insert text just inside the article element, before its first child
// articleElement.insertAdjacentText('afterbegin', '🍕');

// // Insert text after the article element itself
// articleElement.insertAdjacentText('afterend', '🍕');

// // Appending with textContent
// console.log("=== Appending TextContent ===");

// const pizzaCounter = document.querySelector('.pizza');
// console.log('Original Pizza Text:', pizzaCounter.textContent);

// // Append a pizza emoji
// pizzaCounter.textContent = `${pizzaCounter.textContent} 🍕`;
// console.log('Updated Pizza Text:', pizzaCounter.textContent);

// // Appending with insertAdjacentText
// console.log("=== insertAdjacentText ===");

// const pizzaCounter = document.querySelector('.pizza');
// console.log('Original Pizza Text (insertAdjacent):', pizzaCounter.textContent);

// // Add a pizza emoji to the end of the text content
// pizzaCounter.insertAdjacentText('beforeend', '🍕');
// console.log('Updated Pizza Text (insertAdjacent):', pizzaCounter.textContent);

// // Exploring insertAdjacentText positions
// console.log("=== insertAdjacentText Positions ===");

// const articleElement = document.querySelector('article.item');

// // Insert text before the article element
// articleElement.insertAdjacentText('beforebegin', '🍕');

// // Insert text just inside the article element, before its first child
// articleElement.insertAdjacentText('afterbegin', '🍕');

// // Insert text after the article element itself
// articleElement.insertAdjacentText('afterend', '🍕');

// // Working with classList
// console.log("=== Working with ClassList ===");

// const pic = document.querySelector('.nice');
// console.log('Initial ClassList:', pic.classList);

// // Adding a class
// console.log("=== Adding a Class ===");

// const pic = document.querySelector(".nice");
// pic.classList.add("open");
// console.log('ClassList After Add:', pic.classList);

// // Removing a class
// console.log("=== Removing a Class ===");

// const pic = document.querySelector(".nice");
// pic.classList.remove('cool');
// console.log('ClassList After Remove:', pic.classList);

// // Toggling a class
// console.log("=== Toggling a Class ===");

// const pic = document.querySelector(".nice");

// // This will add 'round' if it's not there, and remove it if it is.
// pic.classList.toggle('round');
// console.log('ClassList After First Toggle:', pic.classList);

// // Toggling a class with animation on click
// console.log("=== Toggling Class with Animation ===");

// const pic = document.querySelector(".nice");

// function toggleRound() {
//   // Toggle 'round' and 'animated' classes
//   pic.classList.toggle('round');
//   pic.classList.toggle('animated'); // Also toggle a class for advanced animations
// }

// // Attach the toggleRound function to the 'click' event of the image
// pic.addEventListener('click', toggleRound);
// console.log('Click the image to see the toggle effect!');

// // Checking for a class
// console.log("=== Checking for a Class ===");

// const pic = document.querySelector(".nice");

// // Add the 'open' class for this experiment
// pic.classList.add('open');

// const hasOpen = pic.classList.contains('open');
// console.log('Does pic have class "open"?', hasOpen); // Should be true

// pic.classList.remove('open');
// const hasOpenAfterRemove = pic.classList.contains('open');
// console.log('Does pic have class "open" after removal?', hasOpenAfterRemove); // Should be false

// // Working with Attributes
// console.log("=== Working with Attributes ===");

// const pic = document.querySelector('.nice');

// // Setting the alt attribute
// pic.alt = "a cute dog";
// console.log('Image Alt Text (Setter):', pic.alt);
// // ... existing code ...
// pic.alt = "a cute dog";
// console.log('Image Alt Text (Setter):', pic.alt);

// // Setting the width attribute
// pic.width = 200;
// console.log('Image Width (Setter):', pic.width);

// // Wait for the image to load to get its natural dimensions
// const pic = document.querySelector('.nice');

// pic.addEventListener('load', function() {
//   console.log('Natural Width after image load:', pic.naturalWidth);
// });

// // Alternatively, wait for the entire window to load (including all resources)
// // window.addEventListener('load', function() {
// //   console.log('Natural Width after window load:', pic.naturalWidth);
// // });

// // Using getAttribute()
// console.log("=== getAttribute() ===");

// const pic = document.querySelector('.nice');
// pic.alt = "a playful puppy"; // Ensure alt is set for this example

// console.log('Alt attribute using getAttribute():', pic.getAttribute('alt'));

// // Using hasAttribute()
// console.log("=== hasAttribute() ===");

// const pic = document.querySelector('.nice');

// console.log('Does pic have alt attribute?', pic.hasAttribute('alt')); // Should be true (if set in HTML or via JS)

// // Temporarily remove alt to test false
// pic.removeAttribute('alt'); // We'll learn about removeAttribute later!
// console.log('Does pic have alt attribute after removal?', pic.hasAttribute('alt')); // Should be false

// // Data Attributes
// console.log("=== Data Attributes ===");

// const customPic = document.querySelector('.custom');
// console.log('Dataset of custom image:', customPic.dataset);

// // Using Data Attributes for Interaction
// console.log("=== Data Attributes Interaction ===");

// const customPic = document.querySelector('.custom');

// customPic.addEventListener('click', function() {
//   alert(`Welcome ${customPic.dataset.name} ${customPic.dataset.last}!`);
// });

// console.log('Click the first image to see the alert!');

// // Creating HTML Elements
// console.log("=== Creating HTML Elements ===");

// // Experiment 1: Creating a Paragraph Element
// const myParagraph = document.createElement('p');
// console.log(myParagraph);

// // Experiment 2: Adding Text Content and a Class
// myParagraph.textContent = 'I am a dynamic paragraph!';
// myParagraph.classList.add('special');
// console.log(myParagraph);

// // Experiment 3: Creating an Image Element
// const myImage = document.createElement('img');
// myImage.src = "https://picsum.photos/500";
// myImage.alt = "A random photo";
// console.log(myImage);

// // Experiment 4: Creating a Div Element with a Class
// const myDiv = document.createElement('div');
// myDiv.classList.add('wrapper');
// console.log(myDiv);

// // Experiment 5: Appending a Paragraph to the Body
// document.body.appendChild(myParagraph);

// // Experiment 6: Appending Multiple Elements Efficiently
// // First, append the paragraph and image to the div
// myDiv.appendChild(myParagraph);
// myDiv.appendChild(myImage);

// // Then, append the div (containing the paragraph and image) to the body
// document.body.appendChild(myDiv);

// // Experiment 3: Building a Dynamic Unordered List
// const list = document.createElement('ul');
// const liThree = document.createElement('li');
// liThree.textContent = 'three';
// list.appendChild(liThree);

// // Insert the entire list into the body (e.g., at the beginning)
// document.body.insertAdjacentElement('afterbegin', list);

// // Experiment 4: Appending the Fifth List Item
// const liFive = document.createElement('li');
// liFive.textContent = 'five';
// list.append(liFive); // Using append() here

// // Experiment 5: Cloning and Inserting the First List Item
// const liOne = liFive.cloneNode(true); // Clone liFive and its text content
// liOne.textContent = 'one'; // Change the text content for the cloned node
// list.insertAdjacentElement('afterbegin', liOne); // Insert at the beginning of the list

// // Experiment 6: Inserting the Fourth List Item
// const liFour = document.createElement('li');
// liFour.textContent = 'four';
// // Insert before liFive (which is after liThree)
// liFive.insertAdjacentElement('beforebegin', liFour);

// // Experiment 7: Inserting the Second List Item
// const liTwo = document.createElement("li");
// liTwo.textContent = "two";
// Insert after liOne
// liOne.insertAdjacentElement("afterend", liTwo);

// // Select the element with the class of item
// const item = document.querySelector('.item');

// // Log its innerHTML to see its content
// console.log(item.innerHTML);

// const src = `https://picsum.photos/200`; // A placeholder image URL
// const desc = "Cute pup"; // A description for our image

// const myHTML = `
//   <div class="image-wrapper">
//     <h2>Cute ${desc}</h2>
//     <img src="${src}" alt="${desc}"/>
//   </div>
// `;

// item.innerHTML = myHTML;

// console.log(item.innerHTML);

// // Log it again to see the updated content
// console.log(item.innerHTML);

// // Simulate user-provided description
// const item = document.querySelector('.item');
// const desc = `Cute pup <h1>LOVE THIS GUY</h1>`;

// const myHTML = `
//   <div class="image-wrapper">
//     <h2>A Dynamic Image</h2>
//     <img src="https://picsum.photos/200" alt="A random image"/>
//     <p>${desc}</p>
//   </div>
// `;

// item.innerHTML = myHTML;

// console.log(item.innerHTML);

// const desc = `Cute Pup <img src="https://picsum.photos/50"/>`;
// const item = document.querySelector('.item');

// const myHTML = `
//   <div class="image-wrapper">
//     <h2>A Dynamic Image</h2>
//     <p>${desc}</p>
//   </div>
// `;

// item.innerHTML = myHTML;

// console.log(item.innerHTML);

// const lynn= document.querySelector('.lynn');
// console.log(lynn);
// console.log(lynn.children);
// console.log(lynn.childNodes);
// console.log(lynn.firstElementChild);
// console.log(lynn.lastElementChild);
// console.log(lynn.previousElementSibling);
// console.log(lynn.nextElementSibling);
// console.log(lynn.parentElement);

// const names = ['sid', 'brad', 'pam'];
// console.log(names);

// const namesLonghand = new Array(); // Creates an empty array
// console.log(namesLonghand);

// console.log(typeof names); // Will output "object"
// console.log(Array.isArray(names)); // Will output true
// console.log(Array.isArray({})); // Will output false (for an empty object)

// console.log(names[0]); // Accesses the first item (index 0)
// console.log(names[1]); // Accesses the second item (index 1)
// console.log(names[2]); // Accesses the third item (index 2)

// console.log(names.length); // Will output 3 (for 'sid', 'brad', 'pam')

// const students = ['sid', 'brad', 'pam', 'alice', 'bob'];
// console.log(students[students.length - 1]); // This will always give you the last item

// // What happens if you try to access an index beyond the array's bounds?
// console.log(students[students.length]); // This will return 'undefined'

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log('Original numbers array:', numbers);

// const numbersReversed = numbers.reverse();
// console.log('numbersReversed (after reverse()):', numbersReversed);
// console.log('Original numbers array (after reverse()):', numbers);

// const originalNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log('Original numbers before copying:', originalNumbers);

// const numbersCopyAndReversed = [...originalNumbers].reverse();
// console.log('numbersCopyAndReversed:', numbersCopyAndReversed);
// console.log('Original numbers after copy and reverse:', originalNumbers); // Still intact!

// const allNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log('Original allNumbers:', allNumbers);

// // Grab items from index 2 (inclusive) up to index 4 (exclusive)
// const pizzaSlice = allNumbers.slice(2, 4);
// console.log('pizzaSlice (items from index 2 to 3):', pizzaSlice); // Outputs [3, 4]
// console.log('Original allNumbers after slice():', allNumbers); // Still intact!

// // ... existing code ...
// const names = ['sid', 'brad', 'pam'];
// console.log('Current names array:', names);

// // Adding to the End: `push()` (Mutable)
// names.push('lux');
// console.log('Names after push(\'lux\'):', names);

// // Immutable way to add to the end:
// const newNamesEnd = [...names, 'wes'];
// console.log('newNamesEnd (immutable add to end):', newNamesEnd);
// console.log('Original names after immutable add:', names);

// // Adding to the Front: `unshift()` (Mutable)
// names.unshift('poppy');
// console.log('Names after unshift(\'poppy\'):', names);

// // Immutable way to add to the front:
// const newNamesFront = ['jake', ...names];
// console.log('newNamesFront (immutable add to front):', newNamesFront);
// console.log('Original names after immutable add:', names);

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log('Original numbers array:', numbers);

// // Start at index 3, delete 2 items
// numbers.splice(3, 2);
// console.log('Numbers after splice(3, 2):', numbers);
// // Expected Output: [1, 2, 3, 6, 7, 8, 9] (4 and 5 are removed)

// // Let's reset the array to demonstrate adding/replacing
// const colors = ['red', 'green', 'blue', 'yellow'];
// console.log('Original colors array:', colors);

// // Start at index 1, delete 1 item, add 'orange' and 'purple'
// colors.splice(1, 1, 'orange', 'purple');
// console.log('Colors after splice(1, 1, \'orange\', \'purple\'):', colors);
// // Expected Output: ['red', 'orange', 'purple', 'blue', 'yellow']

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log('Original numbers array:', numbers);

// // Start at index 3, delete 2 items
// numbers.splice(3, 2);
// console.log('Numbers after splice(3, 2):', numbers);
// // Expected Output: [1, 2, 3, 6, 7, 8, 9] (4 and 5 are removed)

// // Let's reset the array to demonstrate adding/replacing
// const colors = ['red', 'green', 'blue', 'yellow'];
// console.log('Original colors array:', colors);

// // Start at index 1, delete 1 item, add 'orange' and 'purple'
// colors.splice(1, 1, 'orange', 'purple');
// console.log('Colors after splice(1, 1, \'orange\', \'purple\'):', colors);
// // Expected Output: ['red', 'orange', 'purple', 'blue', 'yellow']

// const bikes = ['bianchi', 'miele', 'panasonic', 'miyata'];
// console.log('Original bikes array:', bikes);

// // Add 'benotto' and 'cervelo' between 'miele' and 'panasonic' (after index 1)
// const newBikes = [...bikes.slice(0, 2), 'benotto', 'cervelo', ...bikes.slice(2)];
// console.log('newBikes (with items added in middle):', newBikes);
// console.log('Original bikes array (should be unchanged):', bikes);

// // ... existing code ...
// const moreBikes = ['bianchi', 'miele', 'benotto', 'cervelo', 'panasonic', 'miyata'];
// console.log('Original moreBikes array:', moreBikes);

// // Remove 'benotto' (which is at index 2)
// const bikesWithoutBenotto = [...moreBikes.slice(0, 2), ...moreBikes.slice(3)];
// console.log('bikesWithoutBenotto:', bikesWithoutBenotto);
// console.log('Original moreBikes array (should be unchanged):', moreBikes);

// const names = ['sid', 'brad', 'pam', 'alice'];
// console.log('Original names array:', names);

// // Find the index of 'brad'
// const bradIndex = names.findIndex((name) => {
//   if (name === 'brad') {
//     return true;
//   } else {
//     return false;
//   }
// });
// console.log('Index of brad:', bradIndex); // Expected output: 1
// console.log('Name at bradIndex:', names[bradIndex]); // Expected output: brad

// // Shorter syntax with implicit return (recommended)
// const pamIndex = names.findIndex((name) => name === 'pam');
// console.log('Index of pam:', pamIndex); // Expected output: 2

// const comments = [
//   { text: 'Cool Beans', id: 123 },
//   { text: 'Love this', id: 133 },
//   { text: 'Neato', id: 233 },
//   { text: 'good bikes', id: 333 },
//   { text: 'so good', id: 433 },
// ];
// console.log('Original comments array:', comments);

// // Find the index of the comment with id 233
// const neatoCommentIndex = comments.findIndex((comment) => comment.id === 233);
// console.log('Index of comment with ID 233:', neatoCommentIndex); // Expected output: 2
// console.log('Comment at found index:', comments[neatoCommentIndex]); // Expected output: { text: 'Neato', id: 233 }

// function deleteComment(idToDelete, commentsArray) {
//   // 1. Find the index of the comment to delete
//   const commentIndex = commentsArray.findIndex((comment) => comment.id === idToDelete);
  
//   // If the comment is not found, return the original array (or handle as needed)
//   if (commentIndex === -1) {
//     console.warn(`Comment with ID ${idToDelete} not found.`);
//     return commentsArray;
//   }

//   // 2. Create a new array without that item
//   const newCommentsArray = [...commentsArray.slice(0, commentIndex), ...commentsArray.slice(commentIndex + 1)];
  
//   return newCommentsArray;
// }

// const updatedComments = deleteComment(233, comments);
// console.log('Comments after deleting ID 233 (new array):', updatedComments);
// console.log('Original comments array (should be unchanged):', comments);

// const commentsAfterAnotherDeletion = deleteComment(123, updatedComments);
// console.log('Comments after deleting ID 123 from new array:', commentsAfterAnotherDeletion);

// // Example of deleting a non-existent comment
// deleteComment(999, comments);

// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }
// // Expected output in console: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10

// // ... existing code ...
// for (let i = 100; i < 120; i += 2) {
//   console.log(i);
// }
// // Expected output in console: 100, 102, 104, ..., 118 (increments by 2 until less than 120)
// for (var j = 0; j < 5; j++) {
//   console.log('Inside var loop:', j);
// }
// console.log('Outside var loop:', j); 
// // Expected output: 0, 1, 2, 3, 4 (inside loop), then 5 (outside loop)

// for (let k = 0; k < 5; k++) {
//   console.log('Inside let loop:', k);
// }
// // console.log('Outside let loop:', k); 
// // If you uncomment this line, you will get an error: "ReferenceError: k is not defined"
// // ... existing code ...
// const numbersArray = [10, 20, 30, 40, 50];
// console.log('Numbers array length:', numbersArray.length);

// for (let i = 0; i < numbersArray.length; i++) {
//   console.log(`Item at index ${i}: ${numbersArray[i]}`);
// }
// // Expected output:
// // Item at index 0: 10
// // Item at index 1: 20
// // ... and so on

// const myName = 'KarmaLette 🦋 ';
// console.log('Iterating over a string with for...of:');
// for (const letter of myName) {
//   console.log(letter);
// }
// // Expected output: Each character (including the emoji) on a new line.

// // Compare with split():
// // console.log('Using split(\'\') on emoji string:', myName.split(''));
// // (You'll see how split() might break multi-unit characters like emojis)

// // Compare with spread operator (which works well with emojis):
// // console.log('Using spread operator with emoji string:', [...myName]);

// const numbers = [10, 20, 30, 40, 50];
// console.log('\nIterating over an array with for...of:');
// for (const number of numbers) {
//   console.log(number);
// }
// // Expected output: 10, 20, 30, 40, 50 (each on a new line)

// const numbers = [10, 20, 30, 40, 50];
// console.log('Iterating over array with for...in (gives indices/keys):');
// for (const index in numbers) {
//   console.log(index); // Outputs "0", "1", "2", "3", "4" (as strings)
//   console.log(numbers[index]); // Access value using the index
// }

// const sid = {
//   name: 'sid',
//   age: 30,
//   isCool: true,
//   hobbies: ['bbq', 'coding', 'gaming'],
// };

// console.log('\nIterating over object properties with for...in:');
// for (const prop in sid) {
//   console.log(`Property: ${prop}, Value: ${sid[prop]}`);
// }
// // Expected output (order might vary slightly):
// // Property: name, Value: sid
// // Property: age, Value: 30
// // Property: isCool, Value: true
// // Property: hobbies, Value: bbq,coding,gaming (or the array itself)

// console.log('\nUsing Object.keys():', Object.keys(sid));
// console.log('Using Object.values():', Object.values(sid));
// console.log('Using Object.entries():', Object.entries(sid));

// function Human(name) {
//   this.name = name;
// }

// const baseHumanStats = {
//   feet: 2,
//   arms: 2,
//   eyes: 2,
//   head: 1,
// };

// // Set the prototype of Human to baseHumanStats
// Human.prototype = baseHumanStats;

// const wes2 = new Human('wes');

// console.log('\nProperties of wes2 using Object.keys():', Object.keys(wes2));
// // Expected: ['name'] -- only own properties

// console.log('Properties of wes2 using for...in:');
// for (const prop in wes2) {
//   console.log(prop);
// }
// // Expected: name, feet, arms, eyes, head (includes prototype properties)

let count = 0;
console.log('Starting while loop:');
while (count < 5) {
  console.log(`Count is: ${count}`);
  count++; // Increment the counter to eventually make the condition false
}
console.log('While loop finished. Final count:', count);
// Expected output:
// Starting while loop:
// Count is: 0
// Count is: 1
// Count is: 2
// Count is: 3
// Count is: 4
// While loop finished. Final count: 5

let x = 0;
console.log('\nStarting do...while loop:');
do {
  console.log(`x is: ${x}`);
  x++;
} while (x < 3);
console.log('Do...while loop finished. Final x:', x);
// Expected output:
// Starting do...while loop:
// x is: 0
// x is: 1
// x is: 2
// Do...while loop finished. Final x: 3

// Example where do...while runs once even if condition is initially false
let y = 10;
console.log('\nStarting do...while (condition initially false):');
do {
  console.log(`y is: ${y} (this runs once!)`);
  y++;
} while (y < 5);
console.log('Do...while loop finished. Final y:', y);
// Expected output:
// Starting do...while (condition initially false):
// y is: 10 (this runs once!)
// Do...while loop finished. Final y: 11