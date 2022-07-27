<template lang="html">
    <section class="page-project-detail">
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
        <div
            class="about-the-project"
            v-html="`About the Project`"
        />
        <div
            class="title-general"
            v-html="page.titleGeneral"
        />
        <div
            class="project-type"
            v-html="page.projectType"
        />
        <rich-text :rich-text-content="page.projectDescription" />
        <rich-text
            :rich-text-content="page.citation"
            class="citation"
        />

        <divider-general class="divider-way-finder" />

        <rich-text :rich-text-content="page.projectContributorsSubheading" />
        <rich-text :rich-text-content="page.projectContributors" />
        <divider-way-finder
            v-if="page.blocks.length > 0"
            color="help"
            class="divider-way-finder"
        />
        <flexible-blocks
            v-if="page.blocks.length"
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
            return _get(this.page, "meapProjectCallToAction[0].buttonText", "")
        },
        parsedButtonTo() {
            return _get(this.page, "meapProjectCallToAction[0].externalUrl", "")
        },
    },
}
</script>

<style lang="scss" scoped>
.page-project-detail {
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
    .about-the-project {
        @include step-3;
        color: var(--color-primary-blue-03);
    }
    .title-general {
        @include step-1;
        color: var(--color-secondary-grey-05);
    }
    .project-type {
        @include step-0;
        font-weight: $font-weight-medium;
        color: var(--color-secpndary-grey-05);
    }
    .citation {
        ::v-deep p {
            @include step-1;
            color: var(--color-secondary-grey-04);
        }
    }
    .block-call-to-action {
        margin: var(--space-3xl) auto;
    }
}
</style>
