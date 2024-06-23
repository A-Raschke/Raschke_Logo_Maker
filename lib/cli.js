//using the inquirer package
const inquirer = require("inquirer");
//import from shapes.js file
const { Circle, Triangle, Square } = require("./shapes");
//import writeFile from fs/promise module
const { writeFile } = require("fs/promises");
// import from svg.js file
const SVG = require("./svg");

class CLI {
    run() {
        // inquirer class
        return inquirer
            //prompt input from user
            .prompt([
                {
                    name: "text",
                    type: "input",
                    message: "Enter text for the logo, no more than three characters.",
                    validate: input => input.length <= 3 || 'Text must be 3 characters or less'
                },
                {
                    name: "textColor",
                    type: "input",
                    message: "Enter a text color.",
                },
                {
                    name: "shapeType",
                    type: "list",
                    message: "Select a shape for the logo.",
                    choices: ["circle", "square", "triangle"],
                },
                {
                    name: "shapeColor",
                    type: "input",
                    message: "Enter a shape color.",
                },
            ])
            .then(({ text, textColor, shapeType, shapeColor }) => {
                let shape;
                switch (shapeType) {
                    case "circle":
                        shape = new Circle();
                        break;

                    case "square":
                        shape = new Square();
                        break;

                    default:
                        shape = new Triangle();
                        break;
                }
                shape.setColor(shapeColor);

                const svg = new SVG();
                svg.setText(text, textColor);
                svg.setShape(shape);
                return writeFile("logo.svg", svg.render());
            })
            .then(() => {
                console.log("Generated logo.svg");
            })
            .catch((error) => {
                console.log(error);
                console.log("Error!");
            });

    }
}

module.exports = CLI;