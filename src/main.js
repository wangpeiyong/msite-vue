// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/'
import i18n from './lang'
import '@/styles/index.scss' // global css
import * as filters from './filters' // 全局vue filter
import MetaInfo from 'vue-meta-info'
import YDUI from 'vue-ydui';
// import 'vue-ydui/dist/ydui.rem.css';
import 'vue-ydui/dist/ydui.px.css';

Vue.use(YDUI);

Vue.use(MetaInfo)
// register global utility filters.
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
});

new Vue({
  el: '#app',
  router,
  store,
  i18n,
  template: '<App/>',
  components: { App }
})
