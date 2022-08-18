<template lang="html">
    <main class="page page-project-list">
        <masthead-secondary />
        <divider-way-finder />
        <section-teaser-card
            class="content"
            :items="projectList"
        />
        <divider-general />
    </main>
</template>

<script>
// GQL
import PROJECT_LIST from "~/gql/queries/ProjectList"

// Helpers
import _get from "lodash/get"

export default {
    async asyncData({ $graphql, params, store }) {
        // Do not remove testing live preview
        const data = await $graphql.default.request(PROJECT_LIST, {
            slug: params.slug,
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
        projectList() {
            return this.page.map((obj) => {
                return {
                    ...obj,
                    to: `/projects/${obj.to}`,
                    image: _get(obj, "image[0].image[0]", {}),
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
}
</style>
