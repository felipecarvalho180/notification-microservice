import { Injectable } from '@nestjs/common';
import { Notification } from 'src/app/entities/notification/notifications';
import { NotificationsRepository } from 'src/app/repositories/notifications-repository';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PrismaNotificationRepository implements NotificationsRepository {
  constructor(private prismaService: PrismaService) {}

  async create(notification: Notification): Promise<void> {
    const { id, category, content, createdAt, readAt, recipientId } =
      notification;

    await this.prismaService.notification.create({
      data: {
        id,
        category,
        content: content.value,
        created_at: createdAt,
        readAt,
        recipientId,
      },
    });
  }
}
