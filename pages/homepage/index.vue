<template lang="html">
    <main class="page">
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
                class="divider-way-finder"
            />
            <h2
                v-if="featuredProjects"
                class="section-heading"
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
                <section-teaser-highlight
                    :items="featuredProjects"
                />
            </div>
            <nuxt-link
                v-if="featuredProjects.length"
                class="button-more"
                to="/funded-projects"
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
                class="section-heading"
            >
                Program Resources
            </h2>
            <ul class="simple-cards-list">
                <simple-cards
                    :items="featuredMeapResources"
                />
            </ul>
            <nuxt-link
                v-if="featuredMeapResources.length"
                class="button-more"
                to="/applicants"
            >
                <button-more text="See More" />
            </nuxt-link>
        </div>

        <!-- Announcements -->
        <div
            v-if="meapNews"
            class="announcements"
        >
            <divider-way-finder
                color="about"
                class="divider-way-finder"
            />

            <h2
                class="section-heading"
            >
                Announcements
            </h2>
            <section-teaser-card
                :items="meapNews"
                class="meap-news"
            />
            <nuxt-link
                v-if="featuredMeapResources.length"
                class="button-more"
                to="/about/news"
            >
                <button-more text="See More" />
            </nuxt-link>
        </div>
    </main>
</template>

<script>
// GQL
import MEAP_HOMEPAGE from "~/gql/queries/HomePage"

// Helpers
import _get from "lodash/get"

export default {
    async asyncData({ $graphql, params}) {
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
            return  this.homePage.featuredProjects.map((obj) => {
                return {
                    ...obj,
                    image: obj.heroImage[0].image[0]
                }
            })
        },
        meapNews() {
            return this.homePage.meapNews
        },
    },
}
</script>

<style lang="scss" scoped>

    .section-heading {
        @include step-3;
        color: var(--color-primary-blue-03);
        margin: var(--space-l) auto;
        margin-bottom: var(--space-m);
        max-width: 928px;
    }
    
    .button-more {
        margin: var(--space-2xl) auto;
        white-space: nowrap;
    }
    
    .meap-news, .block-highlight-list {
        margin: var(--space-2xl) auto;
    }
</style>
