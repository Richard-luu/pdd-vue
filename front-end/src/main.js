// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// 引入第三方库
import LyTab from 'ly-tab'
import App from './App'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.use(LyTab);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
  // render: h=>h(App)
})
