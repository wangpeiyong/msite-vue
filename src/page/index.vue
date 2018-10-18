<template>
  <div class="app-recommend">
    <loading v-show="showLoading"></loading>
    <loading v-show="showLoadingMore"></loading>
    <!--<appDownload></appDownload>-->
    <sowingMap></sowingMap>
    <login></login>
    <search></search>
    <navigationBar></navigationBar>
    <recommend v-show="userDetail != null && userDetail.id"></recommend>
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
  import Loading from '@/components/common/loading.vue'
  import Bottom from '@/components/common/bottom.vue'
  import Search from '@/components/index/search.vue'
  import SowingMap from '@/components/index/sowingMap.vue'
  import AppDownload from '@/components/index/appDownload.vue'
  import Login from '@/components/index/login.vue'
  import NavigationBar from '@/components/index/navigationBar.vue'
  import Recommend from '@/components/index/recommend.vue'
  import HotIndustry from '@/components/index/hotIndustry.vue'
  import Advertisement from '@/components/index/advertisement.vue'
  import HotPosition from '@/components/index/hotPosition.vue'
  import JobHuntingTreasure from '@/components/index/jobHuntingTreasure.vue'
  import cookie from 'js-cookie'
  export default {
    computed: {
      ...mapState([
        'showLoading',
        'showLoadingMore',
        'userDetail',
      ])
    },
    methods: {
      ...mapActions(['getUserDetail', 'getRecommend']),
      async doGetRecommend() {
        const param = {
          url: '/position/Recommend',
          data: {
            city: this.userDetail.cityId,
          }
        }
        this.getRecommend(param)
      },
      async doGetUserDetail() {
        const param= {
          url: '/user/getUserDetail',
          data: {}
        }
        await this.getUserDetail(param);
        this.doGetRecommend()
      }
    },
    mounted() {
      const at = cookie.get('at')
      const rt = cookie.get('rt')
      if (at && rt) {
        this.doGetUserDetail()
      }
      // cookie.set('at', '663c4e29c34148e493171a8e1ca83eb9')
      // cookie.set('rt', '1f76be767b7444c5ad0ddf6590d0fdd5')
    },
    components: {
      Loading,
      AppDownload,
      SowingMap,
      Login,
      Search,
      NavigationBar,
      Recommend,
      Advertisement,
      HotPosition,
      HotIndustry,
      JobHuntingTreasure,
      Bottom,
    }
  }
</script>
<style>
  body{background: #f0f0f0;}
</style>
