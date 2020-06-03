import { User } from 'firebase/app';
import { AccountUser } from './account-user';

export interface AuthUser extends User {
  uid: string;
  // name: string;
  account?: AccountUser;
}
// export interface User extends UserInfo {
//   id: string;
//   // name: string;
//   description?: string;
// }
