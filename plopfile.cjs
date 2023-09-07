const componentGenerator = require("./plop-templates/component/prompt.cjs");
const unitTestGenerator = require("./plop-templates/__tests__/prompt.cjs");

module.exports = function (plop) {
  plop.setGenerator("component", componentGenerator);
  plop.setGenerator("unit-test", unitTestGenerator);
};