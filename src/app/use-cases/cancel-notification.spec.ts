import { Notification } from '@application/entities/notification/notifications';
import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { CancelNotification } from './cancel-notification';

const inMemoryNotificationsRepository = new InMemoryNotificationsRepository();

describe('Cancel notification', () => {
  it('should be able to cancel a notification', async () => {
    const cancelNotification = new CancelNotification(
      inMemoryNotificationsRepository,
    );

    const notification = new Notification(makeNotification());

    await inMemoryNotificationsRepository.create(notification);

    await cancelNotification.execute({ notificationId: notification.id });

    expect(inMemoryNotificationsRepository.notifications[0].canceledAt).toEqual(
      expect.any(Date),
    );
  });

  it('should not be able to cancel a notification when it does not exist', async () => {
    const cancelNotification = new CancelNotification(
      inMemoryNotificationsRepository,
    );

    expect(async () => {
      return await cancelNotification.execute({
        notificationId: 'fake-notification',
      });
    }).rejects.toThrow('Notification not found');
  });
});
