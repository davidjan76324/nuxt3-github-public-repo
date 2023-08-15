import { defineStore } from 'pinia'

export const useCountStore = defineStore('count', function () {
    let flag = reactive({})
    let setFlag = function (params) {
        Object.assign(flag, params) // 維持 proxy 包裝響應，直接等於就會失去 proxy 包裝響應
    }
    let add = function () {
        flag.count++
    }

    return {
        flag,
        setFlag,
        add
    }
})
