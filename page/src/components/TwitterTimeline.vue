<template>
    <!-- The class 'twitter-timeline' has to been set to get twitter recogize the element -->
    <a
        class="twitter-timeline"
        :href="'https://twitter.com/' + url"
        :data-theme="theme"
    ></a>
</template>

<script>
    /**
     * A modified version for cleanliness
     * @see https://github.com/Buni48/vue-twitter-timeline
     * @version 1.0.0
     */
    export default {
        props: {
            /**
             * Url of the twitter timeline without 'twitter.com/'
             * @example TwitterDev/lists/national-parks?ref_src=twsrc%5Etfw
             */
            url: {type: String, required: true},
            /**
             * Theme to use by twitter timeline
             *
             * By default the system settings of the user will be chosen or if not detectable the light theme
             * @values '', 'light', 'dark',
             */
            theme: {type: String, default: ''},
        },
        mounted() {
            this.addScript();
        },
        methods: {
            addScript() {
                const script = document.createElement('script');
                script.setAttribute('src', 'https://platform.twitter.com/widgets.js');
                document.body.appendChild(script);
            }
        }
    }
</script>
