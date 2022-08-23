<template>
    <main class="page page-staff">
        <masthead-secondary title="Staff Directory">
        </masthead-secondary>

        <section-wrapper class="browse-by">
            <h2 class="section-heading">Browse by Last Name</h2>
            <!-- TODO Add Browse by A-Z links -->
            <ul class="browse-by-options">
                <li>A</li>
                <li>B</li>
                <li>C</li>
                <li>D</li>
                <li>E</li>
                <li>F</li>
                <li>G</li>
                <li>H</li>
                <li>I</li>
                <li>J</li>
                <li>K</li>
                <li>L</li>
                <li>M</li>
                <li>N</li>
                <li>O</li>
                <li>P</li>
                <li>Q</li>
                <li>R</li>
                <li>S</li>
                <li>T</li>
                <li>U</li>
                <li>V</li>
                <li>W</li>
                <li>X</li>
                <li>Y</li>
                <li>Z</li>
                <!-- <li>View All</li> -->
            </ul>
        </section-wrapper>

        <section-wrapper theme="divider"><divider-way-finder class="divider divider-way-finder" /></section-wrapper>
        <section-wrapper>
            <section-staff-list :items="parsedStaffList" />
        </section-wrapper>
    </main>
</template>

<script>
// Helpers
import _get from "lodash/get"

// gql
import STAFF_LIST from "~/gql/queries/StaffList"

export default {
    async asyncData({ $graphql, params }) {
        console.log("live preview enters staff list")
        const data = await $graphql.default.request(STAFF_LIST, {
            uri: params.path,
        })

        return {
            page: data,
        }
    },
    computed: {
        parsedStaffList() {
            return this.page.entries.map((obj) => {
                return {
                    ...obj,
                    to: `/about/staff/${obj.to}`,
                    image: _get(obj, "image[0]", null),
                    staffName: `${obj.nameFirst} ${obj.nameLast}`,
                }
            })
        },
    },
}
</script>

<style lang="scss" scoped>
.page-staff {
    .section-heading {
        @include step-2;
        color: var(--color-primary-blue-03);
        margin-bottom: var(--space-m);
    }

    .browse-by-options {
        list-style: none;
        display: flex;
        justify-content: space-between;
        @include step-1;
        color: var(--color-primary-blue-03);
    }

    @media #{$small} {
        .browse-by-options {
            flex-wrap: wrap;
            justify-content: flex-start;
            align-items: center;
            gap: 4px 0;
        }

        li {
            padding: 4px;
            min-width: 44px;
        }
    }
}
</style>
