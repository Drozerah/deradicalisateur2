<template>
  <main class="main extraits">
    <br>
    <br>
    <Carousel/>
    <Article/>
    <mq-layout mq="tablet+">
      <Modal/>
    </mq-layout>
  </main>
</template>

<script>
// @ is an alias to /src
import Carousel from '@/components/carousel/Carousel.vue'
import Article from '@/components/articles/ExtraitsArticles.vue'
import Modal from '@/components/modals/Modal.vue'
export default {
  components: {
    Carousel,
    Article,
    Modal
  }
}
</script>

<style lang="scss" scoped>

</style>
