<template>
  <div class="resume">
    <header class="j_header">
      <a class="j_return left" onclick="popPage('/', true);"></a>
      我的简历
    </header>

    <section class="j_conWrap">


      <div class="indexListInfo" id="indexListInfo">

        <div class="indexListwrap">

          <div class="resumeListWrap">

            <section class="resumeTieleInfo">
              <hgroup class="name">不用了12</hgroup>

              <p><span>状态：</span>可投递</p>
              <p><span>更新：</span><b class="updateTime">2018-10-18</b></p>

            </section>

            <ul class="myZhilianList">
              <input type="hidden" data-status="1" data-resumeid="205117386" data-resumenum="JM135509455R90250000000" data-resumever="1" data-resumetitle="不用了12" data-istopable="1" data-hastopservice="False" />
              <li>
                <a class="__ga__resume_bjjlzdjl_001 Resume_top wrap" @click="gotoResumeTop" href="javascript:;">
                  <img src="//img09.zhaopin.cn/2012/other/mobile/m/creatResumeIcon/resumeIndex_1.png" width="16" alt="" />

                  <div class="name titresumetop">简历置顶 <span class="titword">被查看至少可提高<span class="red">50</span>次！</span> </div>
                  <div class="clearfix"></div>
                </a>
              </li>

              <li>
                <a class="__ga__resume_Refreshresume_001 wrap" data-status="1" data-resumeid="205117386" @click="gotoResumeRefresh">
                  <img src="//img09.zhaopin.cn/2012/other/mobile/m/creatResumeIcon/resumeIndex_2.png" width="16" alt="" />
                  <span class="name">刷新简历</span>
                </a>
              </li>
              <li>
                <a class="__ga__resume_Editorresume_001 wrap" @click="todo">
                  <img src="//img09.zhaopin.cn/2012/other/mobile/m/creatResumeIcon/resumeIndex_3.png" width="16" alt="" />
                  <span class="name">编辑简历</span>
                </a>
              </li>
              <li>

                <a class="__ga__resume_Previewresume_001 wrap" resumeId="205117386" resumeVer="1" resumeNum="JM135509455R90250000000"  @click="todo">
                  <img src="//img09.zhaopin.cn/2012/other/mobile/m/creatResumeIcon/resumeIndex_4.png" width="16" alt="" />
                  <span class="name">预览简历</span>
                </a>
              </li>
              <li>
                <a class="__ga__resume_EditorresumeName_001 wrap renameResumeBtn" @click="doRenameResume" data-resumevalue="不用了12" data-resumeid="205117386">
                  <img src="//img09.zhaopin.cn/2012/other/mobile/m/creatResumeIcon/resumeIndex_5.png" width="16" alt="" />
                  <span class="name">修改名称</span>
                </a>
              </li>

              <li>
                <a class="__ga__resume_Deleteresume_001 wrap" data-resumeid="205117386" @click="doDeleteResume">
                  <img src="//img09.zhaopin.cn/2012/other/mobile/m/creatResumeIcon/resumeIndex_6.png" width="16" alt="" />
                  <span class="name">删除简历</span>
                </a>
              </li>

              <li>
                <a class="wrap" data-resumeid="205117386" @click="gotoResumeSetting">
                  <img src="//img09.zhaopin.cn/2012/other/mobile/m/creatResumeIcon/resumeIndex_7.png" width="16" alt="" />
                  <span class="name">隐私设置</span>
                </a>
              </li>
              <li class="skinItem" style="display:none;">
                <a class="wrap" resumeId="205117386" resumeVer="1" resumeNum="JM135509455R90250000000" @click="todo">
                  <img src="//img09.zhaopin.cn/2012/other/mobile/m/creatResumeIcon/resumeSkin.png" width="16" alt="" />
                  <span class="name">简历皮肤</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <div class="renameResumeWrap" v-show="isShowRenameResume">
      <div class="renameResume" v-show="isShowRenameResume">
        <h4>修改简历名称</h4>
        <input type="text" v-model="title" class="renameResumeVal" autofocus="autofocus" maxlength="100">
        <ul>
          <li data-resumeid="205117386" @click="renameResume">确定</li>
          <li @click="renameCancel" class="renameResumeClose">取消</li>
        </ul>
      </div>
      <!--<div style="background: #fff; color: #000;" id="popupPanel">-->
        <!--<ul style="width: 210px">-->
          <!--<li style="color: #1264ff; text-align: center;">选择默认简历</li>-->
          <!--<li class="forResumeLi cn" data-language="1">预览中文简历</li>-->
          <!--<li class="forResumeLi en" data-language="2">预览英文简历</li>-->
          <!--<li style="color: #1264ff; text-align: center;" onclick="closepopupPanel()">取消</li>-->
        <!--</ul>-->
      <!--</div>-->
    </div>

    <div class="V5popWrap beforeWrap">
    </div>


    <!--<div class="V5popWrap backWrap">-->
      <!--<div class="modal_dialog" id="status_modal" style="display:none;">-->
        <!--<div class="modal_body bugbody">-->
          <!--<p class="title">简历填写不完整，完善后可置顶简历</p>-->
        <!--</div>-->
        <!--<div class="modal_footer ">-->
          <!--<btn class="btn l">确认</btn>-->
          <!--<btn class="btn r improve_btn">完善简历</btn>-->
        <!--</div>-->
      <!--</div>-->
    <!--</div>-->

    <!--<div class="V5popWrap istopableWrap">-->
      <!--<div class="modal_dialog istopable_modal" id="istopable_modal" style="display:none;">-->
        <!--<div class="modal_body">-->
          <!--<p class="content">该简历已购买简历置顶业务，<br />删除后此业务也将取消,确认要删除？</p>-->
        <!--</div>-->
        <!--<div class="modal_footer ">-->
          <!--<btn class="btn l">确认</btn>-->
          <!--<btn class="btn r">取消</btn>-->
        <!--</div>-->
      <!--</div>-->
    <!--</div>-->

    <!--<div class="V5popWrap">-->
      <!--<div class="modal_dialog anomalybody">-->
        <!--<div class="modal_body">-->
          <!--<p class="title">简历异常</p>-->
          <!--<p class="content">请联系客服：4008859898</p>-->
        <!--</div>-->
        <!--<div class="modal_footer">-->
          <!--<btn class="btn l">取消</btn>-->
          <!--<a href="tel:4008859898"><btn class="btn r improve_btn">拨打电话</btn></a>-->
        <!--</div>-->
      <!--</div>-->
    <!--</div>-->
    <!--<section class="three third">-->
      <!--<div class="detail">-->
        <!--<div class="bgimg"><img src="//img09.zhaopin.cn/2012/other/mobile/activity/company.png" alt="company"></div>-->
        <!--<div class="content">-->
          <!--<ul id="itemContent"></ul>-->
        <!--</div>-->
      <!--</div>-->
      <!--<div class="shiftdelete">shiftdelete</div>-->
    <!--</section>-->

  </div>
</template>

<script>
  import {mapState, mapActions} from 'vuex'
  import Loading from '@/components/common/loading.vue'
  export default {
    name: 'myResume',
    data: function() {
      return {
        isShowRenameResume: false,
        title: '',
      }
    },
    computed: {
      ...mapState([
        'showLoading',
        'userDetail',
      ])
    },
    methods: {
      ...mapActions([]),
      gotoResumeTop() {
        this.$router.push({path: '/resumeTop'})
      },
      gotoResumeRefresh() {
        // console.log(this.userDetail)
        if (!this.userDetail || !this.userDetail.resumes || !this.userDetail.resumes[0]) {
          return this.$dialog.toast({mes: '无数据', timeout: 2000})
        }
        const resumeId = this.userDetail.resumes[0].id
        const resumeNumber = this.userDetail.resumes[0].number
        this.$router.push({name: 'ResumeRefresh', params: {resumeId, resumeNumber}})
      },
      gotoResumeSetting() {
        // console.log(this.userDetail)
        if (!this.userDetail || !this.userDetail.resumes || !this.userDetail.resumes[0]) {
          return this.$dialog.toast({mes: '未调后台接口', timeout: 2000})
        }
        const resumeId = this.userDetail.resumes[0].id
        const resumeNumber = this.userDetail.resumes[0].number
        this.$router.push({name: 'ResumeSetting', params: {resumeId, resumeNumber}})
      },
      doDeleteResume() {
        this.$dialog.confirm({
          mes: '确认删除简历？',
          opts: () => {
            this.$dialog.toast({mes: '你点了确定,但是我没有调后台', timeout: 2000});
          }
        });
      },
      doRenameResume() {
        this.isShowRenameResume = true
      },
      renameResume() {
        this.$dialog.toast({mes: '你点了确定,但是我没有调后台', timeout: 2000});
        this.isShowRenameResume = false
      },
      renameCancel() {
        this.isShowRenameResume = false
      },
      todo() {
        this.$dialog.toast({mes: '暂未开发', timeout: 2000})
      }
    },
    mounted() {
      if (this.userDetail && this.userDetail.resumes && this.userDetail.resumes[0]) {
        this.title = this.userDetail.resumes[0].title
      }
    },
    components: {
      Loading,
    }
  }
</script>
<style>
  /*header*/
  .j_header { position: relative;max-width:640px; width: 100%; background-color: #51A1FF ; line-height: 44px; font-size: 18px; color: #fff; text-align: center; }
  .r_returnbk { position: absolute; left: 0px; width: 50px; height: 44px; top: 0px; }
  .r_returnbk i {display:block;font-style: normal; height: 18px; width: 18px; float: left;background:url("//img09.zhaopin.cn/2012/other/mobile/m/7.0icon/left_return.png")center center no-repeat;background-size:8px 15px; margin:12px 0 0 12px;}

  .three { display: none; position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.6); z-index: 9998 }
  .three .detail { position: absolute; top: 50%; left: 50%; -webkit-transform: translate3d(-50%, -50%, 0); -ms-transform: translate3d(-50%, -50%, 0); transform: translate3d(-50%, -50%, 0); background: #ffffff; width: 80%; text-align: center; border-radius: 6px; z-index: 9998 }
  .three .detail h3 { font-size: 17px; font-weight: normal; color: #333; padding: 2.5em 0 0.5em; width: 88%; margin: 0 auto }
  .three .detail h3 span { display: inline-block; color: #42beff; margin: 0 4px }
  .three .detail .content { margin: -110px 0 14px 0 }
  .three .detail .content h4 { font-size: 14px; color: #333 }
  .three .bgimg { position: relative; top: -13%; left: 50%; -webkit-transform: translate3d(-50%, -76%, 0); -ms-transform: translate3d(-50%, -76%, 0); transform: translate3d(-50%, -76%, 0); width: 100%; z-index: 9999 }
  .three .bgimg img { display: block; width: 100% }
  .three #itemContent { max-height: 260px; overflow-y: auto }
  .three #itemContent li { font-size: 12px; line-height: 24px; color: #041b48; margin: 14px 0 }
  .three #itemContent li p { float: left; width: 60%; text-align: left; padding-left: 8px; line-height: 16px }
  .three #itemContent li em { float: right; width: 24%; padding: 0 4px; color: #666666; font-style: normal; width: 32%; line-height: 16px }
  .three .shiftdelete { position: absolute; bottom: 10%; left: 50%; -webkit-transform: translate3d(-50%, -50%, 0); -ms-transform: translate3d(-50%, -50%, 0); transform: translate3d(-50%, -50%, 0); width: 29px; height: 29px; background: url("//img09.zhaopin.cn/2012/other/mobile/darcy/shiftdelete.png") center center no-repeat; background-size: cover; text-indent: -9999px }
  .darcyclearfix{*zoom:1}
  .darcyclearfix:after{content:'\0020';display:block;height:0;clear:both;visibility:hidden}
  .myZhilianList li .wrap.Resume_top .name .titword{font-size: 12px;color: #999999;}
  .renameResume h4{background:#42beff;}
  .renameResume ul li{background:#42beff;}
  .myZhilianList li .name{width:80%;float:none;}

  .left { float: left; }
  .right { float: right; }
  /*简历样式2016-10-14*/
  .j_conWrap {overflow: hidden; }
  .j_header .j_language { width: 25px; height: 25px; background: url(//img09.zhaopin.cn/2012/other/mobile/m/btn_english.png) no-repeat; background-size: 25px 25px; position: absolute; right: 20px; top: 12px; }
  .j_header .j_language.hover { background: url(//img09.zhaopin.cn/2012/other/mobile/m/btn_chinese.png) no-repeat; background-size: 25px 25px; }

  #indexListInfo { position: relative; overflow: hidden; }
  .resumeListWrap { width: 100%; float: left; position: relative; }
  .swipe-wrap .resumeListWrap:first-child { display: block; }
  .j_conWrap .btn { position: absolute; bottom: 25px; right: 20px; z-index: 100; }
  .j_conWrap .btn li { float: left; width: 6px; height: 6px; background-color: #ccc; margin-left: 4px; border-radius: 50%;}
  .j_conWrap .btn li.hover { background-color: #42beff;}
  .resumeTieleInfo {padding:16px 12px;margin-bottom:8px;background-color: #fff; position: relative; }
  .resumeTieleInfo .name { width: 170px; line-height: 30px; color: #141414; font-size: 16px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  .resumeTieleInfo p { line-height: 28px; color: #666666; font-size: 14px; }
  .resumeTieleInfo p span { width: 15%; display: inline-block; }
  .resumeTieleInfo .lbg { height: 18px; width: 9px; position: absolute; right: 0px; bottom: -9px; background-color: #d6d6d6; border-radius: 18px 0 0 18px; z-index:1;}
  .resumeTieleInfo .rbg { height: 18px; width: 9px; position: absolute; left: 0px; bottom: -9px; background-color: #d6d6d6; border-radius: 0 18px 18px 0; z-index:1;}
  .resumeTieleInfo .default { padding: 0 12px; color: #fff; background-color: #17baff; font-size: 12px; height: 20px; text-align: center; line-height: 20px; position: absolute; right: -4px; top: 20px; }
  .resumeTieleInfo .default .bg { width: 4px; height: 5px; position: absolute; right: 0px; bottom: -5px; background: url("//img09.zhaopin.cn/2012/other/mobile/m/resume_default_bg.png") no-repeat center center; background-size: 4px 5px; }
  .createResume { display: block; color: #fff; margin: 24px auto; width: 225px; height: 40px; background-color: #1d8aff; border-radius: 3px; text-align: center; color: #fff !important; line-height: 40px; font-size: 18px; }
  .createResume:link, .createResume:visited { color: #fff !important; }
  .myZhilianList li .wrap.Resume_top .name{color:#ff860d;}
  .myZhilianList li .wrap.Resume_top .name .tit{font-size:12px;color:#999999;}
  .myZhilianList li .wrap.Resume_top .name .tit .red{color:#ff5959;}
  /*我的智联首页列表 2016-10-14*/
  .myZhilianList {overflow: hidden;background:#fff;}
  .myZhilianList.pad0 { padding: 0px; }
  .myZhilianList li { border-bottom: 1px solid #f2f2f2; font-size: 16px;  position: relative; padding:0 12px;}
  .myZhilianList li .wrap {display: block; height: 50px; line-height: 50px; background: #fff url('//img09.zhaopin.cn/2012/other/mobile/m/creatResumeIcon/resumeIndex_8.png') no-repeat right center; background-size: 8px 12px;}
  .myZhilianList li:last-child .wrap { border-bottom: none; }
  .myZhilianList li .name { color: #141414; float: left; font-size: 16px; }
  .myZhilianList li .num { color: #17a5ff; float: right; padding-right: 15px; }
  .myZhilianList li img { position: relative; top: 18px; float: left;margin-right:12px; }
  #myZhilianCompany { width: 20px; height: 20px; right: 45px; top: 18px; text-align: center; line-height: 20px; font-size: 12px; color: #fff; display: none; }

  /*反馈通*/
  .jobsFeedBackWrap, .waitingNumberWrap, .V5popWrap { width: 100%; height: 100%; background-color: #000; position: fixed; left: 0px; top: 0px; z-index: 99; background: rgba(0,0,0,0.5); display: none; z-index: 110; }
  .jobsFeedBack { width: 100%; height: 160px; position: fixed; bottom: -160px; background-color: #e7e7e7; display: none; }
  .jobsFeedBack .tit { text-align: center; color: #666; font-size: 15px; line-height: 40px; }
  .jobsFeedBack .btn { height: 35px; line-height: 35px; text-align: center; background-color: #2585e5; color: #fff; border-radius: 5px; margin: 0 auto; width: 50%; margin-top: 10px; display: block; }
  .jobsFeedBack .check { font-size: 16px; color: #666; height: 60px; line-height: 60px; background-color: #fff; }
  .jobsFeedBack .check .bg { margin: 20px 10px 0 20px; width: 22px; height: 22px; background: url(//img09.zhaopin.cn/2012/other/mobile/m/44x44_icon_checkbox_default.png) right center no-repeat; background-size: contain; display: block; float: left; }
  .jobsFeedBack .check .bg.hover { background: url(//img09.zhaopin.cn/2012/other/mobile/m/44x44_icon_checkbox.png) right center no-repeat; background-size: contain; }
  /*V5开通反馈通ui*/
  .V5_ktfkt, .V5-1_ktfkt { width: 300px; height: 208px; background-color: #fff; border-radius: 5px; position: absolute; top: 50%; margin-top: -104px; left: 50%; margin-left: -150px; z-index: 111; }
  .V5_ktfkt .img { margin-top: 3px; }
  .V5_ktfkt .kt { width: 231px; height: 44px; line-height: 44px; background-color: #50c656; font-size: 14px; color: #fff; text-align: center; margin-left: 10px; }
  .V5_ktfkt .hl { font-size: 14px; color: #999; padding: 0 13px; line-height: 44px; }
  .V5_ktfkt.ts { height: 108px; margin-top: -245px; }

  .V5-1_ktfkt { text-align: center; width: 280px; height: 182px; margin-left: -140px; }
  .V5-1_ktfkt .tit { font-size: 18px; color: #555; padding-top: 15px; line-height: 35px; }
  .V5-1_ktfkt .text { font-size: 12px; color: #999; line-height: 30px; padding-bottom: 10px; }
  .V5-1_ktfkt .kt { font-size: 17px; color: #fff; background-color: #50c656; width: 262px; height: 40px; border-radius: 3px; line-height: 40px; margin: 0 auto; }
  .V5-1_ktfkt .hl { padding: 12px 15px 0 0; color: #777; text-decoration: underline; text-align: right; font-size: 12px; }

</style>
