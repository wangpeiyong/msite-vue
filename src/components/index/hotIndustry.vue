<template>
  <div class="">
    <dl class='j_HotJobsIndustryList j_industrySubmit'>
      <dt>
        <span>热门行业</span>
      </dt>
      <dd v-for="item in hotIndustry">
        <a :class="item.class ? item.class + ' __ga__index_topIndustry_001' : '__ga__index_topIndustry_001'">{{item.name}}</a>
      </dd>
    </dl>
  </div>
</template>

<script>
  import {mapState, mapActions} from 'vuex'

  export default {
    name: 'hotIndustry',
    data() {
      return {}
    },
    computed: {
      ...mapState([
        'hotIndustry'
      ])
    },
    mounted() {
      this.getHotIndustry()
    },
    methods: {
      ...mapActions([
        'getHotIndustry'
      ])
    },
    components: {}
  }
</script>
<style>
  .j_HotJobsIndustryList {
    margin-bottom: 16px;
    overflow: hidden;
    clear: both;
    background-color: #fff;
    border-top: 1px solid #e6e6e6;
    border-bottom: 1px solid #e6e6e6;
  }

  .j_HotJobsIndustryList dt {
    height: 39px;
    line-height: 39px;
    margin: 0 12px;
    background: url("//img09.zhaopin.cn/2012/other/mobile/m/6.3.1/index_hoticon.png") no-repeat left center;
    background-position: 0 -81px;
    background-size: 19px 200px;
  }

  .j_HotJobsIndustryList dt span {
    display: block;
    line-height: 39px;
    font-size: 16px;
    margin-left: 23px;
    color: #42beff;
  }

  .j_HotJobsIndustryList dd {
    width: 25%;
    border-top: 1px solid #e6e6e6;
    font-size: 14px;
    color: #000;
    float: left;
    height: 48px;
    line-height: 48px;
    text-align: center;
    vertical-align: middle;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
  }

  .j_HotJobsIndustryList dd:nth-child(4n+1) {
    border-right: none;
  }

  .j_HotJobsIndustryList dd a {
    width: 100%;
    height: 20px;
    line-height: 20px;
    display: block;
    color: #000;
    border-right: 1px solid #e6e6e6;
    margin: 13px 0;
  }

  .j_HotJobsIndustryList dd a:link, .j_HotJobsIndustryList dd a:visited {
    color: #000;
  }

  .j_HotJobsIndustryList dd a.colorC:link, .j_HotJobsIndustryList dd a.colorC:visited {
    color: #17a5ff;
  }

  .j_HotJobsIndustryList dd:nth-child(n+18) {
    border-bottom: none;
  }
</style>
