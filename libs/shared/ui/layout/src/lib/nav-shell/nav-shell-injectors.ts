import { InjectionToken } from '@angular/core';
export type NavType = 'header' | 'item' | 'group';
export type NavRole = 'none' | 'user' | 'admin';

export interface NavShell {
  icon?: string;
  type?: NavType;
  label: string;
  path?: string;
  roles: Array<NavRole>;
  children?: Array<NavShell>;
}
export const NAV_SHELL_CONFIG: Array<NavShell> = [
  // {
  //   path: '/auth',
  //   label: 'Login',
  //   roles: [],
  //   icon: 'account_circle'
  // }
];

export const NAV_SHELL = new InjectionToken<NavShell[]>('nav.shell');
