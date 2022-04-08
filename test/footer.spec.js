import { mount } from "@vue/test-utils";
import footerOne from "@/components/footerOne.vue";
import naverLogin from "@/components/naverLogin.vue";

describe("footerOne", () => {
  test("is a Vue instance - footerOne", () => {
    const wrapper = mount(footerOne);
    expect(wrapper.vm).toBeTruthy();
  });

  test("is a Vue instance - NaverAPI", () => {
    const wrapper = mount(naverLogin);
    expect(wrapper.vm).toBeTruthy();
  });
});
