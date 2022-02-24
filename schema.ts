import { Schema, Validator } from '@cfworker/json-schema';
import data from './sample.json';
import schema from './sample.schema.json';

const validator = new Validator(schema as Schema, '2020-12', false);

validator.addSchema({ $id: 'https://foo.bar/beep', type: 'boolean' });

const result = validator.validate(data);
if (!result.valid) {
  console.log(result.errors.map(e => [e.instanceLocation, e.error]));
  process.exit(1);
}
