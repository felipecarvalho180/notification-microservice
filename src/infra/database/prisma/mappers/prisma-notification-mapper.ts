import { Notification } from '@application/entities/notification/notifications';

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
}
