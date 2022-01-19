<template>
  <div id="navbar">

    <!-- Landscape -->
    <div v-if="winSize.width > winSize.height">

      <div id="info">
        <input type="text" name="search" id="search" placeholder="Rechercher un produit" />
        <label for="search"></label>
        <p
          class="click"
          v-for="(info, i) in infos"
          :key="i"
          @click="clickOnItemNavbar(info)"
        >
        <span>{{ info.text }}</span>
        </p>
      </div>

      <div id="nav">
        <img src="../../assets/logo.png" id="logo" alt="logo"  @click="travel('/')">
        <p class="page" v-for="(page, i) in pages" :key="i" @click="travel(page.path)">
          {{ page.text }} <span class="bar"></span>
        </p>
      </div>

    <transition-group name="fade">
      <login-form v-if="loginForm" @hide="loginForm = !loginForm" />
      <div class="black" v-if="loginForm" @click="loginForm = !loginForm" ></div>
    </transition-group>

    <transition-group name="fade">
      <cart v-if="cart" @close="cart = !cart" />
      <div class="black" v-if="cart" @click="cart = !cart" ></div>
    </transition-group>

    </div>

    <!-- Mobile / portrait -->
    <div v-else style="height: 100%">

      <div id="header">
        <div @click="openNavMobile" id="icon">
          <img src="@/assets/icons/menu.svg" class="icon menu">
        </div>
        <img src="../../assets/logo.png" id="logo" alt="logo">
      </div>

      <div id="nav" :class="mobileVisible ? 'open' : 'closed'">
        <div id="links">
          <div class="link" @click="travel('/')">
            Accueil
          </div>
          <div class="link" v-for="(page, i) in pages" :key="i" @click="travel(page.path)">
            <span v-if="$isLogged">{{page.text}}</span>
          </div>
          <div class="link" v-for="(info, i) in infos" :key="i" @click="info.text == 'S\'identifier' ? travel('/login') : info.text == 'Panier' ? travel('/cart') : '' "> {{info.text}} </div>
        </div>
        <div id="black" :class="mobileVisible ? 'open' : 'closed'" @click="openNavMobile"></div>
      </div>
    </div>

  </div>
</template>

<script lang="js">
import { reactive, ref, computed } from 'vue';
import LoginForm from './g_login_form.vue';
import Cart from './cart.vue';
import Auth from '../../services/Auth';
import router from '../../router/index';

export default {
  name: 'navbar',
  components: { LoginForm, Cart },
  setup() {
    const winSize = reactive({ height: window.innerHeight, width: window.innerWidth });

    const setWindowSize = () => {
      winSize.height = window.innerHeight;
      winSize.width = window.innerWidth;
    };

    setWindowSize();

    window.addEventListener('resize', () => setWindowSize());

    const mobileVisible = ref(false);

    function openNavMobile() {
      mobileVisible.value = !mobileVisible.value;
    }
    const loginForm = ref(false);
    const cart = ref(false);
    const travel = (path) => router.push(path);
    return {
      loginForm,
      cart,
      mobileVisible,
      winSize,
      openNavMobile,
      travel,
      infos: computed(() => ([
        { text: 'Retrait des produits sous 2H', path: '/infos' },
        { text: 'Trouver un point de retrait', path: '/sites' },
        { text: 'Suivis de commandes', path: '/order' },
        { text: 'Panier', click: () => { cart.value = true; }, hidden: !Auth.isLogged.value },
        { text: 'S\'identifier', click: () => { loginForm.value = true; }, hidden: Auth.isLogged.value },
        { text: 'Mon compte', path: '/user', hidden: !Auth.isLogged.value },
        { text: 'Déconexion', click: () => { localStorage.removeItem('token'); Auth.getLoggined(); router.push('/'); }, hidden: !Auth.isLogged.value },
      ].filter((r) => !r.hidden))),
      pages: [
        { text: 'Pare-douche', path: '/pare-douche' },
        { text: 'Cloison et parois', path: '/cloison' },
        { text: 'Cheminée', path: '/cheminee' },
      ],
      clickOnItemNavbar(info) {
        if (info?.path) {
          travel(info.path);
        }
        if (info?.click) {
          info.click();
        }
      },
    };
  },
};
</script>

<style scoped lang="scss">
.black {
  position: absolute;
  top: 0;
  height: 100vh;
  width: 100vw;
  background: #000;
  z-index: 100;
  opacity: 0.5;
  transition-duration: 0.2s;
}

#navbar {
  width: 100vw;
  height: 10vh;
  position: relative;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: #eee;
  user-select: none;
  #bg {
    position: absolute;
    height: 100vh;
    width: 100vw;
    left: 0;
    background: rgba(0, 0, 0, 0.19);
    z-index: 10;
  }
  #info {
    height: 2vh;
    padding: 20px 0px;
    margin-right: 50px;
    width: 98.5%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    #search {
      position: absolute;
      left: 9.5%;
      top: 10px;
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
#navbar {
  height: 6vh;
  position: fixed;
  left: 0vw;
  background-color: white;
  #header {
    position: fixed;
    display: flex;
    align-items: center;
    top: 0;
    left: 0;
    height: 6vh;
    width: 100vw;
    #logo {
      cursor: pointer;
      width: 50%;
      margin: 0 5%;
      height: max-content;
      object-fit: contain;
    }
    #icon {
      width: 10vw;
      .menu.icon {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
  }
  #nav.open{
    position: relative;
    left: 0;
  }
  #nav{
    position: relative;
    top: 6vh;
    left: -70vw;
    width: 70vw;
    height: 94vh;
    flex-direction: column;
    transition-duration: 0.5s;
    #black.open {
      left: 0vw;
      transition-delay: 0.3s;
    }
    #black {
      position: absolute;
      left: -30vw;
      top: 0;
      height: 100vh;
      width: 100vw;
      opacity: 0.6;
      background-color: black;
      z-index: -1;
      transition-duration: 0.2s;
    }
    #links{
      position: relative;
      display: flex;
      flex-direction: column;
      .link{
        position: relative;
        display: flex;
        align-items: center;
        width: max-content;
        margin: 2% 0;
        padding: 0 3%;
        font-size: 1.2rem;
        cursor: pointer;
      }
    }
  }
}

  @media only screen and (hover: none) and (pointer: coarse){
    #links{
      -ms-overflow-style: none;  /* IE and Edge */
      scrollbar-width: none;  /* Firefox */
      &::-webkit-scrollbar { display: none; }
    }
  }

}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
