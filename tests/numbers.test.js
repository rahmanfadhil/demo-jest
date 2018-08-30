const number = require("../src/numbers");

describe("Checking number", () => {
  // Test if 1 + 1 is 2
  test("User is Jeff", () => {
    expect(number.add(1, 1)).toBe(2);
  });

  // Test if 2 - 1 is 1
  test("User is Karen", () => {
    expect(number.substract(2, 1)).toBe(1);
  });
});
