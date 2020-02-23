<template>
  <section id="user">
    <div class="modal" v-show="reveal">
      <div>
        <p>Phone Number: {{ user.phone }}</p>
        <button @click="closeModal" class="button">Close</button>
      </div>
    </div>
    <h2>{{ user.firstname }} {{ user.lastname }}</h2>
    <div class="container">
      <div class="summary">
        <img src="../assets/assistant.png"/>
        <div class="content">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. {{ user.about }}</p>
          <button @click="showNumber()" class="button">CALL ME</button>
        </div>
        <div class="rating">
          <h4>RATE ME</h4>
          <div class="rating">
            <i class="fi-xnsuxl-star-solid"></i>
            <i class="fi-xwluxl-star-wide"></i>
            <i class="fi-xwluxl-star-half-wide"></i>
          </div>
        </div>
      </div>
      <div class="comment">
        <input type="text" />
        <!-- <input type="submit" value="SEND"/> -->
        <button>SEND</button>
      </div>
    </div>
  </section>
</template>
<script>

export default {
  props: ['user'],
  data() {
    return {
      reveal: false,
    };
  },
  methods: {
    showNumber() {
      this.reveal = !this.reveal;
      return true;
    },
    closeModal() {
      this.reveal = !this.reveal;
    },
  },
};
</script>
<style scoped>
  .container{
    width: 50%;
    margin: 0 auto;
  }
  .modal{
    z-index: 1;
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    overflow: auto;
    background-color: rgb(0,0,0);
    background-color: rgba(0,0,0,0.4);
  }
  .modal>div{
    background-color: #fff;
    margin-top: 10%;
    padding: 1rem;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
    height: 35%;
    text-align: center;
  }
  .modal>div>.button{
    margin-top: 5%;
  }
  h2{
    color: #50232E;
    border-bottom: 2px solid #1AAF17;
    letter-spacing: 0.6rem;
    width: 30%;
    margin: 1rem 5rem;
    font-size: 1.5rem;
  }
  .summary{
    margin: inherit;
    max-width: 25rem;
    font-weight: bold;
    font-size: 1.2rem;
    padding-bottom: 1rem;
    text-align: center;
  }
  .summary .content{
    background-color: #11CDFC;
    padding: 4rem 1.5rem;
  }
  .summary p{
    margin-bottom: 2rem;
  }
  .summary img{
    width: 5rem;
    position: relative;
    top: 3rem;
  }
  .button{
    padding: 1rem 2rem;
    background-color: #1AAF17;
    color: #fff;
    text-transform: uppercase;
    border: none;
    font-weight: bold;
  }
  .rating{
    margin-top: 1.2rem;
  }
  h3{
    letter-spacing: 0.2rem;
  }
  .comment{
    display: flex;
    padding: 10px 0;
    margin: 1rem 1rem 1rem 0rem;
    background-color: #EBFEFE;
    width: 100%;
  }
  .comment button{
    border: none;
    background: #11CDFC;
    color: #eee;
    font-size: 0.8rem;
    font-weight: bold;
    letter-spacing: 0.2rem;
    padding: 1rem;
    flex: 0.3;
    text-transform: uppercase;
  }
  .comment input{
    text-align: center;
    letter-spacing: 0.2rem;
    font-size: 1rem;
    border: none;
    background-color: #EBFEFE;
    padding: 0.5rem;
    width: 100%;
    flex: 1;
    margin-top: 0;
  }
  .comment input:focus{
    outline: none;
  }
</style>
