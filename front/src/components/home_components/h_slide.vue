<template>
  <div class="slide">
    <div class="background"></div>
    <div class="banner"> {{content}} </div> 

    <f-icon :icon="'chevron-left'" class="btn btn-prev" @click="$emit('back')"></f-icon>
    <f-icon :icon="'chevron-right'" class="btn btn-next" @click="$emit('next')"></f-icon>
  </div>
</template>

<script>
export default {
  name: 'slide',
  props: ['content']
}
</script>

<style scoped lang="scss">
.slide{
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: green;
  &:hover .banner {
    bottom: 0;
  }
  &:hover .btn { opacity: 1; cursor: pointer; }
  .banner{
    position: absolute;
    display: flex;
    bottom: -33%;
    left: 0;
    height: 33%;
    width: 100%;
    background: rgba(255, 255, 255, 0.95);
    transition: 0.5s;
    text-align: center;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    user-select: none;
  }
}
.btn {
  position: absolute;
  top: 0;
  height: 100%;
  width: 2%;
  padding: 0 2%;
  opacity: 0;
  transition: 0.5s;
}
.btn-next{ right: 0;}
</style>