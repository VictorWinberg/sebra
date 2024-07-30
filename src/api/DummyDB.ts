import initSqlJs, { SqlJsStatic, Database, SqlValue } from 'sql.js';
import camelcaseKeys from 'camelcase-keys';

import {
  generateColumns,
  generatePlaceholders,
  generateSetClause,
  generateWhereClause,
  hashCode,
  localStorageGet,
  localStorageSet,
  mapParams
} from '@/utils';
import { BASE_URL } from '@/config';

import schema from './schema.sql?raw';
import triggers from './triggers.sql?raw';
import seed from './seed.sql?raw';

let SQL: SqlJsStatic;
let db: Database;

async function init() {
  SQL = await initSqlJs({
    // Required to load the wasm binary asynchronously. Of course, you can host it wherever you want
    locateFile: (file) => `${BASE_URL}wasm/${file}`
  });

  const schemaHash = hashCode(schema + triggers);
  const storedHash = localStorageGet<number>('schemaHash', undefined);
  const isSchemaChanged = schemaHash !== storedHash;

  // Load a database
  const data = localStorageGet<number[]>('db');

  // Use cached data if schema is not changed
  if (data && !isSchemaChanged) {
    db = new SQL.Database(data);
    return;
  }

  db = new SQL.Database();
  db.run(schema);
  db.run(seed);
  db.run(triggers);

  localStorageSet('schemaHash', schemaHash);
  save();
}

init();

type Params = Record<string, SqlValue>;

export function query<T extends Record<string, unknown>>(sql: string, params?: Partial<Params>): T[] {
  const [res] = db.exec(sql, params && mapParams(params));
  const result = res.values.map((value) => res.columns.reduce((acc, col, i) => ({ ...acc, [col]: value[i] }), {} as T));
  return camelcaseKeys(result, { deep: true }) as T[];
}

const executeQuery = <T extends Params>(queryText: string, params: Params): T[] => {
  const stmt = db.prepare(queryText);
  const results: T[] = [];

  stmt.bind(params);
  while (stmt.step()) {
    const result = stmt.getAsObject();
    results.push(camelcaseKeys(result, { deep: true }) as T);
  }

  stmt.free(); // Free the memory used by the statement
  save();
  return results;
};

export const selectAllQuery = <T extends Params>(table: string, where: Partial<T>): T[] => {
  const whereClause = generateWhereClause(where);

  const queryText = `
    SELECT * FROM ${table}
    WHERE ${whereClause};
  `;
  const params = mapParams(where);
  return executeQuery<T>(queryText, params);
};

export const selectOneQuery = <T extends Params>(table: string, where: Partial<T>): T => {
  return selectAllQuery(table, where)[0];
};

export const insertQuery = <T extends Params>(table: string, data: Partial<T>): T => {
  const columns = generateColumns(data);
  const placeholders = generatePlaceholders(data);

  const queryText = `
    INSERT INTO ${table} (${columns})
    VALUES (${placeholders})
    RETURNING *;
  `;
  const params = mapParams(data);
  return executeQuery<T>(queryText, params)[0];
};

export const insertManyQuery = <T extends Params>(table: string, data: Partial<T>[]): T[] => {
  const columns = generateColumns(data[0]);

  const queryText = `
    INSERT INTO ${table} (${columns})
    VALUES ${data.map((item, index) => `(${generatePlaceholders(item, index)})`).join(', ')}
    RETURNING *;
  `;
  const params = data.reduce((acc, item, index) => ({ ...acc, ...mapParams(item, index) }), {});
  return executeQuery<T>(queryText, params);
};

export const updateQuery = <T extends Params>(table: string, data: Partial<T>, where: Partial<T>): T[] => {
  const setClause = generateSetClause(data, 1);
  const whereClause = generateWhereClause(where, 2);

  const queryText = `
    UPDATE ${table}
    SET ${setClause}
    WHERE ${whereClause}
    RETURNING *;
  `;
  const params = {
    ...mapParams(data, 1),
    ...mapParams(where, 2)
  };
  return executeQuery<T>(queryText, params);
};

export const deleteQuery = <T extends Params>(table: string, where: Partial<T>): T[] => {
  const whereClause = generateWhereClause(where);

  const queryText = `
    DELETE FROM ${table}
    WHERE ${whereClause}
    RETURNING *;
  `;
  const params = mapParams(where);
  return executeQuery<T>(queryText, params);
};

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
