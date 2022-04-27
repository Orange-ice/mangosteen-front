import { createApp } from 'vue'
import * as VueRouter from 'vue-router';
import App from './App';
import Bar from './views/Bar';
import Foo from './views/Foo';

const routes = [
  { path: '/', component: Foo },
  { path: '/about', component: Bar },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.mount('#app');
