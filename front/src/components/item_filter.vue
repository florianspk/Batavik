<template>
  <div id="filter">

    <div class="title">Recherche avancé:</div>
  
  <div id="filter-group" v-if="localFilter.hasOwnProperty('q')">
    <div class="block">
      <label for="search">Rechercher dans cette catégorie</label>
      <input type="text" name="search" placeholder="Ex: douche" v-model="localFilter.q">
    </div>  

    <div class="block bg-red" v-if="localFilter.hasOwnProperty('minPrice') ||localFilter.hasOwnProperty('maxPrice')">
      <label for="price">Prix</label>
      <div class="price-input-container">
        <input class="input-number" type="number" name="price" placeholder="0" v-model="localFilter.minPrice">€
        <div class="separator">-</div>
        <input class="input-number" type="number" name="price" placeholder="2000" v-model="localFilter.maxPrice">€
      </div>
    </div>

    <div class="block validate" v-if="localFilter.hasOwnProperty('availableOnlyInput')">
      <div class="center">
        <label for="avaible">Produits disponibles uniquement</label>
        <input type="checkbox" name="avaible">
      </div>
    </div>
  </div>
  
  </div>
</template>

<script>
import { ref, watch } from 'vue'

export default {
  props: {
    filter: { required: true },
  },
  setup(props, { emit }) {
    const localFilter = ref(props.filter)
    watch(() => props.filter, () => { localFilter.value = props.filter })
    watch(() => localFilter.value, () => { emit('update:filter', localFilter.value) })
    return {
      localFilter,
    }
  },
}
</script>

<style scoped lang="scss">
#filter{
  margin: 2% auto;
  margin-top: 0%;
  padding: 1% 0;
  width: 85vw;
  background: #ffffff;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.15);
  border-radius: 1rem;
  .title{
    width: 96%;
    padding-bottom: 0.5%;
    margin-left: 2%;
    font-size: 1.5em;
    margin-bottom: 2%;
    border-bottom:#a1a1a1 1px solid;
  }
  #filter-group{
    display: flex;
    justify-content: flex-start;
    .block{
      padding: 0 2%;
      width: 33%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      border-right: 1px #a1a1a1 solid;
      label{
        margin-bottom: 1%;
        margin-right: 2%;
        font-weight: bold;
        color: #777;
      }
      input{
        border-radius: 1rem;
        border: #a1a1a1 1px solid;
        padding: 0 3%;
      }
      .price-input-container {
        display: flex;
        .separator {
          margin: 0 10px;
        }
        input {
          max-width: 100px;
        }
      }
      &:last-of-type{
        border: none;
      }
    }
    .validate{
      width: 20%;
    }
  }
}

@media screen and (orientation: portrait) {
  #filter{
    width: 90vw;
    height: 23vh;
  }  
  #filter-group{
    flex-wrap: wrap !important;

  }
  .block{
    width: 45% !important;
    font-size: 0.8em;
    &:nth-child(2){
      border: none !important;
    }
  }
  .input-number{
    width: 90%;
    margin-bottom: 5%;
  }
}
</style>
