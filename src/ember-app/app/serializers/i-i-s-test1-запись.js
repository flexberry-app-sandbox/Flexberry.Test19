import { Serializer as ЗаписьSerializer } from
  '../mixins/regenerated/serializers/i-i-s-test1-запись';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ЗаписьSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
