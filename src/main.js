// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Resource from 'vue-resource'
import store from './vuex'
import '@/assets/style/iconfont.css'

//生产小贴士
Vue.config.productionTip = false
//声明以后，就可以在任何一个组件中使用this.$http了。
Vue.use(Resource)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
