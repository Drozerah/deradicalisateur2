<template>
  <div id="app" v-cloak>
    <header role="banner">
      <AppTitle AppTitle="Le Déradicaliseur"/>
      <NavBar/>
    </header>
    <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src
import AppTitle from '@/components/AppTitle.vue'
import NavBar from '@/components/navigation/NavBar.vue'
import 'materialize-css'

export default {
  name: 'app',
  components: {
    AppTitle,
    NavBar
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
[v-cloak] {
    display: none
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.flex-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
