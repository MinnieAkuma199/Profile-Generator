const Manager = require("../lib/manager");

describe("Manager class", () => {
  it("Does it create an object", () => {
    const employee = new Manager("");
    expect(typeof employee).toEqual("object");
  });
  it("Does it set a key of name", () => {
    const employee = new Manager("name", "id", "email");
    expect(employee.name).toEqual("name");
  });

  it("Does it set a key of id", () => {
    const employee = new Manager("name", "id", "email");
    expect(employee.id).toEqual("id");
  });

  it("Does it set a key of email", () => {
    const employee = new Manager("name", "id", "email");
    expect(employee.email).toEqual("email");
  });
  it("Does the getName method work?", () => {
    const employee = new Manager("nameMethod");
    expect(employee.getName()).toEqual("nameMethod");
  });
  it("Does the getRole method work?", () => {
    const employee = new Manager("Manager");
    expect(employee.getRole()).toEqual("Manager");
  });
});
