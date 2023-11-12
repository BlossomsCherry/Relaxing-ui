import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'layout',
      redirect: '/layout'
    },
    {
      path: '/layout',
      redirect: '/home',
      component: () => import('../views/layout.vue'),
      //二级路由
      children: [
        {
          path: '/home',
          component: () => import('../views/home.vue')
        },
        {
          path: '/componentsUI',
          redirect: '/componentsUI/Layout',
          component: () => import('../components/componentsUI/index.vue'),
          children: [
            {
              path: 'Layout',
              name: 'Layout',
              component: () => import('../../packages/Layout/doc/doc.md')
            },
            {
              path: 'Color',
              name: 'Color',
              component: () => import('../../packages/Color/doc/doc.md')
            },
            {
              path: 'Icon',
              name: 'Icon',
              component: () => import('../../packages/Icon/doc/doc.md')
            },
            {
              path: 'Button',
              name: 'Button',
              component: () => import('../../packages/Button/doc/doc.md')
            },
            {
              path: 'Input',
              name: 'Input',
              component: () => import('../../packages/Input/doc/doc.md')
            },
            {
              path: 'Switch',
              name: 'Switch',
              component: () => import('../../packages/Switch/doc/doc.md')
            },
            {
              path: 'Loading',
              name: 'Loading',
              component: () => import('../../packages/Loading/doc/doc.md')
            },
            {
              path: 'Dropdown',
              name: 'Dropdown',
              component: () => import('../../packages/Dropdown/doc/doc.md')
            },
            {
              path: 'Message',
              name: 'Message',
              component: () => import('../../packages/Message/doc/doc.md')
            },
            {
              path: 'Rate',
              name: 'Rate',
              component: () => import('../../packages/Rate/doc/doc.md')
            },
            {
              path: 'Tree',
              name: 'Tree',
              component: () => import('../../packages/Tree/doc/doc.md')
            },
            {
              path: 'Badge',
              name: 'Badge',
              component: () => import('../../packages/Badge/doc/doc.md')
            },
            {
              path: 'Dialog',
              name: 'Dialog',
              component: () => import('../../packages/Dialog/doc/doc.md')
            },
            {
              path: 'Notification',
              name: 'Notification',
              component: () => import('../../packages/Notification/doc/doc.md')
            },
            {
              path: 'Scrollbar',
              name: 'Scrollbar',
              component: () => import('../../packages/Scrollbar/doc/doc.md')
            },
            {
              path: 'Steps',
              name: 'Steps',
              component: () => import('../../packages/Steps/doc/doc.md')
            },
            {
              path: 'Tabs',
              name: 'Tabs',
              component: () => import('../../packages/Tabs/doc/doc.md')
            },
            {
              path: 'Skeleton',
              name: 'Skeleton',
              component: () => import('../../packages/Skeleton/doc/doc.md')
            },
            {
              path: 'Table',
              name: 'Table',
              component: () => import('../../packages/Table/doc/doc.md')
            },
            {
              path: 'Confirm',
              name: 'Confirm',
              component: () => import('../../packages/Confirm/doc/doc.md')
            },
            {
              path: 'Drawer',
              name: 'Drawer',
              component: () => import('../../packages/Drawer/doc/doc.md')
            },

            {
              path: 'Radio',
              name: 'Radio',
              component: () => import('../../packages/Radio/doc/doc.md')
            }
          ]
        }
      ]
    }
  ]
})

export default router
