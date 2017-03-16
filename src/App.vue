<template>
  <div id="app">
    <div class="header"></div>
    <asideNav  class="nav aside">
      <div class="logo"><img src="./assets/images/logo2.png"></div>
      <ul>
        <navItem icon="book" path="/home" navname="首页"></navItem>
        <navItem icon="layers" path="/test" navname="test"></navItem>
        <navItem icon="folder" path="/centerAbsolute" navname="centerAbsolute"></navItem>
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
