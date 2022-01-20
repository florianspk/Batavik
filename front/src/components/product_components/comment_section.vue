<template>
  <div id="commentaire" v-if="commentList.length > 0">
    <h1>Commentaires produits</h1>
    <div id="container-comm" v-if="commentList.length >= 1">
      <comment v-for="(comment, i) in commentList" :key="i" :data="comment" />
    </div>
  </div> 
</template>

<script>
import comment from './comment.vue';

export default {
  name: 'commentaire',
  props: ['commentList'],
  components: { comment },
};
</script>

<style scoped lang="scss">
#commentaire{
  margin-top: 10vh;
  h1{
    font-size: 2em;
  }
  #container-comm {
    display: flex;
    flex-direction: column;
    gap: 1%;
    justify-content: space-between;
  }
}
</style>
