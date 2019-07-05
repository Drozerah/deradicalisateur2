<template>
  <div class="AppTitle">
    <h1
      class="center"
      v-show='displayLogo'
    ><img
      class="responsive-img"
      :alt="AppTitle"
      src="@/assets/jpg/bandeau.jpg">
    </h1>
  </div>
</template>

<script>
export default {
  name: 'AppTitle',
  props: {
    AppTitle: String
  },
  data () {
    return {
      displayLogo: true // conditional banner logo rendering
    }
  },
  methods: {
    isDisplayLogo () {
      this.$router.currentRoute.path === '/' ? this.displayLogo = true : this.displayLogo = false
    }
  },
  watch: { // watch for route to change
    '$route' () {
      this.isDisplayLogo() // function call
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
