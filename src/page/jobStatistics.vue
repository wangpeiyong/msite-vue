<template>
  <div>
    <header class="j_header">
      <a class="j_return left" onclick="popPage('/home/index', true, true);"></a>
      求职统计
    </header>
    <div class="container container_jobS">
      <ul class="nav_tabs nav_jobS">
        <li data-day="7" class="actionDay7"><a href="/home/jobstatistics?resumeId=205117386&amp;resumeNum=JM135509455R90250000000&amp;resumeVer=1&amp;resumeTitle=%E4%B8%8D%E7%94%A8%E4%BA%8612&amp;actionDay=7&amp;appplat=7">最近7天</a></li>
        <li data-day="30" class="actionDay30"><a href="/home/jobstatistics?resumeId=205117386&amp;resumeNum=JM135509455R90250000000&amp;resumeVer=1&amp;resumeTitle=%E4%B8%8D%E7%94%A8%E4%BA%8612&amp;actionDay=30&amp;appplat=7">最近30天</a></li>
      </ul>
      <div id="mainDay" class="jobS_echarts" style="display:block;"></div>

    </div>
    <div class="row_jobS ">
      <div class="content isjobS_content">
        <p>你最近<span id="serviceday">7</span>天，简历被查看<span class="red">1</span>次，<br />输给了<font>99%</font>的人， 建议购买简历置顶服务。</p>
        <a href="javascript:;" class="confirm_btn jobSbtn" onclick="ResumeTopIndex();">立即置顶简历</a>
      </div>

    </div>

    <div class="V5popWrap ResumeList_Wrap">
      <div class=" modal_resumeList">
        <ul>
          <li><a href="/home/jobstatistics?resumeId=205117386&amp;resumeNum=JM135509455R90250000000&amp;resumeVer=1&amp;resumeTitle=%E4%B8%8D%E7%94%A8%E4%BA%8612&amp;appplat=7" style="color:#42beff;">不用了12</a></li>


        </ul>
        <span class="btn">取消</span>
      </div>
    </div>

  </div>
</template>

<script>
  import {mapState, mapActions} from 'vuex'
  import Loading from '@/components/common/loading.vue'
  export default {
    data: function() {
      return {
      }
    },
    computed: {
      ...mapState([
        'showLoading',
      ])
    },
    methods: {
      ...mapActions([])
    },
    mounted() {
    },
    components: {
      Loading,
    }
  }
</script>
<style>
  /*求职统计*/
  .container_jobS{background:#fff;padding-bottom:10px;border-bottom:1px solid #e6e6e6;}
  .nav_tabs{height:46px;border-bottom:1px solid #e6e6e6;background:#fff;}
  .nav_jobS li{display:block;width:50%;line-height:45px;font-size:14px;color:#000;float:left;text-align:center;}
  .nav_jobS li a{display:block;width:100%;color:#000;}
  .nav_jobS li a:active{color:#42beff;}
  .nav_jobS li.active, .nav_jobS li.active a{color:#42beff;border-bottom:2px solid #42beff;}
  .jobS_echarts{min-width:320px;min-height:264px;display:none;}
  .row_jobS{margin-top:10px;background:#fff;border-top:1px solid #e6e6e6; text-align:center;padding:25px 0px 32px 0px;}
  .row_jobS .content{padding:0 12px;}
  .row_jobS .content p{color:#010101;font-size:13px;}
  .row_jobS .content .etime{margin:20px 0 8px 0;font-size:12px;}
  .row_jobS .content .etime .red{font-size:12px;}
  .row_jobS .content .red{font-size:14px;}

  .row_jobS .isjobS_content{padding:11px 20px 0px 20px;}
  .row_jobS .isjobS_content p{ font-size:14px;margin-bottom:30px;}

  /*按钮*/
  .row_jobS .jobSbtn{font-size:16px; font-weight:bold!important;}

  /*选择简历*/
  .modal_resumeList{width:94%;position: fixed;bottom:0px;left:50%;margin-bottom:10px;-webkit-transform:translate3d(-50%, 0%, 0);transform:translate3d(-50%, 0%, 0);}
  .modal_resumeList ul{background:#fff;border-radius:5px;margin-bottom:10px;}
  .modal_resumeList ul li{border-bottom:1px solid #e6e6e6;text-align:center;line-height:48px;}
  .modal_resumeList ul li:last-child{border-bottom:none;}
  .modal_resumeList ul li a{display:block;font-size:16px; color:#303030;}
  .modal_resumeList .btn{display:block;width:100%;height:48px;line-height:48px;text-align:center;background:#fff;border-radius:5px;font-size:16px;color:#42beff;}

  /*刷新关闭*/
  .r_returnclose{position: absolute;top: 0px;right: 0px;width: 50px;height: 49px;}

  /*空页面*/

  .messageNullView { padding-top: 55px; overflow: hidden; text-align: center; line-height: 25px; color: #686868; }
  .messageNullView .img { display: block; margin: 0 auto; }
  .messageNullView .tit { font-size: 15px; margin-top: 5px; font-weight: bold !important; border:none;}
  .messageNullView .con { font-size: 12px; }
  .messageNullView .con span { color: #f00; font-weight: bold !important; }
  .messageNullView .btn { color: #fff; width: 200px; height: 40px; line-height: 40px; border-radius: 100px; background-color: #42beff; display: block; margin: 10px auto 0 auto; }

</style>
