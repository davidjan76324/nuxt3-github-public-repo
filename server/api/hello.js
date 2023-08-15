export default defineEventHandler((event) => {
    const data = {
        name: 'mike',
        age: 12
    }
    console.log('in api/hello')
    return {
        data
    }
})
