<template>
  <div id="app">
    <div class="header">
      
      <p class="brand">SASS-LIBS</p>
    </div>
    <asideNav  class="nav aside">
      <div class="logo"><img src="./assets/images/logo2.png"></div>
      <ul class="nav-list">
        <navItem icon="book" path="/home" navname="首页" ></navItem>
        <navItem icon="layers" path="/test" navname="test"></navItem>
        <div class="nav-item-list">
        <p class="icon-folder">layout</p>
          <ul>
            <navItem icon="content-left" path="/layout/centerabsolute" navname="center-absolute"></navItem>
            <navItem icon="grid" path="/layout/centerblock" navname="center-block"></navItem>
            <navItem icon="grid-2" path="/layout/center-transform" navname="center-transform"></navItem>
            <navItem icon="content-right" path="/layout/clearfix" navname="clearfix"></navItem>
            <navItem icon="alt" path="/layout/fill" navname="fill"></navItem>
          </ul>
        </div>
        
       
      </ul>
    </asideNav>
    <div class="main">
    <keep-alive>
      <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import asideNav from './components/asideNav'
import navItem from './components/navItem'
export default {
  name: 'app',
  components:{
    asideNav,
    navItem
  }
}
</script>

<style>

</style>
