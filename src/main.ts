import { createApp } from 'vue'
import { createRouter } from 'vue-router';
import App from './App';
import { routes } from './config/routes';
import { history } from './shared/history';
import '@svgstore'; // 引入所有 icons，存于一个 svg sprite 中

const router = createRouter({
  history: history,
  routes,
});

const app = createApp(App);
app.use(router);
app.mount('#app');
