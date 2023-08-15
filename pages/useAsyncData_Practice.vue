<template>
    <div>
        {{ info }}
        {{ peopleAllInfo }}
    </div>
    <button @click="repost">Refresh</button>
</template>
<script setup>
    /*
        經驗注意：
        1.後端打api不代表會有SSR(單獨用$fetch就沒有SSR)。
        2.前端打api絕對不會有SSR。
        3.要遵照 useAsyncData or useFetch 的使用規則才會有 SSR。
        4.單獨用 $fetch，前後端都會打api，沒SSR。
    */

    // 遵照 useAsyncData 規則，一定會有SSR，refresh 也有！
    // let { data: peopleAllInfo, refresh: peopleAllRefresh } = await useAsyncData('getAllPeoples', () =>
    //     $fetch('/api/people')
    // )

    let info = ref(null)
    let gg = $fetch('/api/people')
    gg.then((response) => {
        info.value = response
    })

    let repost = function () {
        let kk = $fetch('/api/people')
        kk.then((response) => {
            info.value = response
        })
    }
</script>
<style lang="scss"></style>
