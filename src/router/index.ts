/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from 'vue-router/auto-routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: "Index",
      path: "/",
      component: () => import('../pages/index.vue'),
      children: [
        {
          path: "/",
          name: "IndexHome",
          component: () => import('../pages/home/index.vue'),
          children: [

          ]
        },
        {
          path: "/setting",
          name: "IndexSetting",
          component: () => import('../pages/setting/index.vue')
        },
        {
          path: "/video",
          name: "videoSetting",
          component: () => import('../pages/video/index.vue')
        },
        {
          path: "/user",
          name: "IndexUser",
          component: () => import('../pages/user/index.vue')
        },
        {
          path: "/demo",
          name: "IndexDemo",
          component: () => import('../pages/demo/index.vue')
        },
      ]
    }
  ]
})

// Workaround for https://github.com/vitejs/vite/issues/11804
router.onError((err, to) => {
  if (err?.message?.includes?.('Failed to fetch dynamically imported module')) {
    if (localStorage.getItem('vuetify:dynamic-reload')) {
      console.error('Dynamic import error, reloading page did not fix it', err)
    } else {
      console.log('Reloading page to fix dynamic import error')
      localStorage.setItem('vuetify:dynamic-reload', 'true')
      location.assign(to.fullPath)
    }
  } else {
    console.error(err)
  }
})

router.isReady().then(() => {
  localStorage.removeItem('vuetify:dynamic-reload')
})

export default router
