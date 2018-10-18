<template>
  <div class="app-search">
    <header id="r_header" class="r_title">
      <div class="r_returnbk" onclick="popPage()">
        <i></i>
      </div>
      我的收藏
    </header>

    <loading v-show="showLoading"></loading>
    <position-list v-show="favoritedPositionList.length" :positionList="favoritedPositionList"></position-list>
    <page v-show="favoritedPositionList.length" :nowPageOnOff="nowPageOnOff" :total="showNumber.count_1" :max="getMaxPage(showNumber.count_1)" @changePage="changePage"></page>

    <div class="status_img" v-show="!favoritedPositionList.length">
      <img src="//img09.zhaopin.cn/2012/other/mobile/m/success_icon_cry.png" width="113" /></div>
    <div class="status_text" v-show="!favoritedPositionList.length">
      难道你不想偷偷搜索并收藏几个心<br>痒的职位吗？快去详情页收藏吧！
    </div>

  </div>
</template>

<script>
  import {mapState, mapActions} from 'vuex'
  import Loading from '@/components/common/loading.vue'
  import PositionList from '@/components/position/positionList.vue'
  import Page from '@/components/common/page.vue'
  export default {
    data: function() {
      return {
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
        'favoritedPositionList',
        'showNumber',
      ])
    },
    methods: {
      ...mapActions(['getFavoritedPositionList', 'getShowNumber']),
      changePage(page){
        this.getFavoritedPositions(page);
      },
      getFavoritedPositions(page = 1) {
        let param= {
          url: '/position/favoritedPositions',
          data: {pageIndex: page, pageSize: this.list.pageSize}
        }
        this.getFavoritedPositionList(param);
      },
      getMaxPage(favoritedPositionCount) {
        return Math.ceil(favoritedPositionCount / this.list.pageSize)
      }
    },
    mounted() {
      this.getFavoritedPositions()
      let param= {
        url: '/userext/myShowNumber',
        data: {showType: 1}
      }
      this.getShowNumber(param)
    },
    components: {
      Loading,
      PositionList,
      Page,
    }
  }
</script>
<style>
  .status_img { text-align: center; padding-top: 65px; }
  .status_img img { display: block; margin: 0 auto; }
  .status_text { font-family: 'Microsoft YaHei'; padding-top: 10px; font-size: 15px; line-height: 35px; color: #7b7b7b; text-align: center; }
  .status_text .tit { font-size: 18px; font-weight: bold !important; }
</style>
