// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import sjld from './components/sjld/index.js'
import store from './store/index.js'
Vue.use(sjld)

// import zxx from './components/zxx/zxx.js'
// Vue.use(zxx)
Vue.config.productionTip = false
Vue.directive('dir2', {
  inserted(el) {
      console.log('22222');
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,//使用store
  components: { App },
  template: '<App/>'
})


