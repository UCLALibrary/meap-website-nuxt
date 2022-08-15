<template lang="html">
    <main class="page page-help-topic">
        <masthead-secondary
            title="Modern Endangered Archives Program"
            text="Our grants enable digitization and access to at-risk cultural heritage collections from around the world. Explore our projects and learn more about available grant opportunities. "
        />
        <!-- Featured Projects -->

        <div
            v-if="featuredProjects"
        >
            <divider-way-finder
                color="about"
                class="divider"
            />
            <h2
                v-if="featuredProjects"
                class="gallery-section-heading"
            >
                Featured Projects
            </h2>
            <banner-featured
                class="section banner banner-visit"
                :image="featuredProjects[0].heroImage[0].image[0]"
                :to="featuredProjects[0].to"
                :title="featuredProjects[0].title"
                :category="featuredProjects[0].category"
                breadcrumb="Featured"
                :start-date="featuredProjects[0].startDate"
                :end-date="featuredProjects[0].endDate"
                :prompt="featuredProjects[0].prompt"
                :ratio="featuredProjects[0].ratio"
                :align-right="true"
            />

            <div class="block-highlight-list">
                <block-highlight
                    v-for="(card, index) in featuredProjects"
                    :key="`Card${index}`"
                    class="card"
                    :image="card.heroImage[0].image[0]"
                    :to="card.to"
                    :category="card.category"
                    :title="card.title"
                    :start-date="card.startDate"
                    :end-date="card.endDate"
                    :text="card.text"
                    :image-aspect-ratio="60"
                    :is-vertical="true"
                    :is-online="card.isOnline"
                />
            </div>
            <nuxt-link
                v-if="featuredProjects.length"
                class="button-more"
                to="#"
            >
                <button-more text="Explore Projects" />
            </nuxt-link>
        </div>
        
        <!-- Program Resources -->
        <div
            v-if="featuredMeapResources"
        >
            <divider-way-finder
                color="about"
                class="divider-way-finder"
            />
            <h2
                v-if="featuredMeapResources"
                class="gallery-section-heading"
            >
                Program Resources
            </h2>
            <ul class="simple-cards-list">
                <block-simple-card
                    v-for="(item, index) in featuredMeapResources"
                    :key="`SimpleCardsKey${index}`"
                    :class="item.classes"
                    :to="item.to"
                    :title="item.title"
                    :text="item.text"
                />
            </ul>
            <nuxt-link
                v-if="featuredMeapResources.length"
                class="button-more"
                to="#"
            >
                <button-more text="See More" />
            </nuxt-link>
        </div>

        <!-- Announcements -->
        <div
            v-if="meapNews"
        >
            <divider-way-finder
                color="about"
                class="divider-way-finder"
            />

            <h2
                class="gallery-section-heading"
            >
                Announcements
            </h2>
            <section-teaser-card
                :items="meapNews"
                class="meap-news"
            />
        </div>
    </main>
</template>

<script>
// GQL
import MEAP_HOMEPAGE from "~/gql/queries/HomePage"

// Helpers
import _get from "lodash/get"

export default {
    async asyncData({ $graphql, params, store }) {
        // Do not remove testing live preview
        
        const data = await $graphql.default.request(MEAP_HOMEPAGE, {
            slug: params.slug
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
        homePage() {
            return this.page.map((obj) => {
                return {
                    ...obj,
                    to: `/homepage/${obj.to}`,
                }
            })[0]
        },
        featuredMeapResources() {
            return this.homePage.featuredMeapResources
        },
        featuredProjects() {
            return this.homePage.featuredProjects
        },
        meapNews() {
            // return  this.homePage.meapNews.map((obj) => {
            //     return {
            //         ...obj,
            //         image: obj.heroImage[0].image[0]
            //     }
            // })
            return this.homePage.meapNews
        },
    },
}
</script>

<style lang="scss" scoped>

    .divider-way-finder {
        padding-left: 64px;
        padding-right: 64px;
        margin: var(--space-3xl) auto;
        max-width: 1440px !important;
    }

    .gallery-section-heading {
        @include step-3;
        margin-bottom: var(--space-xl);
        color: var(--color-primary-blue-03);
        max-width: 1440px;
        margin: var(--space-3xl) auto;
        padding-left: 64px;
        padding-right: 64px;
    }

    .block-highlight-list {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        gap: 32px 16px;
    }
    
    .button-more,{
        margin: var(--space-2xl) auto;
    }

    .simple-cards-list, .meap-news {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-content: flex-start;
        align-items: flex-start;
        gap: var(--space-s);
        max-width: 1440px !important;
        margin: var(--space-3xl) auto;
        padding: 0 64px;
    }

    .meap-news {

    }
</style>
