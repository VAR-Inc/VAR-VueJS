<template>
  <div id="app">
    <div id="nav">
      <app-header></app-header>
    </div>
    <router-view/>
    <div id="footer">
      <app-footer></app-footer>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    'app-header': Header,
    'app-footer': Footer,
  },
  computed: {
    ...mapActions([
      'persistSession', 'fetchUsers',
    ]),
  },
  created() {
    this.$store.dispatch('persistSession');
    this.$store.dispatch('fetchUsers');
  },
};
</script>
<style>
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
  }
  ::-webkit-input-placeholder {
    font-style: italic;
    text-align: left;
    letter-spacing: 0.3rem
  }
  :-moz-placeholder {
    font-style: italic;
    text-align: left;
    letter-spacing: 0.3rem
  }
  ::-moz-placeholder {
    font-style: italic;
    text-align: left;
  }
  :-ms-input-placeholder {
    font-style: italic;
    letter-spacing: 0.3rem
  }
  button:hover{
    cursor: pointer;
  }
</style>
