<template>
  <div id="app">
    <transition name="appTransition">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
  // import TopNav from './components/topnav.vue'
  export default {
    components: {
      // TopNav
    }
  }
</script>

<style scoped>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  /*.app-topbar {*/
    /*position: fixed;*/
    /*width: 100%;*/
    /*padding: .15rem 0;*/
    /*background-color: #fff;*/
    /*z-index: 99;*/
  /*}*/
  /*.app-topbar-logo {*/
    /*margin: 0 auto;*/
    /*width: 2.4rem;*/
    /*height: .5rem;*/
    /*background: url('https://desktop-bucket.zhaopin.cn/assets/zhaopin.60b00c.png') 50% 50% no-repeat;*/
    /*background-size: 100%;*/
  /*}*/
  .app-recommend,
  .app-entertainment,
  .app-pic,
  .app-joke,
  .app-pe,
  .app-health,
  .app-army {
    padding-top: 1.6rem;
  }
  .appTransition-enter-active,
  .appTransition-leave-active {
    transition: opacity .3s
  }

  .appTransition-enter,
  .appTransition-leave-active {
    opacity: 0;
  }
</style>
