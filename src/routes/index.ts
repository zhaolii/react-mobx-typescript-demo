import Hello1 from '../views/book/Hello'
import Login from '../views/login/Login'
import Error404 from '../views/404'
import Official from '../views/official/Official'
import AuthLayout from '../components/layout/AuthLayout';

const constantRoutes = [

]

const asyncRoutes = [
  {
    path: '/',
    exact: true,
    // component:AuthLayout,
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
  {
    path: '/official',
    component: Official,
  },

]

export {
  asyncRoutes,
  constantRoutes,
}

export default constantRoutes
