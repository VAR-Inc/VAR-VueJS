<template>
  <header>
    <nav>
      <img alt="Vue logo" src="../assets/logo.png" @click="goHome">
      <p class="logged-in" v-show="getUsername">
        Welcome,
        <span @click="profile" class="user-profile">
          {{ getUsername }}</span>
          <span @click="logOut" class="logout-btn"> logout</span>
      </p>
      <div class="search-btn">
        <input type='text' placeholder="SEARCH FOR SERVICES"/>
        <button class="btn">search</button>
      </div>
    </nav>
      <div class="dropdown-divider">
        <div class="dropdown">
          <i class="fi-snsuxl-three-bars-solid dropdown-btn"></i>
          <div class="dropdown-links">
            <router-link to="/">Home</router-link>
            <router-link to="/about">About</router-link>
            <router-link to="/login">Login</router-link>
            <router-link to="/signup">Signup</router-link>
            <router-link to="/assistants">Assistants</router-link>
            <router-link to="/credits">Credits</router-link>
            <hr/>
            <router-link class="support" to="/support">Support</router-link>
          </div>
        </div>
        <hr/>
      </div>
  </header>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters([
      'getUsername',
    ]),
    ...mapActions([
      'logout',
    ]),
  },
  methods: {
    goHome() {
      this.$router.push('/');
    },
    logOut() {
      this.$store.dispatch('logout');
    },
    profile() {
      this.$router.push({ name: 'my-profile-page' });
    },
  },
};

</script>

<style scoped>
  nav{
    display: flex;
    justify-content: space-between;
    padding: 0 1.5rem;
  }
  img {
    width: 10rem;
    height: 4rem;
  }
  .user-profile{
    font-size: 1.1rem;
    font-weight: bolder;
    color: rgb(60, 201, 105);
  }
  .user-profile:hover{
    cursor: pointer;
  }
  .logged-in{
    margin-top: 1rem;
  }
  .logout-btn{
    margin-left: 2rem;
    color: blue;
    font-style: italic;
  }
  .logout-btn:hover{
    cursor: pointer;
  }
  .search-btn{
    margin-top: 1rem;
    flex-basis: 50%;
    text-align: right;
  }
  .search-btn input{
    width: 40%;
    background-color: #EBFEFE;
  }
  .search-btn button{
    text-transform: uppercase;
    font-weight: bold;
    background-color: #11CDFC;
    color: #eee;
  }
  .search-btn input, .search-btn button{
    border: none;
    padding: 0.6rem;
  }
  hr{
    border: 2px solid #88E6FD;
  }
  .dropdown{
    width: 2rem;
  }
  .dropdown-divider{
    padding: 1rem 1.2rem;
  }
  .dropdown-links{
    display: none;
    position: absolute;
    background-color: #EBFEFE;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    padding: 2rem 1rem;
    text-transform: uppercase;
    z-index: 1;
  }
  .dropdown-links a{
    float: none;
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    text-align: center;
  }
  .dropdown-links a:hover{
    background-color: #11CDFC;
    color: #eee;
    font-weight: bold;
    text-transform: uppercase;
  }
  .dropdown:hover .dropdown-links{
    display: block;
  }
  .dropdown:hover{
    color: #01EAF9
  }
  .dropdown-btn{
    font-size: 1.4rem;
  }
  .dropdown i:hover{
    cursor: pointer;
  }
  .dropdown-links .support{
    margin-top: 2rem;
  }
</style>
