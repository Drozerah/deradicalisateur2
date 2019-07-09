<template>
<div class="carousel-wrapper">
  <!-- btn left -->
  <div class="nav-btn" @click="prevItem">
      <i class="material-icons md-45">keyboard_arrow_left</i>
  </div>
  <!-- carousel slider -->
  <div class="carousel carousel-slider z-depth-2" ref="carousel">
    <div v-for="item in items" :key="item.id">
      <div class="carousel-item">
        <img :src="item.src" :alt="imgAlt" class="responsive-img">
        <p>- {{ item.title }} -</p>
      </div>
    </div>
  </div>
  <!-- btn right -->
  <div class="nav-btn" @click="nextItem">
      <i class="material-icons md-45">keyboard_arrow_right</i>
  </div>
</div>
</template>

<script>
import M from 'materialize-css'
export default {
  data () {
    return {
      config: { // Carousel configuration
        isAutoCycle: true, // auto cycle
        iskeydownNav: true, // allow navigation between items with keyboards left & right arrows keys
        options: {
          duration: 150, // transition duration in milliseconds
          indicators: true, // show indicators
          fullWidth: true, // make the carousel a full width slider
          noWrap: false // infinite cycle through items
        }
      },
      imgAlt: 'Le déradicaliseur image BD',
      items: [ // Carousel slider items
        {
          title: 'couverture',
          src: require('@/components/carousel/img/couverture.jpg')
        },
        {
          title: 'planche 45',
          src: require('@/components/carousel/img/planche_45_ST.jpg')
        },
        {
          title: 'planche 24',
          src: require('@/components/carousel/img/planche_24_ST.jpg')
        },
        {
          title: 'planche 71',
          src: require('@/components/carousel/img/planche_71_ST.jpg')
        },
        {
          title: 'planche 40',
          src: require('@/components/carousel/img/planche_40_ST.jpg')
        },
        {
          title: 'verso',
          src: require('@/components/carousel/img/verso.jpg')
        }
      ]
    }
  },
  mounted () {
    // listen keydown event
    document.addEventListener('keydown', this.getKeyCode)
    // Instanciate Carousel
    const Carousel = new M.Carousel(this.$refs.carousel, this.config.options)
    // Start auto cycle (config)
    if (this.config.isAutoCycle === true) {
      // move carousel to second slide
      Carousel.set(1)
      // move carousel to first slide after time out
      setTimeout(() => {
        Carousel.set(0)
      }, 1500)
    }
  },
  computed: {

    CarouselInstance () { // Get Carousel Instance
      return M.Carousel.getInstance(this.$refs.carousel)
    }
  },
  methods: {
    prevItem () { // move to previous item
      this.CarouselInstance.prev()
    },
    nextItem () { // move to next item
      this.CarouselInstance.next()
    },
    getKeyCode (e) { // get event key code
      if (this.config.iskeydownNav) {
        // if event key code === 39 (arrow left)
        if (e.which === 37) {
          this.prevItem()
        }
        // if event key code === 39 (arrow right)
        if (e.which === 39) {
          this.nextItem()
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.carousel-wrapper{
  display: flex;
  flex-direction: row;
  justify-content: center; /* DEV Carousel Centering */
  .nav-btn{
    align-self: center;
    cursor: pointer;
    i{
      opacity :0.5;
      transition: opacity .6s;
      &:hover{
        opacity: 1;
        transition: opacity .4s;
      }
      &::selection{
        background: transparent;
      }
    }
    i.material-icons.md-45 {
      font-size: 45px;
      line-height: 45px;
    }
  }
}
.carousel{
  cursor: pointer;
  /* DEV Carousel size */
  height: 850px !important;
  width: 567px !important;
}
/* Carousel item */
.carousel-item{
  p {
      color:#333;
      text-align: center;
      margin: 0px;
  }
}
</style>

<style lang="scss">
@import "@/styles/_variables.scss";
/* Carousel navigation */
.carousel{
  ul{
    li.indicator-item{
      background-color: grey !important;
    }
    li.active{
      background-color: $primary !important;
    }
  }
}
</style>
