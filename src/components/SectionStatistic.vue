<script setup lang="ts">

import IconUserDatabase from "@/components/icons/statistic/IconUserDatabase.vue";
import IconService from "@/components/icons/statistic/IconService.vue";
import IconChecks from "@/components/icons/statistic/IconChecks.vue";
import IconExperience from "@/components/icons/statistic/IconExperience.vue";
</script>

<template>
  <div class="statistic-section page__statistic">
    <div class="tiles__list">
      <div class="tiles__item">
        <IconUserDatabase class="tiles__icon" width="40" height="40" />
        <div class="tiles__value">100 032 862</div>
        <div class="tiles__text">Данных пользователей в базе</div>
      </div>
      <div class="tiles__item">
        <IconService class="tiles__icon" width="40" height="40" />
        <div class="tiles__value">32</div>
        <div class="tiles__text">Инструментов для API мониторинга</div>
      </div>
      <div class="tiles__item">
        <IconChecks class="tiles__icon" width="40" height="40" />
        <div class="tiles__value">31</div>
        <div class="tiles__text">Человек сегодня проверены</div>
      </div>
      <div class="tiles__item">
        <IconExperience class="tiles__icon" width="40" height="40" />
        <div class="tiles__value">12</div>
        <div class="tiles__text">Опыта в сфере поиска и защиты данных</div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
