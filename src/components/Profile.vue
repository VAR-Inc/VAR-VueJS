<template>
  <section id="profile">
    <h2>PROFILE</h2>
    <div class="container-flex">
      <form>
        <div class="form-row">
          <!-- <label for="name">NAME</label><br/> -->
          <input type="text" disabled :value="getUser.firstname+' '+getUser.lastname"/>
        </div>
        <div class="form-row">
          <!-- <label for="contact">E-MAIL</label><br/> -->
          <input type="email" disabled :value="getUser.occupation"/>
        </div>
        <div class="form-row">
          <!-- <label for="title">TITLE</label><br/> -->
          <input type="text" disabled :value="getUser.experience"/>
        </div>
        <div class="form-row">
          <!-- <label for="message">MESSAGE</label><br/> -->
          <textarea row="10" disabled :value="getUser.about"></textarea>
        </div>
        <div class="form-row">
          <!-- <label for="message">MESSAGE</label><br/> -->
          <input type="text" disabled :value="getUser.phone"/>
        </div>
        <div class="send-btn">
          <label class="picture-upload">
            <input type="file"/>
              UPLOAD PHOTO
          </label>
          <input type="file" />
          <button>SAVE</button>
        </div>
      </form>
      <div class="summary">
        <img src="../assets/assistant.png"/>
        <div class="content">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
          <button>CALL ME</button>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters([
      'getUser',
    ]),
  },
};
</script>

<style scoped>
  #profile {
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
  .container-flex{
    width: 55%;
    padding-bottom: 4rem;
  }
  form{
    flex-basis: 45%;
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
    background-color: #A2EBFE;
    border: none;
    padding: 0.8rem;
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
  .send-btn input{
    float: left;
  }
  .send-btn button{
    float: right;
    padding: 1.5% 3%;
    background-color: #1AAF17;
    color: #fff;
    text-transform: uppercase;
    border: none;
    font-weight: bold;
  }
  .summary{
    width: 50%;
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
    background-color: #50232E;
    color: #fff;
    text-transform: uppercase;
    border: none;
    font-weight: bold;
    /* margin-bottom: 0rem; */
  }
  input[type="file"]{
    display: none
  }
  .picture-upload{
    width: 45%;
    display: inline-block;
    padding: 0.5rem;
    background-color: #11CDFC;
    color: #fff;
    float: left;
    cursor: pointer;
    border-radius: 15%;
  }
  @media only screen and (min-width: 900px){
    .container-flex{
      display: flex;
      justify-content: space-around;
      margin: 0 auto;
    }
    form{
      width:90%;
      padding: 0;
    }
    .summary{
      flex-basis: 30%;
      float: right;
    }
  }
  @media only screen and (max-width: 899px){
    #profile{
      padding: 0;
    }
    .container-flex{
      margin: 0 auto;
      width: 100%;
    }
    .summary{
      margin: 4rem auto;
    }
  }
</style>
