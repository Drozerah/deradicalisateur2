<template>
  <nav class="white" role="navigation">
    <div class="nav-wrapper">
      <ul>
        <router-link
          v-for='link in links'
          :key='link.path'
          :to='link.path'
          tag="li"
          active-class="active"
          :class="wavesEffect"
          :exact='link.path == "/" ? true : false'
        >
        <a>{{link.path == "/" ? pathHomeName : link.name | capitalize}}</a>
        </router-link>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      pathHomeName: '||||||||',
      links: this.$router.options.routes.filter(link => link.meta.isPublicLink === true),
      wavesEffect: 'waves-effect waves-yellow' // CSS transition
    }
  }
}
</script>

<style lang="scss" scoped>
nav {
  display: flex;
  justify-content: center;
  ul{
    li{
      a{
        color: #2c3e50;
      }
    }
  }
}
</style>
