import Hello from '../components/Hello'

const constantRoutes = [

]

const asyncRoutes = [
  {
    path: '/',
    component: Hello,
    children: [
      {
        path: 'demo',
        name: 'demo',
        meta: {
          wxsdk: true,
          share: true
        },
        component: () => import('@/views/book/Hello'),
      },
      {
        path: 'home',
        name: 'home',
        component: () => import('@/views/book/Hello'),
      },
    ]
  },

]

export {
  asyncRoutes,
  constantRoutes,
}

export default constantRoutes
