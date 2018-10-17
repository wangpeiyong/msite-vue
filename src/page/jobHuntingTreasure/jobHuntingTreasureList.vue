<template>
  <div class="j_companyWrap">
    <loading v-show="showLoading"></loading>
    <header id="r_header" class="r_title">
      <a class="r_returnbk">
        <i></i>
      </a>求职宝典
    </header>
    <div class="j_eduJobBanner">
      <img src="//img09.zhaopin.cn/2012/other/mobile/m/news_banner.jpg">
    </div>
    <div class="j_recommendedJobs">
      <ul class="companyList">
        <li><a target="_blank" href="http://cnt.zhaopin.com/Market/whole_counter.jsp?sid=121127720&site=wzl&url=http://special.zhaopin.com/h5/2017/bj/scbn021665">3月6日请您参加一场只属于你们的盛宴</a></li>
        <li v-for="item in jobHuntingTreasure.list" @click="gotoDetail(item)"><a  class="ui-link __ga__index_Information_001">{{item.title}}</a></li>
      </ul>
    </div>
    <page :nowPageOnOff="nowPageOnOff" :total="jobHuntingTreasure ? jobHuntingTreasure.totalCount : 0" :max="getMaxPage(jobHuntingTreasure)" @changePage="changePage"></page>
  </div>
</template>

<script>
  import {mapState, mapActions} from 'vuex'
  import Loading from '../../components/common/loading.vue'
  import Page from '../../components/common/page.vue'
  export default {
    data: function() {
      return {
        nowPageOnOff : true,
        list : {
          total : 0,
          pages : 10, //最大页数
          pageSize: 10, // 每页数量
        }
      }
    },
    computed: {
      ...mapState([
        'showLoading',
        'jobHuntingTreasure',
      ])
    },
    methods: {
      ...mapActions(['getJobHuntingTreasure']),
      changePage(page){
        this.getJobHuntingTreasures(page);
      },
      getJobHuntingTreasures(page = 1) {
        let param= {
          url: '/info/getInfoList',
          data: {pageIndex: page, pageSize: this.list.pageSize}
        }
        this.getJobHuntingTreasure(param);
      },
      getMaxPage(jt) {
        return Math.ceil(jt.totalCount / this.list.pageSize)
      },
      gotoDetail(jobHuntingTreasureDetail) {
        this.$router.push({path: '/jobHuntingTreasureDetail', query: {id: jobHuntingTreasureDetail.id}})
      }
    },
    mounted() {
      this.getJobHuntingTreasures()
    },
    components: {
      Loading,
      Page,
    }
  }
</script>
<style>
  /*企业列表*/
  .j_companyWrap { background-color: #D6D6D6; overflow: hidden; }
  .j_recommendedJobs .j_titleList.marT6 { margin-top: 6px; }
  .j_subBanner { overflow: hidden; width: 95%; margin: 0 auto 6px auto; }
  .j_subBanner.marT6 { margin-top: 6px; }
  .j_subBanner img { display: block; width: 100%; }
  #r_content { overflow: hidden; width: 100%; }

  .j_NewTit { background-color: #42c2f3; text-align: center; height: 25px; line-height: 25px; color: #fff; font-weight: bold !important; font-size: 14px; margin-top: 10px; letter-spacing: -1px; }
  .j_jybJiuye { margin: 5px auto 0 auto; width: 95%; overflow: hidden; height: 50px; position: relative; background: url(//img09.zhaopin.cn/2012/other/mobile/m/j_jybJiuye.png) no-repeat center bottom; background-size: 100% 5px; }
  .j_jybJiuye a { display: block; width: 100%; height: 45px; line-height: 45px; -moz-box-sizing: border-box; -webkit-box-sizing: border-box; color: #404040; font-size: 18px; padding-left: 12px; background: #fcdd72 url(//img09.zhaopin.cn/2012/other/mobile/m/r_icon5.png) right center no-repeat; background-size: 40px 24px; }
  .j_jybJiuye a:link, .j_jybJiuye a:visited { color: #404040; }
  .j_recommendedJobs .companyList { overflow: hidden; margin-top: 6px; }
  .j_recommendedJobs .companyList li { padding-left: 20px; height: 65px; background-color: #fff; background: #fff url(//img09.zhaopin.cn/2012/other/mobile/m/r_icon5.png) right no-repeat; background-size: 40px 24px; }
  .j_recommendedJobs .companyList li:nth-child(2n) { background-color: #ececec; }
  .j_recommendedJobs .companyList li a { padding-right: 55px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; box-sizing: border-box; -moz-box-sizing: border-box; -webkit-box-sizing: border-box; display: block; width: 100%; height: 65px; line-height: 65px; color: #5B5B5B; }
  .j_recommendedJobs .companyList li a:link, .j_recommendedJobs .companyList li a:visited { color: #5B5B5B; }
  .j_recommendedJobs .companyList li .newsTit { display: block; line-height: 40px; width: 75%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  .j_recommendedJobs .companyList li .newsSource { display: block; line-height: 20px; font-size: 12px; width: 75%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; color: #a0a0a0; }
  .popResume { display: none; width: 100%; position: absolute; left: 0px; top: 0px; height: 100%; background-color: rgba(000,000,000,0.7); z-index: 100; }
  .popResume .list { background: #e2dedf; width: 100%; position: absolute; top: 0px; z-index: 101; }
  .popResume .list dd { font-size: 16px; background: no-repeat; padding-left: 30px; color: #333; line-height: 45px; height: 45px; border-bottom: 1px solid #ccc; }
  .popResume .list dd a { color: #333 !important; }
  .popResume .list dd a:link, .popResume .list dd a:visited { color: #333 !important; }
  .popResume .list dt { height: 60px; line-height: 60px; text-align: center; }
  .popResume .list dt span { color: #fff; width: 95%; margin: 0 auto; line-height: 40px; display: inline-block; border-radius: 5px; background-color: #1d8aff; }
  .renameResumeWrap { position: absolute; left: 0px; top: 0px; background-color: rgba(000,000,000,0.7); z-index: 100; width: 100%; height: 100%; }
  .renameResume { top:50px; left: 50%; margin-left: -45%; width: 90%; position: fixed; background-color: #fff; border-radius: 5px; display: block; z-index: 101; }
  .renameResume h4 { border-radius: 5px 5px 0 0; height: 36px; background-color: #1d8aff; text-align: center; color: #fff; line-height: 36px; }
  .renameResume input { height: 36px; margin: 20px auto; display: block; width: 90%; padding: 0 5px; box-sizing: border-box; -webkit-box-sizing: border-box; -moz-box-sizing: border-box; border: 1px solid #000; }
  .renameResume ul { height: 50px; border-radius: 0 0 5px 5px; padding: 0 5%; background-color: #e8e8e8; }
  .renameResume ul li { height: 36px; line-height: 36px; margin-top: 7px; border-radius: 3px; width: 48%; background-color: #1d8aff; color: #fff; float: left; text-align: center; color: #fff; }
  .renameResume ul li:first-child { float: right; }

</style>
