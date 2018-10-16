<template>
  <div class="indexSearch">
    <div class="searchMain">
      <div class="container" id="BodyContainer">
        <form action="#">
          <header class="j_header">
            <div class="r_returnbk" onclick="popPage('/searchjob/', true, true);">
              <i></i>
            </div>
            <div class="r_searchBox">
              <div class="r_search">
                <div class="tabtype">
                  <span class="T1">全文</span>
                  <span class="A2"></span>

                </div>
                <input type="search" placeholder="请输入关键字" id="keywordJiuye" autofocus="autofocus"/>
              </div>
            </div>

          </header>
          <section class="r_content">
            <div class="jobSearch_option">
              <a data-code="3" data-href="filterList3" id="r_industry" data-hidden="Industry">
                <i class="arrowbox"></i>
                <span class="text">选择行业</span>
                <input id="industry" name="Industry" type="hidden" value=""/>
              </a>
              <a data-code="2" data-href="filterList2" id="r_jobname" data-hidden="JobType">
                <i class="arrowbox"></i>
                <span class="text">选择职位</span>
                <input id="jobtype" name="JobType" type="hidden" value=""/>
              </a>
              <a data-code="1" data-href="filterList1" id="r_city" data-hidden="Location">
                <i class="arrowbox"></i>
                <span class="text">
                                    <span id="city">
北京
                                    </span>
                                    <span class="cuetext">(可选择家附近的职位)</span>
                        </span>
                <input Value="530" id="location" name="Location" type="hidden" value=""/>
              </a>

            </div>
          </section>
        </form>


        <section class="toppay darcy" id="toppay">
          <p><span>icon</span>优先显示高薪职位</p>
        </section>

        <section class="j_employmentBox">

          <input type="hidden" value="0" id="j_jyHid"/>
          <div class="btn __ga__index_SearchEvent_001" onclick="search();">开始搜索</div>

        </section>


      </div>
    </div>

    <div class="whitepop">
      <div class="tablist" style="display:none;">
        <div class="show">全文</div>
        <div class="show">职位名</div>
        <div class="show">公司名</div>
      </div>
    </div>


  </div>

</template>

<script>
  import {mapState, mapActions} from 'vuex'
  import * as types from '../../store/mutation-types.js'

  export default {
    name: 'search',
    data() {
      return {
        keyword: ''
      }
    },
    computed: {
      ...mapState([])
    },
    mounted() {
      const kw = this.$route.query.keyword || ''
      this.keyword = kw
    },
    methods: {
      ...mapActions([]),
      doSearch() {
        const curPath = this.$route.path
        if ('/searchResult' == curPath) {
          this.$parent.setKeyword(this.keyword)
        } else {
          this.$router.push({path: 'searchResult', query: {keyword: this.keyword}})
        }
      }
    },
    components: {}
  }
</script>
<style>
  body {
    background: #F2F8FB;
  }

  .j_header {
    text-align: left;
    line-height: normal;
  }

  .toppay {
    /*display: none;*/
    background: #f0f0f0;
    color: #000000;
    width: 95%;
    margin: 0 auto;
    padding: 6% 0 4%;
    border-top: 1px solid #d6d6d6;
  }

  .toppay p {
    font-size: 14px;
    line-height: 20px;
    margin-left: 10%;
  }

  .toppay p span {
    float: left;
    margin-right: 2%;
    text-indent: -9999px;
    height: 20px;
    width: 20px;
    background: url("//img09.zhaopin.cn/2012/other/mobile/darcy/default.png") center center no-repeat;
    background-size: 100%;
    text-indent: -9999px;
  }

  .darcy p span {
    float: left;
    margin-right: 2%;
    text-indent: -9999px;
    height: 20px;
    width: 20px;
    background: url("//img09.zhaopin.cn/2012/other/mobile/darcy/checked.png") center center no-repeat;
    background-size: 100%;
    text-indent: -9999px;
  }

  .j_employmentBox {
    border-top: none;
    background-color: #fff;
    width: 100%;
  }

  .r_searchBox {
    padding-left: 50px;
    padding-right: 12px;
    width: 81%;
    height: 100%;
  }

  .r_search {
    position: relative;
  }

  .padT12 {
    padding-top: 12px;
  }

  .marT8 {
    margin-top: 8px;
  }

  .r_search .btn {
    border-radius: 0px;
    background: #42beff;
    font-size: 13px;
    display: inline-block;
    width: 70px;
    height: 33px;
    line-height: 33px;
    font-size: 15px;
    color: #fff;
    text-align: center;
    vertical-align: top;
    border-radius: 0px 50px 50px 0px;
    position: absolute;
    right: 0;
    top: 0;
    padding: 0px;
  }

  .r_line {
    height: 1px;
    background-color: #bebebe;
    overflow: hidden;
    width: 95%;
    margin: 10px auto;
  }

  .r_search .tabtype {
    position: absolute;
    left: 10px;
    top: 11px;
    min-width: 55px;
    height: 20px;
    line-height: 20px;
    font-size: 14px;
    color: #fff;
  }

  .r_search .tabtype .T1 {
    position: absolute;
    top: 0;
    left: 0;
    max-width: 45px;
    line-height: 20px;
  }

  .r_search .tabtype .A2 {
    position: absolute;
    top: 8px;
    right: 0;
    width: 8px;
    height: 5px;
    background: url("//img09.zhaopin.cn/2012/other/mobile/m/7.0icon/Fill1.png") no-repeat left center;
    background-size: 8px 5px;
  }

  .tablist {
    position: absolute;
    z-index: 9999;
    left: 48px;
    top: 40px;
    padding-top: 10px;
    width: 82px;
    height: 93px;
    font-size: 14px;
    color: #fff;
    background: url("//img09.zhaopin.cn/2012/other/mobile/m/7.0icon/tabbg.png") no-repeat;
    background-size: 82px 103px;
    opacity: 0.9;
  }

  .tablist .show {
    padding: 5px 12px;
    height: 20px;
    line-height: 20px;
    text-align: center;
  }

  .r_search input {
    padding-left: 74px;
    padding-right: 12px;
    margin: 5px 0;
    width: 100%;
    height: 33px;
    line-height: 20px;
    font-size: 13px;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    border: none;
    background: #3489ed;
    border-radius: 50px;
    color: #fff;
  }

  .r_search input::-webkit-input-placeholder {
    color: #b7d6f7;
  }

  .r_search input::-moz-placeholder {
    color: #b7d6f7;
  }

  /* firefox 19+ */
  .r_search input:-ms-input-placeholder {
    color: #b7d6f7;
  }

  /* ie */
  .r_search input:-moz-placeholder {
    color: #b7d6f7;
  }

  .jobSearch_option {
    margin: 16px 0;
    background: #fff;
    overflow: hidden;
  }

  .jobSearch_option a {
    display: block;
    position: relative;
    padding: 0 12px;
    width: 100%;
    height: 49px;
    line-height: 49px;
    border-bottom: 1px solid #e5e5e5;
    font-size: 16px;
    color: #333 !important;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
  }

  .jobSearch_option a:last-child {
    border: none;
  }

  .jobSearch_option a .arrowbox {
    display: block;
    position: absolute;
    top: 19px;
    right: 12px;
    width: 7px;
    height: 12px;
    background: url(//img09.zhaopin.cn/2012/other/mobile/m/2016_1_icon_right.png) no-repeat left center;
    background-size: 7px 12px;
  }

  .jobSearch_option em {
    float: right;
    font-style: normal;
    padding-right: 15px;
    color: #c3c3c3;
  }

  .jobSearch_option a .text {
    display: inline-block;
    max-width: 76%;
    height: 48px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .jobSearch_option a .cuetext {
    color: #888;
  }

  .jobSearch_option a img {
    margin: 16px 18px 0 -21px;
    float: left;
  }

  .jobSearch_option a .filteIcon {
    display: block;
    width: 15px;
    height: 18px;
    margin: 14px 6px 0 0px;
    float: left;
    background: url("//img09.zhaopin.cn/2012/other/mobile/m/homeLocation/startsearch_icon.png") no-repeat;
    background-size: 15px 75px
  }

  .jobSearch_option a .filteIcon.c {
    background-position: 0px -2px;
  }

  .jobSearch_option a .filteIcon.j {
    background-position: 0px -26px;
  }

  .jobSearch_option a .filteIcon.i {
    background-position: 0px -56px;
  }

  .jobSearch_option a .j_employment {
    padding-right: 25px;
    background: url(//img09.zhaopin.cn/2012/other/mobile/m/img_hot.png) 123px center no-repeat;
    background-size: 21px 14px;
  }

  .jobSearch_option a .j_employment b {
    padding-right: 3px;
    font-style: italic;
    font-weight: bold !important;
  }

  .r_research {
    width: 95%;
    margin: 12px auto;
    height: 52px;
    overflow: hidden;
    position: relative;
  }

  .r_research span {
    display: inline-block;
    width: 54px;
    height: 51px;
    background-color: #f8fbfb;
    position: absolute;
    left: 0;
    top: 0;
    padding-right: 24px;
    text-align: center;
    border-right: 1px solid #d9d9d9;
  }

  .r_research span img {
    width: 27px;
    height: 28px;
    padding-top: 13px;
    padding-left: 24px;
  }

  .j_employmentBox .btn {
    text-align: center;
    line-height: 43px;
    border-radius: 5px;
    width: 90%;
    height: 43px;
    background-color: #51A1FF;
    color: #fff;
    font-family: 'Microsoft YaHei';
    margin: 0 auto;
    display: block;
    font-size: 16px;
    -webkit-appearance: none;
  }

  .search-reco {
    position: relative;
    font-size: 14px;
    background: #fff;
  }

  .search-reco h3 {
    padding: 12px 0px 12px 34px;
    background: url("//img09.zhaopin.cn/2012/other/mobile/m/7.0icon/history.png") no-repeat 12px center;
    background-size: 16px;
    color: #333;
  }

  .search-reco li {
    position: relative;
    padding-right: 12px;
    margin-left: 12px;
    height: 44px;
    line-height: 44px;
    border-bottom: 1px solid #e5e5e5;
  }

  .search-reco li:last-child {
    border: none;
  }

  .search-reco li .t {
    display: block;
    width: 90%;
    height: 45px;
    line-height: 45px;
    color: #333;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    word-wrap: break-word;
  }

  .search-reco li .cs {
    position: absolute;
    top: 15px;
    right: 12px;
    width: 13px;
    height: 13px;
    background: url("//img09.zhaopin.cn/2012/other/mobile/m/7.0icon/CombinedShape.png") no-repeat right center;
    background-size: 13px;
  }

  .whitepop {
    position: absolute;
  }
</style>
