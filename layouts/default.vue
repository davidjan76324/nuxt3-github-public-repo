<script setup>
    import 'virtual:svg-icons-register'

    // 自定義的 NuxtLoadingIndicator，利用hook with page:start & page:finish
    const nuxtApp = useNuxtApp()
    const isLoading = ref(false)
    nuxtApp.hook('page:start', () => {
        isLoading.value = true
    })
    nuxtApp.hook('page:finish', () => {
        isLoading.value = false
    })

    /*
        注意： store 的程式碼只會跑一次，往後呼叫就不會在進入了！
    */
    // 為了課程往下，暫時註解
    // let { checkAuth } = useLogingStore()
    // let cookie = useCookie('auth') //取得 Token
    // let auth1 = cookie.value?.token
    // console.log(auth1)
    // onMounted(() => {
    //     checkAuth()
    //     let interval = setInterval(function () {
    //         let cookie2 = useCookie('auth') //重抓 cookie auth，為了要比對一開始取得的 Token 有沒有一致
    //         let auth2 = cookie2.value?.token
    //         if (auth1 !== auth2) {
    //             clearInterval(interval)
    //             window.location.reload()
    //         }
    //     }, 100)
    // })
</script>

<template>
    <div>
        <header class="mb-5 bg-blue h-10">The default header</header>
        <!-- Nuxt page 的部份-->

        <!-- NuxtLoadingIndicator：頁面換頁時的過場 -->
        <!-- <NuxtLoadingIndicator :color="'green'" :height="10" :throttle="0" /> -->

        <!-- 自定義的 NuxtLoadingIndicator -->
        <h1 v-show="isLoading" class="bg-red">Loading...</h1>
        <slot></slot>
        <footer class="mt-5 bg-blue h-10">The default footer</footer>
    </div>
</template>

<style lang="scss"></style>
