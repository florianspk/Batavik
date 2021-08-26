<template>
  <div class="footer">
    <div class="infos">
      <div class="info">CGU</div>
      <div class="info">CGV</div>
      <div class="info">Le groupe VERRE-TECH</div>
      <div class="info">Assistance</div>
    </div>

    <div class="logos">
      <f-icon :icon="['fab', 'facebook-square']" class="logo" />
      <f-icon :icon="['fab', 'twitter-square']" class="logo" />
      <f-icon :icon="['fab', 'linkedin']" class="logo" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'v-footer',
};
</script>

<style scoped lang="scss">
.footer {
  position: relative;
  width: 100vw;
  height: 8vh;
  margin-top: 5%;
  padding: 1% 2%;
  display: flex;
  align-items: center;
  background: white;
  box-shadow: -5px -5px 10px rgba(0, 0, 0, 0.15);
  .infos{
    display: flex;
    flex-direction: row;
    position: relative;
    justify-content: space-evenly;
    width: 35%;
    .info{
      font-size: 1.5rem;
      cursor: pointer;
    }
  }
  .logos{
    display: flex;
    position: absolute;
    right: 7%;
    flex-direction: row;
    justify-content: space-evenly;
    width: 10%;
    .logo{
      font-size: 2.5rem;
      cursor: pointer;
    }
  }
}

@media screen and (orientation: portrait) {
  .footer{
    flex-wrap: wrap;
    justify-content: center;
    .infos{
      width: 100%;
      .info{
        font-size: 1rem;
      }
    }
    .logos{
      position: relative;
      width: 55%;
    }
  }
}
</style>
