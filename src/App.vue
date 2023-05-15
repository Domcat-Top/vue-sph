<template>
  <div>
    <Header></Header>
    <!-- 路由组件的出口位置，意思在这里展示路由组件 -->
    <router-view></router-view>
    <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
export default {
  name: 'app',
  components: {
    Header,
    Footer,
  }
}
</script>



