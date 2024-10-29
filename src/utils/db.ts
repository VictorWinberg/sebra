import { Maybe } from '@/api/gql/graphql';
import { SqlValue } from 'sql.js';
import { toSnakeCase } from './text';

// Helper function to generate SQL columns
export const generateColumns = <T extends Record<string, unknown>>(data: T): string => {
  return Object.keys(data)
    .map((key) => `"${toSnakeCase(key)}"`)
    .join(', ');
};

// Helper function to generate SET clause for UPDATE query
export const generateSetClause = <T extends Record<string, unknown>>(data: T, index?: number): string => {
  return Object.keys(data)
    .map((key) => `"${toSnakeCase(key)}" = :${key}${index || ''}`)
    .join(', ');
};

// Helper function to generate WHERE clause
export const generateWhereClause = <T extends Record<string, unknown>>(where: Partial<T>, index?: number): string => {
  return Object.keys(where)
    .map((key) => `"${toSnakeCase(key)}" = :${key}${index || ''}`)
    .join(' AND ');
};

// Helper function to generate SQL placeholders
export const generatePlaceholders = <T extends Record<string, unknown>>(data: T, index?: number): string => {
  return Object.keys(data)
    .map((key) => `:${key}${index || ''}`)
    .join(', ');
};

// Helper function to map parameters for SQL queries
export const mapParams = <T extends Record<string, SqlValue | undefined>>(
  data: T,
  index?: number
): Record<string, SqlValue> => {
  return Object.keys(data).reduce(
    (acc, key) => {
      acc[`:${key}${index || ''}`] = data[key] ?? null;
      return acc;
    },
    {} as Record<string, SqlValue>
  );
};

type GQL_Where = {
  AND?: Maybe<Maybe<GQL_Where>[]>;
  OR?: Maybe<Maybe<GQL_Where>[]>;
} & {
  [key: string]: Maybe<GQL_Operator>;
};

export const convertToSQLWhereClause = (where?: GQL_Where): string => {
  if (!where) return '';
  const conditions: string[] = [];
  const { AND, OR, ...values } = where;

  if (AND) {
    const andConditions = AND.map((condition) => (condition ? convertToSQLWhereClause(condition) : '')).filter(Boolean);
    if (andConditions.length > 0) conditions.push(`(${andConditions.join(' AND ')})`);
  }
  if (OR) {
    const orConditions = OR.map((condition) => (condition ? convertToSQLWhereClause(condition) : '')).filter(Boolean);
    if (orConditions.length > 0) conditions.push(`(${orConditions.join(' OR ')})`);
  }

  for (const [key, value] of Object.entries(values)) {
    if (typeof value === 'object' && value !== null) {
      conditions.push(`${toSnakeCase(key)} ${convertOperator(value)}`);
    }
  }

  return conditions.join(' AND ');
};

type GQL_Operator = {
  all?: Maybe<unknown[]>;
  equals?: Maybe<unknown>;
  exists?: Maybe<boolean>;
  in?: Maybe<unknown[]>;
  not_equals?: Maybe<unknown>;
  not_in?: Maybe<unknown[]>;
};

function convertOperator(operatorObj: GQL_Operator): string {
  if ('equals' in operatorObj) {
    return `= '${operatorObj.equals}'`;
  }
  if ('notEquals' in operatorObj) {
    return `!= '${operatorObj.notEquals}'`;
  }
  if ('greaterThan' in operatorObj) {
    return `> '${operatorObj.greaterThan}'`;
  }
  if ('lessThan' in operatorObj) {
    return `< '${operatorObj.lessThan}'`;
  }
  if ('greaterThanOrEqual' in operatorObj) {
    return `>= '${operatorObj.greaterThanOrEqual}'`;
  }
  if ('lessThanOrEqual' in operatorObj) {
    return `<= '${operatorObj.lessThanOrEqual}'`;
  }
  if ('in' in operatorObj && Array.isArray(operatorObj.in)) {
    return `IN (${operatorObj.in.map((val) => `'${val}'`).join(', ')})`;
  }
  if ('notIn' in operatorObj && Array.isArray(operatorObj.notIn)) {
    return `NOT IN (${operatorObj.notIn.map((val) => `'${val}'`).join(', ')})`;
  }

  throw new Error('Invalid operator');
}
