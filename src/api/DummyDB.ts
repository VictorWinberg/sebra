import initSqlJs, { Database } from 'sql.js';
import camelcaseKeys from 'camelcase-keys';

import { localStorageSet } from '@/utils';

import schema from './schema.sql?raw';
import seed from './seed.sql?raw';

const SQL = await initSqlJs({
  // Required to load the wasm binary asynchronously. Of course, you can host it wherever you want
  locateFile: (file) => `https://sql.js.org/dist/${file}`
});

// Load a database
const data = null; // TODO: Use localStorageGet<number[]>('db');

let db: Database;
if (data) {
  db = new SQL.Database(data);
} else {
  db = new SQL.Database();
  db.run(schema);
  db.run(seed);
}

export function query<T extends Record<string, unknown>>(sql: string) {
  const [res] = db.exec(sql);
  const result = res.values.map((value) => res.columns.reduce((acc, col, i) => ({ ...acc, [col]: value[i] }), {} as T));
  return camelcaseKeys(result, { deep: true });
}

export function save() {
  const binaryArray = db.export();
  localStorageSet<number[]>('db', Array.from(binaryArray));
}

export function reset() {
  db.close();
  db = new SQL.Database();
  db.run(schema);
  save();
}
