import { DocumentBase } from '@seek/shared/domain';

export interface AccountUser extends DocumentBase  {
  id: string;
  name: string;
  phone: string;
  // roles: string[];
}
