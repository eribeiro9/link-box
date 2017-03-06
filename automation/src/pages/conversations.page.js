import { NavigationLayout } from './navigation.layout';

export class ConversationsPage extends NavigationLayout {
  constructor() {
    super('/', 'at-conversations-page');
    this.conversations = element.all(by.className('at-conversations-conversation'));
  }
}
