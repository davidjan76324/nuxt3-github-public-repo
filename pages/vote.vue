<template>
    <h1>投票</h1>
    <div class="mb-4">
        <p>pinia ＋ ref：</p>
        <div class="flex-inline">
            <VoteCard />
        </div>
    </div>
    <div class="bg-yellow">
        <p>
            <u>testStore 調用 voteStore 的資料：</u>
        </p>
        <p>
            {{ testVoteData }}
        </p>
    </div>
    <div>
        <!--
            注意：一開始是靠server端拿資料，再按下 refresh 是使用 client 端去拿資料。
        -->
        <button @click="refresh">Refresh</button>
    </div>
    <div>
        <p>pinia ＋ reactive：</p>
        <button @click="flagAdd">{{ flag }}</button>
    </div>
    <div>
        <NuxtLink to="/vote2">To Vote2</NuxtLink>
    </div>
</template>
<script setup>
    import { storeToRefs } from 'pinia'

    let voteStore = useVoteStore()
    let { setVoteData } = voteStore
    let { data, refresh } = await useFetch('https://vue-lessons-api.vercel.app/vote/list')
    setVoteData(data.value) //設定voteData

    let testStore = useTestStore()
    let { voteData: testVoteData } = storeToRefs(testStore) // ref 參數要靠 storeToRefs 解構才可以響應

    // pinia ＋ reactive
    let store = useCountStore()
    console.log(store)
    let { flag, setFlag, add: flagAdd } = store // reactive參數直接解構就可以響應了
    setFlag({ count: 0 })
</script>
<style lang="scss"></style>
