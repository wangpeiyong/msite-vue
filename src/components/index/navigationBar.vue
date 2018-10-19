<template>
  <div class="MyOperating">
    <div class="j_boxe">
      <a class="__ga__index_JobSearch_001" rel="nofollow" @click="jobSearch">
        <i class="homeIcon jobsearch"></i>
        <span>职位搜索</span>
      </a>
    </div>
    <div class="j_boxe" id="MyInterviewIcon">
      <a class="__ga__index_wodemianshi_001" rel="nofollow" @click="todo">
        <i class="homeIcon mianshi"></i>
        <span>我的面试</span>
      </a>
      <b class="newNumber"></b>
    </div>
    <div class="j_boxe" id="zhidingIcon">
      <a @click="gotoResumeTop" rel="nofollow">
        <i class="homeIcon zhiding"></i>
        <span>置顶简历</span>
      </a>
      <b class="hongren"></b>
    </div>
    <div class="j_boxe">
      <a class="__ga__index_RefreshResume_001" rel="nofollow" @click="gotoResumeRefresh">
        <i class="homeIcon refreshresume"></i>
        <span>刷新简历</span>
      </a>

    </div>
    <div class="j_boxe" id="newfeed">
      <a class="__ga__index_MyCollectEvent_001" @click="gotoMyCollect">
        <i class="homeIcon mycollect"></i>
        <span>我的收藏</span>
      </a>
    </div>
    <div class="j_boxe" style="position:relative" id="resumeInfo">

      <a class="__ga__index_MyResumeEvent_001" rel="nofollow" @click="gotoMyResume">
        <i class="homeIcon mycv"></i>
        <span>我的简历</span>
      </a>

    </div>
    <div class="j_boxe">
      <a class="__ga__index_MyApplyEvent_001" rel="nofollow" @click="todo">
        <i class="homeIcon MyApply"
           style="background:url('//img09.zhaopin.cn/2012/other/mobile/m/MyApply_18816.png') center center no-repeat;background-size:40px;"></i>
        <span>投递反馈</span>
      </a>
      <b class="newNumber"></b>
    </div>
    <div class="j_boxe">
      <a @click="gotoJobStatistics" rel="nofollow">
        <i class="homeIcon jobStatistics"></i>
        <span>求职统计</span>
      </a>
    </div>
  </div>

</template>

<script>
  import {mapState, mapActions} from 'vuex'

  export default {
    name: 'navigationBar',
    data() {
      return {}
    },
    computed: {
      ...mapState([])
    },
    mounted() {
    },
    methods: {
      ...mapActions([]),
      jobSearch() {
        this.$router.push({path: 'positionSearch'})
      },
      gotoMyResume() {
        this.$router.push({path: '/myResume'})
      },
      gotoMyCollect() {
        this.$router.push({path: '/myCollect'})
      },
      gotoJobStatistics() {
        this.$router.push({path: '/jobStatistics'})
      },
      gotoResumeTop() {
        this.$router.push({path: '/resumeTop'})
      },
      gotoResumeRefresh() {
        this.$router.push({path: '/resumeRefresh'})
      },
      todo() {
        this.$toasted.show('暂未开发').goAway(2000)
      }
    },
    components: {}
  }
</script>
<style>
  .MyOperating {
    font-family: 'Microsoft YaHei';
    width: auto;
    padding: 16px 10px 5px 10px;
    margin-bottom: 10px;
    background-color: #fff;
    overflow: hidden;
    border-bottom: 1px solid #e6e6e6;
  }

  .j_boxe {
    float: left;
    width: 25%;
    text-align: center;
    position: relative;
  }

  .MyOperating a {
    display: block;
    width: 64px;
    height: auto;
    margin: 0 auto;
    line-height: 20px;
    text-align: center;
  }

  .MyOperating a img {
    width: 40px;
    height: 40px;
    margin: auto;
  }

  .MyOperating a .homeIcon {
    display: block;
    width: 40px;
    height: 40px;
    margin: 0 auto 4px;
    background: url("//img09.zhaopin.cn/2012/other/mobile/m/index_MyOperating.png") center center no-repeat;
    background-size: 40px 320px;
  }

  .MyOperating a .homeIcon.jobsearch {
    background-position: 0 0;
  }

  .MyOperating a .homeIcon.mianshi {
    background-position: 0 -40px;
  }

  .MyOperating a .homeIcon.zhiding {
    background-position: 0 -80px;
  }

  .MyOperating a .homeIcon.refreshresume {
    background-position: 0 -120px;
  }

  .MyOperating a .homeIcon.feedback {
    background-position: 0 -160px;
  }

  .MyOperating a .homeIcon.mycv {
    background-position: 0 -200px;
  }

  .MyOperating a .homeIcon.mycollect {
    background-position: 0 -240px;
  }

  .MyOperating a .homeIcon.jobStatistics {
    background-position: 0 -280px;
  }

  .MyOperating a span {
    width: 100%;
    display: block;
    height: 20px;
    color: #686868;
    font-size: 12px;
    margin-bottom: 10px;
  }

</style>
