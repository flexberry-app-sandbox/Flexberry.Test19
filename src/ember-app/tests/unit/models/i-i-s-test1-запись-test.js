import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-test1-запись', 'Unit | Model | i-i-s-test1-запись', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-test1-запись',
    'model:i-i-s-test1-клиент',
    'model:i-i-s-test1-оказание-услуг',
    'model:i-i-s-test1-услуга',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
