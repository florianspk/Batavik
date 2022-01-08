<template>
  <div class="right">
      <div class="section" v-if="history[0]">
        <div class="title">Votre dernière commandes</div>
        <div class="sub-title">{{createDate(history[0]?.createdAt)}}  <button class="btn">Voir la facture</button></div>
        
        <div class="last-checkout"> 
          <card class="card" v-for="(item, i) in history[0]?.productCarts" :key="i" :data="item" fontSize="1.5" :background="true" :margin='0' />
        </div>

        <div class="total-cost">Total de la commande: <b>{{history[0]?.orderPrice}}€</b></div>

      </div>

    <div id="section-container" v-if="history.length > 1">
      <div class="section">
        <div class="title">Vos anciennes commandes</div>
        <div class="content" v-for="(item, i) in history" :key="i">
          <div class="sub-title" v-if="i != 0">{{createDate(history[i]?.createdAt)}} <button class="btn">Voir la facture</button></div>
          
          <div class="last-checkout" v-if="i != 0"> 
            <card class="card" v-for="(item, i) in history[i]?.productCarts" :key="i" :data="item" fontSize="150%" :background="true" :margin='0' />
          </div>
          
          <div class="total-cost" v-if="i != 0">Total de la commande: <b>{{history[i]?.orderPrice}}€</b></div>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
import Card from '../global/cart_item.vue';

export default {
  name: 'history',
  components: { Card },
  props: ['history'],
  methods: {
    createDate(isoDate) {
      const date = this.$date.fromISO(isoDate, { locale: 'fr-FR' });
      return date.setZone('Europe/Paris').toFormat('dd MMMM yyyy à HH:mm');
    },
  },
};
</script>

<style scoped lang="scss">
.right{
    margin-left: 2%;
    width: 73%;
    .title{
      position: relative;
      font-size: 2em;
    }
    .sub-title{
      margin-top: 2%;
      font-size: 1.5em;
      position: relative;
    }
  }
  .section{
    position: relative;
    margin-top: 5%;
    margin-bottom: 7%;
    &:first-of-type{
      margin-top: 1%;
    }
    .total-cost {
      margin-top: 2%;
      font-size: 1.5em;
      position: absolute;
      right: 0;
    }
  }
  .bar{
    display: inline-block;
    position: relative;
    width: 80%; 
    background: #000;
    height: 10%;
  }
  .btn{
    position: absolute;
    display: inline-block;
    background: #ddd;
    height: 100%;
    width: 15%;
    right: 2%;
    top: 0;
    border-radius: 2rem;
    border: none;
    transition-duration: 0.2s;
    font-size: 0.6em;
    padding: 0.2% 0;
    cursor: pointer;
    &:active {
      background: #ccc;
    }
    &:focus{
      outline: none;
    }
  }
  #parameters{
    position: relative;
    height: 20vh;
    width: 80%;
    margin-left: 2vw;
    margin-top: 2%;
    display: flex;
    flex-direction: column;
    align-content: center;
    .btn-parameter{
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
</style>
