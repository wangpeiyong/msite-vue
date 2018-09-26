<template>
  <div class="loadingBox">
    <div class="loading">
    </div>
  </div>

</template>

<style scoped>
  .loadingBox{
    position: fixed;
    z-index: 99;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
  }
  .loading{
    position:absolute;
    top:50%;
    left:50%;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 5px solid #BEBEBE;
    border-left: 5px solid #498aca;
    animation: load 1s linear infinite;
    -moz-animation:load 1s linear infinite;
    -webkit-animation: load 1s linear infinite;
    -o-animation:load 1s linear infinite;
  }
  @-webkit-keyframes load
  {
    from{-webkit-transform:rotate(0deg);}
    to{-webkit-transform:rotate(360deg);}
  }
  @-moz-keyframes load
  {
    from{-moz-transform:rotate(0deg);}
    to{-moz-transform:rotate(360deg);}
  }
  @-o-keyframes load
  {
    from{-o-transform:rotate(0deg);}
    to{-o-transform:rotate(360deg);}
  }
</style>
<script>
  import {mapState, mapActions} from 'vuex'
  export default {
    name: 'loading',
    data() {
      return {}
    },
    computed: {
    },
    mounted() {
    },
    methods: {
    },
    components: {
    }
  }

</script>
