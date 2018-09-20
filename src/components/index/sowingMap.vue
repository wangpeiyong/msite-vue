<template>
  <div class="header-ad">
    <li class="header-li" :style="trackStyles" ref="liA">
      <a class="header-a" v-for="data in slidData" :key="data.key">
        <img class="header-img" :src="data.imageUrl"/>
      </a>
    </li>
    <div class="header-dots">
      <template v-for="n in length">
        <div class="list-dot" :class="{[`active`] : index === n-1 }"></div>
      </template>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'sowingMap',
    data () {
      return {
        slidData: [],
        index: 0,
        length: 0,
        liWidth: 0
      }
    },
    mounted () {
      this.getSlideData()
    },
    watch: {
      slidData (slidData) {
        this.clock()
        this.liWidth = this.$refs.liA.getBoundingClientRect().width
      }
    },
    computed: {
      trackStyles () {
        let trackOffset = -this.index * this.liWidth
        return {
          transform: `translate3d(${trackOffset}px, 0px, 0px)`
        }
      }
    },
    methods: {
      // 获取滑动图片的数据
      getSlideData () {
        const pictures = ['//img09.zhaopin.cn/2012/other/mobile/m/index_16808.png',
          '//img09.zhaopin.com/2012/other/mobile/banner/suo-im180301.jpg',
          '//img09.zhaopin.cn/2012/other/mobile/banner/xslz071999w.jpg',
          '//img09.zhaopin.com/2012/other/mobile/banner/nxlt020182.jpg',
          '//img09.zhaopin.cn/2012/other/mobile/banner/xuanzem.jpg'
        ]
        this.slidData = pictures.map((v, index) => {
          return {
            key: index,
            imageUrl: v,
          }
        })
        this.length = this.slidData.length
      },
      clock () {
        let length = this.length
        let self = this
        if (this.length > 0) {
          setInterval(function changeIndex () {
            if (self.index === length - 1) {
              self.index = 0
            } else {
              self.index += 1
            }
          }, 3000)
        }
      }
    }
  }
</script>
<style scope lang="sass">
  .header-ad
    height: px2rem(360px);
    overflow-x: hidden;
    position: relative;
    li
      white-space: nowrap;
      width: 100%;
      list-style: none;
      transition-property: transform;
      transition-property: transform;
      transition-timing-function: cubic-bezier(0, 0, 0.25, 1);
      transition-duration: 400ms;
      .header-a
        display: inline-block;
        z-index: -3;
        overflow: hidden;
        width: 100%;
        height: px2rem(360px);
        background-repeat: no-repeat;
        background-position: bottom;
        background-size: cover;
        .header-img
          width: 100%
    .header-dots
      position: absolute;
      top: px2rem(210px);
      left: 0;
      width: 100%;
      text-align: center;
      .list-dot
        border: solid 1px #fff;
        background: #fff;
        border-radius: 100%;
        width: px2rem(15px);
        height: px2rem(15px);
        display: inline-block;
        margin: 0 px2rem(6px);
      .list-dot.active
        border: solid 1px #06c1ae;
        background: #06c1ae;
</style>
