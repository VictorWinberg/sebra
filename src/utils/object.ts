/**
 * Pick the specified keys from the object.
 *
 * @param obj - The object to pick keys from.
 * @param keys - The keys to pick.
 * @returns The object with only the specified keys.
 */
export const pick = <T extends Record<string, unknown>, K extends keyof T>(
  obj: T,
  keys: K[]
): { [P in K]: NonNullable<T[P]> } => {
  return keys.reduce(
    (picked, key) => {
      if (key in obj && obj[key] != null) {
        picked[key] = obj[key];
      }
      return picked;
    },
    {} as Partial<Pick<T, K>>
  ) as { [P in K]: NonNullable<T[P]> };
};

/**
 * Omit the specified keys from the object.
 *
 * @param obj - The object to omit keys from.
 * @param keys - The keys to omit.
 * @returns The object with the specified keys omitted.
 */
export const omit = <T extends Record<string, unknown>, K extends keyof T>(obj: T, keys: K[]): Omit<T, K> => {
  return (Object.keys(obj) as K[]).reduce(
    (result, key) => {
      if (!keys.includes(key)) {
        (result as T)[key] = obj[key];
      }
      return result;
    },
    {} as Partial<Omit<T, K>>
  ) as Omit<T, K>;
};

/**
 * Convert an array to a map using the specified key.
 * @param array - The array to convert.
 * @param key - The key to use as the map key.
 * @returns The map.
 */
export const toMap = <T, K extends keyof T>(array: T[], key: K) => {
  return new Map(array.map((item) => [item[key], item]));
};

/**
 * Group an array of items by the specified key.
 * @param array - The array to group.
 * @param keySelector - The function to select the key.
 * @returns The grouped object.
 */
export const groupBy = <T, K extends keyof T>(array: T[], key: K) => {
  return array.reduce((grouped, item) => {
    const k = item[key];
    if (!grouped.has(k)) {
      grouped.set(k, []);
    }
    grouped.get(k)!.push(item);
    return grouped;
  }, new Map<T[K], T[]>());
};

/**
 * Intersection of two arrays.
 * @param a - The first array.
 * @param b - The second array.
 * @param key - The key to compare.
 * @returns The intersection of the two arrays.
 */
export const intersection = <T, K extends keyof T>(a: T[], b: T[], key: K) => {
  const bSet = new Set(b.map((item) => item[key]));
  return a.filter((item) => bSet.has(item[key]));
};

type RequiredFields<T> = {
  [K in keyof T]: T[K] extends string | number ? K : never;
}[keyof T];

/**
 * Validate that the required fields are not empty.
 * @param values - The values to validate.
 * @param requiredFields - The fields that are required.
 * @throws An error if any of the required fields are empty.
 * @returns void
 */
export const validateRequiredFields = <T extends Record<string, unknown>>(
  values: T,
  requiredFields: RequiredFields<T>[]
) => {
  const missingFields = requiredFields.filter((field) => !values[field]);

  if (missingFields.length > 0) {
    throw new Error(`Fields required: ${missingFields.join(', ')}`);
  }
};

export type AssertEqual<T, U> = (<G>() => G extends T ? 1 : 2) extends <G>() => G extends U ? 1 : 2 ? true : never;
export type AssertKeys<T, U> = keyof T extends keyof U ? (keyof U extends keyof T ? true : never) : never;
