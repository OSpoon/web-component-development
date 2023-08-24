"use strict";

module.exports = {
  description: "generate a component",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "component name please :",
      validate: (v) => {
        return !v || v.trim() === "" ? `${name} is required` : true;
      },
    },
  ],
  actions: () => {
    const name = "{{properCase name}}";
    const actions = [
      {
        type: "add",
        path: `components/${name}/index.tsx`,
        templateFile: "plop-templates/component/src/index.hbs",
        data: {
          name,
        },
        skipIfExists: true,
      },
      {
        type: "add",
        path: `components/${name}/index.less`,
        templateFile: "plop-templates/component/src/index.less.hbs",
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
