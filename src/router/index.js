import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/index'
import SearchResult from '@/page/searchResult'

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
            path: '/searchResult',
            name: 'SearchResult',
            component: SearchResult
        },
    ]
})
