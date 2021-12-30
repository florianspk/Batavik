<template>
  <div id="login-user">
    <div id="create">
      <h1>Creer un nouveau compte</h1>
      <div id="form">
        <label for="username">Nom d'utilisateur</label> <br>
        <input name="username" type="text" placeholder="johnDoe"> <br>
        <label for="password" class="password">Mot de passe</label> <br>
        <input name="password" type="password" placeholder="···········"> <br>
        <div class="info">Mot de passe oublié ?</div>
      </div>

      <div id="button">
        <button id="validate" @click="validate()">Creer le compte</button>
      </div>
    </div>

    <div id="login">
      <h1>Se connecter</h1>
      <div id="form">
        <label for="username">Nom d'utilisateur</label> <br>
        <input name="username" type="text" placeholder="johnDoe"> <br>
        <label for="password" class="password">Mot de passe</label> <br>
        <input name="password" type="password" placeholder="···········"> <br>
        <label for="v-password" class="password">Valider le mot de passe</label> <br>
        <input name="v-password" type="password" placeholder="···········"> <br>
      </div>

      <div id="button">
        <button id="validate" @click="validate()">Se connecter</button>
      </div>
    </div>

  </div>
</template>

<script>
export default {

};
</script>

<style scoped lang="scss">
#login-user{
  position: relative;
  display:  flex;
  flex-direction: row;
  margin: auto;
  margin-top: 5vh;
  width: 80%;
  background: #fff;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.15);
  border-radius: 2rem;
  padding: 2rem;
  min-height: 67vh;
  #create, #login {
    padding: 2rem;
    width: 50%;
    height: 58vh;
    border-right: 1px solid black;
    position: relative;
    #form {
      label {
        margin-top: 3%;
        margin-left: 1%;
      }
      input {
        width: 100%;
        border: #111 1px solid;
        border-radius: 2rem;
        padding: 0 2%;
      }
      .info {
        position: relative;
        margin-top: 2%;
        font-style: italic;
      }
    }
    
  }
  #login{
    border-right: none;
  }

  #button {
    position: absolute;
    bottom: 0%;
    right: 2rem;
    width: 10vw;
    height: 7%;
    button {
      height: 100%;
      background: none;
      border: none;
      width: 100%;
      font-size: 1.1em;
      cursor: pointer;
      transition: 0.2s;
      border-radius: 2rem;
    }
    #clear{
      background: #e1e1e1;
      &:hover{
        background: #d2d2d2;
      }
    }
    #validate{
      background: #a7d1a7;
      &:hover{
        background: #94b894;
      }
    }
  }
}

@media screen and (orientation: portrait) {
  #login-user{
    padding: 1rem;
    margin-top: 10vh;
    flex-direction: column;
    #create, #login {
      width: 100%;
      height: 37vh;
      border-right: none;
      border-bottom: 1px solid black;
    }
    #login{
      border-bottom: none;
    }

    #button {
      bottom: 5%;
      height: 10%;
      width: 30vw;
      button {
        height: 100%;
        background: none;
        border: none;
        width: 100%;
        font-size: 1.1em;
        cursor: pointer;
        transition: 0.2s;
        border-radius: 2rem;
      }
      #clear{
        background: #e1e1e1;
        &:hover{
          background: #d2d2d2;
        }
      }
      #validate{
        background: #a7d1a7;
        &:hover{
          background: #94b894;
        }
      }
    }
  }
}
</style>
