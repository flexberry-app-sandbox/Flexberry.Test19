import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ТипОплатыEnum from '../enums/i-i-s-test1-тип-оплаты';

export default FlexberryEnum.extend({
  enum: ТипОплатыEnum,
  sourceType: 'IIS.Test1.ТипОплаты'
});
