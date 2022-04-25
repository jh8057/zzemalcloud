import { mount } from "@vue/test-utils";
import randombox from "@/components/randombox.vue";

describe("randombox", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(randombox);
  });
  test("is a Vue components", () => {
    expect(wrapper.vm).toBeTruthy();
  });
  test("div - randomBox", () => {
    expect(wrapper.find("div").classes()).toContain("randomBox");
  });
  test("button - randomName", () => {
    expect(wrapper.find("button")).toBeTruthy();
  });
  //함수 테스트..
});
