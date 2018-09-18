<template>
  <div class="app-recommend">
    <loading v-show="showLoading"></loading>
    <loading v-show="showLoadingMore"></loading>
    <appDownload></appDownload>
    <sowingMap></sowingMap>
    <login></login>
    <search></search>
    <navigationBar></navigationBar>
    <advertisement></advertisement>
    <hotPosition></hotPosition>
    <hotIndustry></hotIndustry>
    <jobHuntingTreasure></jobHuntingTreasure>
    <bottom></bottom>
  </div>
</template>

<script>
  import _ from 'underscore'
  import {mapState, mapActions} from 'vuex'
  import Loading from '../components/loading.vue'
  import Bottom from '../components/common/bottom.vue'
  import Search from '../components/index/search.vue'
  import SowingMap from '../components/index/sowingMap.vue'
  import AppDownload from '../components/index/appDownload.vue'
  import Login from '../components/index/login.vue'
  import NavigationBar from '../components/index/navigationBar.vue'
  import HotIndustry from '../components/index/hotIndustry.vue'
  import Advertisement from '../components/index/advertisement.vue'
  import HotPosition from '../components/index/hotPosition.vue'
  import JobHuntingTreasure from '../components/index/jobHuntingTreasure.vue'
  export default {
    computed: {
      ...mapState([
        'showLoading',
        'showLoadingMore'
      ])
    },
    methods: {
      // ...mapActions(['getUserDetail', 'onHandleScroll'])
    },
    mounted() {
      // let param= {
      //   url: '/user/getUserDetail',
      //   data: {'uticket': 'B5710E3A4131C5CF895BF263C0F9057F'}
      // }
      // this.getUserDetail(param);
    },
    components: {
      Loading,
      AppDownload,
      SowingMap,
      Login,
      Search,
      NavigationBar,
      Advertisement,
      HotPosition,
      HotIndustry,
      JobHuntingTreasure,
      Bottom,
    }
  }
</script>
