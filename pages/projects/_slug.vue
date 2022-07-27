<template lang="html">
    <section class="page-service-detail">
        <nav-breadcrumb :title="page.title" />

        <banner-text
            v-if="!page.heroImage || page.heroImage.length == 0"
            class="banner-text"
            :category="page.type"
            :title="page.title"
            :text="page.summary"
            :byline="page.institution"
            :button-text="parsedButtonText"
            :to="parsedButtonTo"
        />

        <banner-header
            v-if="page.heroImage && page.heroImage.length == 1"
            :image="page.heroImage[0].image[0]"
            :to="parsedButtonTo"
            :prompt="parsedButtonText"
            :byline="page.institution"
            :title="page.title"
            :category="page.type"
            :text="page.summary"
        />

        <divider-way-finder
            color="help"
            class="divider-way-finder"
        />
        <!-- TO DO not actually rich text -->
        <rich-text :rich-text-content="page.titleGeneral" />
        <rich-text :rich-text-content="page.projectDescription" />
        <rich-text :rich-text-content="page.citation" />

        <divider-general class="divider-way-finder" />

        <rich-text :rich-text-content="page.projectContributorsSubheading" />
        <rich-text :rich-text-content="page.projectContributors" />
        <divider-way-finder
            v-if="page.blocks"
            color="help"
            class="divider-way-finder"
        />
        <flexible-blocks
            v-if="page.blocks"
            class="content"
            :blocks="page.blocks"
        />

        <divider-way-finder
            color="help"
            class="divider-way-finder"
        />

        <block-call-to-action
            class="block-call-to-action"
            :is-global="true"
        />
    </section>
</template>

<script>
// GQL
import PROJECT_DETAIL from "~/gql/queries/ProjectDetail"

// Helpers
import _get from "lodash/get"

export default {
    async asyncData({ $graphql, params, store }) {
        // Do not remove testing live preview
        console.log(
            "fetching graphql data for Service or Resource detail from Craft for live preview"
        )
        const data = await $graphql.default.request(PROJECT_DETAIL, {
            slug: params.slug,
        })
        console.log(data)
        return {
            page: _get(data, "entry", {}),
        }
    },
    head() {
        let title = this.page ? this.page.title : "... loading"
        return {
            title: title,
        }
    },
    computed: {
        parsedButtonText() {
            return _get(this.page, "button[0].buttonText", "")
        },
        parsedButtonTo() {
            return _get(this.page, "button[0].buttonUrl", "")
        },
    },
}
</script>

<style lang="scss" scoped>
.page-service-detail {
    .banner-text {
        --color-theme: var(--color-help-green-03);
    }
    .banner-header {
        margin-bottom: var(--space-xl);
        padding: 0;
        max-width: $container-xl-full-width + px;
        margin: var(--unit-gutter) auto;
    }
    .banner-text + .divider-way-finder {
        margin: 0 auto var(--space-2xl);
    }
    .divider-way-finder {
        max-width: $container-l-main + px;
        margin: var(--space-3xl) auto;
    }
    .content {
        margin: 0 auto;
    }
    .block-call-to-action {
        margin: var(--space-3xl) auto;
    }
}
</style>
