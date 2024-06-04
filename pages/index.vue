<script setup>
// HELPERS
import _get from 'lodash/get'
import stripMeapFromURI from "../utils/stripMeapFromURI"

// GQL
import MEAP_HOMEPAGE from '../gql/queries/Homepage.gql'

const { $graphql } = useNuxtApp()

const route = useRoute()

const { data, error } = await useAsyncData(`meap-home-page-${route.params.slug}`, async () => {
  const data = await $graphql.default.request(MEAP_HOMEPAGE, {
    slug: route.params.slug
  })
  return data
})

if (error.value) {
  throw createError({
    statusCode: error.value.statusCode, statusMessage: error.value.statusMessage + error.value, fatal: true
  })
}

if (!data.value.entry) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page Not Found',
    fatal: true
  })
}

const page = ref(_get(data.value, 'entries', {}))

watch(data, (newVal, oldVal) => {
  console.log('In watch preview enabled, newVal, oldVal', newVal, oldVal)
  page.value = _get(newVal, 'entry', {})
})

const homepage = computed(() => {
  return page.value.map((obj) => {
    return {
      ...obj,
      to: `/${stripMeapFromURI(obj.to)}`,
    }
  })[0]
})

const parsedMastheadHeroImage = computed(() => {
  return homePage.value.heroImage[0].image[0]
})

const featuredMeapResources = computed(() => {
  return homePage.value.featuredMeapResources.map((obj) => {
    return {
      ...obj,
      to: obj.externalResourceUrl
        ? obj.externalResourceUrl
        : `/${stripMeapFromURI(obj.uri)}`,
    }
  })
})

const featuredProjects = computed(() => {
  return homePage.value.featuredProjects.map((obj) => {
    return {
      ...obj,
      image: obj.heroImage[0].image[0],
    }
  })
})

const featuredHighlightedProjects = computed(() => {
  return featuredProjects.value.slice(1)
})

const meapNews = computed(() => {
  return homePage.value.meapNews.map((obj) => {
    return {
      ...obj,
      image: obj.heroImage[0].image[0],
    }
  })
})

// const parsedAdvancedSearchLink = computed(() => {
//   // Last item in searchLinks
//   const advancedLink = page.value.searchLinks.slice(-1)[0]
//   return advancedLink
// })

// const parsedSearchLinks = computed(() => {
//   // Remove last item in searchLinks
//   const searchLinks = [...page.value.searchLinks].slice(0, -1)
//   return searchLinks
// })

// const parsedGetHelpWith = computed(() => {
//   return page.value.getHelpWith[0].getHelpWith.map((obj) => {
//     return {
//       ...obj,
//       to: obj.externalResourceUrl
//         ? obj.externalResourceUrl
//         : `/${obj.uri}`,
//     }
//   })
// })

// const bannerFeaturedEvent = computed(() => {
//   const bannerFeaturedEvent = page.value.featuredEvents[0]
//   return {
//     ...bannerFeaturedEvent,
//     to: `/${bannerFeaturedEvent.uri}`,
//     title:
//       bannerFeaturedEvent.sectionHandle
//         === 'workshopOrEventSeries'
//         ? bannerFeaturedEvent.title
//         : bannerFeaturedEvent.eventTitle,
//     prompt:
//       bannerFeaturedEvent.sectionHandle
//         === 'workshopOrEventSeries'
//         ? 'View series'
//         : `View ${bannerFeaturedEvent.sectionHandle}`,
//     image: _get(bannerFeaturedEvent, 'heroImage[0].image[0]', null),
//     startDate:
//       bannerFeaturedEvent.sectionHandle === 'event'
//         ? _get(bannerFeaturedEvent, 'startDateWithTime', null)
//         : _get(bannerFeaturedEvent, 'startDate', null),
//     endDate:
//       bannerFeaturedEvent.sectionHandle === 'event'
//         ? _get(bannerFeaturedEvent, 'endDateWithTime', null)
//         : _get(bannerFeaturedEvent, 'endDate', null),
//     category: _get(bannerFeaturedEvent, 'category[0].title', ''),
//     description:
//       bannerFeaturedEvent.sectionHandle === 'event'
//         ? _get(bannerFeaturedEvent, 'eventDescription', '')
//         : _get(bannerFeaturedEvent, 'summary', ''),
//     locations:
//       bannerFeaturedEvent.associatedLocations[0] != null
//         ? bannerFeaturedEvent.associatedLocations
//         : bannerFeaturedEvent.eventLocation,
//   }
// })

// TO DO need to update dates on component
// const parsedDualMasonryEvents = computed(() => {
//   const masonaryEvents = page.value.featuredEvents.slice(1, 3)
//   return masonaryEvents.map((obj) => {
//     return {
//       ...obj,
//       to: `/${obj.uri}`,
//       title:
//         obj.sectionHandle === 'workshopOrEventSeries'
//           ? obj.title
//           : obj.eventTitle,
//       image: _get(obj, 'heroImage[0].image[0]', null),
//       startDate:
//         obj.sectionHandle === 'event'
//           ? _get(obj, 'startDateWithTime', null)
//           : _get(obj, 'startDate', null),
//       endDate:
//         obj.sectionHandle === 'event'
//           ? _get(obj, 'endDateWithTime', null)
//           : _get(obj, 'endDate', null),
//       category: 'Featured',
//       prompt:
//         obj.sectionHandle === 'workshopOrEventSeries'
//           ? 'View series'
//           : `View ${obj.sectionHandle}`,
//     }
//   })
// })

// const bannerFeaturedCollection = computed(() => {
//   const bannerFeaturedCollection = page.value.featuredCollections[0]
//   return {
//     ...bannerFeaturedCollection,
//     to: `/${bannerFeaturedCollection.uri}`,
//     image: _get(
//       bannerFeaturedCollection,
//       'heroImage[0].image[0]',
//       null
//     ),
//     category: bannerFeaturedCollection.category
//       ? bannerFeaturedCollection.category.toString()
//       : '',
//     description: _get(bannerFeaturedCollection, 'text', ''),
//     prompt: `View ${bannerFeaturedCollection.sectionHandle}`,
//   }
// })

// const parsedSectionHighlightCollection = computed(() => {
//   const highlightCollections = page.value.featuredCollections.slice(1)
//   return highlightCollections.map((obj) => {
//     return {
//       ...obj,
//       to: `/${obj.uri}`,
//       image: _get(obj, 'heroImage[0].image[0]', ''),
//       category: obj.category ? obj.category.toString() : '',
//     }
//   })
// })

// function parseArticleCategory(categories) {
//   if (!categories || categories.length === 0)
//     return ''
//   let result = ''
//   categories.forEach((obj) => {
//     result = `${result + obj.title}, `
//   })
//   return result.slice(0, -2)
// }

// const bannerFeaturedNews = computed(() => {
//   const bannerFeaturedNews = page.value.featuredNews[0]
//   return {
//     ...bannerFeaturedNews,
//     to:
//       bannerFeaturedNews.externalResourceUrl != null
//         ? _get(bannerFeaturedNews, 'externalResourceUrl', '')
//         : `/${bannerFeaturedNews.to}`,
//     image: _get(bannerFeaturedNews, 'heroImage[0].image[0]', null),
//     // startDate: _get(bannerFeaturedNews, "postDate", null),
//     category: parseArticleCategory(
//       bannerFeaturedNews.articleCategories
//     ),
//     description: _get(bannerFeaturedNews, 'text', ''),
//     startDate: _get(bannerFeaturedNews, 'postDate', ''),
//     endDate: _get(bannerFeaturedNews, 'postDate', ''),
//     prompt: `View ${bannerFeaturedNews.sectionHandle}`,
//   }
// })

// const parsedNewsList = computed(() => {
//   const newsList = page.value.featuredNews.slice(1)
//   return newsList.map((obj) => {
//     return {
//       ...obj,
//       to:
//         obj.externalResourceUrl != null
//           ? _get(obj, 'externalResourceUrl', '')
//           : `/${obj.to}`,
//       image: _get(obj, 'heroImage[0].image[0]', ''),
//       category: parseArticleCategory(obj.articleCategories),
//       startDate: _get(obj, 'postDate', ''),
//       endDate: _get(obj, 'postDate', ''),
//     }
//   })
// })

// useHead({
//   title: page.value?.title || '... loading',
//   meta: [
//     {
//       hid: 'description',
//       name: 'description',
//       content: 'The UCLA Library creates a vibrant nexus of ideas, collections, expertise, and spaces in which users illuminate solutions for local and global challenges. We constantly evolve to advance UCLA’s research, education, and public service mission by empowering and inspiring communities of scholars and learners to discover, access, create, share, and preserve knowledge.',
//     },
//   ],
// })
</script>

<template lang="html">
  <main
    id="main"
    class="page page-home"
  >
    <h1>Hello</h1>
    <!-- <masthead-secondary
      :title="homePage.titleGeneral"
      :text="homePage.summary"
      :hero-image="parsedMastheadHeroImage"
      theme="meap"
      class="meap-masthead-secondary"
    /> -->
    <!-- TODO Add the divider back in when we add the searchbar -->
    <!-- <divider-way-finder
                color="about"
                class="divider-way-finder"
            /> -->
    <!-- <section-wrapper
      v-if="featuredProjects"
      class="section-banner"
    >
      <banner-featured
        class="banner"
        :media="featuredProjects[0].heroImage[0].image[0]"
        :to="featuredProjects[0].to"
        :title="featuredProjects[0].title"
        :category="featuredProjects[0].category"
        breadcrumb="Featured Projects"
        :start-date="featuredProjects[0].startDate"
        :end-date="featuredProjects[0].endDate"
        :ratio="featuredProjects[0].ratio"
        prompt="View project"
      />
    </section-wrapper> -->

    <!-- <section-wrapper>
      <section-teaser-highlight :items="featuredHighlightedProjects" />
      <nuxt-link
        v-if="featuredHighlightedProjects.length"
        class="button-more-link"
        to="/projects"
      >
        <button-more text="Explore Projects" />
      </nuxt-link>
    </section-wrapper> -->

    <!-- <section-wrapper
      v-if="
        featuredProjects &&
        featuredProjects.length &&
        featuredMeapResources &&
        featuredMeapResources.length
      "
      theme="divider"
    >
      <divider-way-finder
        color="about"
        class="divider-way-finder"
      />
    </section-wrapper> -->

    <!-- Program Resources -->
    <!-- <section-wrapper
      v-if="featuredMeapResources && featuredMeapResources.length"
      class="section"
    >
      <simple-cards
        section-title="Program Resources"
        :items="featuredMeapResources"
      />

      <nuxt-link
        v-if="featuredMeapResources.length"
        class="button-more-link"
        to="/applicants/resources"
      >
        <button-more text="See all resources" />
      </nuxt-link>
    </section-wrapper> -->

    <!-- <section-wrapper
      v-if="
        ((featuredProjects && featuredProjects.length) ||
          (featuredMeapResources && featuredMeapResources.length)) &&
        meapNews &&
        meapNews.length
      "
      theme="divider"
    >
      <divider-way-finder
        color="about"
        class="divider-way-finder"
      />
    </section-wrapper> -->

    <!-- Announcements -->
    <!-- <section-wrapper
      v-if="meapNews && meapNews.length"
      section-title="News"
      class="section"
    >
      <section-teaser-card
        :items="meapNews"
        :image="meapNews[0].heroImage[0].image[0]"
        class="meap-news"
      />

      <nuxt-link
        v-if="featuredMeapResources.length"
        class="button-more-link"
        to="/about/news"
      >
        <button-more text="See all news" />
      </nuxt-link>
    </section-wrapper> -->
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
