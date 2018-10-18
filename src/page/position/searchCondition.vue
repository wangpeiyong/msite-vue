<template>
  <div class="app-search">
    <loading v-show="showLoading"></loading>
    <position-search :keyword="keyword"></position-search>
  </div>
</template>

<script>
  import {mapState, mapActions} from 'vuex'
  import Loading from '@/components/common/loading.vue'
  import PositionList from '@/components/position/positionList.vue'
  import Page from '@/components/common/page.vue'
  import PositionSearch from '@/components/position/positionSearch.vue'
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
      PositionSearch,
    }
  }
</script>
