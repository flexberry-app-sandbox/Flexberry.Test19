import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  время: DS.attr('string'),
  дата: DS.attr('date'),
  кодЗаписи: DS.attr('number'),
  комментарий: DS.attr('string'),
  сумма: DS.attr('decimal'),
  типОплаты: DS.attr('i-i-s-test1-тип-оплаты'),
  клиент: DS.belongsTo('i-i-s-test1-клиент', { inverse: null, async: false }),
  оказаниеУслуг: DS.hasMany('i-i-s-test1-оказание-услуг', { inverse: 'запись', async: false })
});

export let ValidationRules = {
  время: {
    descriptionKey: 'models.i-i-s-test1-запись.validations.время.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  дата: {
    descriptionKey: 'models.i-i-s-test1-запись.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  кодЗаписи: {
    descriptionKey: 'models.i-i-s-test1-запись.validations.кодЗаписи.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  комментарий: {
    descriptionKey: 'models.i-i-s-test1-запись.validations.комментарий.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  сумма: {
    descriptionKey: 'models.i-i-s-test1-запись.validations.сумма.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  типОплаты: {
    descriptionKey: 'models.i-i-s-test1-запись.validations.типОплаты.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  клиент: {
    descriptionKey: 'models.i-i-s-test1-запись.validations.клиент.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  оказаниеУслуг: {
    descriptionKey: 'models.i-i-s-test1-запись.validations.оказаниеУслуг.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЗаписьE', 'i-i-s-test1-запись', {
    типОплаты: attr('Тип оплаты', { index: 0 }),
    комментарий: attr('Комментарий', { index: 1 }),
    сумма: attr('Сумма', { index: 2 }),
    кодЗаписи: attr('Код записи', { index: 3 }),
    время: attr('Время', { index: 4 }),
    дата: attr('Дата', { index: 5 }),
    клиент: belongsTo('i-i-s-test1-клиент', 'Клиент', {
      фамилия: attr('Фамилия', { index: 7, hidden: true })
    }, { index: 6, displayMemberPath: 'фамилия' }),
    оказаниеУслуг: hasMany('i-i-s-test1-оказание-услуг', 'Оказание услуг', {
      услуга: belongsTo('i-i-s-test1-услуга', 'Услуга', {
        наименование: attr('Наименование', { index: 1, hidden: true })
      }, { index: 0, displayMemberPath: 'наименование' })
    })
  });

  modelClass.defineProjection('ЗаписьL', 'i-i-s-test1-запись', {
    типОплаты: attr('Тип оплаты', { index: 0 }),
    комментарий: attr('Комментарий', { index: 1 }),
    сумма: attr('Сумма', { index: 2 }),
    кодЗаписи: attr('Код записи', { index: 3 }),
    время: attr('Время', { index: 4 }),
    дата: attr('Дата', { index: 5 }),
    клиент: belongsTo('i-i-s-test1-клиент', 'Фамилия', {
      фамилия: attr('Фамилия', { index: 6 })
    }, { index: -1, hidden: true })
  });
};
