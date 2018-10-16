import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/index'
import Login from '@/page/login'
import SearchResult from '@/page/searchResult'
import City from '@/page/city'
import PositionSearch from '@/page/searchCondition'
import JobHuntingTreasure from '@/page/jobHuntingTreasure/jobHuntingTreasureList'

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
        {
            path: '/positionSearch',
            name: 'PositionSearch',
            component: PositionSearch
        },
        {
            path: '/jobHuntingTreasure',
            name: 'JobHuntingTreasure',
            component: JobHuntingTreasure
        },
    ]
})
