export default defineNuxtPlugin((nuxtApp) => {
    return {
        provide: {
            hello: function (msg) {
                return `Hello ${msg}`
            }
        }
    }
})
