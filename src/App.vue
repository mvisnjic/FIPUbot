<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import AppHeader from './components/appHeader.vue'
import AppFooter from './components/appFooter.vue'
</script>

<template>
    <div
        class="bg-[url('/background.jpg')] bg-cover"
        :class="{
            'bg-none':
                $route.name === 'aboutPage' || $route.name === 'contactPage',
        }"
    >
        <div
            class="flex flex-col justify-between h-screen w-full backdrop-blur-lg"
            :class="{
                'backdrop-blur-none': $route.name === 'indexPage',
            }"
        >
            <AppHeader />
            <router-view />
            <AppFooter />
        </div>
    </div>
</template>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 90%;
    /* background-size: cover; */
    /* background-image: url('./background.jpg'); */
}
</style>
