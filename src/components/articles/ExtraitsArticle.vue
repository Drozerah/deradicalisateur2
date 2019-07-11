<template>
  <article :class="$mq">
    <header>
      <h1>Extraits:</h1>
    </header>
    <div class="text-content">
      <p>Bonjour,</p>
      <p>Comme vous allez pouvoir le constater, <span class="bold">les extraits et les planches disponibles <span v-if="$mq =='desktop'">ci-contre</span><span v-else>ci-dessus</span> et sur ce site, ne comportent pas les bulles de texte</span>. Pourquoi ?
      C'est une BD sans bulle ? Non, 94 % des cases en sont pourvues.<br>
      Est-ce un oubli ?<br>
      Est-ce par "fourberie" ? Oui et Non.</p>
      <p>Nous avons choisi de ne pas mettre le texte parce qu'il serait forcément sorti de son contexte, et il serait difficile de saisir la progression, la stratégie du déradicaliseur.
      Pour voir le texte correspondant à chaque image <span v-if="$mq =='desktop'">ci-contre</span><span v-else>ci-dessus</span>, il faudra donc aller chez votre libraire favori, et au pire, le commander sans savoir de quoi il en retourne. Mais rassurez vous, nous avons travaillé avec beaucoup d'application pour que vous ne regrettiez pas d'avoir cette BD entre les mains.</p>
      <p>Comme pour la précédente BD "Joanne Lebster, le début d'un nouveau monde", réalisée par Mathieu et Marc, préparez-vous à aller où peu de BDs (de part leur theme) vous ont déjà emmené.
      :)</p>
      <b v-if="$mq == 'desktop'">
        <br>
          <div class="divider"></div>
        <br>
      </b>
      <p>voir aussi:</p>
      <div class="center">
        <router-link to="entrevue" class="btn waves-effect waves-yellow grey lighten-1 black-text darken-text-2">
          <span>Interview présentation</span>
          <span v-if="$mq !=='mobile'"> de l'ouvrage</span>
        </router-link>
      </div>
    </div>
  </article>
</template>
<style lang="scss" scoped>
@import "@/styles/_variables.scss";
  /* MOBILE */
  article.mobile{
    // background-color: rgb(0, 255, 42);
    padding: 40px 0px 0px 0px;
    min-width: $extraits-article-mobile-width;
    width: $extraits-article-mobile-width;
    max-width: $extraits-article-mobile-width;
    header{
      h1{
        margin: 0px;
        color:gray;
        font-size: 23px;
      }
    }
  }
  /* TABLET - LAPTOP - DESKTOP */
  article.tablet, article.laptop, article.desktop{
    // background-color: #E7E7E7;
    margin-top: 10px;
    padding: 40px 45px 0px 45px;
    min-width: $extraits-article-tablet-and-up-width;
    width: $extraits-article-tablet-and-up-width;
    max-width: $extraits-article-tablet-and-up-width;
    // text-align: justify;
    header{
      h1{
        margin: 0px 0px 40px 0px;
        color:gray;
        font-size: 23px;
      }
    }
  }
  /* MOBILE - TABLET - LAPTOP */
  article.mobile, article.tablet, article.laptop{
    .text-content{
      .btn{
        margin-top: 20px;
      }
    }
  }
</style>
