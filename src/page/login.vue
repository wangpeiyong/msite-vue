<template>
  <div class="app-recommend">
    <loading v-show="showLoading"></loading>
    <Login></Login>
  </div>
</template>

<script>
  import {mapState, mapActions} from 'vuex'
  import Loading from '@/components/common/loading.vue'
  import Login from '@/components/login/login.vue'
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
      ...mapActions([]),
    },
    mounted() {
      this.redirect = this.$route.query.redirect
    },
    components: {
      Loading,
      Login,
    }
  }
</script>
