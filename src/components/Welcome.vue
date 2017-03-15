<template>
  <div class="welcome">
    <div class="welcome-pic"><img src="../assets/player.png"></div>
    <h2>欢迎使用sass-lib</h2>
    <p>@author:lijing</p>
  </div>
</template>

<script>
export default {
  name: 'Welcome'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .welcome{
    padding-top:50px; 
  }
  .welcome-pic{
    margin: 20px 0 60px;
    text-align:center;
  }
  h2{
    text-align:center;
    font-size:66px;
    color:#8a8a8a;
  }
  p{
    text-align:center;
    font-size:12px;
    color:#ccc;
  }
</style>
