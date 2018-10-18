import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/index'
import Home from '@/page/home'
import Login from '@/page/login'
import SearchResult from '@/page/position/searchResult'
import City from '@/page/city'
import PositionSearch from '@/page/position/searchCondition'
import JobHuntingTreasure from '@/page/jobHuntingTreasure/jobHuntingTreasureList'
import JobHuntingTreasureDetail from '@/page/jobHuntingTreasure/jobHuntingTreasureDetail'
import MyResume from '@/page/resume/myResume'
import MyCollect from '@/page/position/myCollect'
import JobStatistics from '@/page/jobStatistics'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: '/',
            redirect: '/index'
        },
        {
            path: '/home',
            name: 'Home',
            component: Home
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
        {
            path: '/jobHuntingTreasureDetail',
            name: 'JobHuntingTreasureDetail',
            component: JobHuntingTreasureDetail
        },
        {
            path: '/myResume',
            name: 'MyResume',
            component: MyResume
        },
        {
            path: '/myCollect',
            name: 'MyCollect',
            component: MyCollect
        },
        {
            path: '/jobStatistics',
            name: 'JobStatistics',
            component: JobStatistics
        },
    ]
})
