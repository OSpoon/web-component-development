import componentGenerator from "./plop-templates/component/prompt.mjs";
import unitTestGenerator from "./plop-templates/__tests__/prompt.mjs";

export default function (plop) {
  plop.setGenerator("component", componentGenerator);
  plop.setGenerator("unit-test", unitTestGenerator);
}
