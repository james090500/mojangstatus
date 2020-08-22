<template>
  <div v-if="loading">
    <spinner/>
  </div>
  <div v-else>
    <div class="container-fluid">
      <div class="row justify-content-center">
        <div class="col-md-4">
          <div class="card" ref="apiResult">
            <h4 class="text-center font-weight-bold mt-0">Current API Status</h4>
            <div class="list-item mb-10" v-for="check in apiResult" :key="JSON.stringify(check)">
              <div v-for="(value, service) in check" :key="service">
                <div class="row justify-content-center">
                  <div class="col-sm-2 text-right">
                    <fa v-if="value == 'red'" class="text-danger fa-3x" :icon="['far', 'frown']"/>
                    <fa v-if="value == 'yellow'" class="text-secondary fa-3x" :icon="['far', 'meh']"/>
                    <fa v-if="value == 'green'" class="text-success fa-3x" :icon="['far', 'smile']"/>
                  </div>
                  <div class="col-sm-10">
                    <h4 class="m-0 ml-20">{{service}}</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card overflow-y-scroll mh-full" :style="{ 'height': this.tweetHeight }">
            <h4 class="text-center font-weight-bold mt-0">Mojang Status Twitter</h4>
            <timeline id="MojangStatus" sourceType="profile" :options="{ tweetLimit: '5', theme: darkMode }" :key="darkMode"><spinner/></timeline>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import { Timeline } from 'vue-tweet-embed'

  import Spinner from './Spinner';

  export default {
    components: {
      Timeline,
      Spinner
    },
    props: {
      darkMode: String
    },
    data() {
      return {
        loading: true,
        apiResult: [],
        tweetHeight: 0
      }
    },
    created() {
      axios.get('https://status.mojang.com/check').then((response) => {
        this.apiResult = response.data;
        this.loading = false;
      });
    },
    updated() {
      this.tweetHeight = this.$refs.apiResult.clientHeight;
    }
  }
</script>