export const state = () => ({
    nowPage: 0,
    pageSize: 0,
    arr: [],
    click: 0,
    from: '',
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
};

export const getters = {
    GET_pageInfo(state) {
        return { nowPage: state.nowPage, pageSize: state.pageSize, from: state.from };
    },
};
