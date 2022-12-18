import {
  Notification,
  NotificationProps,
} from '@application/entities/notification/notifications';
import { NotificationContent } from '@application/entities/notificationContent/notification-content';

type Override = Partial<NotificationProps>;

export function makeNotification(override: Override = {}) {
  return new Notification({
    category: 'Social',
    content: new NotificationContent('This is a social notification'),
    recipientId: 'recipient-1',
    ...override,
  });
}
