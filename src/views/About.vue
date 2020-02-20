<template>
  <section>
    <div id="about">
      <div>
        <div class="info">
          <h2>ABOUT</h2>
          <p>VAR helps connect you to the skills and jobs you've always wanted.</p>
          <p>Our community is built with a team of seamless, well-behaved and transparent
            individuals who are up for change, ready to work while in school and as graduates,
            by boosting their growth and making them financially independent.</p>
          <p>
            In need of assistance on any task, getting things done at the right time, all you need
            to do is contat us or send an email stating your problem and we will assign skillful
            persons on the area to get it done
          </p>
        </div>
        <div class="caption">
          <p>ASSISTANCE INDEED IS A CLICK AWAY</p>
        </div>
      </div>
      <img src="../assets/home.png"/>
    </div>
  </section>
</template>

<style scoped>
  #about{
    width: 85%;
    display: flex;
    margin: 3rem auto 10rem auto;
  }
  .info{
    padding: 2rem;
    background-color: #A2EBFE;
  }
  .info p{
    margin-top: 1rem;
    font-size: 1.2rem;
  }
  img{
    margin-top: 6rem;
    height: 20rem;
  }
  .info{
    flex-basis: 50%;
    text-align: center;
    margin: 3.5%;
  }
  .caption p{
    margin: 0 auto;
    text-align: center;
    width: 55%;
    font-weight: bold;
    letter-spacing: 1px;
  }
  .info h2{
    color: #50232E;
    border-bottom: 2px solid #1AAF17;
    letter-spacing: 1.5px;
    width: 50%;
    margin: 0 auto;
    padding-bottom: 1.5%;
  }

  @media only screen and (min-width: 900px){
    #about{
      width: 45%;
      justify-content: space-between;
    }
  }

  @media only screen and (max-width: 600px) {
    #about{
      display: block;
    }
    img{
      height: 15rem;
      margin-left: 30%;
    }
  }

  @media only screen and (min-width: 601px) {
    .service{
      width: 65%;
      margin: 0 auto;
    }
  }
</style>
