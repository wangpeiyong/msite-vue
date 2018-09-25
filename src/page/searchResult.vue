<template>
  <div class="app-recommend">
    <loading v-show="showLoading"></loading>
    <position-list :positionList="positionList ? positionList.list : []"></position-list>
    <page :nowPageOnOff="nowPageOnOff" :total="positionList ? positionList.count : 0" :max="getMaxPage(positionList)" @changePage="changePage"></page>
  </div>
</template>

<script>
  import {mapState, mapActions} from 'vuex'
  import Loading from '../components/common/loading.vue'
  import PositionList from '../components/position/positionList.vue'
  import Page from '../components/common/page.vue'
  export default {
    data: function() {
      return {
        keyword: '',
        nowPageOnOff : true,
        list : {
          total : 0,
          pages : 20, //最大页数
          pageSize: 20, // 每页数量
        }
      }
    },
    computed: {
      ...mapState([
        'showLoading',
        'positionList',
      ])
    },
    methods: {
      ...mapActions(['getPositionList']),
      changePage(page){
        this.getPositions(page);
      },
      getPositions(page = 1) {
        let param= {
          url: '/position/search',
          data: {S_SOU_FULL_INDEX: this.keyword, pageIndex: page}
        }
        this.getPositionList(param);
      },
      getMaxPage(pl) {
        return Math.ceil(pl.count / this.list.pageSize)
      }

    },
    mounted() {
      this.keyword = this.$route.query.keyword
      if (!this.keyword) {
        window.alert('参数错误')
        this.$router.replace({path: 'index'})
        return
      }
      this.getPositions()
    },
    components: {
      Loading,
      PositionList,
      Page,
    }
  }
</script>
