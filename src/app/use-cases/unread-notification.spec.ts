import { Notification } from '@application/entities/notification/notifications';
import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { UnreadNotification } from './unread-notification';

const inMemoryNotificationsRepository = new InMemoryNotificationsRepository();

describe('Unread notification', () => {
  it('should be able to unread a notification', async () => {
    const unreadNotification = new UnreadNotification(
      inMemoryNotificationsRepository,
    );

    const notification = new Notification(
      makeNotification({ readAt: new Date() }),
    );

    await inMemoryNotificationsRepository.create(notification);

    await unreadNotification.execute({ notificationId: notification.id });

    expect(inMemoryNotificationsRepository.notifications[0].readAt).toBeNull();
  });

  it('should not be able to read a notification when it does not exist', async () => {
    const unreadNotification = new UnreadNotification(
      inMemoryNotificationsRepository,
    );

    expect(async () => {
      return await unreadNotification.execute({
        notificationId: 'fake-notification',
      });
    }).rejects.toThrow('Notification not found');
  });
});
