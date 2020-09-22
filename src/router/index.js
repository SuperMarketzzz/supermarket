import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/Welcome'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Main from '@/components/Main'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/welcome',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/main',
      name: 'Main',
      component: Main
    }
  ]
})


/*路由守卫   根据登录获得token*/
router.beforeEach((to,from,next) =>{
    const isLogin = localStorage.eleToken ? true :false ;
    if(to.path ==="/" || to.path ==="/register"){
      next();
    }else{
      isLogin ? next() :next("/")   /*真跳转  假注册*/
    }
})

export default router