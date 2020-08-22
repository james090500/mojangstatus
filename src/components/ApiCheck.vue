<template>
  <div class="content-wrapper">
    <div class="container-fluid">
      <div class="row justify-content-center">
        <div class="col-md-4">
          <div class="card" ref="apiResult">
            <h4 class="text-center font-weight-bold mt-0">Current API Status</h4>
            <div v-if="apiResult != null">
              <div class="list-item mb-10" v-for="check in apiResult" :key="JSON.stringify(check)">
                <div v-for="(value, service) in check" :key="service">
                  <div class="row justify-content-center">
                    <div class="col-2 text-right">
                      <fa v-if="value == 'red'" class="text-danger fa-3x" :icon="['far', 'frown']"/>
                      <fa v-if="value == 'yellow'" class="text-secondary fa-3x" :icon="['far', 'meh']"/>
                      <fa v-if="value == 'green'" class="text-success fa-3x" :icon="['far', 'smile']"/>
                    </div>
                    <div class="col-10">
                      <span class="m-0 ml-20 font-size-22">{{service}}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="text-center h-full" v-else>
              <fa class="text-danger fa-7x" :icon="['far', 'frown']"/>
              <h4>Uh oh, this isn't good!</h4>
              <p>It looks like you have NO connection to any Mojang Servers. You should probably see what's going on!</p>
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
  import { Timeline } from 'vue-tweet-embed';
  import axios from 'axios';
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
        apiResult: [],
        tweetHeight: 0
      }
    },
    created() {
      axios.get('https://status.mojang.com/check').then((response) => {
        this.apiResult = response.data;
      }).catch(() => {
        this.apiResult = null;
      });
    },
    updated() {
      this.tweetHeight = this.$refs.apiResult.clientHeight;
    }
  }
</script>