<template>
    <div class="page-wrapper with-navbar-fixed-bottom">
        <div class="content-wrapper">
            <div class="container-fluid">
                <div class="row justify-content-center">
                    <div class="col-md-4">
                        <div class="card" ref="apiResult">
                            <h4 class="text-center font-weight-bold mt-0">Current API Status</h4>
                            <div v-if="apiResultLoading" class="text-center">
                                <SpinnerElement/>
                            </div>
                            <div v-if="apiResult != null">
                                <div class="list-item mb-10" v-for="service in apiResult" :key="service.id">
                                    <div class="row justify-content-center">
                                        <div class="col-2 text-right">
                                            <font-awesome-icon v-if="service.status" class="text-success fa-3x" icon="smile"/>
                                            <font-awesome-icon v-else class="text-danger fa-3x" icon="frown"/>
                                        </div>
                                        <div class="col-10">
                                            <div class="ml-20">
                                                <p class="m-0 font-size-22">{{service.description}}</p>
                                                <small><a :href="service.url" target="_blank">API URL</a></small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div v-else class="text-center h-full">
                                <font-awesome-icon class="text-danger fa-7x" icon="frown" />
                                <h4>Uh oh, this isn't good!</h4>
                                <p>It looks like you have NO connection to any Mojang Servers. You should probably see what's going on!</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card overflow-y-scroll mh-full">
                            <h4 class="text-center font-weight-bold mt-0">Mojang Status Twitter</h4>
                            <TwitterTimeline url="MojangStatus" theme="dark">
                                <SpinnerElement/>
                            </TwitterTimeline>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-2">
                        <div class="text-center">
                            <small class="pb-10 d-block"><font-awesome-icon icon="sync" spin/> Refreshing in {{refreshTime}} seconds...</small>
                            <a href="https://capecraft.net" target="_blank">
                                <img class="w-full" src="https://capecraft.net/images/logo/logo-grass.png"/>
                                </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <FooterElement/>
    </div>
</template>

<style>
    .card {
        height: 75vh;
    }
</style>

<script>
    import SpinnerElement from '@/components/SpinnerElement';
    import TwitterTimeline from '@/components/TwitterTimeline.vue'
    import FooterElement from '@/components/FooterElement.vue'

    export default {
        data() {
            return {
                apiResult: [],
                apiResultLoading: true,
                refreshTime: 60,
                refreshInterval: null
            }
        },
        created() {
            this.refreshApi();
        },
        methods: {
            refreshApi() {
                this.loadApi();
                this.refreshInterval = setInterval(() => {
                    if(this.refreshTime <= 0) {
                        this.loadApi();
                        this.refreshTime = 60;
                    }
                    this.refreshTime--;
                }, 1000)
            },
            loadApi() {
                this.axios.get('/v1/status').then((response) => {
                    this.apiResult = response.data;
                }).catch(() => {
                    this.apiResult = null;
                }).finally(() => {
                    this.apiResultLoading = false;
                });
            }
        },
        beforeUnmount() {
            clearInterval(this.refreshInterval)
        },
        components: {
            SpinnerElement,
            TwitterTimeline,
            FooterElement
        },
    }
</script>