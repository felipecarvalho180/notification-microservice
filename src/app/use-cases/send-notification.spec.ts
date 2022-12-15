import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { SendNotification } from './send-notification';

const inMemoryNotificationsRepository = new InMemoryNotificationsRepository();

describe('Send notification', () => {
  it('should be able to send a notification', async () => {
    const sendNotification = new SendNotification(
      inMemoryNotificationsRepository,
    );

    const { notification } = await sendNotification.execute({
      category: 'Social',
      content: 'This is a social notification',
      recipientId: '123',
    });

    expect(inMemoryNotificationsRepository.notifications).toHaveLength(1);
    expect(inMemoryNotificationsRepository.notifications[0]).toEqual(
      notification,
    );
  });
});
