export type TableExtraCols = 'menu' | 'actions';
export type TableCols<T> = Array<keyof T | TableExtraCols>;