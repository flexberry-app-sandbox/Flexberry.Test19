import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISTest1ЗаписьLForm from './forms/i-i-s-test1-запись-l';
import IISTest1КлиентLForm from './forms/i-i-s-test1-клиент-l';
import IISTest1УслугаLForm from './forms/i-i-s-test1-услуга-l';
import IISTest1ЗаписьEForm from './forms/i-i-s-test1-запись-e';
import IISTest1КлиентEForm from './forms/i-i-s-test1-клиент-e';
import IISTest1УслугаEForm from './forms/i-i-s-test1-услуга-e';
import IISTest1ЗаписьModel from './models/i-i-s-test1-запись';
import IISTest1КлиентModel from './models/i-i-s-test1-клиент';
import IISTest1ОказаниеУслугModel from './models/i-i-s-test1-оказание-услуг';
import IISTest1УслугаModel from './models/i-i-s-test1-услуга';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-test1-запись': IISTest1ЗаписьModel,
    'i-i-s-test1-клиент': IISTest1КлиентModel,
    'i-i-s-test1-оказание-услуг': IISTest1ОказаниеУслугModel,
    'i-i-s-test1-услуга': IISTest1УслугаModel
  },

  'application-name': 'Test1',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Test1',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Test1',
          title: 'Test1'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        test1: {
          caption: 'Test1',
          title: 'Test1',
          'i-i-s-test1-услуга-l': {
            caption: 'Услуга',
            title: ''
          },
          'i-i-s-test1-запись-l': {
            caption: 'Запись',
            title: ''
          },
          'i-i-s-test1-клиент-l': {
            caption: 'Клиент',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-test1-запись-l': IISTest1ЗаписьLForm,
    'i-i-s-test1-клиент-l': IISTest1КлиентLForm,
    'i-i-s-test1-услуга-l': IISTest1УслугаLForm,
    'i-i-s-test1-запись-e': IISTest1ЗаписьEForm,
    'i-i-s-test1-клиент-e': IISTest1КлиентEForm,
    'i-i-s-test1-услуга-e': IISTest1УслугаEForm
  },

});

export default translations;
