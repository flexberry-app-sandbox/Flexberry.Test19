import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-test1-услуга', 'Unit | Serializer | i-i-s-test1-услуга', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-test1-услуга',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-test1-тип-оплаты',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
