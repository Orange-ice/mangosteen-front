import { createApp } from 'vue'
import { createRouter } from 'vue-router';
import App from './App';
import { routes } from './config/routes';
import { history } from './shared/history';

const router = createRouter({
  history: history,
  routes,
});

const app = createApp(App);
app.use(router);
app.mount('#app');
