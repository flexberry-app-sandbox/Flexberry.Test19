import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  услуга: DS.belongsTo('i-i-s-test1-услуга', { inverse: null, async: false }),
  запись: DS.belongsTo('i-i-s-test1-запись', { inverse: 'оказаниеУслуг', async: false })
});

export let ValidationRules = {
  услуга: {
    descriptionKey: 'models.i-i-s-test1-оказание-услуг.validations.услуга.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  запись: {
    descriptionKey: 'models.i-i-s-test1-оказание-услуг.validations.запись.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ОказаниеУслугE', 'i-i-s-test1-оказание-услуг', {
    услуга: belongsTo('i-i-s-test1-услуга', 'Услуга', {
      наименование: attr('Наименование', { index: 1, hidden: true })
    }, { index: 0, displayMemberPath: 'наименование' })
  });
};
