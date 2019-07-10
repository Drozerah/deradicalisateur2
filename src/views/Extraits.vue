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
  // padding: 20px;
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  // align-items: center;
  aside{
    // background-color: red;
  }
  article{
    // background-color: #E7E7E7;
    padding: 40px 45px 40px 45px;
    width: 658px;
    min-width: 658px;
    // text-align: justify;
  }
}
</style>

<style lang="scss">
main{
  article{
    .text-content{
      font-size: 18px;
    }
    header{
      h1{
        margin: 0px 0px 40px 0px;
        font-size: 25px;
        color:gray;
      }
    }
  }
}
</style>
