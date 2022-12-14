import { NotificationContent } from './notification-content';

describe('Notification content', () => {
  it('Should be able to create a notification content', () => {
    const content = new NotificationContent(
      'Você recebeu uma solicitação de amizade',
    );

    expect(content).toBeTruthy();
  });

  it('Should not be able to create a notification content with less than 5 characters', () => {
    expect(() => new NotificationContent('três')).toThrow();
  });

  it('Should not be able to create a notification content with more than 240 characters', () => {
    expect(() => new NotificationContent('a'.repeat(241))).toThrow();
  });
});
