import { Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';

export const BACKEND_ROUTES: Routes = [
    { 
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
     },
    {
        path: 'dashboard',
        loadChildren: () => import('../backend/dashboard/dashboard.module').then(m => m.DashboardModule),
        canLoad: [AuthGuard]
    },
    {
        path: 'product',
        loadChildren: () => import('../backend/product/product.module').then(m => m.ProductModule),
        canLoad: [AuthGuard]
    }
]