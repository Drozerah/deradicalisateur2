<template>
  <main class="main extraits">
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
main{
  // background-color: orange;
  margin-top: 50px;
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  // align-items: center;
}
</style>

<style lang="scss">
main{
  header{
    h1{
      font-size: 25px;
      color:gray;
    }
  }
  article{
    .text-content{
      font-size: 18px;
    }
  }
}
</style>
