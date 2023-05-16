
// 对axios进行二次封装
import axios from 'axios';

// 引入进度条
import nprogress from 'nprogress';
// 引入进度条的样式
import "nprogress/nprogress.css";

// 1. 利用axios对象的方法create，去创建一个axios实例
// request就是axios，但是可以稍微进行配置
const requests = axios.create({
    // 配置对象
    // 基础路径，发请求的时候，路径当中会出现API
    baseURL: "/api",
    // 代表请求超时的时间：五秒
    timeout: 5000,
});
// 请求拦截器：在发请求之前，请求拦截器可以检测到;
// 在请求发出去之前做一些事情
requests.interceptors.request.use((config) => {
    // 登陆以后，服务器返回一个token，放入到store.state
    // 之后每次请求跳转之前，检查是否有token，进行相关的操作
    // config：配置对象，对象里面有一个属性很重要，headers请求头
    // 需要携带token给服务器
    if(store.state.user.token) {
        config.headers.token = store.state.user.token;
    }
    // 进度条开始动
    nprogress.start();
    return config;
});
// 响应拦截器
requests.interceptors.response.use((response) => {
    // 服务器成功的回调函数
    // 服务器响应数据回来以后，响应拦截器可以检测到，可以做一些事情
    nprogress.done();
    return response.data;
}, (error) => {
    // 服务器失败的回调函数---响应失败的回调函数
    // 比如可以打印一些错误信息
    return Promise.reject(new Error('faile'));
})


// 对外暴露
export default requests;