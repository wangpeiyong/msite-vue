<template>
  <div class="searchMain">
    <div class="container" id="BodyContainer">
      <header id="r_header" class="r_title">
        <div class="r_returnbk" id="backup">
          <i></i>
        </div>
        登录
        <a class="rightText" href="/account/regist?samsung=6" onclick="lijizhuce();">注册</a>
      </header>
      <div class="warn_message"></div>
      <section class="r_content logRegTabCon">
        <div class="login-tab" style="display:block">
          <ul content-id="sms_login" class="sms-login J_ping login-selected"><span id="account_login_txt">手机号码</span></ul>
          <ul content-id="username_login" class="username-login J_ping"><span id="sms_login_txt">密码登录</span></ul>
        </div>
        <div class="loginPage">

          <div id="sms_login" class="login-wrap login-wrap-active">
            <div class="log_reg_item">
              <a>
                <img src="//img09.zhaopin.cn/2012/other/mobile/m/img_login_1_16325.png" width="17" height="20" />
                <input id="telphone" name="userName" placeholder="请输入您的手机号码" type="tel" value="" />
              </a>
              <a class="mobileCheak">
                <img src="//img09.zhaopin.cn/2012/other/mobile/m/img_login_2_16325.png" width="17" height="20" />
                <input id="telCode" name="pwd" placeholder="验证码" type="number" value="" />
                <span data-mescode="true" class="mesg-code mesg-disable">获取验证码</span>
                <div class="countdown"><b class="num">60s</b>后重发</div>
              </a>
            </div>
            <section class="j_employmentBox other_operation">
              <div class="check">
                <span>
                    <span class="bg hover"></span>
                    <span style="background:none;" class="select">自动登录</span>
                </span>

              </div>
              <div id="smsloginBtn" class="btn" onclick="smsLogin();">登 录</div>
            </section>
          </div>


          <div id="username_login" class="login-wrap">
            <form id="loginForm">
              <div class="log_reg_item">
                <a>
                  <img src="//img09.zhaopin.cn/2012/other/mobile/m/img_login_1_16325.png" width="17" height="20" />
                  <input autocomplete="off" id="userName" name="userName" placeholder="请输入您的手机号码/邮箱地址" type="text" value="" />
                </a>
                <a>
                  <img src="//img09.zhaopin.cn/2012/other/mobile/m/img_login_2_16325.png" width="17" height="20" />
                  <input id="password" name="pwd" placeholder="密码" type="password" value="" />
                  <i class="show_hide_pass icon_invisible"></i>
                </a>
                <ul class="mailList" id="email_list" style="display: none;"></ul>
              </div>
            </form>
            <section class="j_employmentBox other_operation">
              <div class="check">
                            <span>
                                <span class="bg hover"></span>
                                <span style="background:none;" class="select">自动登录</span>
                            </span>
                <a href="/account/findpwd" class="right" >忘记密码</a>
              </div>

              <div id="submit" class="btn">登 录</div>
            </section>
          </div>
        </div>

        <div id="honor">
          <div class="wiser">解决一个非常离奇的bug</div>
          <a href="https://passport.zhaopin.com/org/login"><section class="darcy-bottom" id="company"><p>企业用户登录</p></section></a>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
    import {mapState, mapActions} from 'vuex'
    export default {
        name: 'loginComp',
        data() {
            return {
            }
        },
        computed: {
            ...mapState([
            ])
        },
        mounted() {
        },
        methods: {
            ...mapActions([
            ])
        },
        components: {
        }
    }
</script>
<style scoped>
  body{min-height: 457px;background:#fff;}
  .wiser{ text-indent: -9999px; padding: 25% 0; }
  .darcy-bottom{ width: 100%;padding: 12px 0;}
  .darcy-bottom p{ text-align: center; font-size: 14px; color: #2287ff;text-decoration: underline;}
  .r_title{position: relative;height:47px;font-size:18px;line-height:47px;background-color: #51A1FF;text-align: center;overflow: hidden;color: #fff;}
  .r_returnbk { position: absolute; left: 0px; width: 50px; height: 44px; top: 0px; }
  .r_returnbk i {display:block;font-style: normal; height: 18px; width: 18px; float: left;background:url("//img09.zhaopin.cn/2012/other/mobile/m/7.0icon/left_return.png")center center no-repeat;background-size:8px 15px; margin:12px 0 0 12px;}
  .rightText{position:absolute;top:0px;right:20px;line-height:47px;font-size:14px;color:#ffffff;}
  .login-tab{margin:20px 26px;line-height:44px;font-size:14px;border-bottom:1px solid #d7d7d7}
  .sms-login{width:50%;display:inline-block;float:left;text-align:center;}
  .username-login{width:50%;display:inline-block;text-align:center;}
  .login-selected>span{padding:13px 29%;border-bottom:2px solid #42BDFE;text-align:center;}
  .login-wrap{display:none;}
  .login-wrap-active{display:block;}
  .log_reg_item input[type=number]{width:70%;}
  .mesg-code{position:absolute;right:0;width:25%;}
  .mailList{position:absolute;top:150px;left:-1px;width:100%;height:200px;color:#999;background:#fff;z-index:2;border:1px solid #a0a0a0;overflow-y:scroll;}
  .mailList li{width:100%;height:40px;line-height:40px;padding-left:10px;font-size:13px;border-bottom:1px dashed #a0a0a0;
    -moz-box-sizing: border-box; -webkit-box-sizing: border-box; -o-box-sizing: border-box; -ms-box-sizing: border-box; box-sizing: border-box;}
  .mailList li:last-child{border:0 none}
  .mailList span{color:#0078a5}
  .mailList li:hover{color:#fff;background-color:#0078a5}
  .mailList li:hover span{color:#fff;}
  .mesg-code{color:#42BDFE;font-size:14px;line-height:24px;}
  .other_operation .btn{width:84.8%;height:44px;border-radius:4px;font-size:18px;}
  .log_reg_item .mobileCheak.hover .mesg-code{ display: none;color:#42beff; }
  .log_reg_item .mobileCheak .countdown {position:absolute;top:17px;right: 10px;display: none; border-radius: 20px; cursor: pointer;font-size:12px; text-align: right; color: #646464;}
  .log_reg_item .mobileCheak.hover .countdown{display:block;}
  .log_reg_item .mobileCheak.hover .countdown .num{color: #ff6e6f;}


  .logRegTabCon{background:#fff;}
  .logRegTabCon .log_reg_item{padding-top:10px;padding-left:12px;}
  .log_reg_item a {display:block;width: 100%; line-height: 17px;overflow: hidden;padding:13px 0; border-bottom: 1px solid #e6e6e6; background-color: #fff; position: relative;}
  .log_reg_item a img{margin-right:10px;vertical-align:middle;}
  .log_reg_item input[type=email],.log_reg_item input[type=number], .log_reg_item input[type=password], .log_reg_item input[type=text], .log_reg_item input[type=tel]{width: 78%;height: 22px;color: #010101;line-height: 22px;font-size: 14px;font-family: 'Microsoft YaHei';vertical-align:middle;}

  .log_reg_item input[type=password]#password, .log_reg_item input[type=text]#MobilePhonePwd{padding-right:0px;}
  .log_reg_item .show_hide_pass{display:block;vertical-align: middle;background:url("//img09.zhaopin.cn/2012/other/mobile/m/img_login_16325.png") no-repeat;zoom:0.5 ;position: absolute;text-align: center;right: 24px;top: 38px;}
  .log_reg_item .show_hide_pass.icon_visible{width:34px;height:24px;background-position:-9px -10px;}
  .log_reg_item .show_hide_pass.icon_invisible{width:40px;height:16px;background-position:-6px -59px; top:45px;}
  .logRegTabCon .other_operation{width:100%;margin-bottom:0px;padding:10px 0 0 0;background-color: #fff;border:none;}
  .other_operation .check { font-size: 14px; color: #646464; height: 35px; line-height: 35px; }
  .other_operation .check .bg { margin: 16px 10px 0 12px; width: 39px; height: 39px; background: url(//img09.zhaopin.cn/2012/other/mobile/m/img_login_16325.png) no-repeat;zoom:0.5;background-position:-6px -108px; display: block; float: left;background-size:initial; }
  .other_operation .check .bg.hover{ background: url(//img09.zhaopin.cn/2012/other/mobile/m/img_login_16325.png) no-repeat;background-position:-6px -188px; }
  .other_operation .check a{color:#646464;font-size:12px;margin-right:12px;}
  .other_operation .btn{margin: 19px auto;display: block;line-height: 44px;width:84.8%;height:44px;border-radius:4px;font-size:18px;text-align: center;background-color: #42beff;color: #fff;}
  a { text-decoration: none; -webkit-tap-highlight-color: rgba(0,0,0,0); }
</style>
