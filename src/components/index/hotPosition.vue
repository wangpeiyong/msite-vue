<template>
  <div class="j_hotJobsList">
    <h3 class="j"><span>热门职位</span></h3>
    <ul class="warp">
      <li v-for="(item, index) in hotPosition" v-show="isShowAll(index)">
        <dl class="list">
          <dt>
            <i class="wrap">
              <span>{{item.name}}</span>
              <a v-for="(item2, index2) in item.Job" v-show="index2 <= 2" class="__ga__index_HotJobsNum_001">{{item2.name}}</a>
            </i>
            <b @click="expandItem(index)" :class="isShowItem(index) ? 'h' : ''"></b>
          </dt>
          <dd>
            <a v-for="(item2, index2) in item.Job" v-show="isShowItem(index)" class="__ga__index_HotJobsNum_001">{{item2.name}}</a>
          </dd>
        </dl>
      </li>
    </ul>
    <span class="inex_ExpandAll" @click="expandAll">{{isExpandAll ? "收起" : "展开全部"}}<i :class="isExpandAll ? 'h' : ''"></i></span>
  </div>

</template>

<script>
    import {mapState, mapActions} from 'vuex'
    export default {
        name: 'hotPosition',
        data() {
            return {
              isExpandAll: false
            }
        },
        computed: {
          ...mapState(['hotPosition'])
        },
        mounted() {
          this.getHotPosition()

        },
        methods: {
          ...mapActions(['getHotPosition']),
          isShowAll(index) {
            return index <= 4 || this.isExpandAll
          },
          expandAll() {
            this.isExpandAll = !this.isExpandAll
          },
          isShowItem(index) {
            const key = 'isExpandItem_' + index
            const flag = this.$store.state[key] || false
            return flag
          },
          expandItem(index) {
            const key = 'isExpandItem_' + index
            const flag = this.$store.state[key] || false
            this.$set(this.$store.state, key, !flag)
          }
        },
        components: {
        }
    }
</script>
<style>
  /*热门职位*/
  .j_hotJobsList { line-height:88px; background-color: #fff; margin-bottom:16px;border-top: 1px solid #e6e6e6;}
  .j_hotJobsList h3 {height: 39px;line-height: 39px;margin: 0 12px; background: url("//img09.zhaopin.cn/2012/other/mobile/m/6.3.1/index_hoticon.png") no-repeat left center;background-size: 19px 200px;}
  .j_hotJobsList h3.j{background-position: 0 -40px; }
  .j_hotJobsList h3 span {display: block; line-height: 39px;margin-left:23px;font-size: 16px; color: #42beff; }

  .j_hotJobsList .warp {overflow:hidden; font-size: 14px; text-align: left;border-top:1px solid #e6e6e6;}
  .j_hotJobsList .warp.h{height:auto;}
  .j_hotJobsList .warp .list { overflow: hidden; border-bottom: 1px solid #e6e6e6; }
  .j_hotJobsList .warp .list dt { background-color: #fff; overflow: hidden; position: relative; }
  .j_hotJobsList .warp .list dt .wrap { width: 100%; padding: 0 40px 0 12px; box-sizing: border-box; -webkit-box-sizing: border-box; -moz-box-sizing: border-box; font-style: normal; display: block; height:48px;line-height: 48px; }
  .j_hotJobsList .warp .list dt span { float: left; color: #000; width: 25%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  .j_hotJobsList .warp .list dt a { float: left; color: #686868; width: 25%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  .j_hotJobsList .warp .list dt a:link, .j_hotJobsList .warp .list dt a:visited { color: #686868; }
  .j_hotJobsList .warp .list dd { background-color: #eaeaea; overflow: hidden; padding: 0 5px; }
  .j_hotJobsList .warp .list dd a { color: #646464; float: left; width: 25%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; line-height:44px;}
  .j_hotJobsList .warp .list dd a:link, .j_hotJobsList .warp .list dd a:visited { color: #686868; }
  .j_hotJobsList .warp .list dt b { float: right; width: 40px; height: 48px; background: url("//img09.zhaopin.cn/2012/other/mobile/m/combine_icon16312.png") no-repeat; background-position:-7px -45px; position: absolute; right: 0px; top: 4px; }
  .j_hotJobsList .warp .list dt b.h { transform: rotate(180deg); -ms-transform: rotate(180deg); -moz-transform: rotate(180deg); -webkit-transform: rotate(180deg); -o-transform: rotate(180deg); }

  .inex_ExpandAll{height:44px;line-height:44px;padding:0 30%;color:#646464;display: block;border-bottom:1px solid #e6e6e6;text-align:center;}
  .inex_ExpandAll i.h { transform: rotate(180deg); -ms-transform: rotate(180deg); -moz-transform: rotate(180deg); -webkit-transform: rotate(180deg); -o-transform: rotate(180deg); }
  .inex_ExpandAll i{width:6px;height:8px;background:url("//img09.zhaopin.cn/2012/other/mobile/m/V52_screen_icon3.png") center center no-repeat;background-size: 6px 5px;display:inline-block;margin-left:8px;}

</style>
