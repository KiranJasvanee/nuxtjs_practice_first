<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">
        nuxt-blog-seo
      </h1>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
   head () {
    return {
      title: `Testing Title`,
      meta: [{
        hid: `description`,
        name: 'description',
        content: `Testing Description - d`
      },{
        hid: `og:description`,
        name: 'og:description',
        content: `Testing Description`
      },{
        hid: `og:image`,
        name: 'og:image',
        property: 'og:image',
        content: `https://www.swiftbysundell.com/images/social.png`
      },{
        hid: `twitter:card`,
        name: 'twitter:card',
        // content: `Summary`
        content: `summary_large_image`
      },{
        hid: `twitter:title`,
        name: 'twitter:title',
        content: `Twitter description`
      },{
        hid: `twitter:image`,
        name: 'twitter:image',
        content: `https://pbs.twimg.com/media/Elk4bvfWkAAesRR?format=jpg&name=small`
      },{
        hid: `twitter:url`,
        name: 'twitter:url',
        content: `https://kiranjasvanee.github.io/nuxtjs_practice_first`
      }
      ],
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
