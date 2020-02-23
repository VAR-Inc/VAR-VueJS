<template>
  <div id="credits">
    <div class="container">
      <Credits />
    </div>
  </div>
</template>
<script>
import Credits from '@/components/Credits.vue';

export default {
  name: 'credit',
  components: {
    Credits,
  },
};
</script>
<style scoped>
  #credits{
    height: 100vh;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode',
    'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  }
  .container{
    width: 80%;
    margin: 0 auto;
  }
</style>
