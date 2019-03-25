import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

    {
        path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule',
    },
    {
        path: 'designation',
        loadChildren: './manage-designation/manage-designation.module#ManageDesignationModule',
    },
    {
        path: 'domain',
        loadChildren: './manage-domain/manage-domain.module#ManageDomainModule',
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
    ],
    exports: [
        RouterModule,
    ],
})
export class AppRoutingModule { }
