import { Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard/pages/dashboard/dashboard.component';

export const routes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        title: 'Dashboard',
    },
    {
        path: 'notifications',
        loadComponent: () => import('./features/notification/pages/all-notifications/notifications/notifications.component')
            .then(n => n.NotificationsComponent),
        title: 'All notifications'
    },
    {
        path: 'notifications/:id',
        loadComponent: () => import('./features/notification/pages/notification-message/notification-message/notification-message.component')
            .then(m => m.NotificationMessageComponent),
        title: 'Message',
    },
    {
        path: 'invalid-viewport',
        loadComponent: () => import('./shared/components/non-mobile-device/non-mobile-device.component')
            .then(nm => nm.NonMobileDeviceComponent),
        title: 'Invalid viewport',
    }
];
