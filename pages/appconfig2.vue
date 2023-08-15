<template>
    <h1>{{ theme }}</h1>
    <div>
        <p>「/composables/useAddCount」Test：</p>
        <div>Use ref：{{ count }}</div>
        <br />
        <div>Use reactive：{{ nameObj }}</div>
    </div>
</template>
<script setup>
    // use appConfig from nuxt.config.js
    const appConfig = useAppConfig()
    const { theme } = appConfig //theme = proxy(object)

    /*
        注意：以下純粹用 composables/useAddCount，所以換頁不會記憶，要記憶則要用 pinia
    */
    // use useAddCount from 「/composables/useAddCount」
    let { count, nameObj } = useAddCount()
    console.log(nameObj) // proxy(object)
</script>
<style lang="scss"></style>
