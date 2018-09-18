<template>
    <div class="">
      <dl class='j_HotJobsIndustryList j_industrySubmit'>
        <dt>
          <span>热门行业</span>
        </dt>
        <dd><a onclick="topIndustry();" href="/beijing-530/computer-software-160400/" class="colorC __ga__index_topIndustry_001" data-code="160400">软件</a></dd>
        <dd><a onclick="topIndustry();" href="/beijing-530/environmental-protection-201200/" class="colorC __ga__index_topIndustry_001" data-code="201200">环保</a></dd>
        <dd><a onclick="topIndustry();" href="/beijing-530/aeronautics-astronautics-research-and-manufacturing-300000/" class=" __ga__index_topIndustry_001" data-code="300000">航空</a></dd>
        <dd><a onclick="topIndustry();" href="/beijing-530/government-public-service-non-profit-organizations-200100/" class=" __ga__index_topIndustry_001" data-code="200100">政府</a></dd>
        <dd><a onclick="topIndustry();" href="/beijing-530/banking-300500/" class=" __ga__index_topIndustry_001" data-code="300500">银行</a></dd>
        <dd><a onclick="topIndustry();" href="/beijing-530/trading-import-or-export-170500/" class="colorC __ga__index_topIndustry_001" data-code="170500">贸易</a></dd>
        <dd><a onclick="topIndustry();" href="/beijing-530/academic-scientific-research-120600/" class=" __ga__index_topIndustry_001" data-code="120600">科研</a></dd>
        <dd><a onclick="topIndustry();" href="/beijing-530/online-game-160600/" class=" __ga__index_topIndustry_001" data-code="160600">网游</a></dd>
        <dd><a onclick="topIndustry();" href="/beijing-530/instruments-and-meters-industrial-automation-121200/" class=" __ga__index_topIndustry_001" data-code="121200">工控</a></dd>
        <dd><a onclick="topIndustry();" href="/beijing-530/logistics-warehouse-301100/" class=" __ga__index_topIndustry_001" data-code="301100">物流</a></dd>
        <dd><a onclick="topIndustry();" href="/beijing-530/leasing-service-300700/" class=" __ga__index_topIndustry_001" data-code="300700">租赁</a></dd>
        <dd><a onclick="topIndustry();" href="/beijing-530/telecom-operators-service-providers-160100/" class=" __ga__index_topIndustry_001" data-code="160100">通讯</a></dd>
        <dd><a onclick="topIndustry();" href="/beijing-530/electronic-semiconductor-ic-160500/" class="colorC __ga__index_topIndustry_001" data-code="160500">电子</a></dd>
        <dd><a onclick="topIndustry();" href="/beijing-530/petroleum-chemical-industry-120500/" class=" __ga__index_topIndustry_001" data-code="120500">化工</a></dd>
        <dd><a onclick="topIndustry();" href="/beijing-530/media-publication-films-210300/" class=" __ga__index_topIndustry_001" data-code="210300">媒体</a></dd>
        <dd><a onclick="topIndustry();" href="/beijing-530/computer-hardware-160200/" class=" __ga__index_topIndustry_001" data-code="160200">硬件</a></dd>
        <dd><a onclick="topIndustry();" href="/beijing-530/heavy-machinenary-129900/" class=" __ga__index_topIndustry_001" data-code="129900">机电</a></dd>
        <dd><a onclick="topIndustry();" href="/beijing-530/it-service-general-it-160000/" class=" __ga__index_topIndustry_001" data-code="160000">IT服务</a></dd>
        <dd><a onclick="topIndustry();" href="/beijing-530/tourism-200800/" class=" __ga__index_topIndustry_001" data-code="200800">旅游</a></dd>
        <dd><a onclick="topIndustry();" href="/beijing-530/real-estate-construction-building-materials-140000/" class="colorC __ga__index_topIndustry_001" data-code="140000">建筑</a></dd>
      </dl>

    </div>
</template>

<script>
    import {mapState, mapActions} from 'vuex'
    export default {
        name: 'hotIndustry',
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
  .j_HotJobsIndustryList {margin-bottom:16px;overflow: hidden; clear: both; background-color: #fff;border-top: 1px solid #e6e6e6;border-bottom: 1px solid #e6e6e6;}
  .j_HotJobsIndustryList dt {height: 39px; line-height: 39px;margin: 0 12px;background: url("//img09.zhaopin.cn/2012/other/mobile/m/6.3.1/index_hoticon.png") no-repeat left center;background-position:0 -81px;background-size: 19px 200px;}
  .j_HotJobsIndustryList dt span {display: block;line-height:39px;font-size:16px;margin-left: 23px;color: #42beff;}
  .j_HotJobsIndustryList dd {width: 25%; border-top: 1px solid #e6e6e6; font-size: 14px; color: #000; float: left; height: 48px; line-height: 48px; text-align: center;vertical-align:middle;box-sizing: border-box; -moz-box-sizing: border-box; -webkit-box-sizing: border-box; }
  .j_HotJobsIndustryList dd:nth-child(4n+1) { border-right: none; }
  .j_HotJobsIndustryList dd a { width: 100%; height: 20px; line-height: 20px; display: block; color: #000;border-right: 1px solid #e6e6e6; margin:13px 0;}
  .j_HotJobsIndustryList dd a:link, .j_HotJobsIndustryList dd a:visited { color: #000; }
  .j_HotJobsIndustryList dd a.colorC:link, .j_HotJobsIndustryList dd a.colorC:visited { color: #17a5ff; }
  .j_HotJobsIndustryList dd:nth-child(n+18) { border-bottom: none;}
</style>
