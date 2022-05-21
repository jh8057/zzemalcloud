module.exports = {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'zzemalcloud',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Color Diary' },
            { name: 'format-detection', content: 'telephone=no' },
            { name: 'author', content: 'zzemal' },
            // { property:"og:url", content:"" },
            // { property:"og:title", content:"" },
            // { property:"og:description", content:"" },
            // { property:"og:image", content:"" },
        ],
        link: [
            //menu icon
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            //font
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,600;0,700;1,400&display=swap',
            },
        ],
        //icon
        script: [
            {
                src: 'https://kit.fontawesome.com/b50a7e6f6b.js',
                crossorigin: 'anonymous',
            },
            { src: 'https://cdn.jsdelivr.net/npm/chart.js' },
        ],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: ['~/assets/style', '~/assets/styleSCSS'],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/typescript
        '@nuxt/typescript-build',
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/pwa
        '@nuxtjs/pwa',
        '@nuxtjs/axios',
    ],

    // PWA module configuration: https://go.nuxtjs.dev/pwa
    pwa: {
        manifest: {
            lang: 'en',
        },
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},

    // 서버개발 참여여부
    telemetry: true,

    //github page
    target: 'static',
    router: {
        base: '/zzemalcloud/',
    },
};
