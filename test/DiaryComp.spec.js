import { mount } from "@vue/test-utils";
import DiaryComp from "@/components/DiaryComp.vue";

describe("DiaryComp", () => {
    test('is a Vue component - DiaryComp', ()=>{
        const wrapper = mount(DiaryComp)
        expect(wrapper.vm).toBeTruthy()
    })

    test('default props', ()=>{
        const wrapper = mount(DiaryComp)
        expect(wrapper.props()).toEqual({
            RegDate : 100,
            title : "Diary Contents",
            icons : "🍔",
            contents : 100
        })
    })

})