<template>
    <div class="page-wrapper with-navbar-fixed-bottom">
        <ApiCheck/>
        <FooterElement/>
    </div>
</template>

<script>
    import ApiCheck from './components/ApiCheck.vue'
    import FooterElement from './components/FooterElement.vue'

    export default {
        name: 'App',
        components: {
            ApiCheck,
            FooterElement
        }
    }
</script>
