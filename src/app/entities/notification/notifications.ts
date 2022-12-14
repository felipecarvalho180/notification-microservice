import { randomUUID } from 'crypto';
import { Replace } from '@helpers/replace';
import { NotificationContent } from '../notificationContent/notification-content';

export interface NotificationProps {
  recipientId: string;
  content: NotificationContent;
  category: string;
  readAt?: Date | null;
  canceledAt?: Date | null;
  createdAt: Date;
}

export class Notification {
  private _id: string;
  private props: NotificationProps;

  constructor(
    props: Replace<NotificationProps, { createdAt?: Date }>,
    id?: string,
  ) {
    this._id = id ?? randomUUID();
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
    };
  }

  public get recipientId(): string {
    return this.props.recipientId;
  }
  public set recipientId(value: string) {
    this.props.recipientId = value;
  }

  public get content(): NotificationContent {
    return this.props.content;
  }
  public set content(value: NotificationContent) {
    this.props.content = value;
  }

  public get category(): string {
    return this.props.category;
  }
  public set category(value: string) {
    this.props.category = value;
  }

  public get readAt(): Date | null | undefined {
    return this.props.readAt;
  }

  public read() {
    return (this.props.readAt = new Date());
  }

  public unread() {
    return (this.props.readAt = null);
  }

  public get createdAt(): Date {
    return this.props.createdAt;
  }

  public get id(): string {
    return this._id;
  }

  public get canceledAt(): Date | null | undefined {
    return this.props.canceledAt;
  }

  public cancel() {
    this.props.canceledAt = new Date();
  }
}
