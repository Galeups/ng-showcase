export interface MockServerResponse<T> {
  data?: T;
  error: string | null;
  status: 200 | 400;
}

export const responseSuccess = <T>(data: T): MockServerResponse<T> => ({
  data,
  error: null,
  status: 200,
});

export const responseError = <T>(): MockServerResponse<T> => ({
  error: 'Error message!',
  status: 400,
});
