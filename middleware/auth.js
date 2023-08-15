export default defineNuxtRouteMiddleware((to, from) => {
    console.log('Middleware from auth.js address=>', { to, from })
})
