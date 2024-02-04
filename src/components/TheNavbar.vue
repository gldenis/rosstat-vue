<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import IconIdentification from '@/components/icons/menu/IconIdentification.vue'
import IconAccessChecks from '@/components/icons/IconAccessChecks.vue'
import IconLock from '@/components/icons/menu/IconLock.vue'
import IconProtection from '@/components/icons/menu/IconProtection.vue'
import IconAdvantage from '@/components/icons/menu/IconAdvantage.vue'
import IconSupport from '@/components/icons/menu/IconSupport.vue'
import IconMe from '@/components/icons/IconMe.vue'
import IconArrowRight from '@/components/icons/IconArrowRight.vue'

const mobileNavOpened = ref(false)
const swipeStart = ref(0)
const onTouchStart = e => {
  swipeStart.value = e.targetTouches[0].pageY;
}
const onTouchMove = e => {
  const swipeEnd = e.changedTouches[0].pageY;
  if (Math.abs(swipeEnd - swipeStart.value) > 20) {
    mobileNavOpened.value = false
  }
}
const onTouchEnd = e => {
  swipeStart.value = e.changedTouches[0].pageY;
}
const route = useRoute()

watch(
  () => route.params,
  async newId => {
    console.log(123)
    mobileNavOpened.value = false
  }
)
</script>

<template>
  <div class="mobile-header">
    <div class="mobile-header__container">
      <RouterLink to="/" class="mobile__logo">
        <img src="@/assets/img/logo-mobile.svg" alt="">
      </RouterLink>
      <div class="mobile-header__panel">
        <div class="mobile-header__info">
          <IconAccessChecks />
          1
        </div>
        <button class="burger__wrapper" @click="mobileNavOpened = !mobileNavOpened">
          <span class="btn-reset burger" :class="{ 'burger--active': mobileNavOpened }">
            <span class="burger__line"></span>
          </span>
        </button>
      </div>
    </div>
  </div>
  <div class="navbar__overlay"
       :class="{ 'navbar__overlay--active': mobileNavOpened }"
       @click="mobileNavOpened = !mobileNavOpened"
       @touchstart="onTouchStart"
       @touchmove="onTouchMove"
       @touchend="onTouchEnd"
  ></div>
  <nav class="navbar" :class="{ 'navbar--active': mobileNavOpened }">
    <ul class="menu__list">
      <li class="menu__item menu__item--logo">
        <RouterLink to="/" class="logo">
          <img src="@/assets/img/logo-mobile.svg" alt="">

        </RouterLink>
      </li>
      <li class="menu__item" >
        <RouterLink to="/me" class="menu__link">
          <IconIdentification class="menu__icon" />
          <span> Данные обо мне <sup>free</sup> </span>
        </RouterLink>
      </li>
      <li class="menu__item">
        <RouterLink to="/other" class="menu__link menu__link--disabled">
          <IconLock class="menu__icon" />
          Данные о других
        </RouterLink>
      </li>
      <li class="menu__item">
        <RouterLink to="/protection" class="menu__link">
          <IconProtection class="menu__icon" />
          Моя защита
        </RouterLink>
      </li>
      <li class="menu__item">
        <RouterLink to="/api" class="menu__link">
          <IconProtection class="menu__icon" />
          API
        </RouterLink>
      </li>
    </ul>

    <ul class="menu__list">
      <li class="menu__item">
        <RouterLink to="/" class="menu__link">
          <IconAdvantage class="menu__icon" />
          Доступно проверок 1
        </RouterLink>
      </li>
      <li class="menu__item">
        <RouterLink to="/support" class="menu__link">
          <IconSupport class="menu__icon" />
          Поддержка
        </RouterLink>
      </li>


      <li class="menu__item">
        <RouterLink to="/login" class="menu__link">
          <IconMe class="menu__icon" />
          Вход и регистрация
        </RouterLink>
      </li>
      <li class="menu__item">
        <div class="menu-monitoring">
          <div class="menu-monitoring__title">Мониторинг</div>
          <div class="menu-monitoring__text">Скройте данные от нежелательных лиц</div>
          <a href="#" class="btn btn--outlined btn--small menu-monitoring__btn">
            <IconArrowRight name="arrow-right"/>
            Подробнее
          </a>
        </div>
      </li>
    </ul>
  </nav>
</template>

<style scoped>

</style>
