
import {reqCategoryList} from '@/api';

// state：存放数据的仓库
const state = {
    categoryList: [],
};
// actions：处理action，可以书写自己的业务逻辑，也可以处理异步
const actions = {
    // 从 promise 中取出数据，需要异步，我也不知道为啥要这么设计
    async categoryList(commit) {
        let result = await reqCategoryList();
        if(200 == result.code) {
            this.commit("CATEGORYLIST", result.data)
        }
    }
};
// mutations：修改state的唯一手段
const mutations = {
    CATEGORYLIST(state, categoryList) {
        state.categoryList = categoryList;
    }
};
// getters：可以理解为计算属性，用于简化仓库数据，让组件获取仓库的数据更加方便
const getters = {};
// 对外暴露Store类的一个实例
export default {
    state,
    actions,
    mutations,
    getters,
};