<script setup>
//GQL
import MEAP_HOMEPAGE from '../gql/queries/HomePage.gql'
const { $graphql } = useNuxtApp()
const { data, error } = await useAsyncData(`meap-home-page`, async () => {
  const data = await $graphql.default.request(MEAP_HOMEPAGE)
  console.log(data)
  return data
})
if (error.value) {
  throw createError({
    statusCode: error.value.statusCode, statusMessage: error.value.statusMessage + error.value, fatal: true
  })
}
if (!data.value.entries) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page Not Found',
    fatal: true
  })
}
console.log(data.value)
// const page = ref(_get(data.value, 'entries', {}))

// watch(data, (newVal, oldVal) => {
//   console.log('In watch preview enabled, newVal, oldVal', newVal, oldVal)
//   page.value = _get(newVal, 'entry', {})
// })

// const homePage = computed(() => {
//   return page.value.map((obj) => {
//     return {
//       ...obj,
//       to: `/${stripMeapFromURI(obj.to)}`,
//     }
//   })[0]
// })

// const parsedMastheadHeroImage = computed(() => {
//   return homePage.value.heroImage[0].image[0]
// })

// const featuredMeapResources = computed(() => {
//   return homePage.value.featuredMeapResources.map((obj) => {
//     return {
//       ...obj,
//       to: obj.externalResourceUrl
//         ? obj.externalResourceUrl
//         : `/${stripMeapFromURI(obj.uri)}`,
//     }
//   })
// })

// const featuredProjects = computed(() => {
//   return homePage.value.featuredProjects.map((obj) => {
//     return {
//       ...obj,
//       image: obj.heroImage[0].image[0],
//     }
//   })
// })

// const featuredHighlightedProjects = computed(() => {
//   return featuredProjects.value.slice(1)
// })

// const meapNews = computed(() => {
//   return homePage.value.meapNews.map((obj) => {
//     return {
//       ...obj,
//       image: obj.heroImage[0].image[0],
//     }
//   })
// })
</script>
<template>
  <main
    id="main"
    class="page page-home"
  >
    <h1>Hello</h1>
    <div>
      This is sample home page
    </div>
  </main>
</template>
<style lang="scss" scoped>
.page-home {
  .meap-masthead-secondary {
    margin-bottom: var(--space-3xl);

    :deep(.container .meta .rich-text a) {
      color: var(--color-white);

      &:hover {
        color: var(--color-white);
        font-weight: 500;
      }
    }
  }

  .button-more-link {
    margin: var(--space-xl) auto;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    max-width: fit-content;

    :deep(.button-more) {
      display: inline-flex;
      max-width: unset;
    }
  }
}
</style>