import { defineStore } from 'pinia'
export const useLogingStore = defineStore('login', () => {
    /*
        注意：如果 useCookie 設定的 domain 跟本身 url 的 domain 不一樣則無法寫入

        注意：讀取時，會依照本身 url 的 domain 去找尋對應的cookie！
    */
    let cookie = useCookie('auth')

    const router = useRouter()

    const error_message = ref({
        username: '',
        password: ''
    })

    const isLoading = ref(false)

    const handleLoading = () => (isLoading.value = !isLoading.value)

    const sendLoginAuth = async ({ username, password }) => {
        if (isLoading.value) return
        isLoading.value = true
        try {
            // https://vue-lessons-api.vercel.app
            const res = await $fetch('https://vue-lessons-api.vercel.app/auth/login', {
                method: 'POST',
                body: { username, password }
            })

            // save token
            cookie.value = {
                token: res.data.token, // 設定 cookie 的 Token
                name: username
            }
            router.push('/')
        } catch (error) {
            const { username } = error.response._data.error_message
            error_message.value = {
                username,
                password: 'password error'
            }
        } finally {
            isLoading.value = false
        }
    }

    // 驗證 Token
    const checkAuth = async () => {
        try {
            // https://vue-lessons-api.vercel.app
            let testToken = await $fetch('https://vue-lessons-api.vercel.app/testToken', {
                method: 'POST',
                headers: {
                    Authorization: cookie.value?.token // 獲取 cookie 的 Token
                }
            })
            alert('驗證成功！')
            router.push('/')
        } catch (e) {
            cookie.value = null
            router.push('/login')
        }
    }

    return {
        isLoading,
        handleLoading,
        sendLoginAuth,
        checkAuth,
        error_message
    }
})
