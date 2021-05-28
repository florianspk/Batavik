<template>
  <div id="navbar">

    <div id="info">
        <input type="text" name="search" id="search" placeholder="Rechercher un produit" />
        <label for="search"></label>
        <p class="click" v-for="(item, i) in info" :key="i">{{ item }}</p>
    </div>

    <div id="nav">
        <img :src="getLogo()" id="logo" alt="logo">
        <p class="page" v-for="(item, i) in page" :key="i"> {{ item }} <span class="bar"></span> </p>
    </div>

  </div>
</template>

<script>
export default {
  name: "navbar",
  data() {
    return {
      info: [ "Retrait des produits sous 2H", "Trouver un point de retrait", "Suivis de commandes", "Panier", "S'identifier" ],
      page: [ "Espace Pare-douche","Espace Cloison et parois","Espace cheminée" ],
    }
  },
  methods: {
    getLogo:  function(){
      return require(`../../assets/logo.png`);
    }, 
  },
};
</script>

<style scoped lang="scss">
#navbar {
  width: 100vw;
  height: 10vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: #eee;
  #bg {
    position: absolute;
    height: 100vh;
    width: 100vw;
    left: 0;
    background: rgba(0, 0, 0, 0.198);
    z-index: 10;
  }
  #info {
    height: 2vh;
    padding: 10px 0px;
    margin-right: 50px;
    width: 98.5%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    #search {
      position: absolute;
      left: 9.5%;
      border-radius: 2% 2% 2% 2% / 50% 50% 50% 50%;
      border: none;
      width: 25vw;
      height: 20%;
      padding-left: 1%;
      &:focus {
        outline: none;
      }
    }
    .click {
      display: flex;
      align-items: center;
      margin: 0;
      padding-right: 0.5%;
      padding-left: 0.5%;
      border-left: 1px solid black;
      font-size: 90%;
      cursor: pointer;
      &:first-of-type {
        border: none;
      }
      &:hover {
        color: #6b6b6b;
      }
    }
  }
  #nav {
    width: 100%;
    height: 7vh;
    background: white;
    display: flex;
    flex-direction: row;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.15);
    #logo{
        position: relative;
        height: 50%;
        top: 50%;
        margin-left: 1%;
        transform: translateY(-50%);
        cursor: pointer;
    }
    .page {
      justify-content: center;
      position: relative;
      display: flex;
      align-items: center;
      margin: 0;
      padding: 0 1%;
      margin: 0 0.5%;
      font-size: 2.5vh;
      text-transform: uppercase;
      font-weight: bold;
      cursor: pointer;
      &:hover > .bar {
        transition-duration: 0.2s;
        width: 100%;
        opacity: 1;
      }
      &:first-of-type {
        margin-left: 1%;
      }
      .bar {
        transition-duration: 0.2s;
        background: black;
        position: absolute;
        width: 0%;
        opacity: 0;
        height: 4%;
        bottom: 20%;
      }
    }
  }
}
@media screen and (orientation: portrait) {
  #info {
    font-size: 0.65em;
  }
  #search {
    display: none;
  }
  #nav {
    justify-content: space-evenly;
    .page {
      text-align: center;
      margin: 0 !important;
      font-size: 0.8em !important;
    }
  }
}
.fade-delay-enter-active {
  transition: opacity 0.5s;
  transition-delay: 0.3s;
}
.fade-delay-leave-active {
  transition: opacity 0.5s;
  transition-delay: 0;
}
.fade-delay-enter, .fade-delay-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>