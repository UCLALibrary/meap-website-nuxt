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

        <banner-featured
            class="section banner banner-visit"
            :image="bannerVisit.image"
            :to="bannerVisit.to"
            :title="bannerVisit.title"
            :category="bannerVisit.category"
            :breadcrumb="bannerVisit.breadcrumb"
            :start-date="bannerVisit.startDate"
            :end-date="bannerVisit.endDate"
            :prompt="bannerVisit.prompt"
            :ratio="bannerVisit.ratio"
            :align-right="false"
        >
            <heading-arrow
                :text="bannerVisit.breadcrumb"
                :to="bannerVisit.to"
            />
        </banner-featured>
    </main>
</template>

<script>
// GQL
import HELP_TOPIC_LIST from "~/gql/queries/HelpTopicList"

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
        const data = await $graphql.default.request(HELP_TOPIC_LIST, {
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
        helpTopicList() {
            return this.page.map((obj) => {
                return {
                    ...obj,
                    to: `/applicants/${obj.to}`,
                }
            })
        },
        bannerVisit() {
            return {
                ...this.page.banner,
                ratio: 56.25,
            }
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
