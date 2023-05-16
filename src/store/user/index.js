
import { reqGetCode, reqUserRegister, reqUserLogin} from "@/api";

// 登录与注册的模块
const state = {
    code: "",
    token: "",
};

const mutations = {
    GETCODE(state, code) {
        state.code = code;
    },
    USERLOGIN(token) {
        state.token  = token;
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
    }

};

const getters = {};

export default {
    state,
    mutations,
    actions,
    getters
}