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

      <div v-if="currentTab === 'monitoring'" class="monitoring page-me__monitoring">
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
            <div class="banner__actions page-me__banner-actions">
              <input type="text" class="banner-buy__input" value="2">
              <RouterLink to="/payment" class="btn btn--accent">Включить</RouterLink>
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
      <div v-else class="result page-me__result">
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

</style>
