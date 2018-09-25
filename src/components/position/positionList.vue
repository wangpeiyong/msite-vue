<template>
    <div class="app-positionList">
        <ul class="swipe-content content-list">
            <li v-for="item in positionList" class="m_company_position list-item clearfix">
                <a href="javascript:;">
                    <div class="m_company_info">
                        <div class="m_company_digest">
                            <span>{{item.companyName}}</span>
                        </div>
                    </div>
                </a>
                <div class="m_company_desc clearfix">
                    <div class="m_company_desc_l">
                        <span>{{item.workCity}}</span>
                    </div>
                    <div class="m_company_desc_r">
                        <span>工作经验：{{item.workingExp}}</span>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
      name: 'positionList',
      props: ['positionList']
    }

</script>

<style scoped>
    .content-list{background:#f6f6f6}
    .content-list img{background:url(http://img2.cache.netease.com/f2e/wap/common/images/bg_img_sm.png) center center no-repeat;background-size:contain}
    .m_company_position{font-size:.24rem;margin:0 0 .2rem 0;background:#fff;padding:0 .3rem;box-shadow:3px 3px 8px #ddd}
    .m_company_position .m_company_channel{float:left;margin-right:.1rem}
    .m_company_position .m_company_channel span{display:block;color:#999;line-height:.42rem;padding-right:.1rem;border-right:1px solid #999;font-size:.24rem}
    .m_company_position .m_company_info{overflow:hidden;position:relative;padding-top:.25rem}
    .m_company_position .m_company_img.collapse{max-height:none}
    .m_company_position .m_company_img{position:relative;width:100%;max-height:600px;overflow:hidden}
    .m_company_position .m_company_img .gif_wrap{width:100%;height:100%;position:absolute}
    .m_company_position .m_company_img .play-btn-position{width:.9rem;position:absolute;top:50%;left:50%;margin-left:-0.45rem;margin-top:-0.45rem;height:.9rem;display:block;background:url(http://img2.cache.netease.com/f2e/wap/common/images/icon_gif.png) no-repeat;background-size:contain}
    .m_company_position .m_company_img .loading-btn-position{width:.9rem;height:.9rem;margin-left:-0.45rem;margin-top:-0.45rem;position:absolute;top:50%;left:50%;background-color:#fff;border-radius:100%;-webkit-animation:sk-scaleout 1s infinite ease-in-out;animation:sk-scaleout 1s infinite ease-in-out}
    .m_company_position .m_company_img img{width:100%;display:block}
    .m_company_position .m_company_img .m_company_title{width:100%;position:absolute;bottom:0;background:rgba(0,0,0,0.4)}
    .m_company_position .m_company_img .m_company_title span{font-size:.34rem;line-height:.42rem;margin:.25rem .2rem;color:#fff;display:inline-block}
    .m_company_position .m_company_digest{font-size:.32rem;margin-bottom:.25rem;color:#404040;line-height:.42rem;width:100%;display:inline-block;text-align:left;}
    .m_company_position .m_company_desc {overflow: hidden;}
    .m_company_position .m_company_desc .m_company_desc_l{float:left;color:#888}
    .m_company_position .m_company_desc .m_company_desc_r{float:right;color:#888}
</style>
