<template>
    <section class="impact-numbers-carousel">
        HELLO
        <impact-numbers-carousel v-bind="$props" />
    </section>
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
.impact-numbers-carousel {
    background-color: aquamarine;
}
</style>
