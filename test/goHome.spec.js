import { mount } from "@vue/test-utils";
import goHome from "@/components/goHome.vue";

describe("goHome - component", () => {
    test('is a Vue Components',()=>{
        const wrapper = mount(goHome)
        expect(wrapper.vm).toBeTruthy()
    })
    test('have <i></i> tage',()=>{
        const wrapper = mount(goHome);
        expect(wrapper.find('i')).toBeTruthy()
    })
    test('i tage id = icons',()=>{
        const wrapper = mount(goHome);
        expect(wrapper.find('i').classes()).toContain('fas')
        expect(wrapper.find('i').classes()).toContain('fa-angle-left')
    })
})