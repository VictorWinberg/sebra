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
