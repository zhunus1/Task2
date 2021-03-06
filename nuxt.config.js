module.exports = {
  /*
  ** Headers of the page
  
  */
  mode: 'spa',
  head: {
    title: 'task2',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  css: [
  'bootstrap/dist/css/bootstrap.css',
  ],
  plugins: [
      { src: '@/plugins/bootstrap.js', ssr: false },
    ],
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  modules: [
    '@nuxtjs/axios',
  ],    

  axios: {
    baseURL: 'http://localhost:8000/api/v1',
  },

  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }

  }
}
