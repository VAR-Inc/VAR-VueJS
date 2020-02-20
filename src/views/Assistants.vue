<template>
  <Assistants :assts="assists"/>

</template>
<script>
import Assistants from '@/components/Assistants.vue';

export default {
  name: 'assistants',
  props: ['assistants'],
  data() {
    return {
      assists: [
        { name: 'Rex' },
      ],
    };
  },
  components: {
    Assistants,
  },
};
</script>
