const inquirer = require('inquirer');
const fs = require('fs');
const { exec } = require('child_process');
const cfonts = require('cfonts');
const cliSpinners = require('cli-spinners');


cfonts.say('WeIOT|React CLI!', {
	font: 'block',              // define the font face
	align: 'left',              // define text alignment
	colors: ['green',"red"],         // define all colors
	background: 'transparent',  // define the background color, you can also use `backgroundColor` here as key
	letterSpacing: 1,           // define letter spacing
	lineHeight: 1,              // define the line height
	space: true,                // define if the output text should have empty lines on top and on the bottom
	maxLength: '0',             // define how many character can be on one line
	gradient: false,            // define your two gradient colors
	independentGradient: false, // define if you want to recalculate the gradient for each new line
	transitionGradient: false,  // define if this is a transition between colors directly
	env: 'node'                 // define the environment cfonts is being executed in
});
  

 
inquirer 
    .prompt([
      {
        type: 'rawlist',
        name: 'menu',
        message: 'What do you want to do?',
        choices: [
          'Create Webpack Config',
          new inquirer.Separator(),
          'Remove Build Folder',
          new inquirer.Separator(),
          'Build on Development Mode',
          'Build on Production Mode',
        ],
      }
    ])
    .then((answer) => {
      
      
    if(answer.menu === "Remove Build Folder"){

      exec('rm -rf dist', (err, stdout, stderr) => {
        if (err) {
          console.error(err)
          process.exit(1)
        } 
      })

    }

    
    if(answer.menu === "Build on Development Mode"){

      exec('npx webpack --mode development', (err, stdout, stderr) => {
        if (err) {
          console.error(err)
          process.exit(1)
        } else {
          console.log(stdout.toString())
        }
      })

    }

    if(answer.menu === "Build on Production Mode"){

      exec('npx webpack --mode production', (err, stdout, stderr) => {
        if (err) {
          console.error(err)
          process.exit(1)
        } else {
          console.log(stdout.toString())
        }
      })

    }

    if(answer.menu === "Create Webpack Config"){

      inquirer
      .prompt([
        {
          type: 'input',
          name: 'appScopeName',
          message: 'Scope Name',
          validate: input => {
            if(input.match(/^[a-zA-Z]+$/)){
              return true;
            }
            return '"App Scope Name" must be only letters, numbers';
          }
        },
        {
          type: 'input',
          name: 'serverPort',
          message: 'Server Port',
          validate: input => {
            if(input.match(/^[0-9]+$/)){
              return true;
            }
            return '"DeveloperPort" Name must be only numbers';
          }
        }
      ]).then(answerConfig => {


        fs.readFile('./weiot/config.js', 'utf8', function (err, data) {
          if (err){
            console.log("Webpack file Error");
            return;
          }
  
          fs.writeFile('./webpack.config.js',data.replace("[appScopeName]",answerConfig.appScopeName).replace("[developerPort]",answerConfig.serverPort), function (err) {
            if (err){
              console.log("Error");
              return;
            }


          });
  
      });
        

    
      })

      
    }



    });

