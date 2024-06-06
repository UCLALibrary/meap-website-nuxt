<script setup>
// Helpers
import _get from "lodash/get"
import format from "date-fns/format"

// GQL
import ARTICLE_NEWS_LIST from "../gql/queries/ArticleNewsList.gql"

// Search
import getListingFilters from "../utils/getListingFilters"
import config from "../utils/searchConfig"
import queryFilterHasValues from "../utils/queryFilterHasValues"

const { $graphql } = useNuxtApp()

const { data, error } = await useAsyncData('article-news-list', async () => {
  const data = await $graphql.default.request(ARTICLE_NEWS_LIST)
  console.log(data)
  return data
})

if (error.value) {
  throw createError({
    ...error.value, statusMessage: 'Page not found.' + error.value, fatal: true
  })
}

if (!data.value.entry && !data.value.entries) {
  throw createError({ statusCode: 404, message: 'Page not found', fatal: true })
}

// DATA
const page = ref(_get(data.value, 'entry', {}))
const summaryData = ref(_get(data.value, 'entries', []))

console.log('expected page data: ', page.value)
console.log('expected summary data: ', summaryData.value)



</script>

<template>
  <main
    id="main"
    class="page page-news"
  >
    <h1>Hello</h1>
  </main>
</template>

<style lang="scss" scoped>
.page-news {

  .generic-search {
    margin-bottom: var(--space-3xl);
  }

  :deep(.block-staff-article-item) {
    --divider-color: var(--color-secondary-grey-02);
  }

  .banner-header.color-about {
    --color-theme: var(--color-visit-fushia-03);
  }

  :deep(.block-highlight.color-about) {
    --floating-highlight-color-theme: var(--color-visit-fushia-03);
  }

  @media #{$medium} {
    .banner-header {
      margin-top: 0;
    }
  }
}
</style>
