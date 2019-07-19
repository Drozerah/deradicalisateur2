<template>
  <article :class="$mq">
    <header>
      <h1>{{title}}</h1>
      <div class="content">
        <Spinner v-if="spinner"/>
        <div v-else v-html="result">
      </div>
      </div>
    </header>
  </article>
</template>

<script>
// @ is an alias to /src
import Spinner from '@/components/preloader/CircularSpinner.vue'
export default {
  components: {
    Spinner
  },
  data () {
    return {
      title: 'Actualités',
      spinner: true,
      result: undefined
    }
  },
  mounted () {
    this.$nextTick(() => {
      fetch('/../actu/index.html', { cache: 'no-store' })
        .then(
          res => {
            return res.text()
          }
        )
        .then(
          data => {
            console.log(data)
            // setTimeout(() => {}, 3000)
            this.spinner = false
            this.result = data
          }
        )
        .catch(error => console.error(error))
    })
  }
}
</script>
<style lang="scss" scoped>
@import "@/scss/_variables.scss";
@import "@/scss/_mixins.scss";
/* MOBILE */
article.mobile{
  @include article-mobile-width; // mixin
}
/* TABLET - LAPTOP - DESKTOP */
article.tablet, article.laptop, article.desktop{
  @include article-tablet-and-up-width; // mixin
}
/* MOBILE - TABLET - LAPTOP - DESKTOP */
article{
  .content{
    font-size: 20px;
    margin-top: 60px;
  }
}
</style>

<style lang="scss">
.content{
  @import "@/scss/_variables.scss";
  ul{
    li{
      // margin-bottom: 20px;
      display: flex;
      flex-direction: column;
      .img-card{
        align-self: center;
        padding: 10px;
        margin: 30px 0px 0px 0px;
        display: inherit;
        width: 500px;
        a{
          display: inherit;
          padding: 0px;
        }
      }
      p{
        margin:0px;
        padding-left: 0px;
      }
    }
    li:before {
      position: relative;
      display: inherit;
      top:29px;
      left:-10px;
      content: "label_important"; /* GoogleFont Icon */
      font-family: 'Material Icons';
      display: inline-block;
      margin-left: -1.3em; /* same as padding-left set on li */
      width: 1.3em; /* same as padding-left set on li */
      color: $primary;
      // color:gray;
    }
  }
}
</style>
