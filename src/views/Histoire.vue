<template>
  <main class="main histoire">
    <Article/>
  </main>
</template>

<script>
// @ is an alias to /src
import Article from '@/components/articles/HistoireArticle.vue'
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
