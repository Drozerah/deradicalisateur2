<template>
  <article :class="$mq">
    <header>
      <h1 class="center">L'histoire</h1>
    </header>
    <div class="content">
      <p>Après un entretien avec des responsables du département de la justice, un&nbsp;déradicaliseur est autorisé à communiquer avec un détenu.</p>
      <p>Ils vont ainsi parler de presque tout, sans tabou, quitte à remettre en question l'impensable...</p>
      <div class="z-depth-1 img-card white">
        <img :src="src" :alt="imgAlt" class="responsive-img">
        <div class="label center">- extrait planche 27 -</div>
      </div>
      <p>Plusieurs extraits sont disponibles en suivant le lien ci-dessous :</p>
      <br>
      <div class="center">
          <router-link to="extraits" class="btn waves-effect waves-yellow grey lighten-1 black-text darken-text-2">Extraits</router-link>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  data () {
    return {
      imgAlt: 'Le déradicaliseur image BD',
      src: require('@/assets/jpg/planche_27_ST.jpg')
    }
  }
}
</script>

<style lang="scss">
</style>

<style lang="scss" scoped>
@import "@/scss/_variables.scss";
@import "@/scss/_mixins.scss";
  /* MOBILE */
  article.mobile{
    .content{
      @include article-mobile-width; // mixin
      .img-card{
        transform: rotate(-1deg) translate(-5px, 0px);
        margin-bottom: 40px;
        margin-top: 40px;
        padding-bottom: 10px;
      }
    }
  }
  /* TABLET - LAPTOP - DESKTOP */
  article.tablet, article.laptop, article.desktop{
    @include article-tablet-and-up-width; // mixin
    .content{
      .img-card{
        padding: 10px;
        margin-top: 40px;
        margin-bottom: 50px;
        // transformation
        transform: rotate(2deg) translate(50px,0px);
        // animation
        animation: card 0.1s ease-in-out forwards;
        animation-iteration-count: 1;
        animation-delay: 0.01s;
        @keyframes card{
          0%   {transform: rotate(2deg) translate(50px,0px);}
          25%  {transform: rotate(1.5deg) translate(30px,0px);}
          50%  {transform: rotate(1deg) translate(10px,0px);}
          75%  {transform: rotate(0.75deg) translate(0px,0px);}
          100% {transform: rotate(-1deg) translate(-5px, 0px);}
        }
        img{
          width: 567px;
        }
      }
    }
  }
  /* MOBILE - TABLET - LAPTOP - DESKTOP */
  article{
  // article.mobile, article.tablet, article.laptop, article.desktop{
    .content{
      font-size: 20px;
      margin-top:40px;
      display: flex;
      flex-direction: column;
      align-items: center;
      p{
        &:nth-child(1) {
          margin-bottom: 0px;
        }
        &:nth-child(2) {
          margin-top: 0px;
        }
      }
      .img-card{
        img{
          width: 567px;
        }
        .label{
          margin-bottom: 10px;
          font-size: 16px;
        }
      }
    }
  }
</style>
