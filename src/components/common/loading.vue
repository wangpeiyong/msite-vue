<template>
  <div class="loading">
  </div>
</template>

<style scoped>
  .loading{
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
