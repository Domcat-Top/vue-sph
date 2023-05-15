// 配置路由的地方
import Vue from 'vue';
import VueRouter from 'vue-router';

// 使用插件
Vue.use(VueRouter);

// 引入路由组件
import Home from '@/pages/Home';
import Search from '@/pages/Search';
import Login from '@/pages/Login';
import Register from '@/pages/Register';


// 先把VueRouter的原型push方法保存一份
let originPush = VueRouter.prototype.push;
// 重写push | replace
// 第一个参数：高速原来的push方法，你往哪里跳转（传递哪些参数）
// 第二个参数：成功的回调函数
// 第三个参数：失败的回调函数
VueRouter.prototype.push = function (location, resolve, reject) {
    // 个人理解就是：如果this调用的时候，传了成功和失败的回调，则直接使用手动传递的
    // 如果调用的时候，没有手动传递成功和失败的回调，则手动创建空成功和失败的回调
    // 这样方便了使用，不需要在每次使用 push 的时候，都手动写成功和失败的回调
    if (resolve && reject) {
        // 第一个参数保证了上下文还是vc，第二个参数是调用时候前端传递过来的参数
        // 后面两个参数是成功和失败的回调
        originPush.call(this, location, resolve, reject);
    } else {
        originPush.call(this, location, () => { }, () => { });
    }
}
// 下面重写replace方法，同理
let originReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function (location, resolve, reject) {
    if (resolve && reject) {
        originReplace.call(this, location, resolve, reject);
    } else {
        originReplace.call(this, location, () => { }, () => { });
    }
}

// 配置路由
export default new VueRouter({
    // 配置路由
    routes: [
        // 重定向，在项目跑起来的时候，访问/ 立马让它定向到首页
        {
            path: "*",
            redirect: "/home",
        },
        {
            path: "/home",
            component: Home,
            meta: { show: true },
        },
        {
            name: "Search",
            path: "/search",
            component: Search,
            meta: { show: true },
        },
        {
            path: "/login",
            component: Login,
            meta: { show: false },
        },
        {
            path: "/register",
            component: Register,
            meta: { show: false },
        }
    ]
})