<template>
  <div>
    <loading v-show="showLoading"></loading>
    <header>
      <div class="title">
        <span @click="todo">arrow</span>
        <h3>我的智联</h3>
        <a @click="todo"><strong style="top: 8px;right: 2%;width: 22px;height: 17px;background: url('//img09.zhaopin.cn/2012/other/mobile/m/4_2_icon_mail.png') center center no-repeat;background-size: cover;">message<b class="newNumber" style="display: none;width: 8px;height: 8px;top: -4px;right: -4px;border-radius: 50%;background-color: #ff0008;position: absolute;"></b></strong></a>
      </div>
    </header>

    <div class="separate">separate</div>
    <section class="partone">
      <ul>
        <a @click="todo">
          <li class="line">
            <div class="item clearfix">
              <em class="myorder">icon</em>
              <h3>我的订单</h3>
              <i id="orderNum">2</i>
              <span>arrow</span>
            </div>
          </li>
        </a>
        <li class="line" @click="todo">
          <div class="item clearfix">
            <em class="record">icon</em>
            <h3>我的投递记录</h3>
            <strong id="redpoint"></strong>
            <span>arrow</span>
          </div>
        </li>
        <a @click="gotoJobStatistics">
          <li>
            <div class="item clearfix">
              <em class="graph">icon</em>
              <h3>我的求职统计</h3>
              <span>arrow</span>
            </div>
          </li>
        </a>
      </ul>
    </section>
    <div class="separate">separate</div>
    <section class="parttwo">
      <ul>
        <a @click="todo">
          <li class="line">
            <div class="item clearfix">
              <em class="collect">icon</em>
              <h3>我的收藏</h3>
              <span>arrow</span>
            </div>
          </li>
        </a>
        <a @click="gotoMyResume">
          <li class="line">
            <div class="item clearfix">
              <em class="mycv">icon</em>
              <h3>我的简历</h3>
              <span>arrow</span>
            </div>
          </li>
        </a>
        <a @click="todo">
          <li>
            <div class="item clearfix">
              <em class="blacklist">icon</em>
              <h3>我的黑名单</h3>
              <span>arrow</span>
            </div>
          </li>
        </a>
        <li class="line" style="display:none">
          <div class="item clearfix">
            <em class="subscribe">icon</em>
            <h3>我的订阅</h3>
            <span>arrow</span>
          </div>
        </li>
        <li style="display:none">
          <div class="item clearfix">
            <em class="focus">icon</em>
            <h3>我的关注</h3>
            <span>arrow</span>
          </div>
        </li>

      </ul>
    </section>
    <div class="separate">separate</div>
    <section class="partthree">
      <ul>
        <a @click="todo">
          <li class="line">
            <div class="item clearfix">
              <em class="help">icon</em>
              <h3>客户服务</h3>
              <span>arrow</span>
            </div>
          </li>
        </a>
        <a @click="todo">
          <li class="line">
            <div class="item clearfix">
              <em class="setting">icon</em>
              <h3>用户反馈</h3>
              <span>arrow</span>
            </div>
          </li>
        </a>
        <a @click="todo">
          <li>
            <div class="item clearfix">
              <em class="invoice">icon</em>
              <h3>发票制度</h3>
              <span>arrow</span>
            </div>
          </li>
        </a>
      </ul>
    </section>
    <div class="separate">separate</div>
    <section class="partfour">
      <div @click="doLogout">退出</div>
    </section>

  </div>
</template>

<script>
  import {mapState, mapActions} from 'vuex'
  import Loading from '@/components/common/loading.vue'
  import cookie from 'js-cookie'
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
      ...mapActions(['logout']),
      todo() {
        this.$toasted.show('暂未开发').goAway(2000)
      },
      gotoJobStatistics() {
        this.$router.push({path: '/jobStatistics'})
      },
      gotoMyResume() {
        this.$router.push({path: '/myResume'})
      },
      doLogout() {
        this.logout()
        cookie.set('at', '', -1)
        cookie.set('rt', '', -1)
        this.$emit('GET_USER_DETAIL')
        this.$router.replace({path: '/'})
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
  .partone .item .invoice, .partthree .item .invoice, .parttwo .item .invoice {
    background: url("//img09.zhaopin.cn/2012/other/mobile/m/7.0icon/invoiceIcon.png") 0 center no-repeat;
    background-size: 20px;
  }

  .separate {
    display: block;
    box-sizing: border-box;
    text-indent: -9999px;
    height: 16px
  }

  .line {
    border: none;
    background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0, #f2f2f2), color-stop(50%, #f2f2f2), color-stop(50%, transparent));
    background-image: -webkit-linear-gradient(top, #f2f2f2 0, #f2f2f2 50%, transparent 50%);
    background-image: linear-gradient(to bottom, #f2f2f2 0, #f2f2f2 50%, transparent 50%);
    background-size: 100% 1px;
    background-repeat: no-repeat;
    background-position: bottom
  }

  header {
    background-color: #42beff;
    padding: 7.5px 0
  }

  header .title {
    width: 94%;
    margin: 0 auto;
    text-align: center;
    color: #fff;
    position: relative
  }

  header span {
    float: left;
    margin-top: 7px;
    text-indent: -9999px;
    width: 18px;
    height: 18px;
    background: url(//img09.zhaopin.cn/2012/other/mobile/m/7.0icon/left_return.png) center center no-repeat;
    background-size: 8px 15px
  }

  header strong {
    position: absolute;
    text-indent: -9999px;
    top: 0;
    right: 3%;
    width: 20px;
    height: 31px;
    background: url(//img09.zhaopin.cn/2012/other/mobile/m/6.3_icon/message.png) center center no-repeat;
    background-size: cover
  }

  header h3 {
    font-size: 17px
  }

  .partone, .partthree, .parttwo {
    margin: 0 8px;
    background: #fff;
    border-radius: 4px
  }

  .partone ul li, .partthree ul li, .parttwo ul li {
    margin-left: 12px;
    padding: 6px 0
  }

  .partone .item, .partthree .item, .parttwo .item {
    box-sizing: border-box;
    position: relative
  }

  .partone .item em, .partthree .item em, .parttwo .item em {
    float: left;
    margin-top: 7px;
    width: 20px;
    height: 20px;
    text-indent: -999px;
    background: url(//img09.zhaopin.cn/2012/other/mobile/m/7.0icon/HomeindexIcon.png) center center no-repeat;
    background-size: 20px 286px
  }

  .partone .item i, .partthree .item i, .parttwo .item i {
    display: none;
    position: absolute;
    top: 8px;
    right: 8%;
    font-style: normal;
    font-size: 9px;
    width: 16px;
    color: #fff;
    background: #ff6e6f;
    border-radius: 6px;
    text-align: center;
    line-height: 12px
  }

  .partone .item strong, .partthree .item strong, .parttwo .item strong {
    display: none;
    position: absolute;
    top: 10px;
    right: 8%;
    width: 8px;
    height: 8px;
    background: #ff6e6f;
    border-radius: 10px
  }

  .partone .item span, .partthree .item span, .parttwo .item span {
    position: absolute;
    top: 8px;
    right: 12px;
    width: 7px;
    height: 12px;
    text-indent: -9999px;
    background: url(//img09.zhaopin.cn/2012/other/mobile/m/6.3_icon/icon.png) 0 0 no-repeat;
    background-size: 26px 255px
  }

  .partone .item h3, .partthree .item h3, .parttwo .item h3 {
    color: #333;
    font-size: 16px;
    margin-left: 28px
  }

  .partone .item .myorder, .partthree .item .myorder, .parttwo .item .myorder {
    background-position: 0 0
  }

  .partone .item .record, .partthree .item .record, .parttwo .item .record {
    background-position: 0 -125px
  }

  .partone .item .invite, .partthree .item .invite, .parttwo .item .invite {
    background-position: 0 -247px
  }

  .partone .item .graph, .partthree .item .graph, .parttwo .item .graph {
    background-position: 0 -186px
  }

  .partone .item .collect, .partthree .item .collect, .parttwo .item .collect {
    background-position: 0 -167px
  }

  .partone .item .subscribe, .partthree .item .subscribe, .parttwo .item .subscribe {
    background-position: 0 -20px
  }

  .partone .item .focus, .partthree .item .focus, .parttwo .item .focus {
    background-position: 0 -60px
  }

  .partone .item .blacklist, .partthree .item .blacklist, .parttwo .item .blacklist {
    background-position: 0 -81px
  }

  .partone .item .setting, .partthree .item .setting, .parttwo .item .setting {
    background-position: 0 -227px
  }

  .partone .item .mycv, .partthree .item .mycv, .parttwo .item .mycv {
    background-position: 0 -267px
  }

  .partone .item .help, .partthree .item .help, .parttwo .item .help {
    background: url("//img09.zhaopin.cn/2012/other/mobile/m/7.0icon/fd_help.png") 0 center no-repeat;
    background-size: 20px;
  }

  .partfour {
    margin: 0 8px;
    background: #fff;
    text-align: center;
    font-size: 17px;
    color: #ff6e6e;
    line-height: 2.8em;
    border-radius: 4px;
  }

  .home_box {
    display: none !important
  }


</style>
