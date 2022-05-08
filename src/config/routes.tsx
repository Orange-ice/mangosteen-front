import {RouteRecordRaw} from 'vue-router';
import Welcome from '../views/welcome';
import Start from '../views/start';

export const routes: RouteRecordRaw[] = [
  {path: '/', redirect: '/welcome'},
  {path: '/welcome', component: Welcome},
  {path: '/start', component: Start}
];

