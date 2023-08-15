export const useAddCount = () => {
    let count = ref(0) // auto import
    let nameObj = reactive({ name: 'davidjan' }) //參數只接受物件型別(例如：Object、Array、Map、Set)，建議保持追蹤資料的參照 (reference) 一致
    let addCount = function () {
        count.value++
    }
    let setName = function (params) {
        nameObj.name = params
    }
    return {
        count,
        addCount,
        setName,
        nameObj
    }
}
