<template>
  <article :class="$mq">
    <header>
      <h1>Home:</h1>
    </header>
    <div class="content">
      <div class="img">
        <img :src="src" :alt="imgAlt" class="responsive-img">
      </div>
      <div class="text-content">
        <p>Lui,<br>il va au coeur des mécaniques<br>et qu'importe si certains rouages<br>n'aiment pas être exposés...</p>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  data () {
    return {
      imgAlt: 'Le déradicaliseur image BD',
      src: require('@/assets/jpg/le_deradicaliseur.jpg')
    }
  }
}
</script>

<style lang="scss" scoped>
  article{
    header{
      h1{
        display: none;
      }
    }
    .content{
      display: flex;
      flex-direction: row;
      justify-content: center;
    }
    .text-content{
      font-size: 20px;
      align-self: center;
    }
  }
  /* MOBILE */
  article.mobile{
    margin: 40px 0px 50px 0px;
  }
</style>
