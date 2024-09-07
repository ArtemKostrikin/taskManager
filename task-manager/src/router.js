import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './views/HomePage.vue';
import AddTaskPage from './views/AddTaskPage.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/add', component: AddTaskPage }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
