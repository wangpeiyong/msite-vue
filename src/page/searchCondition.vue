<template>
  <div class="app-search">
    <loading v-show="showLoading"></loading>
    <search :keyword="keyword"></search>
  </div>
</template>

<script>
  import {mapState, mapActions} from 'vuex'
  import Loading from '../components/common/loading.vue'
  import PositionList from '../components/position/positionList.vue'
  import Page from '../components/common/page.vue'
  import Search from '../components/index/search.vue'
  export default {
    data: function() {
      return {
        keyword: ''
      }
    },
    computed: {
      ...mapState([
        'showLoading',
      ])
    },
    methods: {
      ...mapActions([]),
    },
    mounted() {
    },
    components: {
      Loading,
      PositionList,
      Page,
      Search,
    }
  }
</script>
