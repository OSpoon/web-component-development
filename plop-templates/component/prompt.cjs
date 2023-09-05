"use strict";

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
    ];

    return actions;
  },
};
