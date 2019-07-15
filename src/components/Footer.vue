<template>
  <footer class='footer'>
    <div class="center debug" style="color:orange;">Current device: {{$mq}}</div>
    <div class="center">
      <img class="responsive-img" :alt="Title" src="@/assets/jpg/bandeau.jpg" v-if='DisplayLogo'>
    </div>
    <div class="editor">{{copyright}} <a :href='editor.link' target="_blanck" rel="noopener">{{ editor.name }}</a></div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    Title: String,
    DisplayLogo: Boolean
  },
  data () {
    return {
      editor: {
        link: 'http://www.editions-rjtp.com/',
        name: `- Les Editions - Réflechir n'a Jamais Tué Personne - R.J.T.P. -`
      },
      copyright: `Copyright ${new Date().getFullYear()}`
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/scss/_variables.scss";
.editor{
  text-align: center;
}
a{
  text-decoration: underline;
  color: inherit;
  padding: 5px;
  &:hover{
    background-color: #333;
    /* Best accessibility contrast */
    /* background-color:#010300; */
    color: $primary;
  }
}
</style>
