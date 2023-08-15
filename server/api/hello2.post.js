export default defineEventHandler((event) => {
    console.log('event.header=>', event.req.headers)
    const data = {
        name: 'mike',
        age: 12
    }
    return {
        data
    }
})
