import { loadRemoteModule } from '@angular-architects/module-federation-runtime';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';


const routes: Routes = [

  {
    path: '',
    redirectTo: 'home', pathMatch: 'full'
  },

  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          loadRemoteModule({
            remoteEntry: 'http://localhost:4200/remoteEntry.js',
            remoteName: 'mfeHome',
            exposedModule: './HomeModule'
          }).then((m) => m.HomeModule)

      },
      {
        path: 'cadastro',
        loadChildren: () =>
          loadRemoteModule({
            remoteEntry: 'http://localhost:4200/remoteEntry.js',
            remoteName: 'mfeCad',
            exposedModule: './CadastroModule'
          }).then((m) => m.CadastroModule)

      },
      {
        path: 'infos',
        loadChildren: () =>
          loadRemoteModule({
            remoteEntry: 'http://localhost:3000/remoteEntry.js',
            remoteName: 'mfeInfos',
            exposedModule: './InfosModule'
          }).then((m) => m.InfosModule)

      },

    ]

    // import("./mfefeature/mfefeature.module").then((m) => m.MfefeatureModule),

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
