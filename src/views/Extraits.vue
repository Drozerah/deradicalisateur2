<template>
  <div class="extraits">
    <h2>This is the 'extraits' page</h2>
    <Carousel/>
    <Modal/>
  </div>
</template>

<script>
// @ is an alias to /src
import Carousel from '@/components/carousel/Carousel.vue'
import Modal from '@/components/modals/Modal.vue'
export default {
  components: {
    Carousel,
    Modal
  }
}
</script>

<style lang="scss" scoped>

</style>
