# jsonschema

```
yarn

yarn schema

[
  [ '#', 'Instance does not have required property "missingField".' ],
  [ '#', 'Property "option" does not match schema.' ],
  [ '#/option', 'Instance does not match any of ["FOO","BAR","BAZ"].' ],
  [ '#', 'Property "isAdmin" does not match schema.' ],
  [
    '#/isAdmin',
    'Instance type "string" is invalid. Expected "boolean".'
  ],
  [ '#', 'Property "array" does not match schema.' ],
  [ '#/array', 'Instance type "object" is invalid. Expected "array".' ],
  [ '#', 'Property "object" does not match schema.' ],
  [
    '#/object',
    'Instance does not have required property "missingField".'
  ]
]

yarn jtd

[
  [
    'option',
    '`option` does not match `option.enum` (expected `[ "FOO", "BAR", "BAZ" ]`)'
  ],
  [
    'isAdmin',
    '`isAdmin` does not match `isAdmin.type` (expected `boolean`)'
  ],
  [
    '#',
    'missing property: `missingField` (expected `{ type: "string" })`'
  ],
  [
    'array',
    '`array` does not match `array.elements` (expected `{ type: "string" }`)'
  ],
  [
    'object',
    '`object` does not match `object.missingField` (expected `{ type: "string" }`)'
  ],
  [
    'object.extra',
    '`object.extra` does not match `object` (expected `{ properties: { missingField: { type: "string" } } }`)'
  ],
  [ 'extraField', 'unexpected property: `extraField`' ]
]
```
