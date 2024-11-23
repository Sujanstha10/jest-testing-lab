const validatePassword = require("./validatePassword.js");
test("return fasle for empty password", () => {
  expect(validatePassword("")).toBe(false);
});
test("return false for password without uppercase", () => {
  expect(validatePassword("1234sfdvs")).toBe(false);
});
test("return false for password without lowercase", () => {
  expect(validatePassword("1234ASDFVA")).toBe(false);
});
test("return false for password without number", () => {
  expect(validatePassword("asdfASFasdf")).toBe(false);
});
test("return false for password without letters", () => {
  expect(validatePassword("1234567890")).toBe(false);
});
test("return true for password with uppercase,lowercase, number and more than 8 character ", () => {
  expect(validatePassword("1adrfgADSF")).toBe(true);
});
test("return false for password with uppercase,lowercase,and number but less than 8 character", () => {
  expect(validatePassword("13gaAF")).toBe(false);
});
