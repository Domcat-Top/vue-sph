
import {reqCategoryList, reqBannerList} from '@/api';

// state：存放数据的仓库
const state = {
    categoryList: [],
    // 轮播图的数据
    bannerList: [],
};
// actions：处理action，可以书写自己的业务逻辑，也可以处理异步
const actions = {
    // 从 promise 中取出数据，需要异步，我也不知道为啥要这么设计
    async categoryList(commit) {
        let result = await reqCategoryList();
        if(200 == result.code) {
            this.commit("CATEGORYLIST", result.data)
        }
    },
    // 获取首页轮播图的数据
    async getBannerList() {
        // 调取的是API里写好的接口，返回一个promise对象
        // 如果想获取里面的数据，需要进行异步操作
        let result = await reqBannerList();
        if(result.code == 200) {
            this.commit("GETBANNERLIST", result.data);
        }
    }
};
// mutations：修改state的唯一手段
const mutations = {
    CATEGORYLIST(state, categoryList) {
        state.categoryList = categoryList;
    },
    GETBANNERLIST(state, bannerList) {
        state.bannerList = bannerList;
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