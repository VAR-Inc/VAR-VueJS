<template>
  <div class="container">
    <p v-show="msg">{{ msg }}</p>
    <form v-on:submit.prevent="signUp">
      <p>ACCOUNT</p>
      <div class="form-row">
        <label for="username">Username</label>
        <input type="text" placeholder="Email" v-model="username" />
      </div>
      <div class="form-row">
        <label for="password">Password</label>
        <input type="password" placeholder="Password" v-model="password" />
      </div>
      <div class="send-btn">
        <span>FORGOT PASSWORD?</span>
        <button>LOGIN</button>
        <span>SIGNUP</span>
      </div>
    </form>
  </div>
</template>

<script>
// import AuthService from '../services/AuthService';

export default {
  name: 'signup',
  data() {
    return {
      username: '',
      password: '',
      msg: '',
    };
  },
  methods: {
    async signUp(e) {
      console.log(e);
      try {
        const credentials = {
          username: this.username,
          password: this.password,
        };
        // const response = await AuthService.signup(credentials);
        // this.msg = response.message;
        console.log(credentials);
      } catch (error) {
        this.msg = error.response.error;
      }
    },
  },
};
</script>

<style scoped>
  form {
    margin: 3rem auto;
    background: #11cdfc;
    width: 40vw;
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
    color: #11CDFC;
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
    display: flex;
    font-size: 80%;
    justify-content: space-between;
  }
  .send-btn button{
    padding: 1rem 3rem;
    background-color: #1AAF17;
    color: #fff;
    text-transform: uppercase;
    border: none;
    font-weight: bold;
    margin-bottom: 1.5rem;
    letter-spacing: 0.2rem;
  }
  .send-btn span{
    margin: 1rem;
    margin-top: 3rem;
    font-style: italic;
    color: #EEE;
    font-weight: bold;
    flex-basis: 30%;
    align-content: flex-end;
  }
  .send-btn span:last-child{
    text-align: right;
  }
  @media only screen and (max-width: 600px){
    .send-btn button{
      padding: 0 20px;
      height: 50px;
    }
  }
  @media only screen and (max-width: 900px){
    form{
      width:80vw;
      padding: 0;
    }
  }
</style>
