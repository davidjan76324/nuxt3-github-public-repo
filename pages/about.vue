<script setup>
    // 方法一：
    // useHead({
    //     title: '關於我們 About - Nuxt3 高效入門全攻略',
    //     meta: [
    //         { property: 'og:title', content: '關於我們 About - Nuxt3 高效入門全攻略' },
    //         { property: 'og:url', content: 'http://localhost:3000/about' },
    //         { property: 'og:image', content: 'http://localhost:3000/share.jpg' },
    //         { name: 'description', content: '關於我們 About - 最棒的Nuxt3的線上課程' },
    //         { property: 'og:description', content: '關於我們 About - 最棒的Nuxt3的線上課程' }
    //     ]
    // })

    // 方法二：
    // useSeoMeta({
    //     title: 'About - Nuxt3 高效入門全攻略',
    //     description: '關於我們 - 最棒的Nuxt3的線上課程',
    //     ogDescription: '關於我們 - 最棒的Nuxt3的線上課程',
    //     ogTitle: 'About - Nuxt3 高效入門全攻略',
    //     ogImage: '',
    //     ogUrl: 'http://localhost:3000/about',
    //     twitterCard: 'summary_large_image',
    //     twitterSite: '',
    //     twitterCreator: ''
    // })

    // useServerSeoMeta：只能用在setup內，無法用在function內動態更變
    useServerSeoMeta({
        title: '關於我們 - Nuxt3 高效入門全攻略'
    })

    useHead({
        link: [
            {
                rel: 'stylesheet',
                href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css'
            }
        ],
        script: [
            {
                src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.3/jquery.min.js',
                async: true,
                tagPosition: 'bodyClose',
                crossorigin: 'anonymous'
            }
        ]
    })
</script>

<template>
    <AboutHeader />
    <div>
        <h1>About</h1>
    </div>
    <div class="mb-4">
        <button>useServerSeoMeta</button>
    </div>
    <div class="mb-4">
        <NuxtLink to="/about">index</NuxtLink>
    </div>
    <div class="mb-4">
        <NuxtLink to="/about/a">A</NuxtLink>
    </div>
    <div class="mb-4">
        <NuxtLink to="/about/b">B</NuxtLink>
    </div>
    <div class="mb-4 bg-red">
        <NuxtPage />
    </div>
    <AboutFooter />
</template>

<style scoped>
    a {
        padding-left: 20px;
        padding-right: 20px;
    }
</style>
