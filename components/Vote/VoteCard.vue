<template>
    <div class="card mr-10" v-for="(item, index) in voteData" :key="index">
        <img :src="item.path" :alt="item.name" class="w-60 h-60" />
        <div class="container">
            <h2>
                <b>{{ item.name }}</b>
            </h2>
            <button @click="voteCard(item.name)">投票數 {{ item.count }}</button>
        </div>
    </div>
</template>
<script setup>
    import { storeToRefs } from 'pinia'
    let voteStore = useVoteStore()
    let { setVoteDataCount } = useVoteStore()
    let { voteData } = storeToRefs(voteStore)
    let voteCard = function (name) {
        setVoteDataCount(name)
    }
</script>
<style lang="scss">
    .card {
        /* Add some padding inside the card container */
        .container {
            padding: 2px 16px;
        }
    }
</style>
