<template>
    <h1>User</h1>
    <!-- 組件化設定 Meta Tag -->
    <Head>
        <Title>{{ title }}</Title>
        <Meta name="description" :content="description" />
        <Link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
    </Head>
</template>
<script setup>
    // 匿名 route middleware
    // definePageMeta({
    //     middleware: (to, from) => {
    //         console.log('address=>', { to, from })
    //     }
    // })

    // 具名 route middleware
    definePageMeta({
        middleware: ['auth']
    })

    const res = await useFetch('https://vue-lessons-api.vercel.app/seo/user')

    const title = computed(() => res.data.value.title)

    const description = computed(() => res.data.value.description)
</script>
<style lang="scss"></style>
