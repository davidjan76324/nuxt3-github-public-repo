<template>
    <h1>{{ theme }}</h1>
    <div>
        <p>「/composables/useAddCount」Test：</p>
        <div>
            Use ref：
            <button @click="addCount">{{ count }}</button>
        </div>
        <br />
        <div>
            Use reactive：
            <button @click="setName('Mee')">{{ nameObj }}</button>
        </div>
    </div>
    <div>
        <NuxtLink to="/appconfig2">To appconfig2</NuxtLink>
    </div>
</template>
<script setup>
    // use appConfig from nuxt.config.js
    const appConfig = useAppConfig()
    appConfig.theme.primaryColor = 'red'
    const { theme } = appConfig //theme = proxy(object)

    /*
        注意：以下純粹用 composables/useAddCount，所以換頁不會記憶，要記憶則要用 pinia
    */
    // use useAddCount from 「/composables/useAddCount」
    let { count, addCount, setName, nameObj } = useAddCount()
    console.log(nameObj) // proxy(object)
</script>
<style lang="scss"></style>
