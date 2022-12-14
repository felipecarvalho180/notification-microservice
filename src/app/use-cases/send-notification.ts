import { Injectable } from '@nestjs/common';
import { Notification } from '../entities/notification/notifications';
import { NotificationContent } from '../entities/notificationContent/notification-content';
import { NotificationsRepository } from '../repositories/notifications-repository';

interface SendNotificationRequest {
  recipientId: string;
  content: string;
  category: string;
}

interface SendNotificationResponse {
  notification: Notification;
}

@Injectable()
export class SendNotification {
  constructor(private notificationsRepository: NotificationsRepository) {}

  async execute(
    request: SendNotificationRequest,
  ): Promise<SendNotificationResponse> {
    const { recipientId, category, content } = request;

    const notification = new Notification({
      recipientId,
      category,
      content: new NotificationContent(content),
    });

    await this.notificationsRepository.create(notification);

    return {
      notification,
    };
  }
}
