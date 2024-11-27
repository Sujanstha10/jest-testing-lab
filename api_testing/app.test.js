const request = require("supertest");
const app = require("./app.js");

describe("POST /users", () => {
  describe("when username and password is given", () => {
    test("should respond with a 200 status code", async () => {
      const response = await request(app).post("/users").send({
        username: "username",
        password: "password",
      });
      //   should respond with a 200 status code
      expect(response.statusCode).toBe(200);

      // should specify json in the content type header
      expect(response.headers["content-type"]).toMatch("application/json");

      //should respond with a json object having the user id
      expect(response.body.userId).toBeDefined();

      //should save the data to the database
    });
  });
  describe("when username and password is missing", () => {
    //should respond with a 400 status code
    test("should respond with a 400 status code", async () => {
      const bodyData = [{ username: "user" }, { password: "pass" }, {}];
      for (const body of bodyData) {
        const response = await request(app).post("/users").send(body);
        expect(response.statusCode).toBe(400);
      }
    });
  });
});
