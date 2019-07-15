<template>
  <article :class="$mq">
    <header>
      <h1>Hello from EntrevueArticle.vue</h1>
    </header>
    <div class="content">
     <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt exercitationem cum incidunt, laudantium tenetur dolore soluta impedit ex? Ab fugit minima est officia aliquam beatae fugiat sit eius consectetur id! Impedit, voluptatum nihil corporis illo possimus, similique accusantium praesentium eum assumenda exercitationem aliquam harum, beatae a dolorum ratione veniam molestias! Dolore incidunt laborum, fuga amet sit debitis veniam quod ducimus quae minus perspiciatis ab saepe voluptas odio accusantium nam? Veritatis dicta deleniti eum tempora est accusamus vel officiis possimus. Sequi corrupti quod velit repellendus corporis ipsam voluptas architecto possimus facere ad. Impedit sequi facere labore sapiente, fuga obcaecati maiores explicabo.</p>
     <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt exercitationem cum incidunt, laudantium tenetur dolore soluta impedit ex? Ab fugit minima est officia aliquam beatae fugiat sit eius consectetur id! Impedit, voluptatum nihil corporis illo possimus, similique accusantium praesentium eum assumenda exercitationem aliquam harum, beatae a dolorum ratione veniam molestias! Dolore incidunt laborum, fuga amet sit debitis veniam quod ducimus quae minus perspiciatis ab saepe voluptas odio accusantium nam? Veritatis dicta deleniti eum tempora est accusamus vel officiis possimus. Sequi corrupti quod velit repellendus corporis ipsam voluptas architecto possimus facere ad. Impedit sequi facere labore sapiente, fuga obcaecati maiores explicabo.</p>
     <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt exercitationem cum incidunt, laudantium tenetur dolore soluta impedit ex? Ab fugit minima est officia aliquam beatae fugiat sit eius consectetur id! Impedit, voluptatum nihil corporis illo possimus, similique accusantium praesentium eum assumenda exercitationem aliquam harum, beatae a dolorum ratione veniam molestias! Dolore incidunt laborum, fuga amet sit debitis veniam quod ducimus quae minus perspiciatis ab saepe voluptas odio accusantium nam? Veritatis dicta deleniti eum tempora est accusamus vel officiis possimus. Sequi corrupti quod velit repellendus corporis ipsam voluptas architecto possimus facere ad. Impedit sequi facere labore sapiente, fuga obcaecati maiores explicabo.</p>
    </div>
  </article>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";
@import "@/styles/_mixins.scss";
/* MOBILE */
article.mobile{
  .content{
    @include article-mobile-width; // mixin
  }
}
/* TABLET - LAPTOP - DESKTOP */
article.tablet, article.laptop, article.desktop{
  @include article-tablet-and-up-width; // mixin
  // text-align: justify;
}
/* MOBILE - TABLET - LAPTOP - DESKTOP */
article{
// article.mobile, article.tablet, article.laptop, article.desktop{
  .content{
    font-size: 20px;
    margin-top:40px;
  }
}

</style>
