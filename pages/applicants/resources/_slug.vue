<template lang="html">
    <section class="page-service-detail">
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
            color="help"
            class="divider-way-finder"
        />

        <h2 class="more-info">
            More Information
        </h2>

        <flexible-blocks
            class="content"
            :blocks="page.blocks"
        />

        <divider-way-finder
            color="help"
            class="divider-way-finder"
        />

        <section-cards-with-illustrations
            v-if="parsedAssociatedTopics.length"
            class="section-cards"
            :items="parsedAssociatedTopics"
            title="Associated Topics"
            button-text="All Services and Resources"
            to="/help/services-resources"
        />

        <block-call-to-action
            class="block-call-to-action"
            :is-global="true"
        />
    </section>
</template>

<script>
// GQL
import RESOURCE_DETAIL from "~/gql/queries/ResourceDetail"

// Helpers
import _get from "lodash/get"

export default {
    async asyncData({ $graphql, params, store }) {
        // Do not remove testing live preview
        console.log(
            "fetching graphql data for Service or Resource detail from Craft for live preview"
        )
        const data = await $graphql.default.request(RESOURCE_DETAIL, {
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
    computed: {
        parsedAssociatedTopics() {
            return this.page.associatedTopics.map((obj) => {
                return {
                    ...obj,
                    to: obj.externalResourceUrl
                        ? obj.externalResourceUrl
                        : obj.uri,
                }
            })
        },
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
        margin-top: 0; // TODO do this change in component later
    }
    .banner-header {
        margin-bottom: var(--space-xl);
        padding: 0;
        max-width: $container-xl-full-width + px;
        margin-top: 0; // TODO do this change in component later
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
    .section-cards {
        margin: var(--space-3xl) auto;
    }
    .more-info {
        @include visually-hidden;
    }
    .block-call-to-action {
        margin: var(--space-3xl) auto;
    }
}
</style>