<template>
  <div class="side">

    <div id="user-infos">
      <img src="@/assets/icons/person-circle-outline.svg" id="profile">
      <span class="username"> {{user.firstname}} {{user.lastname}} </span>
      <span class="prefered-city"> 
        <img src="@/assets/icons/location-outline.svg" id="pin"> 
        {{preferedCity}} 
      </span>

      <div class="bar" style="background: #333; height: 2px; margin-left: 2vw"></div>
    </div>

    <div id="parameters">
      <button class="btn-parameter">Voir mes informations personnelles</button>
      <button class="btn-parameter">Changer mon magasin par défaut</button>
    </div>

  </div>
</template>

<script>
export default {
  name: 'side',
  props: ['user'],
  data() {
    return {
      username: 'John Doe',
      preferedCity: 'Lille',
    };
  },
  mounted() {
    // TODO Make the right API call to get user preferences
  },
};
</script>

<style scoped lang="scss">
.side{
  width: 33%;
  display: flex;
  flex-direction: column;
  align-content: center;
  #user-infos { 
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    #profile { width: 60%; }
  }
  .username {
    display: inline-block;
    margin-top: 5%;
    width: 100%;
    text-align: center;
    font-size: 2em;
    font-weight: bold;
  }
  .prefered-city {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    text-align: center;
    font-size: 2em;
    #pin {
      width: 7%;
      margin-right: 2%;
      display: inline-block;
    }
  }

  #parameters {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5%;
    .btn-parameter {
      display: inline-block;
      background: #ddd;
      margin: 0 auto;
      margin-bottom: 4%;
      height: 5vh;
      width: 75%;
      top: 0;
      border-radius: 2rem;
      border: none;
      transition-duration: 0.2s;
      font-size: 1.2em;
      padding: 0.2% 0;
      cursor: pointer;
      &:active {
        background: #ccc;
      }
      &:focus{
        outline: none;
      }
    }
  }
}
</style>
