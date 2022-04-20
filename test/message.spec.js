import { mount } from "@vue/test-utils";
import message from "@/components/message.vue";

describe("message - component", () => {
  test("is a Vue instance - message", () => {
    const wrapper = mount(message);
    expect(wrapper.vm).toBeTruthy();
  });
  test("has a input tag", () => {
    const wrapper = mount(message);
    expect(wrapper.find("input").isVisible()).toBeTruthy();
  });
  test("span message ", () => {
    const wrapper = mount(message);
    expect(wrapper.find("span").isVisible()).toBeTruthy();
  });
  test("default message - this is mesg", () => {
    const wrapper = mount(message);
    expect(wrapper.find("span").text()).toBe('this is mesg');
  });

});
