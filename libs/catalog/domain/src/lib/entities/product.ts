import { DocumentBase } from '@dekao/shared/domain';

export interface Product extends DocumentBase {
  id: string;
  name: string;
  description: string;
  price?: number;
}
