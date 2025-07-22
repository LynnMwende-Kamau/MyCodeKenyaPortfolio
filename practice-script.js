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

