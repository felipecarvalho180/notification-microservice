import { Notification } from '@application/entities/notification/notifications';
import { NotificationContent } from '@application/entities/notificationContent/notification-content';
import { Notification as RawNotification } from '@prisma/client';

export class PrismaNotificationMapper {
  static toPrisma(notification: Notification) {
    const { id, category, content, createdAt, readAt, recipientId } =
      notification;

    return {
      id,
      category,
      content: content.value,
      created_at: createdAt,
      readAt,
      recipientId,
    };
  }

  static toDomain(raw: RawNotification): Notification {
    const { id, category, content, created_at, readAt, recipientId } = raw;

    return new Notification(
      {
        category,
        content: new NotificationContent(content),
        createdAt: created_at,
        readAt,
        recipientId,
      },
      id,
    );
  }
}
