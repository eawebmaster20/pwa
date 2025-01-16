import { Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard/pages/dashboard/dashboard.component';

export const routes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        title: 'Transformer | Dashboard',
    },
    {
        path: 'notifications',
        loadComponent: () => import('./features/notification/pages/all-notifications/notifications/notifications.component')
            .then(n => n.NotificationsComponent),
        title: 'Transformer | All notifications'
    },
    {
        path: 'notifications/data',
        loadComponent: () => import('./features/notification/pages/notification-message/notification-message/notification-message.component')
            .then(m => m.NotificationMessageComponent),
        title: 'Transformer | Message',
    },
    // {
    //     path: 'invalid-viewport',
    //     loadComponent: () => import('./shared/components/non-mobile-device/non-mobile-device.component')
    //         .then(nm => nm.NonMobileDeviceComponent),
    //     title: 'Transformer | Incompatible device',
    // }
];
