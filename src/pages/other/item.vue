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
  <main class="page-content">
    <div class="container">
      <div class="page-other-item__row">
        <RouterLink to="/other" class="btn btn--again">
          <IconAgain/>
        </RouterLink>
        <h1 class="title page-other-item__title">tim.jennings@example.com</h1>
      </div>
      <UnlockData />
      <div class="result page-other-item__result">
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

</style>
