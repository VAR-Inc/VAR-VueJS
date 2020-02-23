<template>
  <div id="login">
    <div class="container">
      <form v-on:submit.prevent="logIn">
        <p>ACCOUNT</p>
        <div class="form-row">
          <label for="username">Username</label>
          <input type="text" placeholder="Email" v-model="formData.usernameOrEmail" />
        </div>
        <div class="form-row">
          <label for="password">Password</label>
          <input type="password" placeholder="Password" v-model="formData.password" />
        </div>
        <div class="send-btn">
          <button>LOGIN</button>
        </div>
      </form>
      <div class="bottom-line">
        <span>FORGOT PASSWORD?</span>
        <router-link class="signup" to="/signup">SIGNUP</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'login',
  data() {
    return {
      formData: {
        usernameOrEmail: '',
        password: '',
      },
      msg: '',
    };
  },
  computed: {
    ...mapGetters([
      'getUsers',
    ]),
    ...mapActions([
      'login',
    ]),
  },
  methods: {
    logIn() {
      this.$store.dispatch('login', this.formData);
    },
  },
};
</script>

<style scoped>
  #login{
    height: 100vh;
  }
  .container{
    width: 50vw;
    margin: 0 auto 3rem auto;
    background: #11cdfc;
  }
  form {
    margin: 1rem auto;
  }
  form p:nth-child(1){
    text-align: center;
    color: #eee;
    font-weight: bold;
    font-size: 1.2rem;
    padding: 1rem;
  }
  .form-row{
    display: flex;
    padding: 10px 0;
    margin: 20px;
    background-color: #EBFEFE;
  }
  .form-row label{
    background: #11CDFC;
    color: #eee;
    font-size: 0.8rem;
    font-weight: bold;
    letter-spacing: 0.2rem;
    padding: 1rem;
    margin-left: 1rem;
    text-transform: uppercase;
  }
  .form-row input{
    text-align: center;
    letter-spacing: 0.6rem;
    font-size: 1rem;
    border: none;
    background-color: #EBFEFE;
    padding: 0.5rem;
    width: 100%;
    flex: 1;
    margin-top: 0;
  }
  .form-row input:focus{
    outline: none;
  }
  .send-btn{
    font-size: 80%;
    width: 50%;
    margin: 0 auto;
    text-align: center;
  }
  .send-btn button{
    padding: 1rem 3rem;
    background-color: #1AAF17;
    color: #fff;
    text-transform: uppercase;
    border: none;
    font-weight: bold;
    letter-spacing: 0.2rem;
  }
  .bottom-line{
    padding: 0.8rem;
    font-size: 0.7rem;
    font-weight: bold;
    color: white;
    font-style: italic;
  }
  .bottom-line > .signup{
    float: right;
    color: inherit;
    font-style: inherit;
    text-decoration: none;
  }
    @media only screen and (max-width: 870px){
    .container{
      width: 85%;
      border: 1px solid red;
    }
    .send-btn button{
      padding: 0 20px;
      height: 50px;
    }
  }
</style>
