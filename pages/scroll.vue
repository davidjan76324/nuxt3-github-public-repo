<script setup>
    let { searchData } = useRepoSearch()

    /*
      上課講師這裡包 useAsyncData 根本沒用，
      要 useAsyncData 內要 return $.fetch 才會對第一次只打後端 api，前端不會打 api，要遵照 useAsyncData 使用規則才會有 SSR。
    */
    // useAsyncData('repos', async () => await searchData('MikeCheng1208'))
</script>

<template>
    <div id="app">
        <UserTitle />
        <ReposList />
    </div>
</template>

<style scoped>
    #app {
        width: 100%;
    }
</style>
