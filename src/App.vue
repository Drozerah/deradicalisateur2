<template>
  <div id="app" v-cloak>
    <header role="banner">
      <mq-layout mq="mobile">
        <NavBarMobile/>
      </mq-layout>
      <Banner :Title='AppTitle' :DisplayLogo='IsLogo'/>
      <mq-layout mq="tablet+">
        <NavBar/>
      </mq-layout>
    </header>
    <router-view/>
    <Footer :Title='AppTitle' :DisplayLogo='!IsLogo'/>
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from '@/components/Banner.vue'
import NavBar from '@/components/navigation/NavBar.vue'
import NavBarMobile from '@/components/navigation/NavBarMobile.vue'
import Footer from '@/components/Footer.vue'
// import 'materialize-css'

export default {
  name: 'app',
  components: {
    Banner,
    NavBar,
    NavBarMobile,
    Footer
  },
  data () {
    return {
      AppTitle: 'Le Déradicaliseur',
      IsLogo: undefined
    }
  },
  methods: {
    logoState () {
      const currentPath = this.$router.currentRoute.path
      currentPath === '/' ? this.IsLogo = true : this.IsLogo = false
    }
  },
  mounted () {
    this.logoState()
  },
  watch: {
    '$route' () {
      this.logoState()
    }
  }
}
</script>

<style lang="scss">
[v-cloak] {
    display: none
}
body {
  padding: 0px;
}
#app {
  // font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: 333;
}
.bold{
  font-weight: 700;
}
main{
  margin-top: 50px;
  margin-bottom: 50px;
  // background-color: lime;
  header{
    h1{
      font-size: 25px;
      color:gray;
    }
  }
  article{
    .text-content{
      font-size: 18px;
    }
  }
}
</style>
