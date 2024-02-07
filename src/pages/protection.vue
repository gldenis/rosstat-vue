<script setup lang="ts">

import { ref } from "vue";
import IconArrowDown from "@/components/icons/IconArrowDown.vue";
import IconCourse from "@/components/icons/IconCourse.vue";
import IconDownload from "@/components/icons/IconDownload.vue";
import IconCourseBanner from "@/components/icons/IconCourseBanner.vue";
import IconAsk from "@/components/icons/IconAsk.vue";

import { useWindowSize } from '@vueuse/core'

const { width, height } = useWindowSize()

const currentLesson = ref('1')
const openedSubject = ref({})

const toggleSubject = (subject, lesson) => {
  if (openedSubject.value[lesson]?.includes(subject)) {
    openedSubject.value[lesson] = openedSubject.value[lesson]?.filter(mdiSitemap => mdiSitemap !== subject)
  } else {
    openedSubject.value[lesson] = openedSubject.value[lesson] ? [...openedSubject.value[lesson], subject] : [subject]
  }
}
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
          <img src="@/assets/img/protect.png" alt="" width="240" height="240" loading="lazy">
        </div>
      </div>
      <div class="tiles">
        <h2 class="title title--xs tiles__section-title">Самый полный курс по защите от мошенничества <br>
          и вымогателей в интернете</h2>
        <div class="tiles__list">
          <div class="tiles__item">
            <IconAsk class="tiles__icon" width="40" height="40" />
            <div class="tiles__value">Title</div>
            <div class="tiles__text">Контроль доступа всей вашей информации</div>
          </div>
          <div class="tiles__item">
            <IconAsk class="tiles__icon" width="40" height="40" />
            <div class="tiles__value">Title</div>
            <div class="tiles__text">Удаление вашей информации из интернета и приложений</div>
          </div>
          <div class="tiles__item">
            <IconAsk class="tiles__icon" width="40" height="40" />
            <div class="tiles__value">Title</div>
            <div class="tiles__text">Защита ваших друзей и близких</div>
          </div>
          <div class="tiles__item">
            <IconAsk class="tiles__icon" width="40" height="40" />
            <div class="tiles__value">Title</div>
            <div class="tiles__text">Защита от интернет мошенников и вымогаталей</div>
          </div>
        </div>
      </div>
      <div class="course">
        <h2 class="title">Что входит в курс</h2>
        <div class="lessons-thumbnails">
          <div class="lessons-thumbnails__item"
               :class="{ 'lessons-thumbnails__item--current': item == currentLesson }"
               v-for="item of 12">
            {{ item }}
            <span>урок</span>
          </div>
        </div>
        <div class="lesson__list">
          <div class="lesson" v-for="lesson of 2">
            <div class="lesson__title">1 урок</div>
            <div class="lesson-subject__list">
              <div class="lesson-subject" v-for="subject of 4" :class="{ 'lesson-subject--opened': openedSubject[lesson]?.includes(subject) }">
                <div class="lesson-subject__head" @click="toggleSubject(subject, lesson)">
                  <h3 class="lesson-subject__title">Тема урока</h3>
                  <IconArrowDown class="lesson-subject__arrow" :class="{ 'lesson-subject__arrow--opened': openedSubject[lesson]?.includes(subject) }"/>
                </div>
                <div class="lesson-subject__content" :class="{ 'lesson-subject__content--opened': openedSubject[lesson]?.includes(subject) }">
                  <div class="lesson-subject__description">
                    <p>
                      Краткое описание... пользователю инструментов и настроек для управления своей цифровой приватностью, этот сервис обеспечивает непрерывную защиту персональных данных и предотвращает их несанкционированное использование или распространение
                    </p>
                  </div>
                  <div class="lesson-subject__media">
                    <img src="@/assets/img/subject-media.jpeg" alt="" width="240" height="135" loading="lazy">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="course-order">
        <h2 class="title">Купить весь курс</h2>
        <div class="course-meta">
          <div class="course-info">
            <div class="course-info__item">
              <IconCourse />
              <div>
                <div>Уроков</div>
                <span>12</span>
              </div>
            </div>
            <div class="course-info__item course-info__item--col">
              Скачать демо
              <div class="course-info__duration">
                <IconDownload />
                <span>10:00</span>
              </div>
            </div>
          </div>
          <div class="course-price">
            <div class="course-price__value">
              47 : 31
            </div>
            <div class="course-price__discount">
              <div>Скидка</div>
              <span>-50%</span>
            </div>
          </div>
        </div>
      </div>
      <div class="banner page-protection__banner">
        <div class="banner__left">
          <IconCourseBanner />
          <div class="banner__text">
            <div class="banner__title">12 уроков за пол цены</div>
            <div class="banner__description">Описание</div>
          </div>
        </div>
        <div class="banner__right">
          <div class="banner-price">
            <div class="banner-price__old">100 000 ₽</div>
            <div class="banner-price__value">50 000 ₽</div>
          </div>
          <RouterLink to="/payment" class="btn btn--accent">{{ width > 800 ? 'Выбрать способ оплаты' : 'К оплате' }}</RouterLink>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">

</style>
