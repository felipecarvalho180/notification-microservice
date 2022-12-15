import { Notification } from '@application/entities/notification/notifications';

export class NotificationViewModel {
  static toHTTP(notification: Notification) {
    const { id, category, content, recipientId } = notification;

    return {
      id,
      category,
      content: content.value,
      recipientId,
    };
  }
}
