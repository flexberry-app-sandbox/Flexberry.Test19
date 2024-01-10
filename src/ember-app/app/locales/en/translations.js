import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

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
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Test1',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Test1',
          title: 'Test1'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
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
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
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
