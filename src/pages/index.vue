<script setup lang="ts">

import SectionHero from "@/components/SectionHero.vue";
import SectionSearch from "@/components/SectionSearch.vue";
import SectionStatistic from "@/components/SectionStatistic.vue";
import SectionRemove from "@/components/SectionRemove.vue";
import SectionProtect from "@/components/SectionProtect.vue";
</script>

<template>
  <main class="page__content">
    <div class="container">
      <SectionHero />

      <SectionSearch />

      <SectionStatistic />

      <SectionRemove />

      <SectionProtect />
    </div>
  </main>
</template>

<style scoped lang="scss">
.page__content {
  padding-top: 0;
}

@media screen and (max-width: $desktop) {
  .page__content {
    padding-top: var(--header-height);
  }
}
</style>
