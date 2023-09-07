"use strict";
const { JSDOM } = require("jsdom");
const { pascalCase } = require("change-case");

function hasHrefContent(document, href) {
  const links = document.querySelectorAll("a");
  return Array.from(links).some((link) => link.href === href);
}

function insertATag(document, href, textContent) {
  const ul = document.querySelector("ul");
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.href = href;
  a.textContent = textContent;
  li.append(a);
  ul.appendChild(li);
}

function transformEntry(fileContents, data) {
  const name = pascalCase(data.name);
  const href = `./components/${name}/demo/index.html`;
  const dom = new JSDOM(fileContents);
  const { window } = dom;
  const { document } = window;
  const exist = hasHrefContent(document, href);
  if (!exist) {
    insertATag(document, href , `${name} in H5`);
    return dom.serialize();
  }
  return fileContents;
}

module.exports = {
  description: "generate a component",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "enter component name :",
      validate: (v) => {
        return !v || v.trim() === "" ? `${name} is required` : true;
      },
    },
    {
      type: "list",
      name: "styleMode",
      message: "select a style mode :",
      choices: ["normal", "unocss"]
    }
  ],
  actions: options => {
    const { styleMode } = options;
    const name = "{{properCase name}}";
    const actions = [
      {
        type: "add",
        path: `components/${name}/index.tsx`,
        templateFile: "plop-templates/component/src/index.hbs",
        data: {
          name,
          normalStyle: styleMode === "normal",
          unocssStyle: styleMode === "unocss"
        },
        skipIfExists: true,
      },
      {
        type: "add",
        path: `components/${name}/index.less`,
        templateFile: "plop-templates/component/src/index.less.hbs",
        data: {
          normalStyle: styleMode === "normal",
          unocssStyle: styleMode === "unocss"
        },
        skipIfExists: true,
      },
      {
        type: "add",
        path: `components/${name}/vite-env.d.ts`,
        templateFile: "plop-templates/component/src/vite-env.d.ts.hbs",
        skipIfExists: true,
      },
      {
        type: "add",
        path: `components/${name}/demo/index.html`,
        templateFile: "plop-templates/component/src/demo/index.html.hbs",
        skipIfExists: true,
        data: {
          name,
        },
      },
      {
        type: "add",
        path: `components/${name}/demo/index.vue.html`,
        templateFile: "plop-templates/component/src/demo/index.vue.html.hbs",
        data: {
          name,
        },
        skipIfExists: true,
      },
      {
        type: "add",
        path: `components/${name}/__tests__/index.test.js`,
        templateFile: "plop-templates/component/src/__tests__/index.test.js.hbs",
        data: {
          name,
        },
        skipIfExists: true,
      },
      {
        type: "modify",
        path: 'index.html',
        data: {
          name,
        },
        transform: (fileContents, data) => transformEntry(fileContents, data),
      }
    ];

    return actions;
  },
};
