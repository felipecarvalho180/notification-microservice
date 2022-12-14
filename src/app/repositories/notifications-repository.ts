import { Notification } from '../entities/notification/notifications';

export abstract class NotificationsRepository {
  abstract create(notification: Notification): Promise<void>;
}
