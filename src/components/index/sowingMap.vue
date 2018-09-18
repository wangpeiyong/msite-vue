<template>
  <div class="shouye" id="j_focus">
    <div class="swipeboxpic">

      <a class="__ga__index_GuideEvent_001" rel="nofollow" href="/account/indexup">
        <img src="//img09.zhaopin.cn/2012/other/mobile/m/index_16808.png"/>
      </a>
      <a target="_blank" href="http://t.cn/RmvoBVP">
        <img src="//img09.zhaopin.com/2012/other/mobile/banner/suo-im180301.jpg" />
      </a>
      <a href="https://cnt.zhaopin.com/Market/whole_counter.jsp?sid=121128281&site=mbanner&url=http://special.zhaopin.com/2017/sh/xslz071999w/">
        <img src="//img09.zhaopin.cn/2012/other/mobile/banner/xslz071999w.jpg" />
      </a>
      <a target="_blank" rel="nofollow" href="https://special.zhaopin.com/2018/bj/nxlt020182/">
        <img src="//img09.zhaopin.com/2012/other/mobile/banner/nxlt020182.jpg" />
      </a>
      <a target="_blank" rel="nofollow" href="//m.zhaopin.com/select.html?utm_source=zhuanti&utm_medium=cpc&utm_campaign=zhilian&utm_content=xuanze&utm_term=xuanzem">
        <img src="//img09.zhaopin.cn/2012/other/mobile/banner/xuanzem.jpg"/>
      </a>
    </div>
  </div>

</template>

<script>
    import {mapState, mapActions} from 'vuex'
    import Swipe from 'swipe'
    export default {
        name: 'sowingMap',
        data() {
            return {
            }
        },
        computed: {
            ...mapState([
            ])
        },
        mounted() {
          let time;
          window.indexAppWrap = new Swipe(document.getElementById('j_focus'), {
            auto: 3000,
            disableScroll: false,
            callback: function () {
              console.log(time)
              clearTimeout(time);
              time = setTimeout(function () { indexAppWrap.next() }, 3000);
            }
          });
        },
        methods: {
            ...mapActions([
            ])
        },
        components: {
        }
    }
</script>
<style>
  .shouye{width: 100%;background-color: #fff;}

  #j_focus { position: relative; overflow: hidden; z-index: 109; }
  #j_focus a { float: left; min-height: 40px; position: relative; }
  #j_focus a img { display: block; width: 100%; }
</style>
