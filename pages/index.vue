<template>
    <h1>Index:{{ store.count }}</h1>
    <h2>{{ $hello('DavidJan') }}</h2>

    <h2 v-timeformat="1686117019052"></h2>
    <Home />
    <Box />
    <BoxBtn />
    <div class="mb-4">
        <button @click="store.add">Click</button>
    </div>
    <div class="mb-4">
        <VDatePicker v-model="selectedDate" />
    </div>
    <div class="mb-4">
        <NuxtLink to="/user">To User Page</NuxtLink>
    </div>
    <div class="mb-4">
        <button @click="post_hello_api">post hello api</button>
    </div>
    <div class="mb-4">
        <p>{{ mydata }}</p>
    </div>
    <div class="mb-4">
        <p>Refresh /api/hello2</p>
        <button @click="refreshApi">Refresh 「/api/hello2」 Api</button>
    </div>
</template>
<script setup>
    console.log('index page=>')
    const store_test = useLogingStore()
    console.log(store_test)
    let store = useHomeStore()
    const { $hello } = useNuxtApp() // use pligin function
    let selectedDate = ref(new Date())

    let post_hello_api = async function (params) {
        const { data, pending, error, refresh } = await useFetch('/api/hello', {})
        console.log(data.value.data)
    }

    let mydata = ref('')
    const { data } = await useFetch('https://api.nuxtjs.dev/mountains') // useFetch會有ssr的功能(只限於剛載入時)
    mydata.value = data.value

    let post_fuck = await useFetch('/api/hello2', {
        method: 'POST',
        onRequest({ request, options }) {
            // 設定請求時夾帶的標頭(回call時才可使用，第一次call不會進入)
            options.headers = options.headers || {}
            options.headers.authorization = '....'
            console.log('/api/hello2 onRequest')
        },
        onRequestError({ request, options, error }) {},
        onResponse({ request, response, options }) {
            return response._data
        },
        onResponseError({ request, response, options }) {}
    })
    console.log(post_fuck.data.value)

    let refreshApi = function (params) {
        post_fuck.refresh()
    }

    let config = useRuntimeConfig()
    if (process.server) {
        console.log('config.token=>', config.token)
        console.log('config =>', config)
    }
    if (process.client) {
        console.log(config)
    }

    // 在 nuxt.congfig.js 內利用 vite 方式把環境變數 .env 讀進 process.env 內，並於 vue 引用
    console.log(process.env)
    console.log('WEB_URL=>', process.env.WEB_URL)
</script>
