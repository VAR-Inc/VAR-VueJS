<template>
  <footer>
    <hr/>
    <div class="support">
      <img src="../assets/footer-help.png"/>
    </div>
    <div class="contact">
      <div class="powered-by">
        <p>POWERED BY:</p>
        <span>&#169;</span>
        <!-- <img src="../assets/footer-phone.png"/> -->
      </div>
      <div class="contact-us">
        <span>CONTACT US</span>
        <img class="contact-img" src="../assets/footer-phone.png"/>
        <span>01-23456789</span>
        <img class="contact-img" src="../assets/footer-whatsapp.png"/>
        <span>01-23456789</span>
        <img class="contact-img" src="../assets/footer-mail.png"/>
        <span>abc@gmail.com</span>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      year: '',
    };
  },
};
</script>

<style scoped>
  footer{
    font-family: Arial, Helvetica, sans-serif;
    font-size: 0.8rem;
  }
  .support{
    display: inline-block;
    margin-left: 1.5rem;
  }
  .support img{
    width: 4rem;
    position: absolute;
  }
  .contact-img{
    width: 2rem;
  }
  .contact{
    margin-left: 3.2rem;
    display: flex;
    justify-content: space-between;
  }
  .powered-by{
    flex-basis: 10%;
    margin-left: 3rem;
  }
  .contact-us{
    flex-basis: 80%;
    padding: 1rem;
    text-align: center;
  }
  .contact-us img{
    margin-left: 5rem;
  }
  .contact-us span:first-child{
    color: #1AAF17;
    font-weight: bold;
  }
  @media only screen and (max-width: 600px) {
    footer{
      font-size: 0.5rem;
    }
    .contact-us img{
      height: 1rem;
      margin-left: 0;
    }
  }
</style>
