<template>
  <div class="page-wrapper with-navbar-fixed-bottom">
    <button class="btn btn-action" @click="toggleDarkMode()">🌓</button>
    <ApiCheck :darkMode="darkMode"/>
    <Footer/>
  </div>
</template>

<style>
  .btn-action {
    padding: 0 1rem !important;
    position: absolute;
    right: 2rem;
    top: 2rem;
  }
</style>

<script>
import ApiCheck from './components/ApiCheck.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    ApiCheck,
    Footer
  },
  data() {
    return {
      darkMode: halfmoon.darkModeOn == "yes" ? "dark" : "light"
    }
  },
  methods: {
    toggleDarkMode: function() {
      halfmoon.toggleDarkMode();
      this.darkMode = halfmoon.darkModeOn == "yes" ? "dark" : "light"
    }
  }
}
</script>
