/**
 * Pick the specified keys from the object.
 *
 * @param obj - The object to pick keys from.
 * @param keys - The keys to pick.
 * @returns The object with only the specified keys.
 */
export const pick = <T extends Record<string, unknown>, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> => {
  return keys.reduce(
    (picked, key) => {
      if (key in obj) {
        picked[key] = obj[key];
      }
      return picked;
    },
    {} as Partial<Pick<T, K>>
  ) as Pick<T, K>;
};

/**
 * Convert an array to a map using the specified key.
 * @param array - The array to convert.
 * @param key - The key to use as the map key.
 * @returns The map.
 */
export const toMap = <T>(array: T[], key: keyof T) => {
  return new Map(array.map((item) => [item[key], item]));
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
