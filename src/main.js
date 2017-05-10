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
function IsPC() {
    var userAgentInfo = navigator.userAgent;
    var Agents = ["Android", "iPhone",
                "SymbianOS", "Windows Phone",
                "iPad", "iPod"];
    console.log(userAgentInfo);
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    return flag;
}
console.log(IsPC());
