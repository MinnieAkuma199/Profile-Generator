const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

const employees = [];
function managerQuestions() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the manager's name?",
        name: "name",
      },
      {
        type: "input",
        message: "What is the manager's ID #?",
        name: "id",
      },
      {
        type: "input",
        message: "What is the manager's email?",
        name: "email",
      },
      {
        type: "input",
        message: "What is the manager's office number?",
        name: "officeNumber",
      },
    ])
    .then((response) => {
      const newManager = new Manager(
        response.name,
        response.id,
        response.email,
        response.officeNumber
      );
      employees.push(newManager);
      addTeamMember();
    });
}
function generateManagerCard(manager) {
  const templateManager = `        <div class="card manager mt-3" style="width: 18rem;">
            <div class="card-block">
                <h5 class="card-title">${manager.name}</h5>
                <h6 class="card-title">${manager.getRole()}</h6>
                <div class="card" style="width: 18rem;">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${manager.id} </li>
                        <li class="list-group-item"> Email: <a href="mailto:${
                          manager.email
                        }" class="card-link">${manager.email}</a></li>
                        <li class="list-group-item">Office number: ${
                          manager.officeNumber
                        } </li>
                    </ul>
                </div>
            </div>
        </div>`;
  return templateManager;
}
function addTeamMember() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Would you like to add another member of the team?",
        choices: ["Engineer", "Intern", "FINISHED"],
        name: "newTeamMember",
      },
    ])
    .then(({ newTeamMember }) => {
      if (newTeamMember === "Engineer") {
        inquirer
          .prompt([
            {
              type: "input",
              message: "What is the engineer's name?",
              name: "ename",
            },
            {
              type: "input",
              message: "What is the engineer's ID #?",
              name: "eid",
            },
            {
              type: "input",
              message: "What is the engineer's email?",
              name: "eemail",
            },
            {
              type: "input",
              message: "What is the engineer's github username?",
              name: "egitHub",
            },
          ])
          .then((eAnswers) => {
            const newEngineer = new Engineer(
              eAnswers.ename,
              eAnswers.eid,
              eAnswers.eemail,
              eAnswers.egitHub
            );

            employees.push(newEngineer);
            addTeamMember();
          });
      } else if (newTeamMember === "Intern") {
        inquirer
          .prompt([
            {
              type: "input",
              message: "What is the intern's name?",
              name: "iname",
            },
            {
              type: "input",
              message: "What is the intern's ID #?",
              name: "iid",
            },
            {
              type: "input",
              message: "What is the intern's email?",
              name: "iemail",
            },
            {
              type: "input",
              message: "What school does the intern go to?",
              name: "school",
            },
          ])
          .then((iAnswers) => {
            const newIntern = new Intern(
              iAnswers.iname,
              iAnswers.iid,
              iAnswers.iemail,
              iAnswers.school
            );

            employees.push(newIntern);
            addTeamMember();
          });
      } else {
        console.log(employees);
        fs.writeFile("index.html", HTMLGenerator(employees), (err) => {
          err ? console.error(err) : console.log("You did it!");
        });
      }
    });
}

function generateEngineerCard(engineer) {
  const templateEngineer = `       <div class="card engineer mt-3" style="width: 18rem;">
            <div class="card-block">
                <h5 class="card-title">${engineer.name}</h5>
                <h6 class="card-title">${engineer.getRole()}</h6>
                <div class="card" style="width: 18rem;">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${engineer.id}</li>
                        <li class="list-group-item"> Email: <a href="mailto:${
                          engineer.email
                        }" class="card-link">${engineer.email}</a></li>
                        <li class="list-group-item"> GitHub: <a href="https://github.com/${
                          engineer.gitHub
                        }" class="card-link"> https://github.com/${
    engineer.gitHub
  }</a></li>
                    </ul>
                </div>
            </div>
        </div>`;
  return templateEngineer;
}
function generateInternCard(intern) {
  const templateIntern = `    <div class="card intern mt-3" style="width: 18rem;">
            <div class="card-block">
                <h5 class="card-title">${intern.name}</h5>
                <h6 class="card-title">${intern.getRole()}</h6>
                <div class="card" style="width: 18rem;">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${intern.id} </li>
                        <li class="list-group-item"> Email: <a href="mailto:${
                          intern.email
                        }" class="card-link">${intern.email}</a></li>
                        <li class="list-group-item"> School: ${
                          intern.school
                        } </li>
                    </ul>
                </div>
            </div>
        </div>`;
  return templateIntern;
}
function HTMLGenerator(employee) {
  let templateHTML1 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2"
            crossorigin="anonymous"></script>
         <link rel="stylesheet" type="text/css" href="./dist/style.css" />
    <title>Profile-Generator</title>
</head>
<body>
    <div class="jumbotron jumbotron-fluid">
        <div class="container">
            <h1 class="display-4">My Team's Profiles</h1>
            <p class="lead">Below are the generated profiles☺️</p>
        </div>
    </div>
    <div class="container">
`;
  const templateHTML2 = `    </div>
<footer> Kristyn D. Web Productions© </footer>
</body>
</html>`;
  //creating cards and adding to the html
  for (let i = 0; i < employee.length; i++) {
    if (employee[i].getRole() === "Manager") {
      templateHTML1 += generateManagerCard(employee[i]);
    } else if (employee[i].getRole() === "Engineer") {
      templateHTML1 += generateEngineerCard(employee[i]);
    } else if (employee[i].getRole() === "Intern") {
      templateHTML1 += generateInternCard(employee[i]);
    }
  }
  templateHTML1 += templateHTML2;
  return templateHTML1;
}

managerQuestions();
