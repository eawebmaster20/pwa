import { Routes } from '@angular/router';

export const routes: Routes = [
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
    }
];
