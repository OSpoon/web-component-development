import { expect, fixture } from "@open-wc/testing";
import "../../../dist/MyComponent/index";

const data = {
  text: "HelloWorld",
  count: 1,
};

let el;

describe("<my-component />", async () => {
  it("property text exist", async () => {
    el = await fixture(`<my-component text=${data.text}></my-component`);
    expect(el.text).to.equal(data.text);
  });

  it("property count exist", async () => {
    el = await fixture(`<my-component count=${data.count}></my-component`);
    expect(el.count).to.equal(data.count);
  });

  it("property count changed", async () => {
    el = await fixture(`<my-component count=${data.count}></my-component`);
    el.add();
    expect(el.count).to.equal(data.count + 1);
  });
});
