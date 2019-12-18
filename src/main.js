import Vue from 'vue';
import iView from 'iview';
import App from './App.vue';
import router from './router';
import store from './store';
import 'iview/dist/styles/iview.css';


Vue.use(iView);

Vue.prototype.$bus = new Vue(); // $on $emit

// 向上通知
Vue.prototype.$dispatch = function (eventName, value) {
  let parent = this.$parent;
  while (parent) {
    parent.$emit(eventName, value);
    parent = parent.$parent;
  }
};

// 向下广播
Vue.prototype.$broadcast = function (eventName, value) {
  // ((children) => {
  //   children.forEach(child => {
  //     child.$emit(eventName, value);
  //     if(child.$children) {
  //       this(child.$children)
  //     }
  //   })
  // })(this.$children)

  const broadcast = (children) => {
    children.forEach((child) => {
      child.$emit(eventName, value);
      if (child.$children) {
        broadcast(child.$children);
      }
    });
  };
  broadcast(this.$children);
};

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
