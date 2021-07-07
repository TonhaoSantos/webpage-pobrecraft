<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-offset-1 col-xs-10 col-sm-offset-1 col-sm-10 col-md-10 col-md-offset-1 col-lg-8 col-lg-offset-2 logo">
        <img alt="Pobrecraft logo" src="@/assets/logo.png" class="logo-img">
      </div>
    </div>

    <div class="row">
      <div class="col-md-12" style="text-align: center;">
        <router-link to="/">Home</router-link> |
        <router-link to="/regras">Regras</router-link> |
        <router-link to="/youtubers">Youtubers</router-link>
      </div>
    </div>

    <div class="col-md-12">
      <router-view/>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App'
})
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
}

.logo {
  margin-top: 28px;
  margin-bottom: 25px;

  .logo-img {
    position: relative;
    width: 100%;
    height: auto;
  }
}
</style>
