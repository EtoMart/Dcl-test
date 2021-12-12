import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {
    path: 'result',
    loadChildren: () =>
      import('./main/modules/result/result.module').then((m) => m.ResultModule),
  },
  {
    path: 'form',
    loadChildren: () =>
      import('./main/modules/form/form.module').then((m) => m.FormModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
