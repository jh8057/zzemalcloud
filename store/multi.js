export const state = () => ({
    nowPage: 0,
    pageSize: 0,
    arr: [],
    click: 0,
    from: '',
    num: 0,
});

export const mutations = {
    upClick(state) {
        state.click++;
    },
    downClick(state) {
        state.click--;
    },
    changeFrom(state, payload) {
        state.from = payload;
    },
    changeNum(state, payload) {
        state.num = payload;
    },
};

export const actions = {
    AddClick(context) {
        context.commit('upClick');
    },
    minusClick(context) {
        context.commit('downClick');
    },
    addFrom(context, payload) {
        context.commit('changeFrom', payload);
    },
    clickNum(context, payload) {
        context.commit('changeNum', payload);
    },
};

export const getters = {
    GET_pageInfo(state) {
        return { nowPage: state.nowPage, pageSize: state.pageSize, from: state.from };
    },
};
