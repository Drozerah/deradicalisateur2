<template>
      <!-- Mobile device sidenav conditional rendering -->
      <nav class="bg-yellow hide-on-med-and-up" role="navigation">
        <div class="nav-wrapper ">
          <ul id="nav-mobile" class="sidenav" ref="sidenav">
            <router-link
              v-for='link in links'
              :key='link.path'
              :to='link.path'
              :exact='link.path == "/" ? true : false'
              tag="li"
              active-class="active"
              >
              <a :class="wavesEffect">{{link.path == "/" ? pathHomeName : link.name | capitalize}}</a>
            </router-link>
          </ul>
          <a href="#" data-target="nav-mobile" class="sidenav-trigger black-text"><i class="material-icons">menu</i></a>
        </div>
      </nav>
</template>

<script>
import M from 'materialize-css'
export default {
  data () {
    return {
      pathHomeName: '||||||||',
      links: this.$router.options.routes.filter(link => link.meta.isPublicLink === true),
      wavesEffect: 'sidenav-close waves-effect waves-yellow' // CSS transition
    }
  },
  mounted () {
    // Sidenav instanciation + config position
    return new M.Sidenav(this.$refs.sidenav, {
      edge: 'left'
    })
  }
}
</script>

<style lang="scss" scoped>
nav {
  ul{
    li{
      a{
        color: #2c3e50;
      }
    }
  }
}
.bg-yellow  {
    background-color: #fbea13!important;
}
</style>
