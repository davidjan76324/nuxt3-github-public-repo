<template>
    <h1>A lot of Api</h1>
    <div class="bg-green">{{ orgsData }}</div>
    <div class="bg-red">{{ repoData }}</div>
</template>
<script setup>
    // const { data: orgsData } = await useFetch(`https://api.github.com/orgs/nuxt`)
    // const { data: repoData } = await useFetch(`https://api.github.com/orgs/nuxt/repos`)

    let [{ data: orgsData }, { data: repoData }] = await Promise.all([
        useFetch(`https://api.github.com/orgs/nuxt`),
        useFetch(`https://api.github.com/orgs/nuxt/repos`)
    ])
</script>
<style lang="scss"></style>
