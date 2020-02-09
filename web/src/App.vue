<template>
  <div id="app">
    <router-view/>
    
    <main-tab-bar/>
  </div>
</template>

<script>
  import MainTabBar from './components/content/maintabbar/MainTabBar'

export default {
  name: 'app',
  components: {
      MainTabBar,
  }
}
</script>

<style>
    @import "./assets/css/base.css";
    #app{
      width: 100%
    }
</style>
