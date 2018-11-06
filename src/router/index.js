import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


import  Common from './../components/common/com_head.vue'


const router = new VueRouter({
    routes : [{
        path:'/common',
        name:'common',
        component:Common,
        
    }]
})

export default router;