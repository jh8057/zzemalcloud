import { mount } from "@vue/test-utils";
import randomPage from "@/pages/randomPage.vue";

describe("randomPage - page", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(randomPage);
  });
  test("is a Vue Page", () => {
    expect(wrapper.vm).toBeTruthy();
  });
  test("random wrapper", () => {
    expect(wrapper.classes()).toContain("random_wrapper");
  });
});
