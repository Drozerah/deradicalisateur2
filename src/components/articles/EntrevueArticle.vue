<template>
  <article :class="$mq">
    <header>
      <h1 class="center">{{title}}</h1>
    </header>
    <div class="content">
      <div class="z-depth-1 img-card">
        <img :src="src1" :alt="imgAlt1" class="responsive-img">
        <div class="label center">- extrait planche 64 -</div>
      </div>
      <p class="question">Bonjour Mathieu Bertrand, <i>(le dessinateur)</i><br>de quoi parle votre BD "le déradicaliseur" ?</p>
      <p>Bonjour,<br>le titre parle de lui-même et le scénariste développera sûrement mieux que moi. Mais pour moi c'est un album qui change certains points de vue sur notre monde actuel. "Le déradicaliseur" ne tente pas de déradicaliser seulement un prisonnier mais aussi notre esprit, celui du lecteur si celui-ci reste un temps soit peu ouvert à une autre façon de voir les choses. Car comme nous suggère la maison d'édition : Réfléchir n'a Jamais Tué Personne et il est toujours bon d'ouvrir le débat.</p>
      <p class="question">Vous avez eu des appréhensions à traiter ce sujet en BD ?</p>
      <p>Bien-sûr... comment aborder un sujet pareil... qui est plus ou moins omniprésent dans les médias et notre esprit, notamment suite aux différents événements qui ont eu lieu en France et dans le monde ces dernières années. Mais l'objectif était de parler de la radicalisation au sens large, aussi bien politique, économique, que religieux, même si ce-dernier reste toujours dur à mettre à distance.</p>
      <p class="question">Comment avez-vous travaillé le dessin ?</p>
      <p>La méthode que j'ai décidé d'adopter et un mélange de fusain et d'encre en dessin direct, c'est à dire sans crayonné préalable. Le fusain apporte un coté spontané et vivant au dessin mais aussi ce côté brute et sombre. Alors que l'encre permet des passages plus graphiques qui amènent une mise à distance du propos pour le rendre plus "généraliste". Cela ne nous empêche pas de rester sans équivoque sur certains points...</p>
      <p class="question">Est-ce que c'est dur de ne pas faire de crayonné avant ?</p>
      <p>Cela demande un certain lâché prise, mais j'avais un scénariste bon modèle pour les pauses les plus délicates. (Rires du scénariste).</p>
      <p class="question">Vous avez quand même retravaillé après le premier jet ?</p>
      <p>Il a bien fallu retravailler quelques cases vraiment loupées sur les débuts de l'album, mais globalement il y a eu très peu de retouches.</p>
      <p class="question">Est-ce que c'est une expérience à renouveler, préférez-vous la technique classique de crayonnage préliminaire, et êtes-vous prêt à expérimenter d'autres méthodes de travail à l'avenir ?</p>
      <p>Pour le moment les techniques que j'ai utilisées sur mes 4 premiers albums sont toutes différentes, et j'expérimente encore de nouvelles façons de faire sur des projets plus courts. Même si faire les crayonnés au préalable permettent sans doute plus de confort dans la réalisation, je suis bien-entendu toujours motivé pour tester de nouvelles choses et ainsi éviter de tombé dans le conformisme et les systématismes. Ce qui est sûr c'est que cet album m'a permis d'ouvrir de nouveaux horizons graphiques, pour preuve, je teste actuellement (pour un potentiel futur projet) le stylo à bille !</p>
      <div class="z-depth-1 img-card">
        <img :src="src2" :alt="imgAlt2" class="responsive-img">
      </div>
      <p class="question">Bonjour, Marc Chinal, <i>(le scénariste)</i><br>pourquoi avoir choisi un titre si difficile à lire ou à prononcer ?</p>
      <p>Bonjour,<br>ah, ça commence bien les questions... Déradicaliseur, déradicalisateur... déjà il y avait un doute sur le nom à donner à cette fonction. Alors j'ai choisi le mot le plus court.</p>
      <p class="question">Mais c'est quoi cette « fonction » ?</p>
      <p>C'est un job qui existe aux états-unis (avec un autre nom) et qui est apparu lorsque des familles inquiètes ont voulu « extraire » un membre de leur famille vivant dans une secte. La personne ne voulant pas forcément quitter la secte en question, il fallait une sorte de caisson de décompression histoire de remettre les compteurs à zéro, sorte de sevrage, repartir sur des bases plus... enfin... différentes. Et le déradicaliseur est une personne chargée de faire ce job à la limite de la légalité et de l'éthique. Il existe aussi apparemment cette fonction dans certaines prisons du nord de l'Europe.</p>
      <p class="question">Quelles doivent être les qualités de ces « déradicaliseurs » ?</p>
      <p>Comprendre un minimum la psychologie, les peurs et les techniques de manipulation.</p>
      <p class="question">Pour manipuler la victime de secte ?</p>
      <p>Normalement non. Si vous manipulez une personne victime de secte, vous ne faites que du travail à court terme. Un jour ou l'autre, ce qui vous aurez construit pour la changer de « logiciel » s'écroulera. C'est nul. Le but est au contraire de lui donner des bases stables. L'intérêt de comprendre les techniques de manipulation est de pouvoir prendre du recul et éviter de tomber dans les pièges. Expliquer les mécaniques, en prendre conscience.
      </p>
      <p class="question">Quand on parle de radicalisation, tout de suite, on pense à une religion plutôt qu'une autre. C'est ce qui vous a motivé à aborder un tel thème ?
      </p>
      <p>Ce qui m'a motivé à aborder ce thème dans une BD, c'est de voir l'impuissance de notre société à savoir gérer le problème de la radicalisation. Pour moi, il y a trop de foutage de gueule, de spectacle, d'hypocrisie, de manipulations. Il faut donc crever l'abcès et oser aller au bout des raisonnements, de toutes les parties en présence. On ne pourra pas mettre ce problème de violence sous le tapis. L'humanité est arrivée à un stade ou son pouvoir d'extermination est gigantesque avec des armes de plus en plus destructrices. Et ce n'est pas fini avec les drones et les robots. La solution pour éviter ce chaos, est la conscience la plus large possible.
      </p>
      <p class="question">Mais quand même, la "radicalisation" est orientée vers une seule religion en ce moment.</p>
      <p>Peut-être médiatiquement, mais notre BD ne parle pas du tout d'une religion en particulier. Elle ne parle d'ailleurs pas uniquement de religion même si la notion divine est bien présente. Il ne faut pas oublier que la radicalisation ne se limite pas aux religieux : le nationalisme, des révolutionnaires, la dévotion pour des êtres charismatiques, sont des formes de radicalisation qui peuvent mener aussi très loin dans la violence. Et c'est ça dont parle la BD « le déradicaliseur ». C'est une plongée au cœur de la psychologie, de la philosophie, de notre société actuelle.
      </p>
      <p class="question">Vous pensez avoir parlé dans votre BD de tout ce qui concerne un tel sujet ?</p>
      <p>Non bien sûr ! D'une part ce n'est qu'une BD, un format qui se veut accessible au plus grand nombre, et ce format ne permet pas de se répandre en explications incluant toutes les possibilités. Et d'autre part, cette BD est là aussi pour servir le débat, permettre d'avoir des angles de réflexion différents. Pour moi, le débat est plus important que d'asséner des pseudo-vérités.</p>
  </div>
  </article>
</template>

<script>
export default {
  data () {
    return {
      title: 'Entrevue',
      imgAlt1: 'Le déradicaliseur image BD',
      src1: require('@/assets/jpg/planche_64_ST.jpg'),
      imgAlt2: 'Le déradicaliseur les auteurs',
      src2: require('@/assets/jpg/trois_bras_croises.jpg')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/scss/_variables.scss";
@import "@/scss/_mixins.scss";
/* MOBILE */
article.mobile{
  .content{
    @include article-mobile-width; // mixin
    .img-card:nth-child(1){
      width: 350px;
    }
    .img-card:nth-child(14){
      width: 350px;
      margin: 25px 0px 25px 0px;
    }
  }
}
/* TABLET - LAPTOP - DESKTOP */
article.tablet, article.laptop, article.desktop{
  @include article-tablet-and-up-width; // mixin
  .content{
    .img-card:nth-child(1){
      width: 380px;
    }
    .img-card:nth-child(14) { // authors img
      width: 500px;
      margin: 0px 0px 25px 0px;
    }
  }
}
/* MOBILE - TABLET - LAPTOP - DESKTOP */
article{
  .content{
    display: flex;
    flex-direction: column;
    font-size: 20px;
    margin-top: 60px;
    .img-card:nth-child(1){
      align-self: center;
      min-height: 340px;
      padding: 15px 10px 10px 10px;
      margin-bottom: 30px;
      .label{
        font-size: 15px;
        margin-bottom: 10px;
      }
    }
    .img-card:nth-child(14) { // authors img
      align-self: center;
      display:inherit;
      padding: 10px;
      img{
        filter: grayscale(50%);
        &:hover{
          filter: grayscale(0%);
        }
      }
    }
    p.question{
      font-weight: 700;
      i{
        font-weight: normal;
      }
    }
  }
}
</style>
