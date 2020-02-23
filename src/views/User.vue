<template>
  <User :user="userDetail"/>
</template>
<script>
import { mapGetters } from 'vuex';
import User from '@/components/User.vue';

export default {
  name: 'users',
  props: ['id'],
  components: {
    User,
  },
  computed: {
    ...mapGetters([
      'userFromId',
    ]),
    userDetail() {
      return this.userFromId(this.id);
    },
  },
};
</script>
