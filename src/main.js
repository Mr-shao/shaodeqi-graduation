import Vue from 'vue';
import router from './router.js';
import App from './App.vue';
import validator from 'vee-validate';
import 'element-ui/lib/theme-default/index.css';
import ElementUI from 'element-ui';

Vue.use(ElementUI);
Vue.use(validator);
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})