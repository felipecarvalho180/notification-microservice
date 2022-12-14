import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { CountRecipientNotifications } from './count-recipient-notifications';

const inMemoryNotificationsRepository = new InMemoryNotificationsRepository();

describe('Count recipients notification', () => {
  it('should be able to count recipient notifications', async () => {
    const countRecipientNotifications = new CountRecipientNotifications(
      inMemoryNotificationsRepository,
    );

    await inMemoryNotificationsRepository.create(makeNotification());
    await inMemoryNotificationsRepository.create(makeNotification());
    await inMemoryNotificationsRepository.create(
      makeNotification({ recipientId: 'recipient-2' }),
    );

    const { count } = await countRecipientNotifications.execute({
      recipientId: 'recipient-1',
    });

    expect(count).toEqual(2);
  });
});
