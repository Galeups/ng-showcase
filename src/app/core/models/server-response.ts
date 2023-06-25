export interface ServerResponse<T> {
  data: T;
  error: string | null;
  status: number;
}
