<template>
  <div class="indexSearch">
    <div class="content">
      <span>输入关键字/职位/公司搜索</span>
      <b>搜 索</b>
    </div>
  </div>

</template>

<script>
    import {mapState, mapActions} from 'vuex'
    export default {
        name: 'search',
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
<style>
  /*首页搜索*/
  .indexSearch { height: 60px; background-color: #fff; overflow: hidden; }
  .indexSearch .content { margin: 20px 12px 0px 12px; height: 38px; line-height: 38px; color: #c8c8c8; font-size: 15px; border-radius: 50px; position: relative;background:#f0f0f0; }
  .indexSearch .content.search {margin:10px;background:#fff;border:1px solid #d2d2d2;border-radius: 0px; }
  .indexSearch .content span { display: block; margin: 0 14px; }
  .indexSearch .content b { width: 70px; height: 38px; line-height: 38px; color: #fff; font-size: 15px; text-align: center; border-radius:0px 50px 50px 0px; position: absolute; right: 0px; top: 0px; background-color: #42beff; }
  .indexSearch .content b.search { width: 44px; height: 28px; background: url("//img09.zhaopin.cn/2012/other/mobile/m/combine_icon16312.png") no-repeat -235px -115px; top: 5px; border-radius: 0px; }
  #indexSearchContent { width: 100%; height: 100%; position: absolute; left: 0px; top: 0px; z-index: 1000; background-color: #fff; display: none; }
  .indexSearchContentTop { height: 30px; padding: 10px 10px 10px 15px; background-color: #f8f8f8; line-height: 30px; position: relative; }
  .indexSearchContentTop .close { width: 26px; background: url("//img09.zhaopin.cn/2012/other/mobile/m/4-2_indexSearch.png") no-repeat left center; background-size: 11px 20px; height: 30px; position: absolute; left: 15px; top: 10px; z-index: 200; }
  .indexSearchContentTop .wrap { width: 100%; padding-left: 26px; box-sizing: border-box; -webkit-box-sizing: border-box; -moz-box-sizing: border-box; position: relative; }
  .indexSearchContentTop .wrap #indexSearchBox { width: 100%; padding-left: 10px; background-color: #e6e6e8; border-radius: 5px; padding-right: 37px; box-sizing: border-box; -webkit-box-sizing: border-box; -moz-box-sizing: border-box; height: 30px; }
  .indexSearchContentTop .btn { width: 37px; height: 30px; position: absolute; right: 0px; top: 0px; background: url("//img09.zhaopin.cn/2012/other/mobile/m/4-2_indexSearchBtn2.png") no-repeat left center; background-size: auto 21px; }
  .indexSearchList { overflow: hidden; font-size: 15px; display: none; }
  .indexSearchList dd { height: 40px; padding: 0 20px 0 15px; line-height: 40px; border-bottom: 1px solid #dedede; position: relative; }
  .indexSearchList dd a { float: left; color: #000; display: inline-block; width: 80%; }
  .indexSearchList dd .add { float: right; width: 14px; height: 40px; padding: 0 20px; background: url("//img09.zhaopin.cn/2012/other/mobile/m/4-2_indexSearchAdd.png") no-repeat center center; background-size: 14px; position: absolute; right: 0px; top: 0px; }
  .indexSearchList dt { border-bottom: 1px solid #e5e5e5; height: 40px; padding: 0 15px; line-height: 40px; color: #686868; }
  .indexSearchList dd a .gl { color: #686868; }
</style>
