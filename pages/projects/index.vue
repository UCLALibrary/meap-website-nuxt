<template lang="html">
    <main class="page page-project-list">
        <masthead-secondary
            :title="summaryData.projectListTitle"
            :text="summaryData.projectListSummary"
        />
        <divider-way-finder color="help" />
        <section-teaser-card
            class="content"
            :items="projectList"
        />
        <divider-way-finder color="help" />
        <section-cards-with-illustrations
            v-if="parsedAssociatedTopics.length"
            class="section-cards"
            :items="parsedAssociatedTopics"
            title="Associated Topics"
            button-text="All Services and Resources"
            to="/resources"
        />
    </main>
</template>

<script>
// GQL
import PROJECT_LISTING_PAGE from "~/gql/queries/ProjectListingPage"
import PROJECT_LIST from "~/gql/queries/ProjectList"

// Helpers
import _get from "lodash/get"

export default {
    async asyncData({ $graphql, params, store }) {
        // Do not remove testing live preview
        const summaryData = await $graphql.default.request(
            PROJECT_LISTING_PAGE,
            {}
        )
        const data = await $graphql.default.request(PROJECT_LIST, {})
        return {
            summaryData: _get(summaryData, "entries[0]", {}),
            page: _get(data, "entries", {}),
        }
    },
    head() {
        let title = this.summaryData
            ? this.summaryData.projectListTitle
            : "... loading"
        return {
            title: title,
        }
    },
    computed: {
        projectList() {
            return this.page.map((obj) => {
                return {
                    ...obj,
                    to: `/projects/${obj.to}`,
                    image: _get(obj, "image[0].image[0]", {}),
                }
            })
        },
        parsedAssociatedTopics() {
            return this.summaryData.featuredMeapResources.map((obj) => {
                return {
                    ...obj,
                    to: obj.externalResourceUrl
                        ? obj.externalResourceUrl
                        : obj.uri,
                }
            })
        },
    },
}
</script>

<style lang="scss" scoped>
.page-project-list {
    .content {
        margin: 0 auto;
    }

    .section-cards {
        margin: var(--space-3xl) auto;
    }

    @media #{$medium} {
        .content {
            padding: 0 var(--unit-gutter);
        }
    }
}
</style>
