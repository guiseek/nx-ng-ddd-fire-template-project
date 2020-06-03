import { User } from 'firebase/app';

export interface AuthUser extends User {
  id: string;
  // name: string;
  description?: string;
}
// export interface User extends UserInfo {
//   id: string;
//   // name: string;
//   description?: string;
// }
