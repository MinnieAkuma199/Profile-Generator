const Engineer = require("../lib/engineer");

describe("Engineer class", () => {
  it("Does it create an object", () => {
    const employee = new Engineer("");
    expect(typeof employee).toEqual("object");
  });
  it("Does it set a key of name", () => {
    const employee = new Engineer("name", "id", "email");
    expect(employee.name).toEqual("name");
  });

  it("Does it set a key of id", () => {
    const employee = new Engineer("name", "id", "email");
    expect(employee.id).toEqual("id");
  });

  it("Does it set a key of email", () => {
    const employee = new Engineer("name", "id", "email");
    expect(employee.email).toEqual("email");
  });
  it("Does the getName method work?", () => {
    const employee = new Engineer("nameMethod");
    expect(employee.getName()).toEqual("nameMethod");
  });
  it("Does the getRole method work?", () => {
    const employee = new Engineer("Engineer");
    expect(employee.getRole()).toEqual("Engineer");
  });
});
