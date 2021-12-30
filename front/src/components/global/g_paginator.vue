<template>
  <div id="paginator">
    <div id="back-page" class="btn" @click="$emit('previous-page')"> 
      <img src="@/assets/icons/chevron-back.svg">
    </div>
    
    <div id="page-list">
      <div class="page" v-for="index in effectivePages" :key="index" :class="index == currentPage ? 'active' : ''">
        <span v-if="index == 24 && totalPage > 25" @click="showCutomPage">...</span>
        <span v-else-if="index == 25 && totalPage > 25" @click="$emit('change-page', totalPage)">{{totalPage}}</span>
        <span v-else @click="$emit('change-page', index)">{{index}}</span>
      </div>
    </div>

    <div id="next-page" class="btn" @click="$emit('next-page')"> 
      <img src="@/assets/icons/chevron-forward.svg">
    </div>
  </div>
</template>

<script>
export default {
  name: 'paginator',
  props: ['numberPage', 'currentPage', 'totalPage'],
  data() {
    return {
      effectivePages: 0,
      showCustomChooser: false,
    };
  },
  methods: {
    showCutomPage() {
      this.showCustomChooser = true;
    },
    setPageToDisplay() {
      this.effectivePages = this.totalPage < 25 ? this.totalPage : 25;
    },
  },
  watch: {
    currentPage() {
      this.setPageToDisplay();
    },
  },
  mounted() {
    this.setPageToDisplay();
  },
};
</script>

<style lang="scss" scoped>
#paginator {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: auto;
  margin-top: 2vh;
  width: 85%;
  height: 8vh;
  user-select: none;
  #page-list{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 70%;
    gap: 1%;
    .page {
      display: block;
      background: #fff;
      border-radius: 2rem;
      transition-duration: 0.2s;
      padding: 0.5%;
      &:hover {
        background: #ccc;
        cursor: pointer;
      }
    }
    .active {
      color: #fff;
      background-color: #bbb;
    }
  }
  .btn {
    position: relative;
    width: 2.5%;
    background: #fff;
    border-radius: 2rem;
    &:hover {
      background-color: #ccc;
      cursor: pointer;
    }
    img {
      height: 100%;
      width: 100%;
    }
  }
}
</style>
