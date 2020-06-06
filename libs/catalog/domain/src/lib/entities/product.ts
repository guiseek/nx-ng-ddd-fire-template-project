import { DocumentBase, DocumentLogs } from '@seek/shared/domain';

export interface Product extends DocumentBase, DocumentLogs {
  id: string;
  name: string;
  description: string;
  productCategoryId?: string[];
  price?: number;
}
