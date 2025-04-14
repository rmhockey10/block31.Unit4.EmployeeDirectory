//Import the express library
import express from "express";

//Create an express app
const app = express();

//Export the app
export default app;

import employees from "#db/employees";

console.log(employees);

// GET / to send the message "Hello World"
app.route("/").get((request, response) => {
  response.send("Hello employees!");
});

// GET /employees/random randomly generated a number used as an id to select an employee
app.route("/employees/random").get((request, response) => {
  const id = Math.floor(Math.random() * employees.length);
  console.log(id);
  const found = employees.find((employee) => employee.id === id);
  response.send(found);
});

//GET /employees sends array of employees
app.route("/employees").get((request, response) => {
  response.send(employees);
});

// GET /employees/:id sends the employee with the given id number
app.route("/employees/:id").get((request, response) => {
  const { id } = request.params;
  console.log(id);

  if (!employees || +id > employees.length || +id < 1) {
    return response.status(404).send("there is no employee with that id");
  }
  const found = employees.find((employee) => employee.id === +id);
  response.send(found);
});
