import { MessageService } from './message.service';
import { IterableDiffers } from '@angular/core';

describe('MessageService', () => {
  let service: MessageService;

  beforeEach(() => {

  });

  it('should have no messages to start', () => {
    service = new MessageService();

    expect(service.messages.length).toBe(0);
  });

  it('should add a message when add is called', () => {
    service = new MessageService();

    service.add('new message added');

    expect(service.messages.length).toBe(1);
  });

  it('should clear messages when clear is called', () => {
      service = new MessageService();
      service.add('message to be cleared!');

      service.clear();

      expect(service.messages.length).toBe(0);
  });


});
