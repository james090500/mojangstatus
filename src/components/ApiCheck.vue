<template>
  <div v-if="loading">
    <spinner/>
  </div>
  <div v-else>
    <h1>This is the API Check</h1>
    <div class="list">
      <div class="list-item" v-for="(value, service) in apiResult" :key="service">
        {{ service }}
        {{ value["minecraft.net"] }}
      </div>
    </div>

      <fa :icon="['far', 'meh']"/>
  </div>
</template>

<script>
  import axios from 'axios';

  import Spinner from './Spinner';

  export default {
    components: {
      Spinner
    },
    data() {
      return {
        loading: true,
        apiResult: []
      }
    },
    created() {
      axios.get('https://status.mojang.com/check').then((response) => {
        this.apiResult = response.data;
        this.loading = false;
      });
    }
  }
</script>