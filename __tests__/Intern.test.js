const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
  const testValue = "UCBerkeley";
  const e = new Intern("Gary", 1, "garytest@test.com", testValue);
  expect(e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("Brandon", 1, "Brandontest@test.com", "UCLA");
  expect(e.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
  const testValue = "UCSanDiego";
  const e = new Intern("Mark", 1, "isleavingforever@test.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});
