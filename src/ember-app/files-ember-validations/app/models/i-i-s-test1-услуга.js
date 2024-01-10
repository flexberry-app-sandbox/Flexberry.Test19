import {
  defineNamespace,
  defineProjections,
  Model as УслугаMixin
} from '../mixins/regenerated/models/i-i-s-test1-услуга';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(УслугаMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
