<script setup lang="ts">

import { ref } from "vue";
import IconAgain from "@/components/icons/IconAgain.vue";

import IconImage from "@/components/icons/IconImage.vue";
import IconMovies from "@/components/icons/IconMovies.vue";
import IconFiles from "@/components/icons/IconFiles.vue";
import IconDownload from "@/components/icons/IconDownload.vue";
import UnlockData from "@/components/UnlockData.vue";
import DataBlock from "@/components/DataBlock.vue";

const showRelations = ref(false)
const toggleRelationList = () => {
  showRelations.value = !showRelations.value
}
</script>

<template>
  <main class="page__content">
    <div class="container">
      <div class="row">
        <RouterLink to="/other" class="btn btn--again">
          <IconAgain/>
        </RouterLink>
        <h1 class="title">tim.jennings@example.com</h1>
      </div>
      <UnlockData />
      <div class="result">
        <div class="user-section result__info">
          <div class="user-section__head">
            <h2 class="user-section__title">Информация</h2>
            <p class="user-section__meta"><span>Активность не позднее:</span> 8 минут назад</p>
          </div>
          <DataBlock title="Ваша ФИО:"
                     :unavailable="true"
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
          </DataBlock >
          <DataBlock title="Паспорт:"
                     :unavailable="true"
                     :info="[
                       { title: 'Серия: 42 33' },
                       { title: 'Номер: 837 281' },
                     ]" />
          <DataBlock title="Телефон:"
                     :unavailable="true"
                     :info="[
                       { title: 'Оператор (Йота): +79990592985' },
                       { title: 'Оператор (Мегафон): +79990592985' },
                     ]" />
          <DataBlock title="Соц. сети:"
                     :unavailable="true"
                     :info="[
                       { title: 'ID 338920713: @Okeymaxim', icon: 'telegram' },
                       { title: 'Max: @okeymaxim', icon: 'instagram' }
                     ]"
          />
          <DataBlock title="Посещает:"
                     :unavailable="true"
                     :info="[
                       { title: '@okeymaxim', icon: 'youtube' },
                       { title: 'Photos Maps' },
                     ]"
          />
          <DataBlock title="Объявлений:"
                     :unavailable="true"
                     :info="[ { title: '3 шт.' } ]"
          />
        </div>

        <div class="user-section result__media">
          <div class="user-section__head">
            <h2 class="user-section__title">Медиа и документы</h2>
            <div class="media-category__list">
              <div class="media-category__item">
                <IconImage />
                5 938
              </div>
              <div class="media-category__item">
                <IconMovies />
                349
              </div>
              <div class="media-category__item">
                <IconFiles />
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
                     ]" />
          <DataBlock title="Возможные адреса:"
                     :info="[
                       { title: 'Страна: Россия' },
                       { title: 'Краснодарский край' },
                       { title: 'Краснодар' },
                     ]" />
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
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

@media screen and (max-width: $mobile) {
  .title {
    word-break: break-all;
    font-size: 22px;
  }
}
</style>
