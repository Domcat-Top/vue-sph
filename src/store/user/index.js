
import { reqGetCode, reqUserRegister, reqUserLogin, reqUserInfo} from "@/api";

// 登录与注册的模块
const state = {
    code: "",
    token: "",
    userInfo: {},
};

const mutations = {
    GETCODE(state, code) {
        state.code = code;
    },
    USERLOGIN(state, token) {
        state.token  = token;
    },
    GETUSERINFO(state, userInfo){
        state.userInfo = userInfo;
    }
};

const actions = {
    // 获取验证码
    async getCode({ commit }, phone) {
        let result = await reqGetCode(phone);
        if (result.code == 200) {
            commit("GETCODE", result.data);
            return "Ok";
        } else {
            return Promise.reject(new Error("failure"));
        }
    },
    // 用户注册
    async userRegister(commit, user) {
        let result = await reqUserRegister(user);
        if(result.code == 200) {
            return "ok";
        } else {
            return Promise.reject(new Error("failure"));
        }
    },
    // 登录【token】
    async userLogin(commit, data) {
        let result = await reqUserLogin(data);
        if(result.code == 200 ) {
            commit("USERLOGIN", result.data.token);
            return "ok";
        } else {
            return Promise.reject(new Error("failure"));
        }
    },
    // 获取用户信息
    async getUserInfo(commit) {
        let result = await reqUserInfo();
        if(result.code == 200) {
            commit("GETUSERINFO", result.data);
            return "OK";
        } else {
            return Promise.reject(new Error("failure"));
        }
    }

};

const getters = {};

export default {
    state,
    mutations,
    actions,
    getters
}