/**
 * Angular Imports
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/**
 * Components
 */
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { TableComponent } from './table/table.component';

/**
 * Guards
 */
import { AppGuard } from './app.guard';

const routes: Routes = [
    { path: '', children: [
        { path: 'login', component: LoginComponent },
        { path: 'tables', component: TableComponent, canActivate: [AppGuard] },
    ] },
    { path: '404', component: NotfoundComponent },
    { path: '**', redirectTo: '/404', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
