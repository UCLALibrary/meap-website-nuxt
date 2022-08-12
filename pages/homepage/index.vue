<template lang="html">
    <main class="page page-help-topic">
        <masthead-secondary
            title="Modern Endangered Archives Program"
            text="Our grants enable digitization and access to at-risk cultural heritage collections from around the world. Explore our projects and learn more about available grant opportunities. "
        />
        <divider-way-finder
            color="about"
            class="divider-way-finder"
        />

        <!-- <banner-featured
            class="section banner banner-visit"
            :image="homePage.image"
            :to="homePage.to"
            :title="homePage.title"
            :category="homePage.category"
            :breadcrumb="homePage.breadcrumb"
            :start-date="homePage.startDate"
            :end-date="homePage.endDate"
            :prompt="homePage.prompt"
            :ratio="homePage.ratio"
            :align-right="false"
        >
            <heading-arrow
                :text="homePage.breadcrumb"
                :to="homePage.to"
            />
        </banner-featured> -->
    </main>
</template>

<script>
// GQL
import MEAP_HOMEPAGE from "~/gql/queries/HomePage"

// Helpers
import _get from "lodash/get"

import * as MOCK_API from "~/data/mock-api.json"

export default {
    async asyncData({ $graphql, params, store }) {
        // Do not remove testing live preview
        
        const banner = {
            image: MOCK_API.image,
            to: "/help/foo/bar/",
            title: "Ephemera from the Barbados Department of Archives",
            category: "Quisque",
            breadcrumb: "Lorem ipsum dolor sit amet",
            startDate: "1995-12-17T03:24:00",
            endDate: "1995-12-17T03:24:00",
            locations: [
                {
                    id: "523",
                    title: "Online",
                    to: "visit/locations/Online",
                },
            ],
            prompt: "Read More",
            alignRight: true,
        }
        const data = await $graphql.default.request(MEAP_HOMEPAGE, {
            slug: params.slug,
            banner
        })
        return {
            page: _get(data, "entries", {}),
        }
    },
    head() {
        let title = this.page ? this.page.title : "... loading"
        return {
            title: title,
        }
    },
    computed: {
        homePage() {
            return this.page.map((obj) => {
                return {
                    ...obj,
                    to: `/applicants/${obj.to}`,
                }
            })
        },
    },
}
</script>

<style lang="scss" scoped>

  .divider-way-finder {
      max-width: $container-l-main + px;
      margin: var(--space-3xl) auto;
  }
</style>
