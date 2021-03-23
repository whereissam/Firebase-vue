import Vue from 'vue'
import VueRouter from 'vue-router'
import Welcome from '../views/Home.vue'
import Chat from '@/components/chat'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome
  },
 {
   path: '/chat',
   name: 'Chat',
   component: Chat,
   props: true,
   beforeEnter:(to,from,next) =>{
    //  console.log(to.params.name)
    if(to.params.name){
      next()
    }else{
      next({ name: 'Welcome'})
    }
   }
 }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
