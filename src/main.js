import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import ground from 'components/ground/ground.vue';
import familyBill from 'components/familyBill/familyBill.vue';
import share from 'components/share/share.vue';
import chat from 'components/chat/chat.vue';
import health from 'components/health/health.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/ground',
    component: ground
  },
  {
    path: '/familyBill',
    component: familyBill
  },
  {
    path: '/share',
    component: share
  },
  {
    path: '/chat',
    component: chat
  },
  {
    path: '/health',
    component: health
  }
];

const router = new VueRouter({
  routes: routes,
  linkActiveClass: 'active'
});

const app = new Vue({
  el: '#app',
  template: '<App/>',
  components: {App},
  router
});
