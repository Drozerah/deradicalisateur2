<template>
  <article :class="$mq">
    <header>
      <h1>{{title}}</h1>
      <div class="content">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat suscipit vero autem alias facilis mollitia nostrum tempora sapiente consequuntur veritatis?</p>
      </div>
    </header>
  </article>
</template>

<script>
export default {
  data () {
    return {
      title: 'Actualités'
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
