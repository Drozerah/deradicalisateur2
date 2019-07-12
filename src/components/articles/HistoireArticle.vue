<template>
  <article :class="$mq">
    <header>
      <h1 class="center">L'histoire</h1>
    </header>
    <div class="content">
      <p>Après un entretien avec des responsables du département de la justice, un déradicaliseur est autorisé à communiquer avec un détenu.</p>
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
@import "@/styles/_variables.scss";
@import "@/styles/_mixins.scss";
  /* DEFAULT */
  article{
    header{
      h1{
        color:inherit;
      }
    }
    .content{
      p{
        &:nth-child(1) {
          margin-bottom: 0px;
        }
        &:nth-child(2) {
          margin-top: 0px;
        }
      }
      .img-card{
        padding: 10px;
        margin-top: 30px;
        img{
          width: 100%;
        }
        .label{
          margin-bottom: 10px;
          font-size: 16px;
        }
      }
    }
  }
    /* MOBILE */
  article.mobile{
    .content{
      font-size: 20px;
      p{
        margin-top: 0px;
      }
      @include article-mobile-width; // mixin
      .img-card{
        transform: rotate(-1deg);
        margin-top: 20px;
        margin-bottom: 20px;
      }
    }
  }
  /* TABLET - LAPTOP - DESKTOP */
  article.tablet, article.laptop, article.desktop{
    @include article-tablet-and-up-width; // mixin
    .content{
      font-size: 20px;
      .img-card{
        transform: rotate(2deg) translate(50px,0px);
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
      }
    }
  }
</style>
