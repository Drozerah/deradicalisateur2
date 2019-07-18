<template>
  <main class="main actualites">
    <Article/>
  </main>
</template>

<script>
// @ is an alias to /src
import Article from '@/components/articles/ActualitesArticle.vue'
export default {
  components: {
    Article
  }
}
</script>

<style lang="scss" scoped>
main{
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
}
</style>
