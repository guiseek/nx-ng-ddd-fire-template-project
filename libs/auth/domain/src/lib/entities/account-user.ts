import { DocumentBase } from '@dekao/shared/domain';

export interface AccountUser extends DocumentBase  {
  id: string;
  name: string;
  phone: string;
  // roles: string[];
}
