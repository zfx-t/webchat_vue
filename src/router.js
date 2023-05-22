import VueRouter from 'vue-router'
import login from '@/pages/login'
import chat from '@/pages/chat'
const router = new VueRouter({
    routes:[
        {
            name:'login',
            path:'/login',
            component:login
        },
        {
            name:'chat',
            path:'/chat',
            component:chat
            
        }
    ]
})
export default router