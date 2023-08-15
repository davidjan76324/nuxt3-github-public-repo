import { defineStore, storeToRefs } from 'pinia'

export const useTestStore = defineStore('test', function () {
    let voteStore = useVoteStore()
    let { voteData } = storeToRefs(voteStore)
    return {
        voteData
    }
})
