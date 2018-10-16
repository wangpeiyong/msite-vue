<template>
  <div class="j_HotInformation">
    <h3><span>求职宝典</span><a href="/searchjob/hotinformationlist">更多></a></h3>
    <dl>
      <dd><a class="__ga__index_Information_001" onclick="Information();" href="/searchjob/infomationdetail/370">
        跳槽注意事项 关于跳槽的七个建议
      </a></dd>
      <dd><a class="__ga__index_Information_001" onclick="Information();" href="/searchjob/infomationdetail/368">65个必看的求职面试介绍技巧与注意事项</a></dd>
      <dd><a class="__ga__index_Information_001" onclick="Information();" href="/searchjob/infomationdetail/369">如何才能升职加薪</a></dd>

    </dl>
  </div>
</template>

<script>
    import {mapState, mapActions} from 'vuex'
    export default {
        name: 'jobHuntingTreasure',
        data() {
            return {
            }
        },
        computed: {
            ...mapState([
              'jobHuntingTreasure'
            ])
        },
        mounted() {
          let param= {
            url: '/info/getInfoList',
            data: {pageIndex: 1, pageSize: 1000}
          }
          this.getJobHuntingTreasure({url:'/info/getInfoList'})
        },
        methods: {
            ...mapActions([
              'getJobHuntingTreasure'
            ])
        },
        components: {
        }
    }
</script>
<style>
  .j_HotInformation { overflow: hidden; clear: both; background-color: #fff; margin-bottom: 16px;}
  .j_HotInformation h3 {height: 39px;line-height:39px;margin: 0 12px; background: url("//img09.zhaopin.cn/2012/other/mobile/m/6.3.1/index_hoticon.png") no-repeat left center;background-size: 19px 200px;background-position: 0 -121px;}
  .j_HotInformation h3 span {display: block;float:left; line-height: 39px;margin-left: 23px;font-size: 16px;color: #42beff; }
  .j_HotInformation h3 a{float:right;color:#42beff;font-size:16px;}
  .j_HotInformation .top { padding: 15px 15px; clear: both; display: block; }
  .j_HotInformation .top img { float: left; position: relative; border: 1px solid #ccc; }
  .j_HotInformation .top .con { padding-left: 70px; }
  .j_HotInformation .top .con h4 { white-space: nowrap; text-overflow: ellipsis; overflow: hidden; color: #404040; font-size: 16px; line-height: 63px; }
  .j_HotInformation .top .con p { text-align: justify; overflow: hidden; font-size: 12px; color: #9d9d9d; line-height: 19px; padding-top: 5px; height: 35px; }
  .j_HotInformation dl {width: 100%; box-sizing: border-box; -moz-box-sizing: border-box;}
  .j_HotInformation dl dd {height: 47px; line-height: 47px;border-bottom: 1px solid #e6e6e6;}
  .j_HotInformation dl dd:first-child { border-top: 1px solid #e6e6e6; }
  .j_HotInformation dl dd a {display:block; white-space: nowrap; text-overflow: ellipsis; overflow: hidden; color: #000 !important; font-size: 14px;margin:0 12px;}
  .j_HotInformation dl dd a:link, .j_HotInformation dl dd a:visited { color: #000 !important; }

  .j_HotInformation dl dt {height: 45px; line-height: 45px; text-align: right; }
  .j_HotInformation dl dt a { padding-right: 45px; color: #333 !important; font-size: 16px; background: url(//img09.zhaopin.cn/2012/other/mobile/m/r_icon5.png) right center no-repeat; background-size: 40px 24px; display: inline-block; line-height: 45px; }

</style>
