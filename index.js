const inquirer = require("inquirer");
const fs = require("fs");

//making classes should i put these in functions so that i can call in inquirer prompt below?
// class Employee {
//   constructor(name, id, email) {
//     this.name = name;
//     this.id = id;
//     this.email = email;
//   }
//   getName() {}
//   getId() {}
//   getEmail() {}
//   getRole() {}
// }
// class Manager {}

// class Engineer {}

// class Intern {}

inquirer
  .prompt([
    {
      type: "input",
      message: "What is the employee's name?",
      name: "name",
    },
    {
      type: "input",
      message: "What is the employee's ID #?",
      name: "id",
    },
    {
      type: "input",
      message: "What is the employee's email?",
      name: "email",
    },
    {
      type: "list",
      message: "Employees role?",
      choices: ["Manager", "Engineer", "Intern"],
      name: "role",
    }, //is there something i can do to only get select questions depending on what is selected?
    {
      type: "input",
      message: "What is the employee's office number?",
      name: "officeNumber",
    },
    {
      type: "input",
      message: "What is the employee's github username?",
      name: "gitHub",
    },
    {
      type: "input",
      message: "What school does the employee go to?",
      name: "school",
    },
  ])
  .then((response) => {
    const templateHTML1 = `<!DOCTYPE html>
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
        <link rel="stylesheet" type="text/css" href="./style.css" />
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

    //but how will i make this based on my html i created? i want these cards to enter my html i created based off of user selection
    const templateManager = `        <div class="card manager mt-3" style="width: 18rem;">
            <div class="card-block">
                <h5 class="card-title">${response.name}</h5>
                <h6 class="card-title">${response.role}</h6>
                <div class="card" style="width: 18rem;">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${response.id} </li>
                        <li class="list-group-item"> Email: <a href="#" class="card-link">${response.email}</a></li>
                        <li class="list-group-item">Office number: ${response.officeNumber} </li>
                    </ul>
                </div>
            </div>
        </div>`;
    const templateEngineer = `       <div class="card engineer mt-3" style="width: 18rem;">
            <div class="card-block">
                <h5 class="card-title">${response.name}</h5>
                <h6 class="card-title">${response.role}</h6>
                <div class="card" style="width: 18rem;">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${response.id}</li>
                        <li class="list-group-item"> Email: <a href="#" class="card-link">${response.email}</a></li>
                        <li class="list-group-item"> GitHub: <a href="#" class="card-link">https://github.com/${response.gitHub}</a></li>
                    </ul>
                </div>
                
                
            </div>
        </div>`;
    const templateIntern = `        <div class="card intern mt-3" style="width: 18rem;">
            <div class="card-block">
                <h5 class="card-title">${response.name}</h5>
                <h6 class="card-title">${response.role}</h6>
                <div class="card" style="width: 18rem;">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${response.id} </li>
                        <li class="list-group-item"> Email: <a href="#" class="card-link">${response.email}</a></li>
                        <li class="list-group-item"> School: ${response.school} </li>
                    </ul>
                </div>


            </div>
        
        
        </div>`;
    //trying to append it all together
    var fsWriter = fs.createWriteStream(
      "README.md",
      {
        flags: templateHTML1,
      },
      fs.write(templateManager),
      fs.write(templateEngineer),
      fs.write(templateIntern),
      fs.write(templateHTML2)
    );
    fs.writeFile("index.html", fsWriter, (err) => {
      err ? console.error(err) : console.log("You did it!");
    });
  });
