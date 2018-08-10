import Hello from '../components/Hello'
import Hello1 from '../views/book/Hello'
import Login from '../views/login/Login'
import Error404 from '../views/404'

const constantRoutes = [

]

const asyncRoutes = [
  {
    path: '/',
    exact: true,
    component: Hello,
  },
  {
    path: '/hello',
    component: Hello1,
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/404',
    component: Error404,
  },
//   {
//     path: '/test',
//     component: () => import('../views/login/LoginLayout'),
//   },

]

export {
  asyncRoutes,
  constantRoutes,
}

export default constantRoutes
