<template>
    <nav class="navbar navbar-fixed-bottom footer">
        <!-- Navbar content with the dropup menu -->
        <span class="navbar-text"><fa :icon="['fab', 'github']"/><a target="_blank" class="ml-5" href="https://github.com/james090500/MojangStatus">GitHub</a></span>
        <span class="navbar-text ml-auto"><small>Like this project? <a target="_blank" href="https://paypal.me/james090500">Buy me a coffee ☕</a></small></span>
        <span class="navbar-text ml-auto"><fa icon="copyright"/><a target="_blank" class="ml-5" href="https://james090500.com">James Harrison</a></span>
    </nav>
</template>

<style>
    .footer {
        position: fixed !important;
        bottom: 0;
    }
</style>