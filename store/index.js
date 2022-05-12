// store 작성해보기

export const state = () => ({
    counter: 0,
    arr: [1, 2, 'string'],
});

export const mutations = {
    increment(state) {
        state.counter++;
    },
    decrement(state) {
        state.counter--;
    },
};

export const actions = {
    increment(context) {
        context.commit('increment');
    },
};

export const getters = {
    getArrNumber(state) {
        return state.arr.filter((el) => typeof el === 'number');
    },
};
