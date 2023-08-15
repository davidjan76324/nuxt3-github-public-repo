import { defineStore } from 'pinia'

export const useHomeStore = defineStore('home', function () {
    let count = ref(0)
    let add = function () {
        count.value++
        console.log(count.value)
    }

    return {
        count,
        add
    }
})
