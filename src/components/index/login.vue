<template>
  <div class="">
    <section class="j_searchTop">
      <a class="zhilianLogo" href="/"></a>

      <a class="position" @click="doChooseCity">
        <img class="icon fr" src="//img09.zhaopin.cn/2012/other/mobile/m/4-2_cityArrow.png">
        <i></i>
        <span class="text">北京</span>
      </a>

      <a class="information" rel="nofollow" onclick="MessageCenterEvent();"><b class="newNumber"></b></a>

      <a class="login fr" rel="nofollow" @click="doLogin">注册/登录</a>
    </section>

  </div>
</template>

<script>
  import {mapState, mapActions} from 'vuex'
  import City from '@/components/city/index'

  export default {
    name: 'login',
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
      doLogin() {
        this.$router.push({path: 'login', query: {redirect: window.location.href}})
      },
      doChooseCity() {
        let scrollLetter = '北京'
        this.$router.push({path: 'city', query: {scrollLetter}})
      },
    },
    components: {
      City
    }
  }
</script>
<style>
  .j_searchTop {
    height: 44px;
    background-color: #42beff;
    border-bottom: 1px solid #3babe5;
    overflow: hidden;
  }

  .j_searchTop .information {
    display: block;
    width: 22px;
    height: 17px;
    float: right;
    background: url("//img09.zhaopin.cn/2012/other/mobile/m/combine_icon16312.png") no-repeat;
    background-position: -276px -26px;
    position: relative;
    margin: 14px 10px 0 0;
  }

  .j_searchTop .zhilianLogo {
    width: 75px;
    height: 45px;
    background: url("//img09.zhaopin.cn/2012/other/mobile/m/6.3.1/logo_16712.png") no-repeat left center;
    float: left;
    margin-left: 12px;
    background-size: 75px 18px;
  }

  .j_searchTop .position {
    font-size: 12px;
    color: #fff;
    line-height: 45px;
    max-width: 60px;
    float: left;
    margin-left: 15px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .j_searchTop .position .icon {
    margin-top: 22px;
    width: 7px;
  }

  .j_searchTop .position .text {
    padding-right: 5px;
  }

  .j_searchTop .login {
    margin: 13px 10px 0 0;
    width: 64px;
    height: 21px;
    font-size: 14px;
    color: #fff;
  }

</style>
