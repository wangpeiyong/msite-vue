<template>
  <div class="app-recommend">
    <loading v-show="showLoading"></loading>
    <Login></Login>
  </div>
</template>

<script>
  import {mapState, mapActions} from 'vuex'
  import Loading from '../components/common/loading.vue'
  import Login from '../components/login/login.vue'
  export default {
    data: function() {
      return {
        redirect: '',
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
      this.redirect = this.$route.query.redirect
      console.log(this.redirect)
      // let param= {/
      //   url: '/position/search',
      //   data: {S_SOU_FULL_INDEX: this.keyword}
      // }
      // this.getPositionDetail(param);
    },
    components: {
      Loading,
      Login,
    }
  }
</script>
