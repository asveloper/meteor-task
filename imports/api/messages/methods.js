// Methods related to messages

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Messages } from './messages.js';

Meteor.methods({
  'messages.insert'(description) {
    check(description, String);

    return Messages.insert({
      description
    });
  },
  'messages.remove'(messageId) {
    check(messageId, String);

    Messages.remove({ _id: messageId });
  }
});
