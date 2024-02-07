<script setup>
import AdvantagesList from '@/components/AdvantagesList.vue'
import SectionProtect from '@/components/SectionProtect.vue'
import SectionSliders from '@/components/SectionSliders.vue'
</script>

<template>
  <main class="page-content page-protection__page-content">
    <div class="container">
      <div class="hero">
        <div class="hero__main page-protection__hero-main">
          <h1 class="title hero__title">Ваша безопасность
            всегда с вами</h1>
          <p class="hero__slogan">Из-за недавнего инцидента с Твиттером, есть риск, что ваши данные могут быть использованы в корыстных целях. Наш антивирус выпустил обновление, которое защищает вас от подобного</p>
        </div>
        <div class="hero__logo page-protection__hero-logo">
          <img src="@/assets/img/protect.png" alt="" width="240" height="240">
        </div>
      </div>
      <AdvantagesList class="page-monitoring__advantages"/>
      <SectionSliders class="page-monitoring__remove"/>
      <SectionProtect class="page-monitoring__protection" />
    </div>
  </main>
</template>

<style scoped lang="scss">

</style>
