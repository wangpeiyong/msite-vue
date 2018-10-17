<template>
  <div class="j_Recomm">
    <h3 class="j"><span>每日推荐</span></h3>

    <div class="recommLIst">
      <div class="j_positiolist" v-for="(item, index) in recommend.list" v-show="index < 20"><a @click="gotoPosition(item)">
        <div class="content">
          <div class="box1 clearfix"><p class="name">{{item.name}}</p>
            <p class="time">{{item.publishTime | getMMdd}}</p></div>
          <div class="box2 clearfix"><p class="company">{{item.companyName}}</p>
            <p class="salary">{{item.salary}}</p></div>
          <div class="clearfix" style="height:16px;"><span class="ad">{{item.workCity}}</span><span class="edu">{{item.education}}</span></div>
        </div>
      </a></div>
    </div>
  </div>
</template>

<script>
  import {mapState, mapActions} from 'vuex'
  import moment from 'moment'

  export default {
    name: 'recommend',
    data() {
      return {}
    },
    computed: {
      ...mapState(['userDetail', 'recommend'])
    },
    mounted() {

    },
    methods: {
      ...mapActions([]),
      gotoPosition(recom) {
        this.$toasted.show("暂未开发").goAway(2000);
      },
    },
    filters: {
      getMMdd(time) {
        const ret = moment(time).format('MM-DD')
        return ret;
      }
    },
    components: {}
  }
</script>
<style>
  /*每日推荐*/
  .j_Recomm {
    background-color: #fff;
    margin-bottom: 16px;
    border-top: 1px solid #e6e6e6;
  }

  .j_Recomm h3 {
    height: 39px;
    line-height: 39px;
    margin: 0 12px;
    background: url("//img09.zhaopin.cn/2012/other/mobile/m/6.3.1/index_hoticon.png") no-repeat left center;
    background-size: 19px 200px;
  }

  .j_Recomm h3.j {
    background-position: 0 0;
  }

  .j_Recomm h3 span {
    display: block;
    line-height: 39px;
    margin-left: 23px;
    font-size: 16px;
    color: #42beff;
  }

  .j_Recomm .line {
    width: 100%;
    height: 1px;
    background: #e6e6e6;
  }

  .j_positiolist {
    height: 91px;
    padding: 0 12px;
    position: relative;
    border-bottom: 1px solid #e6e6e6;
  }

  .j_positiolist:first-child {
    border-top: 1px solid #e6e6e6;
  }

  .j_positiolist img {
    position: absolute;
    top: 23px;
    left: 10px;
    border: 1px solid #e6e6e6;
    border-radius: 50%;
  }

  .j_positiolist .content {
    width: 100%;
    height: 76px;
    padding-top: 15px;
  }

  .j_positiolist .content .box1 {
    width: 100%;
    height: 21px;
    line-height: 21px;
  }

  .j_positiolist .content .name {
    float: left;
    width: 75%;
    font-size: 16px;
    color: #010101;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .j_positiolist .content .time {
    float: right;
    font-size: 9px;
    color: #c8c8c8;
    width: 36px;
    text-align: right;
    margin-top: 5px;
  }

  .j_positiolist .content .box2 {
    width: 100%;
    height: 19px;
    margin: 6px 0 3px 0;
  }

  .j_positiolist .content .company {
    float: left;
    width: 48%;
    font-size: 14px;
    color: #646464;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .j_positiolist .content .salary {
    float: right;
    font-size: 13px;
    color: #ff6e6f;
    max-width: 114px;
    text-align: right;
    margin-top: 2px;
  }

  .j_positiolist .content .ad {
    display: block;
    float: left;
    min-width: 20px;
    height: 16px;
    line-height: 16px;
    padding-left: 15px;
    background: url("//img09.zhaopin.cn/2012/other/mobile/m/6.3.1_icon/index_Recommen.png") no-repeat center center;
    background-size: 11px 32px;
    background-position: 0 2px;
    font-size: 12px;
    color: #b4b4b4;
    margin-right: 10px;
  }

  .j_positiolist .content .edu {
    display: block;
    float: left;
    min-width: 38px;
    height: 16px;
    line-height: 16px;
    padding-left: 15px;
    background: url("//img09.zhaopin.cn/2012/other/mobile/m/6.3.1_icon/index_Recommen.png") no-repeat center center;
    background-size: 11px 32px;
    background-position: 0 -17px;
    font-size: 12px;
    color: #b4b4b4;
  }

</style>
