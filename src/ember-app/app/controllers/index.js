import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.test1.caption'),
          title: i18n.t('forms.application.sitemap.test1.title'),
          children: [{
            link: 'i-i-s-test1-услуга-l',
            caption: i18n.t('forms.application.sitemap.test1.i-i-s-test1-услуга-l.caption'),
            title: i18n.t('forms.application.sitemap.test1.i-i-s-test1-услуга-l.title'),
            icon: 'list',
            children: null
          }, {
            link: 'i-i-s-test1-запись-l',
            caption: i18n.t('forms.application.sitemap.test1.i-i-s-test1-запись-l.caption'),
            title: i18n.t('forms.application.sitemap.test1.i-i-s-test1-запись-l.title'),
            icon: 'list',
            children: null
          }, {
            link: 'i-i-s-test1-клиент-l',
            caption: i18n.t('forms.application.sitemap.test1.i-i-s-test1-клиент-l.caption'),
            title: i18n.t('forms.application.sitemap.test1.i-i-s-test1-клиент-l.title'),
            icon: 'building',
            children: null
          }]
        }
      ]
    };
  }),
})