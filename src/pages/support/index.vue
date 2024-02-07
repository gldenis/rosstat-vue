<script setup lang="ts">

import IconArrowRight from "@/components/icons/IconArrowRight.vue";
import { reactive, ref } from "vue";
import { useWindowSize } from "@vueuse/core";
import IconBurger from "@/components/icons/IconBurger.vue";

const currentFaq = reactive({
  group: 1,
  item: 1
})

const { width, height } = useWindowSize()

const categoriesIsOpened = ref(false)
import { vOnClickOutside } from '@vueuse/components'
const ignoreElRef = ref()
const onClickOutsideHandler = [
  (ev) => {
    categoriesIsOpened.value = false
  },
  { ignore: [ignoreElRef] },
]

</script>

<template>
  <main class="page-content">
    <div class="container">
      <div class="page-head">
        <h1 class="title">Поддержка</h1>
        <div class="page-head__support">
          <div v-if="width > 800" class="page-head__support-label">Если у вас есть вопросы, или вы обнаружили ошибку, свяжитесь с нами</div>
          <button v-if="width <= 800" ref="ignoreElRef" class="btn btn--outlined" @click="categoriesIsOpened = true">
            <IconBurger />
            Катигории
          </button>
          <RouterLink to="/support-ticket" class="btn btn--accent">Связаться с нами</RouterLink>
        </div>
      </div>
      <div class="faq">
        <div class="faq-groups__list" :class="{ 'faq-groups__list--opened': categoriesIsOpened }" v-on-click-outside="onClickOutsideHandler">
          <div class="faq-groups__item" v-for="group of 2">
            <div class="faq-groups__title">Title</div>
            <div class="faq__list">
              <div class="faq__item" :class="{ 'faq__item--current': currentFaq.group === group & currentFaq.item === faq }" v-for="faq of 6">
                FAQ TITLE {{ faq }}
                <IconArrowRight width="24" height="24"/>
              </div>
            </div>
          </div>
        </div>
        <div class="faq-card">
          <h2 class="faq-card__title">FAQ TITLE 1</h2>
          <div class="faq-card__content">
            <p>Краткое описание... пользователю инструментов и настроек для управления своей цифровой приватностью, этот сервис обеспечивает непрерывную защиту персональных данных и предотвращает их несанкционированное использование или распространение</p>
            <img src="@/assets/img/faq.jpg" alt="" width="471" height="293" loading="lazy">
            <p>Краткое описание... пользователю инструментов и настроек для управления своей цифровой приватностью, этот сервис обеспечивает непрерывную защиту персональных данных и предотвращает их несанкционированное использование или распространение</p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">

</style>
