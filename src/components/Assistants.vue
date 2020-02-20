<template>
  <section class="assistants">
    <p>{{ assts }}</p>
    <h2>AVAILABLE ASSISTANTS</h2>
    <div class="container">
      <div class="summary">
        <img src="../assets/assistant.png"/>
        <div class="content">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <button>CALL ME</button>
        </div>
      </div>
      <div class="summary">
        <img src="../assets/assistant.png"/>
        <div class="content">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <button>CALL ME</button>
        </div>
      </div>
      <div class="summary">
        <img src="../assets/assistant.png"/>
        <div class="content">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <button>CALL ME</button>
        </div>
      </div>
      <div class="summary">
        <img src="../assets/assistant.png"/>
        <div class="content">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <button>CALL ME</button>
        </div>
      </div>
      <div class="summary">
        <img src="../assets/assistant.png"/>
        <div class="content">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <button>CALL ME</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ['assts'],
};
</script>

<style scoped>
  h2{
    color: #50232E;
    border-bottom: 2px solid #1AAF17;
    letter-spacing: 0.6rem;
    width: 30%;
    margin: 1rem 5rem;
    font-size: 1.5rem;
  }
  .container{
    width: 50%;
    justify-content: space-between;
    margin: 0 auto;
  }
  .summary{
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
  .summary button{
    padding: 1rem 2rem;
    background-color: #1AAF17;
    color: #fff;
    text-transform: uppercase;
    border: none;
    font-weight: bold;
  }
  @media only screen and (min-width: 900px){
    .container{
      display: flex;
      width: 80%;
      flex-wrap: wrap;
    }
    .summary:nth-child(1){
      margin-left: 0;
    }
    .summary{
      margin-left: 1rem;
      flex-basis: 30%;
    }
  }
</style>
