<template>
    <main class="page page-news">
        <masthead-secondary
            :title="summaryData.title"
            :text="summaryData.summary"
        />

        {{ parsedBannerHeader }}
        <banner-header
            :image="parsedBannerHeader.image"
            :title="parsedBannerHeader.title"
            :category="parsedBannerHeader.category"
            :byline="parsedBannerHeader.byline"
            :locations="parsedBannerHeader.locations"
            :description="parsedBannerHeader.text"
            :start-date="parsedBannerHeader.dateCreated"
            :end-date="parsedBannerHeader.dateCreated"
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
import NEWS_LISTING_PAGE from "~/gql/queries/NewsListingPage"
import ARTICLE_NEWS_LIST from "~/gql/queries/ArticleNewsList"

export default {
    async asyncData({ $graphql, params }) {
        const summaryData = await $graphql.default.request(
            NEWS_LISTING_PAGE,
            {}
        )
        const data = await $graphql.default.request(ARTICLE_NEWS_LIST, {})
        return {
            summaryData: _get(summaryData, "entries[0]", {}),
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
                    byline: _get(obj, "articleStaff[0].title", ""),
                }
            })
        },
        parsedBannerHeader() {
            return this.parsedFeaturedNews[0]
        },
        parsedSectionHighlight() {
            return this.parsedFeaturedNews.slice(1)
        },
        parsedNewsList() {
            return this.page.map((obj) => {
                return {
                    ...obj,
                    to: `/about/news/${obj.to}`,
                    image: _get(obj, "heroImage[0].image[0]", null),
                }
            })
        },

        parsedDate() {
            return format(new Date(this.page.dateCreated), "MMMM d, Y")
        },
    },
}
</script>

<style lang="scss" scoped>
.page-news {
    .banner {
        // max-width: $container-l-main + px;
        margin: 0 auto;
    }

    .section-heading {
        @include step-2;
        color: var(--color-primary-blue-03);
        margin-bottom: var(--space-m);
    }
    .section {
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
