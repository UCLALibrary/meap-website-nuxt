<template lang="html">
    <section class="page-news-detail">
        <nav-breadcrumb :title="page.title" />

        <banner-text
            v-if="!page.heroImage || page.heroImage.length == 0"
            class="banner-text"
            :category="page.type"
            :title="page.title"
            :text="page.text"
            :button-text="parsedButtonText"
            :to="parsedButtonTo"
        />

        <banner-header
            v-if="page.heroImage && page.heroImage.length == 1"
            :image="page.heroImage[0].image[0]"
            :to="parsedButtonTo"
            :prompt="parsedButtonText"
            :title="page.title"
            :category="page.type"
            :text="page.text"
        />
        <divider-way-finder
            class="divider-way-finder"
            color="help"
        />

        <flexible-blocks
            v-if="page.blocks.length"
            class="content"
            :blocks="page.blocks"
        />
    </section>
</template>

<script>
// Helpers
import _get from "lodash/get"
import format from "date-fns/format"

// GQL
import GENERAL_CONTENT_DETAIL from "~/gql/queries/GeneralContentDetail"

export default {
    async asyncData({ $graphql, params, store }) {
        // Do not remove testing live preview
        console.log(
            "fetching graphql data for News detail from Craft for live preview"
        )
        const data = await $graphql.default.request(GENERAL_CONTENT_DETAIL, {
            slug: params.slug,
        })
        console.log("Data fetched: " + JSON.stringify(data))
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
    computed: {},
}
</script>

<style lang="scss" scoped>
.page-news-detail {
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
}
</style>
