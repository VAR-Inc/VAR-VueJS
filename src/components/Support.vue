<template>
  <section id="support">
    <h2>SUPPORT</h2>
    <form>
      <div class="form-row">
        <label for="name">NAME</label><br/>
        <input type="text" />
      </div>
      <div class="form-row">
        <label for="contact">E-MAIL</label><br/>
        <input type="email" />
      </div>
      <div class="form-row">
        <label for="title">TITLE</label><br/>
        <input type="text" />
      </div>
      <div class="form-row">
        <label for="message">MESSAGE</label><br/>
        <textarea row="10"></textarea>
      </div>
      <div class="send-btn">
        <button>SEND</button>
      </div>
    </form>
  </section>
</template>

<style scoped>
  #support {
    padding: 1rem;
    width: 85%;
    margin: 0 auto;
  }
  h2{
    color: #50232E;
    border-bottom: 2px solid #1AAF17;
    letter-spacing: 0.6rem;
    width: 20%;
    margin: 1rem 5rem;
  }
  form{
    width: 50%;
    margin: 3rem auto;
  }
  .form-row{
    margin-bottom: 1rem;
  }
  .form-row label{
    color: #50232E;
    font-size: 0.8rem;
    font-weight: bold;
    letter-spacing: 0.2rem;
    padding: 1rem;
  }
  .form-row input, .form-row textarea{
    border: 1px solid #38CAA7;
    background-color: #EBFEFE;
    padding: 0.5rem;
    width: 100%;
    margin-top: 1rem;
  }
  textarea{
    overflow-y: hidden;
    height: 100px;
  }
  .send-btn{
    text-align: center;
  }
  button{
    padding: 1.5% 3%;
    background-color: #1AAF17;
    color: #fff;
    text-transform: uppercase;
    border: none;
    font-weight: bold;
  }
  @media only screen and (max-width: 900px){
    form{
      width:90%;
      padding: 0;
    }
  }
</style>
