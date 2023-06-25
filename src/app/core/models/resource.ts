export interface Resource<T> {
  isLoading: boolean;
  hasError: boolean;
  data: T | null;
}

export const loadResource = <T>(): Resource<T> => ({
  isLoading: true,
  hasError: false,
  data: null,
});

export const loadedResourceSuccess = <T>(data: T): Resource<T> => ({
  isLoading: false,
  hasError: false,
  data,
});

export const loadedResourceError = <T>(): Resource<T> => ({
  isLoading: false,
  hasError: true,
  data: null,
});
