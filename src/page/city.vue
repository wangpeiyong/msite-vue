<template>
  <div class="app-recommend">
    <loading v-show="showLoading"></loading>
    这是选择城市
    <city :scrollLetter="scrollLetter"></city>
    <query-selector :scrollLetter="scrollLetter"></query-selector>
    <letter-selector
      :lettersConfig="lettersConfig"
      v-on:itemClick="letterItemClick"
    >
    </letter-selector>
  </div>
</template>

<script>
  import {mapState, mapActions} from 'vuex'
  import Loading from '../components/common/loading.vue'
  import City from '../components/city/index'
  import QuerySelector from '../components/common/querySelector/index'
  import LetterSelector from '../components/common/letterSelector'
  export default {
    data: function() {
      return {
        scrollLetter: '',
      }
    },
    computed: {
      ...mapState([
        'showLoading',
        'lettersConfig'
      ])
    },
    methods: {
      ...mapActions([]),
      letterItemClick (letter) {
        this.scrollLetter = letter
        console.log(letter)
      }
    },
    mounted() {
      this.scrollLetter = this.$route.query.scrollLetter
      if (!this.scrollLetter) {
        window.alert('参数错误')
        this.$router.replace({path: 'index'})
        return
      }
    },
    components: {
      Loading,
      City,
      QuerySelector,
      LetterSelector,
    }
  }
</script>
