import { Schema, validate } from "jtd";
import ObjectPath from "object-path";

import data from './sample.json';
import schema from './sample.jtd.json';

function formatJson(json: any) {
  if (typeof json !== 'object') return `${json}`;
  const stringified = JSON.stringify(json, null, 2)
  return stringified.replace(/^[\t ]*"[^:\n\r]+(?<!\\)":/gm, (match) => {
    return match.replace(/"/g, "");
  }).replace(/\s*\n\s*/g, " ");
}

function formatPath(path: string[]) {
  return path.filter(p => p !== 'properties').join('.');
}

function formatValidationErrors(errors: ReturnType<typeof validate>) {
  return errors.map(error => {
    const instancePath = formatPath(error.instancePath);
    const schemaPath = formatPath(error.schemaPath);
    if (!schemaPath) return [instancePath, `unexpected property: \`${instancePath}\``];
    const schemaDef = ObjectPath.get(schema, error.schemaPath);
    if (!instancePath) return ['#', `missing property: \`${schemaPath}\` (expected \`${formatJson(schemaDef)})\``];
    return [instancePath, `\`${instancePath}\` does not match \`${schemaPath}\` (expected \`${formatJson(schemaDef)}\`)`];
  })
}

const errors = validate(schema as Schema, data);
if (errors.length) {
  console.log(formatValidationErrors(errors));
  process.exit(1);
}