import Vue from 'vue'

import App from './App.vue';

// 引入路由
import router from '@/router/index';

Vue.config.productionTip = false

// 注册全局组件
import TypeNav from '@/components/TypeNav';
// 第一个参数：全局组件的名字
// 第二个参数：哪一个组件
Vue.component(TypeNav.name, TypeNav);

// 引入仓库
import store from '@/store'


new Vue({
  render: h => h(App),
  // 注册路由，下面的写法是KV一致，省略V写法
  router,
  // 注册仓库，组件实例的身上会多一个属性：$ store
  store,
}).$mount('#app')

