import Vue from "vue";
import App from "./App.vue";
import axios from 'axios';
import router from "./router";
import store from "./store";
import './config/rem';
import './style/base.css';

import 'mint-ui/lib/style.css';
import MintUI from 'mint-ui';
import ElementUI from 'element-ui';
Vue.use(ElementUI);
Vue.use(MintUI);

const user_id = sessionStorage.getItem('user_ID') || '',
    // URl = 'http://www.2tianqc.com',
    //  URl = 'http://api.2shopsn.cn',      //提交代码改回来   ---meng
     URl = 'http://www.mujingsen.com/',      //提交代码改回来   ---meng
    client_type = 1, //1浏览器，2 app
    andr_version = '2.3.2', //安卓APP版本0801
    ios_version = '1.0.0', //ios APP版本
    load_wrap = true,
    down = true; //true时默认打开下拉刷新

    Vue.prototype.client_type = client_type;
    Vue.prototype.ios_version = ios_version;
    Vue.prototype.andr_version = andr_version;
    Vue.prototype.down = down;
    Vue.prototype.URL = URl;
    Vue.prototype.load_wrap = load_wrap;
    Vue.prototype.user_id = user_id;
    Vue.prototype.axios = axios;


Vue.config.productionTip = false;
Vue.directive('title', {
  inserted: function(el, binding) {
      document.title = el.innerText;
      el.remove();
  }
});
router.beforeEach((to, from, next) => {
  // Indicator.open('加载中...');
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
      document.title = to.meta.title;
  }
  switch (to.path) {
      case '/home':
          sessionStorage.setItem('router_index', 0);
          break;
      case '/groupList':
          sessionStorage.setItem('router_index', 2);
          break;
          // case '/supermarket':
          //     sessionStorage.setItem('router_index', 4);
          //     break;
      case '/cart':
          sessionStorage.setItem('router_index', 3);
          break;
      case '/person':
          sessionStorage.setItem('router_index', 4);
          break;
      // case '/marketHome':
      //     sessionStorage.setItem('router_index', 4);
      //     break;
      case '/marketClass':
          sessionStorage.setItem('router_index', 1);
          break;
  }
  next();
});
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
