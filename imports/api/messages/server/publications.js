// All messages-related publications

import { Meteor } from 'meteor/meteor';
import { Messages } from '../messages.js';
import { check } from 'meteor/check';

Meteor.publish('messages.all', function () {
  return Messages.find();
});

Meteor.publish('messages.user', function (userId) {
  return Messages.find({ createdBy: userId });
});
