<template>
  <div class="app-recommend">
    <loading v-show="showLoading"></loading>
    这是搜索结果
    <div>
      {{positionDetail}}
    </div>
  </div>
</template>

<script>
  import {mapState, mapActions} from 'vuex'
  import Loading from '../components/common/loading.vue'
  export default {
    data: function() {
      return {
        keyword: '',
      }
    },
    computed: {
      ...mapState([
        'showLoading',
      ])
    },
    methods: {
      ...mapActions([])
    },
    mounted() {
      this.keyword = this.$route.query.keyword
      if (!this.keyword) {
        window.alert('参数错误')
        this.$router.replace({path: 'index'})
        return
      }
    },
    components: {
      Loading,
    }
  }
</script>
