<template>
  <div class="profile">
    <Profile />
  </div>
<!-- <div>
    <h1>Hello {{username}}</h1>
    <p>{{secretMessage}}</p>
    <input type="button" value="Logout" @click="logout">
  </div>
  </template> -->
</template>

<script>
import Profile from '@/components/Profile.vue';
// import AuthService from '../services/AuthService';

export default {
  name: 'profile',
  components: {
    Profile,
  },
  // data() {
  //   return {
  //     secretMessage: '',
  //     username: '',
  //   };
  // },
  // async created() {
  //   if (!this.$store.getters.isLoggedIn) {
  //     this.$router.push('/login');
  //   }
  //   this.username = this.$store.getters.getUsername;

  //   this.secretMessage = await AuthService.getSecretRoute();
  // },
  // methods: {
  //   logout() {
  //     this.$store.dispatch('logout');
  //     this.$router.push('/login');
  //   },
  // },
};
</script>
