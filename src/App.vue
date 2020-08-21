<template>
  <div class="page-wrapper">
    <ApiCheck/>
    <Footer/>
  </div>
</template>

<script>
import ApiCheck from './components/ApiCheck.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    ApiCheck,
    Footer
  }
}
</script>
