import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ProjectListView from '../views/ProjectListView.vue';
import ProjectDetailView from '../views/ProjectDetailView.vue';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [{
    path: '/',
    component: HomeView
  }, {
    path: '/web-projects',
    component: ProjectListView,
    props: {
      type: 'web'
    }
  }, {
    path: '/handmade',
    component: ProjectListView,
    props: {
      type: 'handmade'
    }
  }, {
    path: '/projects/:id',
    component: ProjectDetailView,
    props: true
  }],
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || {
      top: 0,
      left: 0
    };
  }
});
export default router;
