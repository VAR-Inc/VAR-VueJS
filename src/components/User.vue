<template>
  <section id="user">
    <h2>USER NAME</h2>
    <div class="container">
      <div class="summary">
        <img src="../assets/assistant.png"/>
        <div class="content">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <button>CALL ME</button>
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
        <input type="submit" value="SEND"/>
      </div>
    </div>
  </section>
</template>
<style scoped>
  .container{
    width: 50%;
    margin: 0 auto;
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
  .summary button{
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
  .comment input[type="submit"]{
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
    color: #11CDFC;
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
