import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/index'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: '/',
            redirect: '/index'
        },
        {
            path: '/index',
            name: 'Index',
            component: Index
        },
    ]
})
