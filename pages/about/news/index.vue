<template>
    <main
        id="main"
        class="page page-news"
    >
        <masthead-secondary
            :title="summaryData.title"
            :text="summaryData.summary"
        />
        <search-generic
            search-type="about"
            :filters="searchFilters"
            class="generic-search"
            :search-generic-query="searchGenericQuery"
            placeholder="Search News"
            @search-ready="getSearchData"
        />
        <h2 class="visually-hidden">
            Highlighted News
        </h2>

        <section-wrapper
            v-show="
                summaryData &&
                    parsedFeaturedNews.length &&
                    hits.length == 0 &&
                    !noResultsFound
            "
            v-if="parsedFeaturedNews.length"
            class="section-no-top-margin"
        >
            <banner-featured
                :image="parsedBannerHeader.image"
                :title="parsedBannerHeader.title"
                breadcrumb="Featured"
                :byline="parsedByline"
                :locations="parsedBannerHeader.locations"
                :description="parsedBannerHeader.text"
                :date-created="parsedBannerHeader.dateCreated"
                :to="parsedBannerHeader.to"
                :align-right="true"
                prompt="Read More"
                class="banner section-featured-banner"
            />

            <divider-general v-if="parsedSectionHighlight.length" />

            <section-teaser-highlight
                class="section"
                :items="parsedSectionHighlight"
            />
        </section-wrapper>

        <section-wrapper theme="divider">
            <divider-way-finder
                class="divider"
                color="visit"
            />
        </section-wrapper>

        <section-wrapper>
            <section-staff-article-list
                :items="parsedNewsList"
                section-title="All News"
            />
        </section-wrapper>

        <section-wrapper theme="divider">
            <divider-way-finder
                class="divider"
                color="visit"
            />
        </section-wrapper>

        <section-wrapper>
            <block-call-to-action :is-meap-global="true" />
        </section-wrapper>
    </main>
</template>

<script>
// Helpers
import _get from "lodash/get"
import format from "date-fns/format"

// Search
import getListingFilters from "~/utils/getListingFilters"
import config from "~/utils/searchConfig"

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
    data() {
        return {
            summaryData: {},
            page: [],
            hits: [],
            title: "",
            noResultsFound: false,
            searchFilters: [],
            searchGenericQuery: {
                queryText: this.$route.query.q || "",
                queryFilters:
                    (this.$route.query.filters &&
                        JSON.parse(this.$route.query.filters)) ||
                    {},
            },
        }
    },
    async fetch() {
        this.summaryData = {}
        this.page = []
        this.hits = []
        if (
            (this.$route.query.q && this.$route.query.q !== "") ||
            this.$route.query.filters
        ) {
            if (!this.summaryData.title) {
                const data = await this.$graphql.default.request(
                    ARTICLE_NEWS_LIST
                )
                //console.log("data for masthead:" + data)
                this.summaryData["title"] = _get(data, "entry.title", "")
                this.summaryData["text"] = _get(data, "entry.text", "")
            }
            let query_text = this.$route.query.q || "*"
            //console.log("in router query in asyc data")
            const results = await this.$dataApi.keywordSearchWithFilters(
                query_text,
                config.meapArticle.searchFields,
                "sectionHandle:meapArticle",
                JSON.parse(this.$route.query.filters) || {},
                config.meapArticle.sortField,
                config.meapArticle.orderBy,
                config.meapArticle.resultFields,
                config.meapArticle.filters
            )
            //console.log("getsearchdata method:" + JSON.stringify(results))
            this.page = []
            this.hits = []
            if (results && results.hits && results.hits.total.value > 0) {
                this.hits = results.hits.hits
                this.page = []
                this.noResultsFound = false
            } else {
                this.hits = []
                this.page = []
                this.noResultsFound = true
            }
            this.searchGenericQuery = {
                queryText: this.$route.query.q || "",
                queryFilters:
                    (this.$route.query.filters &&
                        JSON.parse(this.$route.query.filters)) ||
                    {},
            }
        } else {
            this.hits = []
            this.noResultsFound = false
            // if route queries are empty fetch data from craft
            const data = await this.$graphql.default.request(ARTICLE_NEWS_LIST)
            // //console.log("data:" + data)
            this.summaryData = _get(data, "entry", {})
            this.page = _get(data, "entries", [])
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
        parsedByline() {
            let output = []
            if (this.parsedBannerHeader.byline.length > 0) {
                output.push(this.parsedBannerHeader.byline[0].title)
            }
            return output
        },
    },
    watch: {
        "$route.query": "$fetch",
        "$route.query.q"(newValue) {},
        "$route.query.filters"(newValue) {},
    },
    async mounted() {
        this.setFilters()
    },
    methods: {
        queryFilterHasValues() {
            if (!this.$route.query.filters) return false
            let routeQueryFilters = JSON.parse(this.$route.query.filters)
            let configFilters = config.meapArticle.filters
            for (const filter of configFilters) {
                console.log(filter)
                if (
                    Array.isArray(routeQueryFilters[filter.esFieldName]) &&
                    routeQueryFilters[filter.esFieldName].length > 0
                ) {
                    return true
                } else if (
                    routeQueryFilters[filter.esFieldName] &&
                    !Array.isArray(routeQueryFilters[filter.esFieldName]) &&
                    routeQueryFilters[filter.esFieldName] != ""
                ) {
                    return true
                }
            }
            return false
        },
        async setFilters() {
            const searchAggsResponse = await this.$dataApi.getAggregations(
                config.meapArticle.filters,
                "meapArticle"
            )
            this.searchFilters = getListingFilters(
                searchAggsResponse,
                config.meapArticle.filters
            )
        },
        parseHits(hits = []) {
            return hits.map((obj) => {
                return {
                    ...obj["_source"],
                    to: `/${stripMeapFromURI(obj["_source"].uri)}`,
                }
            })
        },
        getSearchData(data) {
            //console.log("On the page getsearchdata called " + data)
            /*this.page = {}
            this.hits = []*/
            this.$router.push({
                path: "/news",
                query: {
                    q: data.text,
                    filters: JSON.stringify(data.filters),
                },
            })
        },
    },
    fetchOnServer: false,
    // multiple components can return the same `fetchKey` and Nuxt will track them both separately
    fetchKey: "article-index",
}
</script>

<style lang="scss" scoped>
.page-news {
    // .banner {
    //     margin: 0 auto;
    //     margin-bottom: var(--space-2xl);
    // }
    .generic-search {
        margin-bottom: var(--space-3xl);
    }
    ::v-deep .block-staff-article-item {
        --divider-color: var(--color-secondary-grey-02);
    }
    .banner-header.color-about {
        --color-theme: var(--color-visit-fushia-03);
    }
    ::v-deep .block-highlight.color-about {
        --floating-highlight-color-theme: var(--color-visit-fushia-03);
    }
    @media #{$medium} {
        .banner-header {
            margin-top: 0;
        }
    }
}
</style>
