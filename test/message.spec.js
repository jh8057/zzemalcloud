import { mount } from "@vue/test-utils";
import message from "@/components/message.vue";

describe("message - component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(message);
  });
  test("is a Vue instance - message", () => {
    expect(wrapper.vm).toBeTruthy();
  });
  test("has a input tag", () => {
    expect(wrapper.find("input").isVisible()).toBeTruthy();
  });
  test("span message ", () => {
    expect(wrapper.find("span").isVisible()).toBeTruthy();
  });
  test("default message - this is mesg", () => {
    expect(wrapper.find("span").text()).toBe("this is mesg");
  });
});
