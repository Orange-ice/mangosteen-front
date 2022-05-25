import {RouteRecordRaw} from 'vue-router';
import Welcome from '../views/welcome';
import Start from '../views/start';
import Item from '../views/item';
import ItemList from '../views/item/itemList';
import ItemCreate from '../views/item/itemCreate';
import Tags from '../views/tags';
import TagCreate from '../views/tags/tagCreate';
import TagEdit from '../views/tags/tagEdit';

export const routes: RouteRecordRaw[] = [
  {path: '/', redirect: '/welcome'},
  {path: '/welcome', component: Welcome},
  {path: '/start', component: Start},
  {
    path: '/items', component: Item,
    children: [
      {path: '', component: ItemList},
      {path: 'create', component: ItemCreate}
    ]
  },
  {
    path: '/tags', component: Tags,
    children: [
      {path: 'create', component: TagCreate},
      {path: ':id', component: TagEdit}
    ]
  }
];

