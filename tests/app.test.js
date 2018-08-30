const axios = require("axios");

describe("Checking api", () => {
  // Test get user
  test("Get user data", async () => {
    const data = await axios.get("http://localhost:3000/user");
    expect(data.data).toEqual({
      name: "Rahman Fadhil",
      email: "rhmnfadhil@gmail.com"
    });
  });

  // Test post user
  test("Post user data", async () => {
    const data = await axios.post("http://localhost:3000/user", {
      name: "Rahman Fadhil",
      email: "rhmnfadhil@gmail.com"
    });
    expect(data.data).toEqual({
      name: "Rahman Fadhil",
      email: "rhmnfadhil@gmail.com"
    });
  });
});
