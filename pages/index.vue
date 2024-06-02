<template lang="html">
  <main
    id="main"
    class="page page-home"
  >
    This is Sample Home page!
  </main>
</template>

<script>

</script>

<style lang="scss" scoped>
.page-home {
  .meap-masthead-secondary {
    margin-bottom: var(--space-3xl);

    :deep(.container .meta .rich-text a) {
      color: var(--color-white);

      &:hover {
        color: var(--color-white);
        font-weight: 500;
      }
    }
  }

  .button-more-link {
    margin: var(--space-xl) auto;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    max-width: fit-content;

    :deep(.button-more) {
      display: inline-flex;
      max-width: unset;
    }
  }
}
</style>
