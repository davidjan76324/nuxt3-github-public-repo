/*
    用server/routes/... 在打 api 時就不用加上「/api/」的字眼
*/
export default defineEventHandler((event) => {
    const data = {
        name: 'DavidJan',
        age: 1000
    }
    return {
        data
    }
})
