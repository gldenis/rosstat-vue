<script setup>

import AdvantagesList from '@/components/AdvantagesList.vue'
import SectionRemove from '@/components/SectionRemove.vue'
import SectionProtect from '@/components/SectionProtect.vue'
</script>

<template>
  <main class="page__content">
    <div class="container">
      <div class="hero">
        <div class="hero__main">
          <h1 class="title hero__title">Ваша безопасность
            всегда с вами</h1>
          <p class="hero__slogan">Из-за недавнего инцидента с Твиттером, есть риск, что ваши данные могут быть использованы в корыстных целях. Наш антивирус выпустил обновление, которое защищает вас от подобного</p>
        </div>
        <div class="hero__logo">
          <img src="@/assets/img/protect.png" alt="">
        </div>
      </div>
      <AdvantagesList class="page-monitoring__advantages"/>
      <SectionRemove class="page-monitoring__remove"/>
      <SectionProtect class="page-monitoring__protection" />
    </div>
  </main>
</template>

<style scoped lang="scss">
.page__content {
  padding-top: 0;
}

.page-monitoring {
  &__advantages {
    padding: 40px;
  }

  &__remove {
    margin-top: 80px;
  }

  &__protection {
    margin-top: 80px;
  }
}
.hero__logo {
  padding-top: 60px;
  padding-right: 0;
  padding-left: 30px;

  img {
    width: 240px;
    height: 240px;
  }
}

@media screen and (max-width: $desktop) {
  .page__content {
    padding-top: var(--header-height);
  }
}

@media screen and (max-width: $tablet) {
  .hero__logo {
    img {
      width: 160px;
      height: 160px;
    }
  }
}
</style>
