import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

type Parser<T> = {
  parse: (value: string) => T;
  serialize: (value: T) => string;
};

export const StringParam: Parser<string> = {
  parse: (value) => value,
  serialize: (value) => value
};

export const NumberParam: Parser<number> = {
  parse: (value) => parseFloat(value),
  serialize: (value) => value.toString()
};

export const useQueryParam = <T>(
  key: string,
  parser: Parser<T>,
  initialValue?: T
): [T | null, (value: T | null) => void] => {
  const [searchParams, setSearchParams] = useSearchParams();

  const queryParam = useMemo(() => {
    const value = searchParams.get(key);
    return value !== null ? parser.parse(value) : initialValue ?? null;
  }, [key, parser, initialValue, searchParams]);

  const setQueryParam = (newValue: T | null) => {
    if (newValue !== null) {
      const serializedValue = parser.serialize(newValue);
      searchParams.set(key, serializedValue);
    } else {
      searchParams.delete(key);
    }
    setSearchParams(searchParams);
  };

  return [queryParam, setQueryParam];
};
