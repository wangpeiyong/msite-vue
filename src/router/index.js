import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/index'
import Login from '@/page/login'
import SearchResult from '@/page/searchResult'
import City from '@/page/city'

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
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/searchResult',
            name: 'SearchResult',
            component: SearchResult
        },
        {
            path: '/city',
            name: 'City',
            component: City
        },
    ]
})
