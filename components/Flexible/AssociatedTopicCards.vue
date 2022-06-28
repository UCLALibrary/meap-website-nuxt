<template lang="html">
    <section-cards-with-illustrations
        class="associated-topics-card"
        :block="block"
        :title="title"
        :summary="summary"
        :to="to"
        :is-horizontal="false"
    />
</template>

<script>
export default {
    props: {
        block: {
            type: Object,
            default: () => {},
        },
    },
}
</script>

<style lang="scss" scoped>
.associated-topics-card {
    border: 3px solid coral;
}
</style>