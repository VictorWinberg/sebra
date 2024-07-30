import { Dispatch, SetStateAction, useEffect, useState } from 'react';

// material-ui
import { MRT_ColumnFiltersState } from 'material-react-table';

// third-party
import queryString from 'query-string';

type Parser<T> = {
  parse: (value: string) => T;
  serialize: (value: T) => string;
};

export const FilterParam: Parser<MRT_ColumnFiltersState> = {
  parse: (value) => {
    const parsed = queryString.parse(value, { arrayFormat: 'separator' });
    return Object.entries(parsed).map(([id, value]) => ({ id, value }));
  },
  serialize: (filters) => {
    const transformed = filters.reduce((acc, { id, value }) => ({ ...acc, [id]: value }), {});
    return queryString.stringify(transformed, { arrayFormat: 'separator' });
  }
};

export const StringParam: Parser<string> = {
  parse: (value) => value,
  serialize: (value) => value
};

export const NumberParam: Parser<number> = {
  parse: (value) => parseFloat(value),
  serialize: (value) => value.toString()
};

const useUpdateQueryStringValueWithoutNavigation = (queryKey: string, queryValue: string) => {
  useEffect(() => {
    const currentSearchParams = new URLSearchParams(window.location.search);
    const oldQuery = currentSearchParams.get(queryKey) ?? '';
    if (queryValue === oldQuery) return;

    if (queryValue) {
      currentSearchParams.set(queryKey, queryValue);
    } else {
      currentSearchParams.delete(queryKey);
    }
    const newUrl = [window.location.pathname, currentSearchParams.toString()].filter(Boolean).join('?');
    window.history.replaceState(null, '', newUrl);
  }, [queryKey, queryValue]);
};

export const useQueryParam = <T>(key: string, parser: Parser<T>, initialValue: T): [T, Dispatch<SetStateAction<T>>] => {
  const [queryParam, setQueryParam] = useState(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const value = searchParams.get(key);
    return value !== null ? parser.parse(value) : initialValue;
  });

  useUpdateQueryStringValueWithoutNavigation(key, parser.serialize(queryParam));

  return [queryParam, setQueryParam];
};
