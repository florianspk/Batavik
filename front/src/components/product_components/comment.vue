<template>
  <div class="comm" v-if="userLoaded">
    <div class="from">De {{ user.firstname }}</div> 
    <div class="message">
        {{data.text}}
    </div>
    <div class="infos">
      <div class="note">
        <svg class="star" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512.002 512.002" style="enable-background:new 0 0 512.002 512.002;" xml:space="preserve">
          <path :class="data.rate >= 1 ? 'yellow' : '' " d="M511.267,197.258c-1.764-5.431-6.457-9.389-12.107-10.209l-158.723-23.065L269.452,20.157
          c-2.526-5.12-7.741-8.361-13.45-8.361c-5.71,0-10.924,3.241-13.451,8.361l-70.988,143.827l-158.72,23.065
          c-5.649,0.82-10.344,4.778-12.108,10.208c-1.765,5.431-0.293,11.392,3.796,15.377l114.848,111.954L92.271,482.671
          c-0.966,5.628,1.348,11.314,5.967,14.671c2.613,1.898,5.708,2.864,8.818,2.864c2.388,0,4.784-0.569,6.978-1.723l141.967-74.638
          l141.961,74.637c5.055,2.657,11.178,2.215,15.797-1.141c4.619-3.356,6.934-9.044,5.969-14.672l-27.117-158.081l114.861-111.955
          C511.56,208.649,513.033,202.688,511.267,197.258z"/>
        </svg>

        <svg class="star" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512.002 512.002" style="enable-background:new 0 0 512.002 512.002;" xml:space="preserve">
          <path :class="data.rate >= 2 ? 'yellow' : '' " d="M511.267,197.258c-1.764-5.431-6.457-9.389-12.107-10.209l-158.723-23.065L269.452,20.157
          c-2.526-5.12-7.741-8.361-13.45-8.361c-5.71,0-10.924,3.241-13.451,8.361l-70.988,143.827l-158.72,23.065
          c-5.649,0.82-10.344,4.778-12.108,10.208c-1.765,5.431-0.293,11.392,3.796,15.377l114.848,111.954L92.271,482.671
          c-0.966,5.628,1.348,11.314,5.967,14.671c2.613,1.898,5.708,2.864,8.818,2.864c2.388,0,4.784-0.569,6.978-1.723l141.967-74.638
          l141.961,74.637c5.055,2.657,11.178,2.215,15.797-1.141c4.619-3.356,6.934-9.044,5.969-14.672l-27.117-158.081l114.861-111.955
          C511.56,208.649,513.033,202.688,511.267,197.258z"/>
        </svg>

        <svg class="star" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512.002 512.002" style="enable-background:new 0 0 512.002 512.002;" xml:space="preserve">
          <path :class="data.rate >= 3 ? 'yellow' : '' " d="M511.267,197.258c-1.764-5.431-6.457-9.389-12.107-10.209l-158.723-23.065L269.452,20.157
          c-2.526-5.12-7.741-8.361-13.45-8.361c-5.71,0-10.924,3.241-13.451,8.361l-70.988,143.827l-158.72,23.065
          c-5.649,0.82-10.344,4.778-12.108,10.208c-1.765,5.431-0.293,11.392,3.796,15.377l114.848,111.954L92.271,482.671
          c-0.966,5.628,1.348,11.314,5.967,14.671c2.613,1.898,5.708,2.864,8.818,2.864c2.388,0,4.784-0.569,6.978-1.723l141.967-74.638
          l141.961,74.637c5.055,2.657,11.178,2.215,15.797-1.141c4.619-3.356,6.934-9.044,5.969-14.672l-27.117-158.081l114.861-111.955
          C511.56,208.649,513.033,202.688,511.267,197.258z"/>
        </svg>

        <svg class="star" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512.002 512.002" style="enable-background:new 0 0 512.002 512.002;" xml:space="preserve">
          <path :class="data.rate >= 4 ? 'yellow' : '' " d="M511.267,197.258c-1.764-5.431-6.457-9.389-12.107-10.209l-158.723-23.065L269.452,20.157
          c-2.526-5.12-7.741-8.361-13.45-8.361c-5.71,0-10.924,3.241-13.451,8.361l-70.988,143.827l-158.72,23.065
          c-5.649,0.82-10.344,4.778-12.108,10.208c-1.765,5.431-0.293,11.392,3.796,15.377l114.848,111.954L92.271,482.671
          c-0.966,5.628,1.348,11.314,5.967,14.671c2.613,1.898,5.708,2.864,8.818,2.864c2.388,0,4.784-0.569,6.978-1.723l141.967-74.638
          l141.961,74.637c5.055,2.657,11.178,2.215,15.797-1.141c4.619-3.356,6.934-9.044,5.969-14.672l-27.117-158.081l114.861-111.955
          C511.56,208.649,513.033,202.688,511.267,197.258z"/>
        </svg>

        <svg class="star" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512.002 512.002" style="enable-background:new 0 0 512.002 512.002;" xml:space="preserve">
          <path :class="data.rate >= 5 ? 'yellow' : '' " d="M511.267,197.258c-1.764-5.431-6.457-9.389-12.107-10.209l-158.723-23.065L269.452,20.157
          c-2.526-5.12-7.741-8.361-13.45-8.361c-5.71,0-10.924,3.241-13.451,8.361l-70.988,143.827l-158.72,23.065
          c-5.649,0.82-10.344,4.778-12.108,10.208c-1.765,5.431-0.293,11.392,3.796,15.377l114.848,111.954L92.271,482.671
          c-0.966,5.628,1.348,11.314,5.967,14.671c2.613,1.898,5.708,2.864,8.818,2.864c2.388,0,4.784-0.569,6.978-1.723l141.967-74.638
          l141.961,74.637c5.055,2.657,11.178,2.215,15.797-1.141c4.619-3.356,6.934-9.044,5.969-14.672l-27.117-158.081l114.861-111.955
          C511.56,208.649,513.033,202.688,511.267,197.258z"/>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import UserService from '../../services/UserService';

export default {
  name: 'comment',
  props: ['data'],
  data() {
    return {
      user: null,
      userLoaded: false,
    };
  },
  methods: {
    async getUserName() {
      const { data: user } = await UserService.get(`/user/username/${this.data.idUser}`);
      this.user = user;
      if (this.user) console.log(this.user);
      else (console.log(user));
      this.userLoaded = true;
    },
  },
  mounted() {
    this.getUserName();
    console.log(this.data);
  },
};
</script>

<style scoped lang="scss">
@media screen and (orientation: landscape) {
  .comm{
    position: relative;
    width: 80%;
    height: 18vh;
    background: #fff;
    padding: 1%;
    border-radius: 2rem;
    border-top-right-radius: 0;
    border-bottom-left-radius: 0;
    margin-bottom: 4vh;
    &:nth-of-type(even) {
      margin-left: 20%;
    }
    .from{
      font-size: 1.4em;
      margin-bottom: 1%;
    }
    .message{
      text-indent: 2%;
      height: 50%;
    }
    .infos{
      display: flex;
      bottom: 0;
      height: 20%;
      align-items: center;
      font-size: 1.1em;
      .note{
        width: 80%;
        .star{
          width: 3%;
          margin-left: 1%;
        }
        .star .yellow{
          fill: #d4e157;
        }
      }
      .date{
        width: 20%;
        justify-content: flex-end;
      }
    }
  }
}

@media screen and (orientation: portrait) {
  .comm{
    position: relative;
    width: 100%;
    background: #fff;
    padding: 1rem;
    border-radius: 2rem;
    border-top-right-radius: 0;
    border-bottom-left-radius: 0;
    margin-bottom: 1rem;
    .from{
      font-size: 1.4em;
      margin-bottom: 1%;
    }
    .message{
      text-indent: 2%;
      height: 50%;
    }
    .infos{
      display: flex;
      bottom: 0;
      height: 30%;
      align-items: center;
      .note{
        width: 80%;
        .star{
          width: 12%;
          margin-left: 1%;
          margin-top: 10%;
        }
        .star .yellow{
          fill: #d4e157;
        }
      }
      .date{
        width: 70%;
        font-size: 1rem;
        justify-content: flex-end;
        align-items: center;
        margin-top: 8%;
      }
    }
  }
}
</style>
