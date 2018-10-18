<template>
  <div v-else-if="jobHuntingTreasureDetail.information != null" v-html='jobHuntingTreasureDetail.information'>
  </div>
</template>

<script>
  import {mapState, mapActions} from 'vuex'
  import Loading from '@/components/common/loading.vue'
  export default {
    data: function() {
      return {
        jobHuntingTreasureDetail: {}
      }
    },
    computed: {
      ...mapState([
        'showLoading',
        'jobHuntingTreasure',
      ])
    },
    methods: {
      ...mapActions(['getJobHuntingTreasure']),
      async getJobHuntingTreasures(id) {
        let param= {
          url: '/info/getInfoList',
          data: {pageIndex: 1, pageSize: 1000}
        }
        await this.getJobHuntingTreasure(param);
        this.jobHuntingTreasure.list.forEach(jt => {
          if (jt.id == id) {
            this.jobHuntingTreasureDetail = jt
          }
        })
      },
    },
    mounted() {
      const id = this.$route.query.id
      if (!this.jobHuntingTreasure || !this.jobHuntingTreasure.list) {
        this.getJobHuntingTreasures(id)
      } else {
        this.jobHuntingTreasure.list.forEach(jt => {
          if (jt.id == id) {
            this.jobHuntingTreasureDetail = jt
          }
        })
      }
    },
    components: {
      Loading,
    }
  }
</script>
<style>

</style>
