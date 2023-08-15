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
</template>
<script setup>
    import { storeToRefs } from 'pinia'
    let testStore = useTestStore()
    let { voteData: testVoteData } = storeToRefs(testStore)
</script>
<style lang="scss"></style>
