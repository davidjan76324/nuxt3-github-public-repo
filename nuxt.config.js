import path from 'path'

const config = {
    devtools: { enabled: true },
    modules: [],
    css: [
        // SCSS file in the project
        '~/assets/main.scss', // you should add main.scss somewhere in your app
        'bootstrap/dist/css/bootstrap.css',
        '~/assets/bootstrap_grid.scss'
        // 'bootstrap/dist/css/bootstrap-grid.css'
    ]
}

// https://nuxt.com/docs/api/configuration/nuxt-config
export default config
