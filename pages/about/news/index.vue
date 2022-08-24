<template>
    <main class="page page-news">
        <masthead-secondary
            :title="summaryData.title"
            :text="summaryData.summary"
        />
        <div class="section-header">
            <h2 class="section-title">
                Highlighted News
            </h2>
        </div>
        <banner-header
            :image="parsedBannerHeader.image"
            :title="parsedBannerHeader.title"
            :category="parsedBannerHeader.category"
            :byline="parsedBannerHeader.byline"
            :locations="parsedBannerHeader.locations"
            :description="parsedBannerHeader.text"
            :date-created="parsedBannerHeader.dateCreated"
            :to="parsedBannerHeader.to"
            prompt="Read More"
            :align-right="true"
            class="banner"
        />
        <section-teaser-highlight
            class="section"
            :items="parsedSectionHighlight"
        />

        <divider-way-finder
            class="divider"
            color="about"
        />

        <section-staff-article-list
            :items="parsedNewsList"
            section-title="All News"
        />
        <block-call-to-action :is-meap-global="true" />
    </main>
</template>

<script>
// Helpers
import _get from "lodash/get"
import format from "date-fns/format"

// GQL
import ARTICLE_NEWS_LIST from "~/gql/queries/ArticleNewsList"

export default {
    async asyncData({ $graphql, params }) {
        const data = await $graphql.default.request(ARTICLE_NEWS_LIST, {})
        return {
            summaryData: _get(data, "entry", {}),
            page: _get(data, "entries", {}),
        }
    },
    head() {
        let title = this.summaryData ? this.summaryData.title : "... loading"
        return {
            title: title,
        }
    },
    computed: {
        parsedFeaturedNews() {
            return this.summaryData.meapNewsListing.map((obj) => {
                return {
                    ...obj,
                    to: `/about/news/${obj.to}`,
                    image: _get(obj, "heroImage[0].image[0]", {}),
                    category: _get(obj, "category[0].title", ""),
                    dateCreated: _get(obj, "dateCreated", ""),
                    byline: _get(obj, "articleStaff", []),
                    bylineOne: _get(obj, "articleStaff[0].title", ""),
                    bylineTwo: _get(obj, "dateCreated", ""),
                }
            })
        },
        parsedBannerHeader() {
            return this.parsedFeaturedNews[0]
        },
        parsedSectionHighlight() {
            return this.parsedFeaturedNews.slice(1).map((obj) => {
                return {
                    ...obj,

                    bylineTwo:
                        obj.bylineTwo != null
                            ? format(new Date(obj.bylineTwo), "MMMM d, yyyy")
                            : "",
                }
            })
        },
        parsedNewsList() {
            return this.page.map((obj) => {
                return {
                    ...obj,
                    to: `/about/news/${obj.to}`,
                    image: _get(obj, "heroImage[0].image[0]", {}),
                    category: _get(obj, "category[0].title", ""),
                }
            })
        },
    },
}
</script>

<style lang="scss" scoped>
.page-news {
    .section-header {
        margin-top: var(--space-3xl);
        margin-bottom: var(--space-xl);
    }
    .section-title {
        @include step-4;
        color: var(--color-primary-blue-03);
        margin: 0 auto;
        max-width: $container-l-main + px;
    }
    .banner {
        max-width: 992px;
        margin: var(--space-2xl) auto;
    }

    .section-heading {
        @include step-2;
        color: var(--color-primary-blue-03);
        margin-bottom: var(--space-m);
    }
    .section {
        // max-width: $container-l-main + px;
    }
    .divider {
        margin-bottom: var(--space-xl);
    }
    .all-news-heading {
        @include step-1;
        color: var(--color-primary-blue-03);
    }

    .news-item-link {
        list-style: none;
        display: flex;
        justify-content: space-between;
        @include step-1;
        color: var(--color-primary-blue-03);
    }
}
</style>
