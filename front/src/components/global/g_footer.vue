<template>
  <div class="footer">
    <f-icon :icon="['fab', 'facebook']" class="logo"></f-icon>
  </div>
</template>

<script>
export default {
  name: 'v-footer'
}
</script>

<style scoped lang="scss">
.footer {
  position: relative;
  width: 100vw;
  height: 120px;
  margin-top: 5%;
  background: white;
  box-shadow: -5px -5px 10px rgb(0 0 0 / 15%);
  .logo{
    font-size: 2.5rem;
  }
}
</style>