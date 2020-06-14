import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        loadChildren: () =>
          import('@seek/root/shell')
            .then((m) => m.RootShellModule),
      },
      {
        path: 'auth',
        loadChildren: () =>
          import('@seek/auth/shell')
            .then((m) => m.AuthShellModule),
      },
    ], { initialNavigation: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
