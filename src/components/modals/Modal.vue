<template>
  <div>
    <!-- Modal Trigger -->
    <div data-target="modal" class="fixed-action-btn modal-trigger">
      <a class="btn-floating btn-large waves-effect waves-light yellow">
        <i class="material-icons black-text">compare_arrows</i>
      </a>
    </div>
    <!-- Modal Structure -->
    <div id="modal" class="modal bottom-sheet black center" ref="modal">
      <i class="material-icons modal-close white-text">close</i>
      <div class="modal-content white-text">Utilisez les flèches latérales de votre clavier <b class="material-icons white-text">arrow_left</b><b class="material-icons white-text">arrow_right</b> pour visionner les images en extraits</div>
    </div>
  </div>
</template>

<script>
import M from 'materialize-css'
export default {
  data () {
    return {
      options: { // Modal options
        opacity: 0.2,
        outDuration: 250,
        preventScrolling: false
      }
    }
  },
  mounted () {
    // init modal
    return new M.Modal(this.$refs.modal, this.options)
  }
}
</script>

<style lang="scss" scoped>
@import "@/scss/_variables.scss";
.yellow{
  background-color: $primary !important;
}
/* MODAL */
#modal {
  i {
    float: right;
    position: relative;
    top:10px;
    right: 10px;
  }
  i::selection, .modal-content::selection {
   background: transparent;
  }
  .modal-content {
    font-size: 20px;
    b {
    vertical-align: -6px;
    }
  }
}
</style>
