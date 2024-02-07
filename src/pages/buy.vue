<script setup>

import IconBuyChecks from '@/components/icons/IconBuyChecks.vue'
import SectionProtect from '@/components/SectionProtect.vue'
import SectionSliders from '@/components/SectionSliders.vue'
</script>

<template>
  <main class="page-content">
    <div class="container">
      <h1 class="title">Проверки</h1>
      <div class="banner page-buy__banner">
        <div class="banner__left">
          <IconBuyChecks />
          <div class="banner__text">
            <div class="banner__title">Доступно проверок: 12</div>
            <div class="banner__description">Все данные пользователя в интернете
              по электронной почте</div>
          </div>
        </div>
        <div class="banner__right">
          <div class="banner-buy">
            <div class="banner-buy__text">
              <div class="banner-buy__label">Стоимость за: 2 недели</div>
              <div class="banner-buy__price">
                <span class="banner-buy__price-old">100 ₽</span>
                <span class="banner-buy__price-value">180 ₽</span>
              </div>
            </div>
          </div>
          <div class="banner__actions">
            <input type="text" class="banner-buy__input" value="2">
            <RouterLink to="/payment" class="btn btn--accent">Купить еще</RouterLink>
          </div>
        </div>
      </div>
      <SectionSliders class="page-buy__remove"/>
      <SectionProtect class="page-buy__protection" />
    </div>
  </main>
</template>

<style scoped lang="scss">

</style>
