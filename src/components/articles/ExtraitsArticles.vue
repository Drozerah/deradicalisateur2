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
        <router-link to="entrevue" class="btn waves-effect waves-yellow grey lighten-1 black-text darken-text-2">Interview présentation de l'ouvrage</router-link>
      </div>
    </div>
  </article>
</template>
