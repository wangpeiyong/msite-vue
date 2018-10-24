<template>
  <div>
    <header class="j_header">
      <div class="j_return left" onclick="popPage('/resume/index',true);"></div>
      简历设置
    </header>
    <p class="resumeOp_private">设置开放程度</p>
    <section class="resumeOp_rows">
      <b>不用了123</b>
      <span :class="isOpen ? 'open' : ''" @click="changeIsOpen"></span>
    </section>
  </div>
</template>

<script>
  import {mapState, mapActions} from 'vuex'
  import Loading from '@/components/common/loading.vue'
  export default {
    data: function() {
      return {
        isOpen: false
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
        this.$dialog.toast({mes: '暂未开发', timeout: 2000})
      },
      changeIsOpen() {
        this.$dialog.toast({mes: '未调后台接口', timeout: 2000})
        this.isOpen = !this.isOpen
      }
    },
    mounted() {
      console.log(this.$route.params)
    },
    components: {
      Loading,
    }
  }
</script>
<style>
  /*简历设置*/
  .resumeOp_private{font-size:12px;color:#646464;line-height:30px;margin-top:10px;margin-left:10px;}
  .resumeOp_rows{width:100%;height:46px;line-height:46px;background-color:#fff;border-top:1px solid #e6e6e6;border-bottom:1px solid #e6e6e6;position:relative;}
  .resumeOp_rows b{position: absolute; width: 100%; height: 46px; right: 0px; top: 0px; padding-right: 97px;  overflow: hidden; text-overflow:ellipsis; white-space: nowrap; color: #000; font-size: 14px; padding-left:11px;text-align:left;box-sizing: border-box;}
  .resumeOp_rows span{position:absolute;top:0;right:0px;width:69px;height:46px;background:url(//img09.zhaopin.cn/2012/other/mobile/m/6.3.2_icon/resume_Op2.png)no-repeat;background-size:auto 43px;}
  .resumeOp_rows span.open{background:url(//img09.zhaopin.cn/2012/other/mobile/m/6.3.2_icon/resume_Op1.png)no-repeat;background-size:auto 43px;}
</style>

