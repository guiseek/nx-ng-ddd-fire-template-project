export type TableExtraCols = 'select' | 'menu' | 'actions';
export type TableCols<T> = Array<keyof T | TableExtraCols>;
export interface RowClicked<T> {
  useCase: string;
  row: T
}