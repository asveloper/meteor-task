// All messages-related publications

import { Meteor } from 'meteor/meteor';
import { Messages } from '../messages.js';

Meteor.publish('messages.all', function () {
  return Messages.find();
});

Meteor.publish('messages.user', function () {
  return Messages.find({ createdBy: this.userId });
});
