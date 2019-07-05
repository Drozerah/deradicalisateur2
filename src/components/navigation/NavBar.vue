<template>
  <nav class="white flex-container" role="navigation">
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
  </nav>
</template>

<script>
export default {
  data () {
    return {
      pathHomeName: '||||||||',
      links: this.$router.options.routes,
      wavesEffect: 'waves-effect waves-yellow' // CSS transition
    }
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
</style>
