<template lang="html">
    <main class="page page-project-list">
        <masthead-secondary
            :title="summaryData.projectListTitle"
            :text="summaryData.projectListSummary"
        />

        <section-wrapper>
            <div class="section-header">
                <h2 class="section-title">All Projects</h2>
            </div>
            <section-teaser-card :items="projectList" />
        </section-wrapper>

        <section-wrapper
            v-if="parsedAssociatedTopics && parsedAssociatedTopics.length"
            theme="divider"
        >
            <divider-way-finder color="help" />
        </section-wrapper>
        <section-wrapper
            v-if="parsedAssociatedTopics && parsedAssociatedTopics.length"
        >
            <section-cards-with-illustrations
                :items="parsedAssociatedTopics"
                title="Associated Topics"
                button-text="All Resources"
                to="/applicants/resources"
            />
        </section-wrapper>
        <section-teaser-card class="content" :items="projectList" />
        <divider-way-finder color="help" />
        <section-cards-with-illustrations
            v-if="parsedAssociatedTopics.length"
            class="section-cards"
            :items="parsedAssociatedTopics"
            title="Associated Topics"
            button-text="All Resources"
            to="/applicants/resources"
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
<<<<<<< HEAD
        const data = await $graphql.default.request(PROJECT_LIST, {})
        return {
            summaryData: _get(data, "entry", {}),
=======
        // Do not remove testing live preview
        const summaryData = await $graphql.default.request(
            PROJECT_LISTING_PAGE,
            {}
        )
        const data = await $graphql.default.request(PROJECT_LIST, {})
        return {
            summaryData: _get(summaryData, "entries[0]", {}),
>>>>>>> cfbf352 (update queries)
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
                    to: `/${obj.to}`,
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
    .section-header {
        margin-bottom: var(--space-xl);
    }
    .section-title {
        @include step-4;
        color: var(--color-primary-blue-03);
<<<<<<< HEAD
=======
        margin: 0 auto;
        max-width: $container-l-main + px;
    }
    .content {
        margin: 0 auto;
    }

    .section-cards {
        margin: var(--space-3xl) auto;
    }
<<<<<<< HEAD

    @media #{$medium} {
        .content,
        .section-title {
            padding: 0 var(--unit-gutter);
        }
>>>>>>> 0507e24 (rebase)
    }
=======
>>>>>>> cfbf352 (update queries)
}
</style>
