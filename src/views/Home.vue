<template>
  <div class="home">
    <p>
      <router-link to="/assistants">{{ getUsers.length }} Users have registered</router-link>
    </p>
    <Home/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Home from '@/components/Home.vue';

export default {
  name: 'home',
  components: {
    Home,
  },
  data() {
    return {
      users: [],
    };
  },
  computed: {
    ...mapGetters([
      'getUsers',
    ]),
  },
  created() {
    this.$store.dispatch('fetchUsers');
  },
};
</script>
<style scoped>
  p{
    text-align: center;
    padding: 1rem;
    font-weight: bolder;
  }
  p a{
    text-decoration: none;
    color: green;
  }
  p a:hover{
    color: #11CDFC;
  }
</style>
