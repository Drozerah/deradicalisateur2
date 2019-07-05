<template>
  <footer class='footer'>
    <div class="center">
      <img class="responsive-img" :alt="Title" src="@/assets/jpg/bandeau.jpg" v-if='DisplayLogo'>
    </div>
    <h3>Footer</h3>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    Title: String,
    DisplayLogo: Boolean
  }
}
</script>

<style lang="scss" scoped>

</style>
