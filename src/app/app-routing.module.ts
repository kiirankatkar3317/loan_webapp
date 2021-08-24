import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotComponent } from './auth/forgot/forgot.component';
import { LoginComponent } from './auth/login/login.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { NewUserComponent } from './auth/new-user/new-user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'logout',
    component: LogoutComponent
  },
  {
path: 'forgot',
component:ForgotComponent
  },
  {
    path:'register',
    component: NewUserComponent
  },
{ path: 'dashboard', 
  component: DashboardComponent
 }, 
{ path: 'loans', loadChildren: () => import('./loans/loans.module').then(m => m.LoansModule) }, 
{ path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) }, 
{ path: 'payments', loadChildren: () => import('./payments/payments.module').then(m => m.PaymentsModule) }, 
{ path: 'invoices', loadChildren: () => import('./invoices/invoices.module').then(m => m.InvoicesModule) }, 
{ path: 'loan-plans', loadChildren: () => import('./loan-plans/loan-plans.module').then(m => m.LoanPlansModule) }, 
{ path: 'reports', loadChildren: () => import('./reports/reports.module').then(m => m.ReportsModule) }, 
{ path: 'settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule) },
{ path: 'activity', loadChildren: () => import('./audit-log/audit-log.module').then(m => m.AuditLogModule) },
{
  path:'**', 
component:PagenotfoundComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
