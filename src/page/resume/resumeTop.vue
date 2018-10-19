<template>
  <div>
    <header id="r_header" class="r_title">
      <a class="r_returnbk">
        <i></i>
      </a>
      升级简历
    </header>
    <img src="//img09.zhaopin.cn/2012/other/mobile/m/resumeImg/resumeTop_headImg.png" class="resumeTop_headImg" />
    <div class="pay_container">
      <div class="saleP adap">
        <p class="title">简历置顶<span class="payxyText"  @click="todo">服务协议</span></p>
        <p class="exptit">预计简历被HR查看的几率，会提升79%~85%</p>
      </div>
      <div class="pay_row">
        <ul>
          <li class="focused">
            <p class="PName"><span>30天+7天</span></p>
            <p class="prime_price">¥300.0</p>
            <p class="new_price">¥98.0</p>
            <div class="DiscountIcon"></div>
            <a class="current_buy"  @click="todo">
              购买
            </a>
          </li>
          <li class="">
            <p class="PName"><span>15天</span></p>
            <p class="prime_price">¥150.0</p>
            <p class="new_price">¥68.0</p>
            <a class="current_buy"  @click="todo">
              购买
            </a>
          </li>
          <li class="">
            <p class="PName"><span>7天</span></p>
            <p class="prime_price">¥70.0</p>
            <p class="new_price">¥50.0</p>
            <a class="current_buy"  @click="todo">
              购买
            </a>
          </li>

        </ul>
        <div class="clearfix"></div>
      </div>
    </div>

    <div class="jiuyebang">
      <div class="saleP">
        <p class="title">简历优化<span class="payxyText" @click="todo">服务协议</span></p>
        <p class="exptit">一对一高品质服务，为你打造直击HR心灵的简历</p>
      </div>
      <div class="setMeal">
        <ul>
          <li class="setMealD">
            <p class="set-line01"><span class="set-mark" style="background:#FF8E00;"></span>简历优化套餐1</p>
            <p class="set-line02">由 <span class="bold">资深高级HR总监/资深高级猎头专家</span> 为你定制</p>
            <p class="set-line03">
              <span class="stit">服务</span>
              <span style="display:inline-block;width:85%;line-height:20px;">高品质优化简历服务，包含约50分钟面试技巧、薪资谈判及职业规划等辅导</span>
            </p>
            <p class="set-line03"><span class="stit">赠送</span><span class="stext">简历置顶30天</span></p>
            <div class="set-line04">
              <a  @click="todo">购买</a>
              <p>
                <span class="set-price">¥699</span>
                <small>¥1090</small>
              </p>
              <div class="clearfix"></div>
            </div>
          </li>
          <li class="setMealB">
            <p class="set-line01"><span class="set-mark"></span>简历优化套餐2</p>
            <p class="set-line02">由 <span class="bold">资深HR总监/资深猎头专家</span> 为你定制</p>
            <p class="set-line03"><span class="stit">服务</span><span class="stext">根据用户实际情况，一对一打造私人订制简历</span></p>
            <p class="set-line03"><span class="stit">赠送</span><span class="stext">简历置顶30天</span></p>
            <p class="set-line03"><span class="stit">适合</span><span class="stext">工作经验5年以上</span></p>
            <div class="set-line04">
              <a  @click="todo">购买</a>
              <p>
                <span class="set-price">¥499</span>
                <small>¥899</small>
              </p>
              <div class="clearfix"></div>
            </div>
            <div class="hintmessage"></div>
          </li>
          <li class="setMealC">
            <p class="set-line01"><span class="set-mark"></span>简历优化套餐3</p>
            <p class="set-line02">由 <span class="bold">HR高级经理/资深猎头顾问</span> 为你定制</p>
            <p class="set-line03"><span class="stit">服务</span><span class="stext">提升简历含金量，增加职位匹配度，凸显个人能力</span></p>
            <p class="set-line03"><span class="stit">赠送</span><span class="stext">简历置顶15天</span></p>
            <p class="set-line03"><span class="stit">适合</span><span class="stext">工作经验1-5年</span></p>
            <div class="set-line04">
              <a  @click="todo">购买</a>
              <p>
                <span class="set-price">¥399</span>
                <small>¥699</small>
              </p>
              <div class="clearfix"></div>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <div class="msztc">
      <p class="set-line01">面试直通车<span class="payxyText"  @click="todo">服务协议</span></p>
      <p class="set-line02">由资深HR帮你提升面试成功率，助你拿到理想offer</p>
      <div class="msztcBox">
        <p class="set-line03">
          <span class="stit">服务</span>
          <span style="display:inline-block;width:85%;line-height:20px;">一对一指导，全真模拟，面试预演，帮你顺利面试</span>
        </p>
        <p class="set-line03"><span class="stit">赠送</span><span class="stext">2小时线上指导 根据需求灵活预约时间</span></p>
        <p class="set-line03"><span class="stit">适合</span><span style="display:inline-block;width:85%;line-height:20px;">即将面试却毫无准备；面试能力欠缺；缺乏面试技巧的人</span></p>
        <div class="set-line04">
          <a  @click="todo">购买</a>
          <p>
            <span class="set-price">¥399</span>
            <small>¥799</small>
          </p>
          <div class="clearfix"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState, mapActions} from 'vuex'
  import Loading from '@/components/common/loading.vue'
  export default {
    name: 'resumeTop',
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
      ...mapActions(['']),
      todo() {
        this.$toasted.show('暂未开发').goAway(2000)
      }
    },
    mounted() {
    },
    components: {
      Loading,
    }
  }
</script>
<style>

  /*提示*/
  .pay_top_r{padding:23px 0;margin-bottom:10px;height:auto;background-color: #fff;overflow:hidden;}
  .pay_top_r.h{padding-top:19px;}
  .pay_top_r .s{width:64px;height:28px;line-height:30px;margin:0 auto;background:url("//img09.zhaopin.cn/2012/other/mobile/m/6.3_icon/6.3_icon_3.png")no-repeat;background-size:28px auto;font-size:16px;color:#000000;padding-left:38px;}
  .pay_top_r .caption{padding:0 10px;font-size:16px;color:#282828;text-align:center;line-height:24px;}
  .pay_top_r .caption .red{margin:0 5px;font-weight:bold!important;}
  .pay_top_r .caption .red em{font-style: normal;}
  .red{color:#ff5c56;}
  .h10{width:100%;height:10px;background-color:#f8f8fa;}
  /*服务协议*/
  .protocal{display:none;position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.5);z-index:999;}
  .agreement{ position:absolute;top:50%;left:50%;-webkit-transform:translate3d(-50%, -50%, 0);-ms-transform:translate3d(-50%, -50%, 0);transform:translate3d(-50%, -50%, 0);background:#ffffff;width:75%;padding:4% 3% 2%;border-radius:5px;line-height:22px;font-size:12px;z-index:999;}
  #wrapperText{display: inline-block;position: initial;height:340px;overflow:hidden;z-index: 1;overflow-y:auto;}
  .agreement .title{font-size:16px;text-align:center;line-height:30px;font-weight:bold!important;}
  .agreement b{font-weight:bold!important;font-size:14px;}
  .agreement .protocalDelete{ position: absolute;top: -10%;right: 5%;height: 0;z-index:999;}
  .resumeTop_headImg{width: 100%;}
  .refreshtxt{font:16px;font-weight:bold!important;text-align:center;margin-bottom:16px;}

  /*简历置顶*/
  .pay_container{position: relative;margin-top: 36px;padding:0 16px 25px;width: auto;height: auto;overflow: hidden;}
  .saleP .title{line-height:20px;font-size:20px;color:#282828;font-weight:bold !important;}
  .saleP .payxyText{float:right;color:#7e8aa6;font-size:14px;}
  .saleP .exptit{padding:15px 0 27px;line-height: 13px;font-size:13px;color:#666666;}
  /*商品信息*/
  .pay_row li{position: relative;float:left;margin-right: 4%;width: 30.5%;height: 136px;border-radius:6px;box-shadow: 0px 5px 15px #e8e8e8;-moz-box-shadow:0px 5px 15px #e8e8e8; -webkit-box-shadow:0px 5px 15px #e8e8e8;}
  .pay_row li:last-child{margin-right:0px;}
  .pay_row li p{display: block;text-align:center;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;}
  .pay_row li .PName{margin-top:24px;line-height:17px;font-size:18px;color:#282828;}
  .pay_row li .prime_price{margin:18px 0;line-height:13px;font-size:14px;color:#999999;text-decoration: line-through;font-weight:200 !important;}
  .pay_row li .new_price{line-height:17px;font-size:20px;color:#ff5c56;}
  .hintmessage{position:absolute;top:0px; right:0px; width :31px;height:31px;background:url('//img09.zhaopin.com/2012/other/mobile/m/resumeImg/resumeTop_RecoIcon.png') no-repeat; background-size: 31px;}
  .current_buy{position:absolute;bottom:-25px; left:32%;margin-left: -21px;display:block;width:80px;height: 46px;line-height:43px;background:url('//img09.zhaopin.com/2012/other/mobile/m/resumeImg/resumeTop_buyBottom.png') no-repeat;background-size:80px 46px; font-size:14px;color:#ffffff;text-align:center;font-weight:bold!important;}
  /*简历优化*/
  .jiuyebang{position: relative;margin-top: 26px;padding:0 16px 16px;width: auto;height: auto;overflow: hidden;}
  .setMeal li{position: relative;margin-top:30px;padding:24px 0px 10px 20px;border-radius:6px;box-shadow: 0px 5px 15px #e8e8e8;-moz-box-shadow:0px 5px 15px #e8e8e8; -webkit-box-shadow:0px 5px 15px #e8e8e8;}
  .setMeal li:first-child{margin-top:0px;}
  .setMeal li p{display: block;}
  .setMeal li p .set-mark{display:inline-block;margin:3px 10px 0 0; width: 4px;height:14px;border-radius:2px;}
  .setMealA .set-mark{background:#ffa900;}
  .setMealB .set-mark{background:#1a8afa;}
  .setMealC .set-mark{background:#16dec4;}
  .set-line01{line-height:19px;font-size:18px;color:#282828;font-weight:bold!important;}
  .set-line02{margin:18px 0 22px;line-height:18px;font-size:13px;color:#282828;}
  .set-line02 .bold{font-weight:bold!important;font-size:15px;}
  .set-line03{margin-bottom:12px;line-height:14px;font-size:12px;color:#666666;}
  .set-line03 .stit{display:inline-block;margin-top:5px;margin-right:6px;width:28px;height:14px;line-height:15px;border:1px solid #a8b0c3;font-size:10px;color:#a8b0c3;text-align:center;border-radius:2px;vertical-align:top;}
  .set-line03 .stext{display:inline-block;margin-top:5px;line-height:14px;font-size:12px;color:#666666;vertical-align:top;}
  .set-line04{width:100%;height:46px;}
  .set-line04 p{float:right;}
  .set-line04 p small{display:block;float:right;margin:13px 12px 0 0;font-size:14px;color:#999999;text-decoration: line-through;font-weight:100!important;}
  .set-line04 p .set-price{display:block;float:right;margin:8px 14px 0 0;font-size:20px;color:#ff5c56;}
  .set-line04 a{display:block;float:right;margin-right:4px;width:80px;height: 46px;line-height:43px;background:url('//img09.zhaopin.com/2012/other/mobile/m/resumeImg/resumeTop_buyBottom.png') no-repeat;background-size:80px 46px; font-size:14px;color:#ffffff;text-align:center;font-weight:bold!important;}
  .serviceFlow{margin-top:36px;}
  .serviceFlow-title{margin-bottom: 20px;line-height:17px;font-size:16px;color:#888888;}
  .timeAxis{position: relative; padding-left: 22px;padding-bottom: 20px;line-height:21px;}
  .timeAxis:before{content: ""; display: inline-block; position: absolute; top: 20px;  left: 3px; z-index: 1; width: 1px; height: 100%; border-right: 1px solid #e4e7ed;}
  .timeAxis:after{content: ""; display: inline-block; position: absolute; width: 9px; height: 9px; background-color: #e4e7ed; border-radius: 9px; left: -3px; top: 5px;z-index: 1;border:3px solid #fff;}
  .listItemContent{line-height:24px;font-size:14px;color:#888888;}
  .fy{position:relative;margin-top:12px;padding-top:12px;border-top:1px dashed #C4C4C4;}
  .fy_checkbox {padding-right: 12px;position: absolute;left: 0px;top: 14px;z-index: 10;display: block;width: 21px;height:16px;background: url('//img09.zhaopin.com/2012/other/mobile/m/resumeImg/resume_checkbox_hover.png') top left no-repeat;background-size: 16px auto;}
  .fy_checkbox.hover{padding-right: 12px;position: absolute;left: 0px;top: 14px;z-index: 10;display: block;width: 21px;height:16px;background: url('//img09.zhaopin.com/2012/other/mobile/m/resumeImg/resume_checkbox.png') top left no-repeat;background-size: 16px auto;}
  .fy_text{padding-left:23px;color:#282828;}
  .fy_text_price{margin-left:18px;color:#999999;}

  .pay_top_t{height:42px;line-height: 44px;background-color: #fff;border-top:1px solid #e6e6e6;border-bottom:1px solid #e6e6e6;padding: 0 12px;position: relative;font-size:12px;color:#787878;}
  .pay_top_t .red{font-size:15px;margin:0 5px;color:#000;}

  /*面试直通车商品*/
  .msztc{position: relative;margin-top:12px;padding:0 16px 16px;width: auto;height: auto;overflow: hidden;}
  .msztc .payxyText{float:right;color:#7e8aa6;font-size:14px;}
  .msztc .set-line02{margin:12px 0 16px 0;}
  .msztcBox{padding:20px 0px 10px 20px;border-radius:6px;box-shadow: 0px 5px 15px #e8e8e8;-moz-box-shadow:0px 5px 15px #e8e8e8; -webkit-box-shadow:0px 5px 15px #e8e8e8;}
  .msztcBox .set-line04{border-top: 1px dashed #C4C4C4;}

  /*时间*/
  .etime{text-align:center;font-size:14px;margin:25px 0 12px 0;}
  .etime .red{font-size:12px;}
  .confirm_btn{display:block;width:280px;height:44px;line-height:44px;margin:0 auto;background-color:#42beff;border-radius:50px;color:#fff;text-align:center;font-size:12px;}
  /*按钮*/
  .renewbtn{font-size:17px;margin-bottom:16px;background-color:#ffc446;}

  /*
      订单
  */
  .Order_infor{margin-top:10px;padding-left:16px;background:#fff;}
  h3{line-height:44px;border-bottom:1px solid #f0f0f0;font-size:14px;color:#666666;}
  .Order_d{height:48px;line-height:48px;}
  .Order_d .order_pic{width:26px;height:29px;margin:9px 15px 10px 5px;float:left;}
  .Order_d .name{font-size:14px;color:#010101;}
  .Order_d .name .red{margin-left:10px;font-size:14px;}
  .pay_type{position: relative;margin:10px 0;padding-left:16px;width: auto;height: auto;overflow: hidden;font-size: 14px;background:#fff;}
  .pay_type .channel_item{position: relative;padding:16px 0;border-bottom:1px solid #f0f0f0;}
  .pay_type .channel_item:last-child{border-bottom:none;}
  .pay_type .channel_item .cell_icon{margin-right:12px;float:left;width:48px;height:48px;border-radius:100%;border:1px solid #e6e6e6;}
  .pay_type .channel_item a{display:block;width:100%;height:100%;}
  .cell_left{float:left;margin-top:6px;}
  .cell_left .pay_title{line-height:1;font-size:14px;color:#282828;}
  .cell_left .pay_info{padding-top:12px;line-height:1;font-size:12px;color:#9e9e9e;}
  .pay_type .checkbox{position:absolute;top:35px;right:16px;width:7px;height:11px;background:url("//img09.zhaopin.cn/2012/other/mobile/m/5.2_hrRight.png") no-repeat;background-size:7px;}
  .fwlc{position: relative;width: auto;height: auto;overflow: hidden;font-size: 14px;background:#fff;}
  /*
      订单修改
  */
  .modified {box-sizing: border-box;padding: 16px 0;border-bottom:1px solid #f0f0f0;}
  .modified .productLogoUrl{display: block;float:left;height: 48px;width: 48px;vertical-align: middle;box-sizing: border-box;border-radius: 100px;}
  .modified strong{float:left;margin-left: 10px;font-size: 16px;vertical-align: middle;line-height: 48px;color: #282828;font-weight:bold!important;}
  .modified span{float:right;margin-right:16px;font-size: 14px;vertical-align: middle;line-height: 48px;color:#ff6e6e;}

  /*备注信息*/
  .red{margin-right:5px;}
  .order_remarksinfo{padding-left: 16px;margin-top:10px;background:#fff;}
  .order_remarksinfo li{position:relative;height:44px;line-height:44px;border-bottom: 1px solid #f0f0f0;}
  .order_remarksinfo li:last-child{border-bottom:none;}
  .remarks_key{ position: absolute; left: 0px; top: 0px; height: 44px; color: #666666; font-size: 14px;overflow: hidden;}
  .remarks_value{ position: absolute; width: 100%; height: 44px; right: 0px; top: 0px; padding-right: 16px; text-align: right;color: #333; background: none; font-size: 14px; padding-left:120px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; box-sizing: border-box; -webkit-box-sizing: border-box; -moz-box-sizing: border-box;}
  .smallTip{margin-left:16px;margin-top:12px;font-size:12px;color:#949494;}
  .order_remarksinfo li.select { background: url("//img09.zhaopin.cn/2012/other/mobile/m/resumeImg/resume_icon1.png") no-repeat right center; background-size: 25px auto; }
  .secondIndustryId{ width:100%; padding-left:120px;padding-right:0; right:35px; box-sizing:border-box;}
  .zy{color:#ccc;}
  input::-webkit-input-placeholder {color:#ccc;}
  .Warn{display:none;position:absolute;left:82px;padding-left:18px;width:33%;height:44px;background:url("//img09.zhaopin.cn/2012/other/mobile/pay/product/warn.png") no-repeat left center;background-size:13px;font-size:14px;color:#ff5c56;overflow-y:hidden;}
  .Clear{display:none;position:absolute;right:0px;padding-right:16px;width:14px; height:44px;background:url("//img09.zhaopin.cn/2012/other/mobile/pay/product/clear.png") no-repeat left center;background-size:14px;}
  .ClearText{right:32px;}


  /*loading*/

  .overlay{display: none;position: fixed; top: 0;left: 0;right: 0; bottom: 0;background: rgba(0,0,0,.4);}
  .overlay svg {position:absolute;top:50%;left:50%;-webkit-transform: translate(-50%,-50%);-moz-transform: translate(-50%,-50%);transform: translate(-50%,-50%);}
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


  /*行业类别*/
  #Resume_Industry_Select { width: 100%; position: fixed; left: 0px; bottom: 0px; background-color: #fff; z-index: 2; height: 417px; overflow: hidden; display:none;}
  #Resume_Industry_Select .btn { height: 40px; padding: 8px 10px; border-bottom: 1px solid #dcdcdc; }
  #Resume_Industry_Select .btn .close { padding: 0 30px; height: 38px; line-height: 38px; float: right; border-radius: 38px; width: 35px; background-color: #fff; color: #32a0ff; border: 1px solid #dcdcdc; }
  #Resume_Industry_Select .btn .finish { padding: 0 15px; height: 38px; line-height: 38px; float: right; border-radius: 38px; width: 35px; background-color: #32a0ff; color: #fff; }

  #Resume_Industry_Select_List{ width:100%; overflow:hidden; height:360px;}
  #Resume_Industry_Select_List dd{ height:45px; line-height:45px; text-align:left; border-bottom:1px solid #d2d2d2; position:relative;}
  #Resume_Industry_Select_List dd:last-child{ border-bottom:none;}
  #Resume_Industry_Select_List dd .name{ color:#000; font-size:14px; width:100%; padding-left:12px; box-sizing:border-box; position:absolute; left:0px; top:0px; height:45px; z-index:1; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; padding-right:50px;}
  #Resume_Industry_Select_List dd.h .name{color:#32a0ff;}
  /*遮罩层*/
  #Resume_Pop { display: none; width: 100%; position: absolute; left: 0px; top: 0px; height: 100%; background-color: rgba(000,000,000,0.7); z-index: 2; }


  /* 商品列表页面各机型适配 */
  @media (min-device-width : 414px) and (max-device-width : 736px){
    .pay_row li{height:146px;}
    .current_buy{left: 32%;margin-left: -15%;}
  }
  /*@media (min-device-width :480px) and (-webkit-min-device-pixel-ratio:1.5){
      .set-line02{font-size:13px;}
      .set-line02 .bold{font-size:15px;}
  }*/
  @media all and (max-width:320px){
    .pay_container{padding:0 0 25px;}
    .saleP.adap{padding:0 16px;}
  }

  /* iphone 4 */
  /*@media (device-height: 480px) and (-webkit-min-device-pixel-ratio:2) {}*/
  /* iphone 5 */
  /*@media screen and (device-width: 320px) and (device-height:568px) and (-webkit-min-device-pixel-ratio:2) {}*/
  /* iphone 6+ */
  /*@media (device-width: 414px) and (-webkit-min-device-pixel-ratio:3.0) {
  }*/
</style>
