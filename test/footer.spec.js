import { mount } from "@vue/test-utils";
import footerOne from "@/components/footerOne.vue";

describe("footerOne", () => {
  test("is a Vue instance - footerOne", () => {
    const wrapper = mount(footerOne);
    expect(wrapper.vm).toBeTruthy();
  });
});
