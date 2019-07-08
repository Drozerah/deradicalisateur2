<template>
  <div class="banner">
    <h1
      class="center"
      v-show='DisplayLogo'
    ><img
      class="responsive-img"
      :alt="Title"
      src="@/assets/jpg/bandeau.jpg">
    </h1>
  </div>
</template>

<script>
export default {
  name: 'Banner',
  props: {
    Title: String,
    DisplayLogo: Boolean
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  h1{
      margin: 5px 0px 0px 0px;
      padding: 0px;
      border: 0px;
      font-size: 100%;
  }
</style>
