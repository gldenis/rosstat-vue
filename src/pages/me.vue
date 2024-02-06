<script setup lang="ts">

import IconFiles from "@/components/icons/IconFiles.vue";
import IconImage from "@/components/icons/IconImage.vue";
import IconDownload from "@/components/icons/IconDownload.vue";
import IconMovies from "@/components/icons/IconMovies.vue";
import DataBlock from "@/components/DataBlock.vue";
import { nextTick, ref } from "vue";
import IconAsk from "@/components/icons/IconAsk.vue";
import IconMonitoringProtect from "@/components/icons/IconMonitoringProtect.vue";
import AppSwitch from "@/components/ui/AppSwitch.vue";
import IconUmbrela from "@/components/icons/IconUmbrela.vue";
import IconFile from "@/components/icons/IconFile.vue";
import SectionProtect from "@/components/SectionProtect.vue";

const showRelations = ref(false)
const toggleRelationList = () => {
  showRelations.value = !showRelations.value
}

const monitoringOn = ref(false)
const currentTab = ref('monitoring')

const monitoringToggle = value => {
  monitoringOn.value = value

  const auth = true
  if (!auth) {
    nextTick(() => {
      monitoringOn.value = false
    })
  }
}
</script>

<template>
  <main class="page-content">
    <div class="container">
      <h1 class="title">Данные обо мне</h1>
      <div class="my-top">
        <div class="user">
          <div class="user__info">
            <div class="user__name">Николай Резников</div>
            <div class="user__email">okaymaxim@gmail.com</div>
            <div class="user__mode">
              <button class="user__mode-btn"
                      :class="{ 'user__mode-btn--current': currentTab === 'info' }"
                      @click="currentTab = 'info'"
              >
                Информация
              </button>
              <button class="user__mode-btn"
                      :class="{ 'user__mode-btn--current': currentTab === 'monitoring' }"
                      @click="currentTab = 'monitoring'"
              >
                Мониторинг
              </button>
            </div>
          </div>
          <img class="user__pic" src="@/assets/img/user.jpg" alt="">
        </div>
        <div class="monitoring-banner">
          <IconMonitoringProtect/>
          <div class="monitoring-banner__content">
            <div class="monitoring-banner__title">Мониторинг</div>
            <div class="monitoring-banner__subtitle">Контролируйте доступ ваших данных</div>
            <div class="monitoring-banner__bottom">
              <AppSwitch :checked="monitoringOn"
                         @toggle="monitoringToggle"
                         :label="monitoringOn ? 'Включен' : 'Выключено'"/>
              <!--              <div class="monitoring__switch">Выключено</div>-->
              <div class="monitoring-banner__info">
                <IconAsk/>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-if="currentTab === 'monitoring'" class="monitoring">
        <div class="banner">
          <div class="banner__left">
            <IconUmbrela />
            <div class="banner__text">
              <div class="banner__title">Статус:  <span>Отключен</span></div>
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
              <button class="btn btn--accent">Включить</button>
            </div>
          </div>
        </div>

        <section class="requests">
          <h2 class="title title--small">Запросы на ваши данные</h2>
          <div class="requests-fallback">
            <div class="requests-fallback__inner">
              <IconFile />
              <div class="requests-fallback__text">
                <div class="requests-fallback__title">Таблица с запросами пуста</div>
                <div class="requests-fallback__description">Запросы начнут приходить после включения мониторинга</div>
              </div>
            </div>
          </div>
          <div class="requests__table">
            <div class="requests__head">
              <div class="requests__head-time">Дата и время</div>
              <div class="requests__head-type">Дата и время</div>

            </div>
            <div class="requests__item" v-for="row of 7">
              <div class="requests__time">23.09.23 | 14:43</div>
              <div class="requests__description">Что было проверено</div>
              <div class="requests__actions">
                <button class="btn btn--secondary btn--small">Проверить в ответ</button>
              </div>
            </div>
          </div>
        </section>
        <SectionProtect class="page-me__protection" />
      </div>
      <div v-else class="result">
        <div class="user-section result__info">
          <div class="user-section__head">
            <h2 class="user-section__title">Информация</h2>
            <p class="user-section__meta"><span>Активность не позднее:</span> 8 минут назад</p>
          </div>
          <DataBlock title="Ваша ФИО:"
                     :info="[
                       { title: 'Константинов' },
                       { title: 'Константин' },
                       { title: 'Константинопольский' },
                     ]">
            <div class="name-relations">
              <div class="name-relations__head">
                <div class="name-relations__title">Связаны с именем (7)</div>
                <button class="name-relations__btn"
                        @click="toggleRelationList">
                  {{ showRelations ? 'Скрыть' : 'Развернуть' }}
                </button>
              </div>
              <div v-show="showRelations" class="name-relations__list">
                <div class="name-relations__item">Максим</div>
                <div class="name-relations__item">Okeymaxim</div>
                <div class="name-relations__item">Макс Березин</div>
                <div class="name-relations__item">Литар Александра</div>
                <div class="name-relations__item">березин Максим</div>
                <div class="name-relations__item">Резникова Александра Сергеевна</div>
                <div class="name-relations__item">Березин Макси</div>
              </div>
            </div>
          </DataBlock>
          <DataBlock title="Паспорт:"
                     :info="[
                       { title: 'Серия: 42 33' },
                       { title: 'Номер: 837 281' },
                     ]"/>
          <DataBlock title="Телефон:"
                     :info="[
                       { title: 'Оператор (Йота): +79990592985' },
                       { title: 'Оператор (Мегафон): +79990592985' },
                     ]"/>
          <DataBlock title="Соц. сети:"
                     :info="[
                       { title: 'ID 338920713: @Okeymaxim', icon: 'telegram' },
                       { title: 'Max: @okeymaxim', icon: 'instagram' }
                     ]"
          />
          <DataBlock title="Посещает:"
                     :info="[
                       { title: '@okeymaxim', icon: 'youtube' },
                       { title: 'Photos Maps' },
                     ]"
          />
          <DataBlock title="Объявлений:"
                     :info="[ { title: '3 шт.' } ]"
          />
        </div>

        <div class="user-section result__media">
          <div class="user-section__head">
            <h2 class="user-section__title">Медиа и документы</h2>
            <div class="media-category__list">
              <div class="media-category__item">
                <IconImage/>
                5 938
              </div>
              <div class="media-category__item">
                <IconMovies/>
                349
              </div>
              <div class="media-category__item">
                <IconFiles/>
                1 293
              </div>
            </div>
          </div>
          <div class="result-media">
            <div class="result-media__item result-media__item--blur">
              <img src="@/assets/img/content/img-1.jpg" loading="lazy" alt="" width="156" height="100">
            </div>
            <div class="result-media__item result-media__item--blur">
              <img src="@/assets/img/content/img-2.jpg" loading="lazy" alt="" width="156" height="100">
            </div>
            <div class="result-media__item result-media__item--blur">
              <img src="@/assets/img/content/img-3.jpg" loading="lazy" alt="" width="156" height="100">
            </div>
            <div class="result-media__item result-media__item--blur">
              <img src="@/assets/img/content/img-4.jpg" loading="lazy" alt="" width="156" height="100">
            </div>
            <div class="result-media__item result-media__item--blur">
              <img src="@/assets/img/content/img-5.jpg" loading="lazy" alt="" width="156" height="100">
            </div>
            <div class="result-media__item result-media__item--blur">
              <img src="@/assets/img/content/img-6.jpg" loading="lazy" alt="" width="156" height="100">
            </div>
            <div class="result-media__item result-media__item--blur">
              <img src="@/assets/img/content/img-7.jpg" loading="lazy" alt="" width="156" height="100">
            </div>
            <div class="result-media__item result-media__item--blur">
              <img src="@/assets/img/content/img-8.jpg" loading="lazy" alt="" width="156" height="100">
            </div>
          </div>
          <div class="user-section__bottom">
            <button class="btn btn--primary result-media__btn">
              <IconDownload/>
              Скачать данные (3.42 гб)
            </button>
          </div>
        </div>

        <div class="user-section result__place">
          <div class="user-section__head">
            <h2 class="user-section__title">Передвижения</h2>
          </div>
          <DataBlock title="Страна:"
                     :info="[
                       { title: 'RU' },
                       { title: 'Страна: Россия' },
                       { title: 'Приморский край' },
                     ]"/>
          <DataBlock title="Возможные адреса:"
                     :info="[
                       { title: 'Страна: Россия' },
                       { title: 'Краснодарский край' },
                       { title: 'Краснодар' },
                     ]"/>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
.requests {
  margin-top: 60px;

  &__table {
    border-radius: 4px;
    background: rgba(255, 255, 255, 0.2);
    padding: 20px;
    margin-top: 40px;
  }

  &__head-time {
    width: 160px;
    height: 32px;
    border: 2px solid rgba(255, 255, 255, 0.92);
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgba(255, 255, 255, 0.92);
    font-size: 12px;
    font-weight: 600;
    line-height: 152%;
  }

  &__head-type {
    height: 32px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgba(255, 255, 255, 0.92);
    font-size: 12px;
    font-weight: 600;
    line-height: 152%;
    flex-grow: 1;
  }

  &__item, &__head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 0;
    gap: 16px;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
  }

  &__time {
    width: 160px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid rgba(255, 255, 255, 0.92);
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.2);
    padding: 10px;
    color: rgba(255, 255, 255, 0.92);
    font-size: 14px;
    font-weight: 500;
    line-height: 140%;
  }

  &__description {
    flex-grow: 1;
  }
}

.requests-fallback {
  margin-top: 60px;
  text-align: center;
  padding: 20px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.2);

  &__inner {
    padding: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
    border: 1px dashed rgba(255, 255, 255, 0.2);
    border-radius: 8px;
  }

  &__text {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  &__title {
    color: rgb(255, 255, 255);
    font-size: 24px;
    font-weight: 600;
    line-height: 132%;
  }

  &__description {
    color: rgb(255, 255, 255);
    font-size: 14px;
    font-weight: 500;
    line-height: 140%;
  }
}

.banner {
  &__title {
    span {
      color: red;
    }
  }

  &__description {
    font-size: 14px;
  }

  &__actions {
    display: flex;
    gap: 24px;
  }
}

.banner-buy {
  display: flex;
  align-items: center;
  gap: 24px;

  &__input {
    color: rgba(255, 255, 255, 0.92);
    font-size: 15px;
    font-weight: 400;
    line-height: 132%;
    text-align: center;
    border-bottom: 4px solid rgb(217, 155, 83);
    border-right: 2px solid rgb(217, 155, 83);
    border-radius: 4px;
    background: rgba(18, 19, 20, 0.68);
    padding: 10px 8px;
    width: 100px;
    height: 52px;
    outline: none;

    &::placeholder {
      color: rgba(255, 255, 255, 0.6);
    }
  }

  &__label {
    color: rgb(157, 162, 173);
    font-size: 14px;
    font-weight: 500;
    line-height: 140%;
  }

  &__text {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  &__price {
    text-align: right;

    &-value {
      color: rgb(246, 248, 250);
      font-size: 24px;
      font-weight: 300;
      line-height: 132%;
    }

    &-old {
      color: rgb(157, 162, 173);
      font-size: 14px;
      font-weight: 500;
      line-height: 146%;
      text-decoration-line: line-through;
      margin-right: 12px;
    }
  }
}

.monitoring {
  margin-top: 20px;
}

.monitoring-banner {
  backdrop-filter: blur(16px);
  background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url("@/assets/img/monitoring.png");
  background-size: cover;
  width: 100%;
  border-radius: 8px;
  padding: 20px;
  display: flex;
  gap: 20px;

  &__content {
    display: flex;
    flex-direction: column;
  }

  &__title {
    color: rgba(255, 255, 255, 0.92);
    font-size: 24px;
    font-weight: 600;
    line-height: 132%;
  }

  &__subtitle {
    color: rgb(255, 255, 255);
    font-size: 14px;
    font-weight: 500;
    line-height: 140%;
    margin-top: 4px;
  }

  &__bottom {
    margin-top: 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__info {
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    background: rgba(222, 224, 227, 0.92);
    color: #000;
  }

  &__switch {
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px;
    background: url("@/assets/img/unavailable.png");
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 16px;

  }
}

.my-top {
  display: flex;
  gap: 20px;
  margin-top: 40px;
}

.user {
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.92);
  padding: 20px;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  max-width: 540px;
  width: 100%;
  flex-shrink: 0;


  &__info {
    display: flex;
    flex-direction: column;
  }

  &__name {
    color: #303034;
    font-size: 28px;
    font-weight: 700;
    line-height: 132%;
  }

  &__email {
    color: #303034;
    line-height: 132%;
    margin-top: 4px;
  }

  &__mode {
    border-radius: 22px;
    background: rgba(222, 224, 227, 0.92);
    margin-top: auto;
  }

  &__mode-btn {
    color: #606268;
    line-height: 132%;
    padding: 10px 16px;

    &--current {
      background: #303034;
      border-radius: 20px;
      color: rgba(255, 255, 255, 0.92);
    }
  }

  &__pic {
    width: 116px;
    height: 116px;
    border-radius: 50%;
  }
}

.name-relations {
  gap: 24px;
  display: flex;
  flex-direction: column;

  &__list {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
  }

  &__item {
    background: rgba(22, 22, 25, 0.2);
    border-radius: 4px;
    padding: 10px 16px;
    font-weight: 400;
    font-size: 15px;
    line-height: 132%;
    color: #fff;
  }
}

.media-category {
  &__list {
    display: flex;
    gap: 8px;
    margin-top: 24px;
  }

  &__item {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    border-radius: 12px;
    padding: 4px 10px 4px 8px;
    height: 40px;
    background: #fff;
    color: rgb(22, 22, 25);
    font-size: 12px;
    font-weight: 700;
    line-height: 132%;
  }
}

.name-relations {
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.2);
  padding: 20px;
  margin-top: 8px;

  &__head {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__title {
    color: $color-white;
    font-size: 16px;
    font-weight: 700;
    line-height: 132%;
  }

  &__btn {
    color: rgba(255, 255, 255, 0.92);
    font-size: 15px;
    font-weight: 400;
    line-height: 132%;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.2);
    padding: 16px;
    height: 40px;
    display: flex;
    align-items: center;

    &--disabled {
      pointer-events: none;
      opacity: 0.5;
    }
  }
}

.row {
  display: flex;
  align-items: center;
  gap: 32px;
  align-self: flex-start;
}

.user-section {
  border-radius: 8px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.20) 0%, rgba(0, 1, 40, 0.40) 100%);
  padding: 20px;
  position: relative;

  &__head {
    padding-bottom: 24px;
  }

  &__bottom {
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 20px;
    background: linear-gradient(180deg, rgba(47, 54, 86, 0.00) 0%, #2F3656 100%);
    border-radius: 0 0 8px 8px;
  }

  &__title {
    color: $color-white;
    font-size: 24px;
    font-weight: 600;
    line-height: 132%;
  }

  &__meta {
    color: rgba(255, 255, 255, 0.92);
    font-size: 16px;
    font-weight: 700;
    line-height: 132%;
    margin-top: 12px;

    span {
      opacity: 0.6;
    }
  }
}

.result {
  margin-top: 60px;
  display: grid;
  gap: 20px;
  width: 100%;
  grid-template-columns: 540px 360px;
  grid-template-rows: auto 1fr;

  &__info {
    grid-column: 1/2;
    grid-row: 1/3;
    height: max-content;
  }

  &__media {
    grid-column: 2/3;
    grid-row: 1/2;
    padding-bottom: 0;
  }

  &__place {
    grid-column: 2/3;
    grid-row: 2/3;
    height: max-content;
  }
}

.result-media {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  max-height: 380px;
  overflow: hidden;

  &__item {
    border-radius: 8px;
    overflow: hidden;

    &--blur {
      position: relative;

      &:after {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        backdrop-filter: blur(4px);
        background: rgba(0, 0, 0, 0.2);
      }
    }
  }

  img {
    object-fit: cover;
  }

  &__btn {
    width: 100%;
  }
}

@media screen and (max-width: $laptop) {
  .result {
    display: flex;
    flex-wrap: wrap;

    &__info {
      width: 100%;
    }

    &__media {
      width: calc((100% - 20px) / 2);
    }

    &__place {
      width: calc((100% - 20px) / 2);
    }
  }

  .result-media {
    &__item {
      width: calc((100% - 8px) / 2);
      aspect-ratio: 156/100;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  .user {
    max-width: 100%;
  }
  .my-top {
    flex-direction: column;
  }

  .banner {
    flex-direction: column;
    align-items: center;
  }
}

@media screen and (max-width: $tablet) {
  .title- {
    font-size: 28px;
  }

  .row {
    flex-wrap: wrap;
    gap: 16px;
  }
  .result {
    &__media {
      width: 100%;
    }

    &__place {
      width: 100%;
    }
  }

}
@media screen and (max-width: $phablet) {
  .requests {
    &__item {
      flex-wrap: wrap;
      gap: 16px;
    }

    &__time {
      order: 1;
    }

    &__description {
      order: 3;
      width: 100%;
    }

    &__actions {
      order: 2;
    }
  }
}

@media screen and (max-width: $mobile) {
  .user {
    flex-direction: column-reverse;
    align-items: center;
    text-align: center;

    &__mode {
      margin-top: 20px;
    }
  }

  .banner {
    align-items: flex-start;

    &__left {
      gap: 16px;

      svg {
        flex-shrink: 0;
      }
    }

    &__right {
      flex-direction: column;
      margin-left: 64px;
      align-items: flex-start;
    }

    &__text {
      align-items: flex-start;
    }

    &-buy {
      &__price {
        text-align: left;
      }
    }
  }
}

@media screen and (max-width: $mobile-xs) {
  .banner {
    align-items: center;

    &__left {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }

    &__text {
      align-items: center;
      text-align: center;
    }

    &__actions {
      flex-direction: column;
      align-items: center;
    }

    &__right {
      align-items: center;
      margin-left: auto;
      margin-right: auto;
    }

    &-buy {
      align-items: center;

      &__text {
        text-align: center;
      }

      &__price {
        text-align: center;
      }
    }
  }
}
</style>
