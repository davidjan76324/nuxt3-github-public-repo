import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from 'path'

const config = {
    devtools: { enabled: true },
    modules: ['@unocss/nuxt', '@pinia/nuxt', '@nuxtjs/i18n'],
    unocss: {
        uno: true,
        icons: true,
        attributify: true,
        shortcuts: {},
        rules: []
    },
    imports: {
        dirs: ['stores']
    },
    // 全域載入header!!
    app: {
        head: {
            viewport: 'width=500, initial-scale=1',
            title: 'Nuxt3 高效入門全攻略',
            meta: [
                { name: 'description', content: '這是 Mike 的 Nuxt3 高效入門全攻略課程' },
                { property: 'og:title', content: 'Nuxt3 高效入門全攻略' },
                { property: 'og:url', content: 'http://localhost:3000/' },
                { property: 'og:description', content: '這是 Mike 的 Nuxt3 高效入門全攻略課程' }
            ],
            script: [
                {
                    src: 'https://cdnjs.cloudflare.com/ajax/libs/cytoscape/3.23.0/cytoscape.min.js',
                    body: true,
                    crossorigin: 'anonymous'
                },
                {
                    src: 'https://code.jquery.com/jquery-3.6.4.js',
                    body: true,
                    crossorigin: 'anonymous'
                }
            ]
        }
    },
    // 使用runtimeConfig 定義環境變數！！
    // 注意：此環境變數設定，已經被.env 覆蓋！！
    runtimeConfig: {
        token: '1234567890',
        public: {
            apiUrl: 'https://www.mike.com'
        }
    },
    appConfig: {
        theme: {
            primaryColor: '#0ea5e9'
        }
    },
    vite: {
        plugins: [
            createSvgIconsPlugin({
                iconDirs: [path.resolve(process.cwd(), 'assets/icons')],
                symbolId: 'icon-[dir]-[name]',
                customDomId: '__svg__icons__dom__'
            })
        ],
        define: {
            'process.env': process.env
        },
        server: {
            proxy: {}
        }
    },
    i18n: {
        strategy: 'no_prefix', // 使用更改語系不要改網址的模式
        locales: [
            {
                code: 'zh-TW',
                file: 'zh-TW.json'
            },
            {
                code: 'en-US',
                file: 'en-US.json'
            }
        ],
        langDir: 'language', // 放置語系檔案的資料夾名稱
        defaultLocale: 'zh-TW', // 預設語系
        detectBrowserLanguage: {
            useCookie: true //使用 cookie 紀錄
        }
    },
    nitro: {
        plugins: ['~/server/db/index.js'] // Nitro 啟動時會讀取此js資料
    }
}

/*
    為了區分開發環境會使用到的功能，我們會用到環境變數來做一個判斷！( NODE_ENV 是內建的環境變數 )
*/
if (process.env.NODE_ENV === 'development') {
    config.vite.server.proxy = {
        '/VsWeb/api': {
            target: 'https://www.vscinemas.com.tw/',
            changeOrigin: true
        }
    }
}

// https://nuxt.com/docs/api/configuration/nuxt-config
export default config
