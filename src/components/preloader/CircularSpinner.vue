<template>
  <div class="circular-spinner">
    <div class="preloader-wrapper big active">
      <div class="spinner-layer spinner-yellow-only">
        <div class="circle-clipper left">
          <div class="circle"></div>
        </div><div class="gap-patch">
          <div class="circle"></div>
        </div><div class="circle-clipper right">
          <div class="circle"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.circular-spinner{
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  padding: 10%;
}
</style>
