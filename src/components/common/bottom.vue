<template>
  <div class="home_box">
    <ul class="bottom_nav">
      <li><a class="__ga__index_IndexHomeEvent__001" @click="gotoIndex"><i></i>首页</a></li>
      <li>
        <a class="__ga__index_MyZhilianEvent_001" rel="nofollow" @click="gotoHome"><i></i>我的智联</a>
      </li>
      <li><a class="__ga__index_appDownload_001" rel="nofollow" onclick="appDownload();" href="/down"><i></i>APP下载</a></li>

      <li>
        <a target="_blank" class="__ga__index_homeFutureFoot_001" rel="nofollow" onclick="home_futureFoot();" href="http://cnt.zhaopin.com/Market/whole_counter.jsp?sid=121129468&site=bea14&url=https://best.zhaopin.com"><i></i>最佳雇主</a>
      </li>
      <li><a class="__ga__index_userFeedback_001" rel="nofollow" onclick="userFeedback();" href="/feedback/index"><i></i>用户反馈</a></li>
    </ul>
    <div class="version">
      &copy;2018 zhaopin.com 智联招聘，更懂你的价值
      <p>北京智联三珂人才服务有限公司 <a href="https://img00.zhaopin.cn/new2011/bottom/license.html" style="color:#1AA6FF;">营业执照</a></p>
      <p>010-58692828</p>
      <p style="padding-bottom:10px;">热线客服 400-885-9898</p>
    </div>
  </div>
</template>

<script>
    import {mapState, mapActions} from 'vuex'
    export default {
        name: 'bottom',
        data() {
            return {
                swiperOption: {
                    autoplay: 5 * 1000,
                    setWrapperSize :true,
                    pagination : '.swiper-pagination',
                    paginationClickable :true,
                    mousewheelControl : true,
                    observeParents:true,
                }
            }
        },
        computed: {
            ...mapState([
                // 'sliders'
            ])
        },
        mounted() {
            // this.getSliders();
        },
        methods: {
          ...mapActions([
              // 'getSliders'
          ]),
          gotoIndex() {
             this.$router.replace({path: '/'})
          },
          gotoHome() {
             this.$router.push({path: '/home'})
          }
        },
        components: {
            // swiper,
            // swiperSlide
        }
    }
</script>
<style>

  .home_box { width: 100%; height: auto; background-color: #ededed; display: block;margin-top:16px; }
  .bottom_nav { height: 45px; margin: 20px 10px 10px 10px; }
  .bottom_nav li { float: left; width: 20%; text-align: center; height: 45px; position: relative; }
  .bottom_nav a { height: 45px; display: block; margin: 0 auto; position: relative; color: #686868; font-size: 12px; }
  .bottom_nav i { display: block; margin: 0 auto 3px; width: 30px; height: 28px; }
  .bottom_nav li:nth-of-type(1) i { background:url("//img09.zhaopin.cn/2012/other/mobile/m/combine_icon16312.png") no-repeat;background-position:-55px -52px; }
  .bottom_nav li:nth-of-type(2) i { background:url("//img09.zhaopin.cn/2012/other/mobile/m/combine_icon16312.png") no-repeat;background-position:-94px -52px; }
  .bottom_nav li:nth-of-type(3) i { background:url("//img09.zhaopin.cn/2012/other/mobile/m/combine_icon16312.png") no-repeat;background-position:-134px -52px; }
  .bottom_nav li:nth-of-type(4) i { background-image:url("//img09.zhaopin.cn/2012/other/mobile/m/zuijiaguzhuIcon1_16311.png");background-size: 28px 28px;}
  .bottom_nav li:nth-of-type(5) i { background:url("//img09.zhaopin.cn/2012/other/mobile/m/combine_icon16312.png") no-repeat;background-position:-172px -52px; }
  .version{text-align: center;font-size: 12px;color: #808080;background-color: #ededed;line-height: 20px;}

</style>
