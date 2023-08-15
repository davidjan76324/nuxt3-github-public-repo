import { defineStore } from 'pinia'

export const useVoteStore = defineStore('vote', function () {
    let voteData = ref({})
    let setVoteData = function (params) {
        voteData.value = params
    }

    let setVoteDataCount = function (name) {
        voteData.value[name].count++
    }
    return {
        voteData,
        setVoteData,
        setVoteDataCount
    }
})
