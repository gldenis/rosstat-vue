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
  <main class="page-content">
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
      <div class="tiles">
        <h2 class="title title--xs tiles__section-title">Самый полный курс по защите от мошенничества
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
                    <img src="@/assets/img/subject-media.jpeg" alt="">
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
              <div>
                <IconDownload />
                <span>10:00</span>
              </div>
            </div>
          </div>
          <div class="course-price">
            <div class="course-price__value">
              47:31
            </div>
            <div class="course-price__discount">
              <div>Скидка</div>
              <span>-50%</span>
            </div>
          </div>
        </div>
      </div>
      <div class="banner">
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
          <button class="btn btn--accent">{{ width > 800 ? 'Выбрать способ оплаты' : 'К оплате' }}</button>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
.tiles {
  &__section-title {
    margin-bottom: 20px;
  }
}
.page__content {
  padding-top: 0;
}
.course {
  margin-top: 60px;
}

.course-order {
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.course-meta {
  display: flex;
  justify-content: space-between;
}

.course-price {
  display: flex;
  align-items: stretch;

  &__value {
    box-sizing: border-box;
    border-radius: 4px 0px 0px 4px;
    background: linear-gradient(90.00deg, rgba(255, 71, 46, 0.16),rgba(255, 71, 46, 0.32) 100%);
    padding: 10px 20px;
    color: rgb(255, 255, 255);
    font-size: 45px;
    font-weight: 700;
    line-height: 52px;
    text-align: center;
    position: relative;
    overflow: hidden;

    &:after {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      display: block;
      content: '';
      height: 4px;
      background: #fff;
    }
  }

  &__discount {
    border-radius: 0px 4px 4px 0px;
    background: rgb(255, 71, 46);
    color: rgb(246, 248, 250);
    font-size: 10px;
    font-weight: 700;
    line-height: 152%;
    text-transform: uppercase;
    padding: 10px 20px;

    span {
      color: rgba(255, 255, 255, 0.92);
      font-size: 24px;
      font-weight: 600;
      line-height: 132%;
    }
  }
}

.course-info {
  display: flex;
  gap: 8px;

  &__item {
    padding: 10px 20px;
    border-radius: 4px;
    background: rgba(255, 255, 255, 0.16);
    color: rgb(246, 248, 250);
    font-size: 10px;
    font-weight: 700;
    line-height: 152%;
    text-transform: uppercase;
    display: flex;
    min-height: 80px;
    align-items: center;
    justify-content: center;
    gap: 16px;

    &--col {
      flex-direction: column;
      gap: 4px;
    }

    span {
      color: rgba(255, 255, 255, 0.92);
      font-size: 24px;
      font-weight: 600;
      line-height: 132%;
    }
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

@media screen and (max-width: $phablet) {
  .course-meta {
    flex-direction: column;
    gap: 16px;
  }

  .course-info {
    &__item {
      width: calc((100% - 8px) / 2);
    }
  }

  .course-price {
    width: 100%;

    &__value {
      width: 67%;
    }

    &__discount {
      width: 33%;
      text-align: center;
    }
  }
}

</style>
