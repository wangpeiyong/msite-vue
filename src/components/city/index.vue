<template>
  <div>
    <div class="city-search-box" v-show="isShowCityBox">

      <div class="city" ref="cityBody" v-show="isShowCityBody">
        <div>
          <div class="city-body">
            <div class="city-current">
              <div class="city-current-title city-title">当前位置</div>
              <div class="city-current-content city-content" style="display: none;"> 定位失败，请点击重试 </div>
              <div class="city-current-content city-content" style="display: none;"> 定位中... </div>
              <div class="city-current-content city-content" @click="locationClick()"> {{locationStr}} </div>
            </div>
            <div class="city-recent">
              <div class="city-current-title city-title">最近访问</div>
              <template v-for="city in hotCity">
                <div class="city-current-content city-content" v-if="city.isOpen" @click="cityItemClick(city)">{{city ? city.name : '无'}}</div>
              </template>
            </div>
            <div class="city-hot">
              <div class="city-hot-title city-title">热门城市</div>
              <div class="city-hot-content">
                <template v-for="city in hotCity">
                  <div v-if="city.isOpen" @click="cityItemClick(city)" class="city-hot-content-item city-active">{{city ? city.name : '无'}}</div>
                </template>
              </div>
            </div>
            <div id="list" class="list" ref="cityList">
              <div class="list-content" style="display: none;"> 全部 </div>
              <div v-for="(city, index) in cityList">
                <template v-if="isShowCityLetter(city, cityList, index)">
                  <div class="list-title" :ref="'list-title-' + city.pinyin.charAt(0).toUpperCase()" :class="['list-title-' + city.pinyin.charAt(0).toUpperCase()]">{{city.pinyin.charAt(0).toUpperCase()}}</div>
                </template>
                <div @click="cityItemClick(city)" class="list-content"> {{city ? city.name : '无'}} </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { HOT_CITY, CITY_LIST } from '@/config/data'
  import { mapState, mapMutations } from 'vuex'
  import SearchBar from './SearchBar'
  import BScroll from 'better-scroll'
  export default {
    name: 'city',
    data () {
      return {
        hotCity: [],
        cityList: [],
        letterList: [],
        queryCityList: [],
        isShowCityBody: true,
        letters: []
      }
    },
    props: {
      scrollLetter: String
    },
    components: {
      SearchBar
    },
    mounted () {
      this.getCityList()
    },
    watch: {
      isShowCityBox (isShowCityBox) {
        console.log('isShowCityBox:' + isShowCityBox)
        if (isShowCityBox) {
          // 根据是否显示 CityBox 来确定 letter组件的展示内容
          this.LETTERS_CONFIG(this.letters)
          this.$nextTick(() => {
            this.scrollCityBody = new BScroll(this.$refs.cityBody, {
              probeType: 3,
              click: true
            })
            console.log('aa')
            this.scrollCityBody.on('scroll', (pos) => {
              console.log(pos.x + '~' + pos.y)
            })
            this.scrollCityBody.scrollTo(0, 0)
          })
        } else {
          this.LETTERS_CONFIG([])
        }
      },
      cityList (newCityList) {
        this.letters = newCityList.reduce((letters, item, index, array) => {
          let letter = item.pinyin.charAt(0).toUpperCase()
          if (letters.indexOf(letter) === -1) {
            letters.push(letter)
          }
          return letters
        }, [])
      },
      scrollLetter (newScrollLetter) {
        console.log('newScrollLetter is === ', newScrollLetter)
        console.log('this.$refs is === ', this.$refs)
        if (newScrollLetter && this.isShowCityBox) {
          if (this.$refs['list-title-' + newScrollLetter] && this.$refs['list-title-' + newScrollLetter][0]) {
            console.log(this.$refs['list-title-' + newScrollLetter])
            this.scrollCityBody.scrollToElement(this.$refs['list-title-' + newScrollLetter][0], 200, 0, -this.$refs.cityHeader.clientHeight)
          }
        }
      },
      isShowCityBody (newIsShowCityBody) {
        console.log('aaaaaaaaa')
        if (newIsShowCityBody) {
          this.LETTERS_CONFIG(this.letters)
        } else {
          this.LETTERS_CONFIG([])
        }
      }
    },
    computed: mapState({
      isShowCityBox: 'isShowCityBox',
      location: 'location',
      locationStr (state) {
        if (state && state.location) {
          return [state.location.name, state.location.district, state.location.address].join(',')
        }
        return '北京,北京,朝阳'
      }
    }),
    methods: {
      ...mapMutations([
        'CITY',
        'IS_SHOW_CITY_BOX',
        'LETTERS_CONFIG'
      ]),
      getCityList () {
        setTimeout(this.getCityListInfo, 200)
      },
      getCityListInfo () {
        this.hotCity = HOT_CITY.data
        CITY_LIST.data.sort(function (a, b) {
          return [a.pinyin, b.pinyin].sort().shift() === a.pinyin ? -1 : 1
        })
        this.cityList = CITY_LIST.data
      },
      cityItemClick (city) {
        this.$router.push({
          path: '/',
          query: {
            cityName: city.name, // 所选城市名称
            cityId: city.id // 所选城市ID
          }
        })
        this.IS_SHOW_CITY_BOX(false)
      },
      isShowCityLetter (city, cityList, index) {
        if (index === 0) {
          return true
        } else {
          return city.pinyin.charAt(0).toUpperCase() !== cityList[index - 1].pinyin.charAt(0).toUpperCase()
        }
      },
      locationClick () {
        let location = this.location
        this.cityItemClick({
          name: location.name,
          id: location.id
        })
      },
      showResponseData (showResponseData) {
        if (showResponseData === 'emptyInput') {
          this.displayCityBody()
        } else if (showResponseData === 'close') {
          console.log('close')
          this.IS_SHOW_CITY_BOX(false)
        } else if (showResponseData.length > 0) {
          this.queryCityList = showResponseData
          this.displayQueryList()
        }
      },
      displayQueryList () {
        this.isShowCityBody = false
        this.$nextTick(() => {
          this.scrollQueryList = new BScroll(this.$refs.cityQueryList, {
            probeType: 3,
            click: true
          })
          this.scrollQueryList.on('scroll', (pos) => {
            console.log(pos.y)
          })
          this.scrollQueryList.scrollTo(0, 0)
        })
      },
      displayCityBody () {
        this.isShowCityBody = true
      },
      queryItemClick (query) {
        console.log('times')
        let routeQuery = {}
        this.displayCityBody()
        if (query.areaName) {
          routeQuery = {
            cityName: query.cityName, // 所选城市名称
            cityId: query.cityId, // 所选城市ID
            keyword: query.areaName
          }
        } else {
          routeQuery = {
            cityName: query.cityName, // 所选城市名称
            cityId: query.cityId // 所选城市ID
          }
        }
        this.$router.push({
          path: '/',
          query: routeQuery
        })
        if (this.isShowCityBox) {
          this.IS_SHOW_CITY_BOX(false)
        }
      }
    }
  }
</script>
<style scope lang="sass">
  /*@import 'src/style/common'*/
  .city-search-box
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    .city-header
      position: fixed;
      z-index: 41;
      top: 0;
      width: 100%;
      height: px2rem(90px);
      background-color: #d9d9d9;
      line-height: px2rem(40px);
      text-align: center;
    .city
      position: fixed;
      z-index: 40;
      top: 0;
      left: 0;
      height: 100%;
      max-height: 100%;
      width: 100%;
      overflow: hidden;
      color: #333;
      background-color: #d9d9d9;
      perspective: 1000;
      backface-visibility: hidden;
      .city-body, .city-search-result
        position: relative;
        padding-bottom: px2rem(90px);
        height: 100%;
        overflow-y: scroll;
        width: 100%;
        margin-top: px2rem(90px);
        .city-current
          position: relative;
        .city-title
          position: relative;
          background-color: #f7f7f7;
          font-size: px2rem(20px);
          color: #999;
          border-top: 1px solid #e6e6e6;
          border-bottom: 1px solid #d9d9d9;
        .city-content
          position: relative;
          line-height: px2rem(70px);
          background-color: #fff;
          border-bottom: 1px solid #e6e6e6;
          font-size: px2rem(30px);
        .city-hot
          background-color: #fff;
          .city-hot-content
            padding: .14rem 0;
            .city-hot-content-item
              width: 28%;
              display: inline-block;
              height: px2rem(70px);
              font-size: px2rem(30px);
              text-align: center;
              border: 1px solid #e6e6e6;
        .list
          background-color: #fff;
          position: relative;
          .list-content, .list-title
            position: relative;
            border-bottom: 1px solid #e6e6e6;
          .list-content
            line-height: px2rem(70px);
            font-size: px2rem(30px);
            background-color: #fff;
            margin-left: px2rem(30px);
          .list-title
            background-color: #f7f7f7;
            font-size: px2rem(24px);
            line-height: px2rem(28px);
            color: #999;
            border-top: 1px solid #e6e6e6;
      .city-search-result
        background-color: #fff;
        .result-item
          margin-left: px2rem(40px);
          height: px2rem(90px);
          line-height: px2rem(90px);
          border-bottom: 1px solid #e6e6e6;
          font-size: px2rem(30px);
          .result-item-name
            float: left;
            text-overflow: ellipsis;
            white-space: nowrap;
            max-width: 65%;
            overflow-x: hidden;
          .city-color-light
            color: #ccc;
          .result-item-tag
            float: right;
            color: #999;
            margin-right: px2rem(40px);
            font-size: px2rem(30px);

</style>

