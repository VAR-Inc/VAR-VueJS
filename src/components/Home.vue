<template>
  <div class="home-page">
    <section id="welcome">
      <div class="info">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Labore consectetur quibusdam quidem, earum quae cumque recusandae minima ducimus
          obcaecati laborum.</p>
          <button>Call us</button>
      </div>
      <img class="home-image" src="../assets/home.png"/>
    </section>
    <section id="services">
      <h2 class="title">OUR SERVICES</h2>
      <div class="services">
        <div class="service">
          <img src="../assets/get-help.png"/>
          <div class="content">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Deserunt nisi porro consectetur voluptatibus nam nobis consequuntur,
              repellendus consectetur perspiciatis beatae. Atque!
            </p>
            <button>GET HELP</button>
          </div>
        </div>
        <div class="service">
          <img src="../assets/assistant.png"/>
          <div class="content">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Deserunt nisi porro consectetur voluptatibus nam nobis consequuntur,
              repellendus consectetur perspiciatis beatae. Atque!
            </p>
              <button>ASSISTANT</button>
          </div>
        </div>
        <div class="service">
          <img src="../assets/Gmail-icon.png"/>
          <div class="content">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Deserunt nisi porro consectetur voluptatibus nam nobis consequuntur,
              repellendus consectetur perspiciatis beatae. Atque!
            </p>
              <button>ADVERTISE</button>
          </div>
        </div>
      </div>
    </section>
    <!-- <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa" target="_blank" rel="noopener">pwa</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router" target="_blank" rel="noopener">router</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-unit-mocha" target="_blank" rel="noopener">unit-mocha</a></li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul> -->
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #welcome{
    width: 85%;
    display: flex;
    /* justify-content: space-between; */
    margin: 3rem auto;
  }
  .info p{
    margin-top: 4rem;
    font-size: 1.2rem;
  }
  .home-image{
    height: 15rem;
  }
  .info{
    flex-basis: 50%;
    text-align: center;
    margin: 3.5%;
  }
  .info button{
    padding: 1.5% 3%;
    background-color: #1AAF17;
    color: #fff;
    text-transform: uppercase;
    border: none;
    font-weight: bold;
    margin-top: 1.5rem;
  }

  .title{
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 300;
  }

  .services{
    margin: 0 5% 5% 5%;
  }
  .service{
    flex-basis: 23%;
    font-weight: bold;
    font-size: 1.2rem;
    padding-bottom: 1rem;
    text-align: center;
  }
  .service .content{
    background-color: #11CDFC;
    padding: 4rem 0 2rem;
  }
  .service p{
    margin-bottom: 2rem;
  }
  .service img{
    width: 5rem;
    position: relative;
    top: 3rem;
  }
  .service button{
    padding: 1.5% 3%;
    background-color: #1AAF17;
    color: #fff;
    text-transform: uppercase;
    border: none;
    font-weight: bold;
    margin-bottom: 0rem;
    width: 45%;
  }

  @media only screen and (min-width: 900px){
    #welcome{
      width: 45%;
      justify-content: space-between;
    }
    .services{
      display: flex;
      justify-content: space-between;
    }
    .service .content{
      flex-basis: 30%;
    }
  }

  @media only screen and (max-width: 600px) {
    #welcome{
      display: block;
    }
    .home-image{
      height: 15rem;
      margin-left: 30%;
    }
    .service{
      width: 65%;
      margin: 0 auto;
      padding: 3rem 0 2rem 0;
    }
  }

  @media only screen and (min-width: 601px) {
    .service{
      width: 65%;
      margin: 0 auto;
      /* padding: 4rem 0 2rem; */
    }
  }
</style>
