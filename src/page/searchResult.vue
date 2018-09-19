<template>
  <div class="app-recommend">
    <loading v-show="showLoading"></loading>
    <loading v-show="showLoadingMore"></loading>
    这是搜索结果
    <div>
      {{positionDetail}}
    </div>
  </div>
</template>

<script>
  import _ from 'underscore'
  import {mapState, mapActions} from 'vuex'
  import Loading from '../components/common/loading.vue'
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
    data: function() {
      return {
        keyword: '',
      }
    },
    computed: {
      ...mapState([
        'showLoading',
        'showLoadingMore',
        'positionDetail'
      ])
    },
    methods: {
      ...mapActions(['getPositionDetail'])
    },
    mounted() {
      this.keyword = this.$route.query.keyword
      if (!this.keyword) {
        window.alert('参数错误')
        this.$router.replace({path: 'index'})
        return
      }
      let param= {
        url: '/position/search',
        data: {S_SOU_FULL_INDEX: this.keyword}
      }
      this.getPositionDetail(param);
    },
    components: {
      Loading,
    }
  }
</script>
