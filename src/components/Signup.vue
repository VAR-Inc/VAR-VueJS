<template>
  <div class="container">
    <p v-if="msg">{{ msg }}</p>
    <form @submit.prevent="signUp">
      <div class="image">
        <img src="../assets/signup.png" />
        <p>Registration</p>
      </div>
      <div class="form-row">
        <label for="username">Username</label>
        <input type="text" placeholder="Username" v-model="fields.username" />
      </div>
        <span style="color: red">{{ fieldErrors.username }} HI</span>
      <div class="form-row">
        <label for="email">Email</label>
        <input type="email" placeholder="Email" v-model="fields.email" />
      </div>
      <div class="form-row">
        <label for="password">Password</label>
        <input type="password" placeholder="Password" v-model="fields.password" />
      </div>
      <div class="form-row">
        <label for="firstname">Firstname</label>
        <input type="text" placeholder="Firstname" v-model="fields.firstname" />
      </div>
      <div class="form-row">
        <label for="lastname">Lastname</label>
        <input type="text" placeholder="Lastname" v-model="fields.lastname" />
      </div>
      <div class="form-row">
        <label for="address">Home Address</label>
        <input type="text" placeholder="Address" v-model="fields.address" />
      </div>
      <div class="form-row">
        <label for="residential LGA">Residential LGA</label>
        <input type="text" placeholder="Residential LGA" v-model="fields.lga" />
      </div>
      <div class="form-row">
        <label for="state">State</label>
        <input type="text" placeholder="State (e.g Lagos State)" v-model="fields.state" />
      </div>
      <div class="form-row">
        <label for="occupation">Occupation</label>
        <input type="text" placeholder="Occupation (e.g Plumber)" v-model="fields.occupation" />
      </div>
      <div class="form-row">
        <label for="phone">Phone Number</label>
        <input type="text" placeholder="Phone Number" v-model="fields.phone" />
      </div>
      <!-- <div class="form-row">
        <input type="checkbox" v-model="fields.termsAndConditions" />
        <label for="Terms and Conditions">Terms and Conditions</label>
      </div> -->
      <div class="send-btn">
        <button>SIGNUP</button>
      </div>
    </form>
    <div class="login-nav">
      <router-link class="login" to="/login">LOGIN</router-link>
      <!-- <a class="login" href="/">LOGIN</a> -->
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
// import AuthService from '../services/AuthService';

export default {
  name: 'signup',
  data() {
    return {
      fields: {
        username: '',
        email: '',
        password: '',
        firstname: '',
        lastname: '',
        address: '',
        lga: '',
        state: '',
        occupation: '',
        phone: '',
        termsAndConditions: false,
      },
      fieldErrors: {
        username: undefined,
        email: undefined,
        password: undefined,
        firstname: undefined,
        lastname: undefined,
        address: undefined,
        lga: undefined,
        state: undefined,
        occupation: undefined,
        phone: undefined,
        termsAndConditions: false,
      },
      msg: '',
    };
  },
  computed: {
    ...mapActions([
      'signup',
    ]),
  },
  methods: {
    validateForm(fields) {
      const errors = {};
      if (!fields.username) errors.username = 'Username required';
      if (!fields.email) errors.email = 'Email required';
      if (!fields.password) errors.password = 'Password required';
      if (!fields.firstname) errors.firstname = 'Firstname required';
      if (!fields.lastname) errors.lastname = 'Lastname required';
      if (!fields.termsAndConditions) {
        errors.termsAndConditions = 'Terms and conditions must be accepted';
      }
      if (fields.email && !this.isEmail(fields.email)) {
        errors.email = 'Invalid Email';
      }
      return errors;
    },
    isEmail(email) {
      const re = /\S+@\S+\.\S+/;
      return re.test(email);
    },
    async signUp() {
      const credentials = {
        username: this.fields.username,
        email: this.fields.email,
        password: this.fields.password,
        firstname: this.fields.firstname,
        lastname: this.fields.lastname,
        address: this.fields.address,
        lga: this.fields.lga,
        state: this.fields.state,
        occupation: this.fields.occupation,
        phone: this.fields.phone,
      };
      try {
        // const response = await AuthService.signup(credentials);
        return this.$store.dispatch('signup', credentials);
      } catch (error) {
        this.msg = error.response.data.error;
      }
      return false;
    },
  },
};
</script>

<style scoped>
  .image{
    text-align: center;
    padding: 1rem;
  }
  .image p{
    color: #eee;
    font-weight: bold;
    font-size: 1.2rem;
    padding: 1rem;
  }
  .container{
    width: 50vw;
    margin: 0 auto 3rem auto;
    background: #11cdfc;
  }
  form {
    margin: 3rem auto 1rem auto;
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
  }
  .form-row input{
    letter-spacing: 0.6rem;
    font-size: 1.1rem;
    text-align: center;
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
  .login-nav{
    width: 20%;
    text-align: right;
    margin: 0 0 0 80%;
    padding: 0.4rem;
  }
  .login-nav > .login{
    font-style: italic;
    color: #EEE;
    font-weight: bold;
    font-size: 1rem;
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
