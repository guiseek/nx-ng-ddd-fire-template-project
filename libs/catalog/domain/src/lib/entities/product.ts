import { DocumentBase, DocumentLogs } from '@dekao/shared/domain';

export interface Product extends DocumentBase, DocumentLogs {
  id: string;
  name: string;
  description: string;
  productCategoryId?: string[];
  price?: number;
}
