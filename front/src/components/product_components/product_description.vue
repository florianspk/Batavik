<template>
  <div id="product-description">
    <div id="img-container">
      <img :src="data.image" alt="" />
    </div>

    <div id="info-container">
      <h1>{{data.name}}</h1>
      <p id="descr"> {{data.description}} </p>

      <div id="styles" v-if="infos.length >= 1">
        <h2>Style du produit disponible</h2>
        <div id="style">
          <button v-for="(style, i) in infos" :key="i" :class="active === i ? 'active' : ''" @click="active = i">{{style.height}}cm X {{style.width}}cm X {{style.depth}}cm - Style {{style.color}}</button>
        </div>
      </div>

      <div id="qte-zone">
        <h2>Quantitée</h2>
        <select name="qte" id="qte">
          <option v-for="i in maxqte" :key="i" :value="i">{{i}}</option>
        </select>
      </div>

      <h2 id="price">Prix : {{data.price}}€</h2>

      <div class="add">
        <button>
          Ajouter le produit au panier 
          <svg height="512pt" viewBox="0 -31 512.00026 512" width="512pt" xmlns="http://www.w3.org/2000/svg"><path d="m164.960938 300.003906h.023437c.019531 0 .039063-.003906.058594-.003906h271.957031c6.695312 0 12.582031-4.441406 14.421875-10.878906l60-210c1.292969-4.527344.386719-9.394532-2.445313-13.152344-2.835937-3.757812-7.269531-5.96875-11.976562-5.96875h-366.632812l-10.722657-48.253906c-1.527343-6.863282-7.613281-11.746094-14.644531-11.746094h-90c-8.285156 0-15 6.714844-15 15s6.714844 15 15 15h77.96875c1.898438 8.550781 51.3125 230.917969 54.15625 243.710938-15.941406 6.929687-27.125 22.824218-27.125 41.289062 0 24.8125 20.1875 45 45 45h272c8.285156 0 15-6.714844 15-15s-6.714844-15-15-15h-272c-8.269531 0-15-6.730469-15-15 0-8.257812 6.707031-14.976562 14.960938-14.996094zm312.152343-210.003906-51.429687 180h-248.652344l-40-180zm0 0"/><path d="m150 405c0 24.8125 20.1875 45 45 45s45-20.1875 45-45-20.1875-45-45-45-45 20.1875-45 45zm45-15c8.269531 0 15 6.730469 15 15s-6.730469 15-15 15-15-6.730469-15-15 6.730469-15 15-15zm0 0"/><path d="m362 405c0 24.8125 20.1875 45 45 45s45-20.1875 45-45-20.1875-45-45-45-45 20.1875-45 45zm45-15c8.269531 0 15 6.730469 15 15s-6.730469 15-15 15-15-6.730469-15-15 6.730469-15 15-15zm0 0"/></svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'description-product',
  props: ['data'],
  data() {
    return {
      active: 0,
      maxqte: 10,
      infos: [],
    };
  },
  mounted() {
    this.infos = this.data.info;
  },
};
</script>

<style scoped lang="scss">
@media screen and (orientation: landscape) {
  #product-description {
    margin-top: 5vh;
    height: min-content;
    background: #fff;
    padding: 2rem;
    border-radius: 2rem;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.15);
    #img-container {
      width: 45%;
      img {
        width: 100%;
        border-radius: 2rem;
      }
    }
    #info-container {
      display: inline-block;
      position: absolute;
      top: 1%;
      right: 2%;
      width: 50%;
      #qte-zone{
        margin-top: 5vh;
        margin-bottom: 5vh;
        display: flex;
        #qte {
          width: 10%;
          margin-left: 2vh;
          border-radius: 2rem;
          border:#a1a1a1 1px solid;
          padding: 0.5% 2%;
          option {
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            z-index: 99;
            border:#a1a1a1 1px solid;
            border-radius: 2rem;
            box-sizing: border-box;
          }
        }
      }
      #style {
        display: flex;
        gap: 2%;
        button {
          display: inline-block;
          border: dotted black 2px;
          height: 7vh;
          border-radius: 2rem;
          padding: 2%;
          cursor: pointer;
          transition-duration: 0.2s;
          &:focus{
            outline: none;
          }
        } 
        button.active {
          border: black 2px solid;
          background: #d4e157;
        }
      }
      #price {
        margin-top: 2vh;
      }
      .add{
        button{
          margin-top: 8%;
          position: relative;
          display: flex;
          align-items: center;
          width: 20vw;
          height: 10vh;
          border-radius: 15% / 50%;
          border: black solid 2px;
          transition-duration: 0.25s;
          padding-left: 5%;
          font-size: 1.1rem;
          &:focus{
            outline: none;
          }
          &:hover{
            background: #d4e157;
          }
          svg{
            position: absolute;
            right: 5%;
            height: 50%;
            width: 20%;
          }
        }
      }
    }
  }
}

@media screen and (orientation: portrait) {
  #product-description {
    margin-top: 10vh;
    background: #fff;
    padding: 1rem;
    border-radius: 2rem;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.15);
    #img-container {
      width: 100%;
      height: 45%;
      img {
        height: 100%;
        width: 100%;
        border-radius: 2rem;
        object-fit: cover;
      }
    }
    #info-container {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      p { text-align: center; }
      #qte-zone { display: flex; flex-direction: column; justify-content: center; align-items: center;}
      #style {
        display: flex;
        gap: 2%;
        button {
          display: inline-block;
          border: dotted black 2px;
          height: 7vh;
          border-radius: 20% / 50%;
          padding: 2%;
          cursor: pointer;
          transition-duration: 0.2s;
          &:focus{
            outline: none;
          }
        } 
        button.active {
          border: black 2px solid;
          background: #d4e157;
        }
      }
      #price {
        margin-top: 2vh;
      }
      .add{
        button{
          margin-top: 13%;
          position: relative;
          display: flex;
          align-items: center;
          width: 80vw;
          height: 10vh;
          border-radius: 2rem;
          border: black solid 2px;
          transition-duration: 0.25s;
          padding-left: 5%;
          font-size: 1.1rem;
          &:focus{
            outline: none;
          }
          &:hover{
            background: #d4e157;
          }
          svg{
            position: absolute;
            right: 5%;
            height: 50%;
            width: 20%;
          }
        }
      }
    }
  }
}

</style>
