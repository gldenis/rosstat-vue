<script setup lang="ts">

import SectionHero from "@/components/SectionHero.vue";
import SectionSearch from "@/components/SectionSearch.vue";
import SectionProtect from "@/components/SectionProtect.vue";
import IconExperience from "@/components/icons/statistic/IconExperience.vue";
import IconChecks from "@/components/icons/statistic/IconChecks.vue";
import IconService from "@/components/icons/statistic/IconService.vue";
import IconUserDatabase from "@/components/icons/statistic/IconUserDatabase.vue";
import SectionSliders from "@/components/SectionSliders.vue";
import IconApi from "@/components/icons/menu/IconApi.vue";
import { onMounted } from "vue";

onMounted(() => {
  const titles = document.querySelectorAll('.tiles__value')

  titles.forEach(title => {
    const length = title.innerText.length
    const width = title.clientWidth

    const titleComputedStyles = window.getComputedStyle(title)
    const currentFontSize = parseInt(titleComputedStyles.fontSize)

    const styles = window.getComputedStyle(title.parentElement)
    const paddingLeft = parseInt(styles.paddingLeft)
    const paddingRight = parseInt(styles.paddingRight)

    const maxWidth = title.parentElement.clientWidth - paddingLeft - paddingRight


    if (width > maxWidth) {
      title.style.fontSize = (currentFontSize * maxWidth) / width + 'px'
    }
  })
})
</script>

<template>
  <main class="page-content">
    <div class="container">
      <SectionHero class="page-home__hero"/>

      <SectionSearch class="page-home__search-form"/>

      <section class="page-home__statistic">
        <div class="tiles__list">
          <div class="tiles__item">
            <IconUserDatabase class="tiles__icon" width="40" height="40"/>
            <div class="tiles__value">100 032 862</div>
            <div class="tiles__text">Данных пользователей в базе</div>
          </div>
          <div class="tiles__item">
            <IconApi class="tiles__icon" width="40" height="40"/>
            <div class="tiles__value">32</div>
            <div class="tiles__text">Инструментов для API мониторинга</div>
          </div>
          <div class="tiles__item">
            <IconChecks class="tiles__icon" width="40" height="40"/>
            <div class="tiles__value">31</div>
            <div class="tiles__text">Человек сегодня проверены</div>
          </div>
          <div class="tiles__item">
            <IconExperience class="tiles__icon" width="40" height="40"/>
            <div class="tiles__value">12</div>
            <div class="tiles__text">Опыта в сфере поиска и защиты данных</div>
          </div>
        </div>
      </section>

      <SectionSliders class="page-home__remove"/>

      <SectionProtect class="page-home__protection"/>
    </div>
  </main>
</template>

<style scoped lang="scss">

</style>
