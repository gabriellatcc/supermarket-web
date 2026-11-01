import { Routes } from '@angular/router';

// import { authGuard } from '@/guards/auth.guard';

import { HomePage } from '@/components/home/home.page';
import { SigninPage } from '@/components/auth/signin/signin.page';
import { SignupPage } from '@/components/auth/signup/signup.page';

import { LayoutPage } from '@/components/layout/layout.page';
import { DashboardPage } from '@/components/dashboard/dashboard.page';
import { UsersPage } from '@/components/users/users.page';
import { SettingsPage } from './components/settings/settings.page';
import { PermissionsPage } from './components/permissions/permissions.page';
import { RolesPage } from './components/roles/roles.page';
import { AuthLayoutPage } from './components/auth/auth.layout.page';

export const routes: Routes = [
    //public
    {
        title: 'Home',
        path: '',
        pathMatch: 'full',
        component: HomePage
    },
    {
        path: '',
        component: AuthLayoutPage,
        children: [
            {
                title: 'Sign In',
                path: 'signin',
                component: SigninPage
            },
            {
                title: 'Sign Up',
                path: 'signup',
                component: SignupPage
            },
        ]
    },

    //protected
    {
        path: '',
        component: LayoutPage,
        // canActivate: [authGuard],
        children: [
        {
            title: 'Dashboard',
            path: 'dashboard',
            component: DashboardPage
        },
        {
            title: 'Users',
            path: 'users',
            component: UsersPage
        },
        {
            title: 'Settings',
            path: 'settings',
            component: SettingsPage
        },
        {
            title: 'Permissions',
            path: 'permissions',
            component: PermissionsPage
        },
        {
            title: 'Roles',
            path: 'roles',
            component: RolesPage
        },
        ],
    },
];