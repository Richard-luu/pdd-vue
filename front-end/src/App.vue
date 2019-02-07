<template>
  <div id="app">
    <router-view/>
    <TabBar/>
  </div>
</template>

<script>
import TabBar from './components/TabBar/TabBar'

export default {
  name: 'App',
  components: {
    TabBar
  }
}
</script>

<style>
#app {
  width: 100%;
  height: 100%;
}
</style>
