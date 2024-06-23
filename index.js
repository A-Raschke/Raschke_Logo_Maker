/* //unfinished

//using the inquirer package
const inquirer = require("inquirer");
//import from images.js file
const image = require("./image");
//import from shapes.js file
const { Circle, Triangle, Square } = require("./shapes");
//import writeFile from fs/promise module
const { writeFile } = require("fs/promises");


// inquirer class
return inquirer
    //prompt input from user
    .prompt([
        {
            name: "text",
            type: "input",
            message:"Enter text for the logo, no more than three characters.",
            validate: function (input) {
                return input.length <= 3;
            }
        },
        {
            name: "textColor",
            type: "input",
            message: "Enter a text color",
        },
        {
            name: "shapeType",
            type: "list",
            message: "Select a shape for the logo",
            choices: ["circle", "square", "triangle"],
        },
        {
            name: "shapeColor",
            type: "input",
            message: "Enter a shape color",
        },
    ])
 */

const CLI = require("./lib/cli");

new CLI().run();