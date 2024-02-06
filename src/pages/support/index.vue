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
            <img src="@/assets/img/faq.jpg" alt="">
            <p>Краткое описание... пользователю инструментов и настроек для управления своей цифровой приватностью, этот сервис обеспечивает непрерывную защиту персональных данных и предотвращает их несанкционированное использование или распространение</p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
.faq {
  display: flex;
  gap: 40px;
  margin-top: 40px;
  align-items: flex-start;
}

.faq-card {
  padding: 40px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.2);

  &__title {
    color: rgb(255, 255, 255);
    font-size: 28px;
    font-weight: 700;
    line-height: 132%;
  }

  &__content {
    margin-top: 24px;
    color: rgba(255, 255, 255, 0.92);
    font-size: 14px;
    font-weight: 400;
    line-height: 160%;

    *:not(:first-child) {
      margin-top: 16px;
    }

    img {
      border-radius: 8px;
      box-shadow: 0px 8px 16px 0px rgba(38, 43, 51, 0.4);
      max-width: 100%;
    }
  }
}
.faq-groups {
  &__list {
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-width: 320px;
    width: 100%;
    flex-shrink: 0;

  }

  &__item {
    padding: 20px;
    border-radius: 8px;
    background: linear-gradient(180.00deg, rgba(255, 255, 255, 0.2),rgba(0, 1, 40, 0.4) 100%);
  }

  &__title {
    color: rgba(255, 255, 255, 0.92);
    font-size: 16px;
    font-weight: 600;
    line-height: 132%;
  }
}

.faq {
  &__list {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-top: 16px;
  }

  &__item {
    color: rgba(255, 255, 255, 0.92);
    font-size: 18px;
    font-weight: 500;
    line-height: 146%;
    padding: 14px 24px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: .3s;
    cursor: pointer;

    &:hover {
      background: rgba(255, 255, 255, 0.2);
    }

    &--current {
      background: rgba(255, 255, 255, 0.2);

      svg {
        transform: scale(calc(32/24));
      }
    }
  }
}

.page-head {
  &__support {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  &__support-label {
    color: rgba(255, 255, 255, 0.92);
    font-size: 10px;
    font-weight: 400;
    line-height: 160%;
    text-align: right;
    max-width: 200px;
  }
}

@media screen and (max-width: $laptop) {
  .faq {
    gap: 20px;
  }
}

@media screen and (max-width: $tablet) {
  .faq-groups__list {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    background: rgba(22, 22, 25, 0.92);
    z-index: 6;
    border-radius: 0;
    padding: 20px;
    overflow-y: auto;
    overscroll-behavior: contain;

    &--opened {
      display: flex;
    }

  }
}
</style>
