<template>
  <div class="container">
    <p v-if="msg">{{ msg }}</p>
    <form v-on:submit.prevent="signUp">
      <div class="image">
        <img src="../assets/signup.png" />
        <p>Registration</p>
      </div>
      <div class="form-row">
        <label for="username">Username</label>
        <input type="text" placeholder="Username" v-model="username" />
      </div>
      <div class="form-row">
        <label for="email">Email</label>
        <input type="email" placeholder="Email" v-model="email" />
      </div>
      <div class="form-row">
        <label for="password">Password</label>
        <input type="password" placeholder="Password" v-model="password" />
      </div>
      <div class="form-row">
        <label for="firstname">Firstname</label>
        <input type="text" placeholder="Firstname" v-model="firstname" />
      </div>
      <div class="form-row">
        <label for="lastname">Lastname</label>
        <input type="text" placeholder="Lastname" v-model="lastname" />
      </div>
      <div class="form-row">
        <label for="address">Home Address</label>
        <input type="text" placeholder="Address" v-model="address" />
      </div>
      <div class="form-row">
        <label for="residential LGA">Residential LGA</label>
        <input type="text" placeholder="Residential LGA" v-model="lga" />
      </div>
      <div class="form-row">
        <label for="state">State</label>
        <input type="text" placeholder="State (e.g Lagos State)" v-model="state" />
      </div>
      <div class="form-row">
        <label for="occupation">Occupation</label>
        <input type="text" placeholder="Occupation (e.g Auto Mechanic)" v-model="occupation" />
      </div>
      <div class="form-row">
        <label for="phone">Phone Number</label>
        <input type="text" placeholder="Phone Number" v-model="phone" />
      </div>
      <div class="send-btn">
        <button>SIGNUP</button>
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
      email: '',
      password: '',
      firstname: '',
      lastname: '',
      address: '',
      lga: '',
      state: '',
      occupation: '',
      phone: '',
      msg: '',
    };
  },
  methods: {
    async signUp(e) {
      console.log(e);
      try {
        const credentials = {
          username: this.username,
          email: this.email,
          password: this.password,
          firstname: this.firstname,
          lastname: this.lastname,
          address: this.address,
          lga: this.lga,
          state: this.state,
          occupation: this.occupation,
          phone: this.phone,
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
  form {
    margin: 3rem auto;
    background: #11cdfc;
    width: 50vw;
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
    color: #11CDFC;
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
    text-align: center;
  }
  button{
    padding: 1rem 3rem;
    background-color: #1AAF17;
    color: #fff;
    text-transform: uppercase;
    border: none;
    font-weight: bold;
    margin-bottom: 1.5rem;
    letter-spacing: 0.2rem;
  }
  @media only screen and (max-width: 900px){
    form{
      width:80%;
      padding: 0;
    }
    /* button{ */
      /* padding: 3rem; */
    /* } */
  }
</style>
