"use strict";
const path = require("path");
const fs = require("fs-extra");

function generateRandomId() {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let id = "";
  for (let i = 0; i < 5; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    id += characters.charAt(randomIndex);
  }
  return id;
}

async function generateChoices() {
  const root = path.resolve(__dirname, "../../components");
  return await fs.readdirSync(root);
}

module.exports = {
  description: "generate a unit test",
  prompts: [
    {
      type: "list",
      name: "name",
      message: "select components to test:",
      choices: async () => await generateChoices(),
    },
    {
      type: "list",
      name: "mode",
      message: "choose the syntax you are used to:",
      choices: ["JavaScript", "Typescript"],
    },
  ],
  actions: (options) => {
    const name = "{{properCase name}}";
    const { mode } = options;
    console.log(options)
    const actions = [
      {
        type: "add",
        path: `components/${name}/__tests__/index-${generateRandomId()}.test.${
          mode === "JavaScript" ? "js" : "ts"
        }`,
        templateFile: "plop-templates/__tests__/src/index.test.js.hbs",
        data: {
          name,
        },
        skipIfExists: true,
      },
    ];
    return actions;
  },
};
