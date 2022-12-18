import { Notification } from '@application/entities/notification/notifications';
import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { ReadNotification } from './read-notification';

const inMemoryNotificationsRepository = new InMemoryNotificationsRepository();

describe('Read notification', () => {
  it('should be able to read a notification', async () => {
    const readNotification = new ReadNotification(
      inMemoryNotificationsRepository,
    );

    const notification = new Notification(makeNotification());

    await inMemoryNotificationsRepository.create(notification);

    await readNotification.execute({ notificationId: notification.id });

    expect(inMemoryNotificationsRepository.notifications[0].readAt).toEqual(
      expect.any(Date),
    );
  });

  it('should not be able to read a notification when it does not exist', async () => {
    const readNotification = new ReadNotification(
      inMemoryNotificationsRepository,
    );

    expect(async () => {
      return await readNotification.execute({
        notificationId: 'fake-notification',
      });
    }).rejects.toThrow('Notification not found');
  });
});
