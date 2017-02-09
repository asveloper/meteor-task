// Definition of the messages collection

import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const Messages = new Mongo.Collection('messages');

Messages.attachBehaviour('timestampable');

Messages.allow({
  insert: function(userId) {
    if (Meteor.userId())
      return true;
    return false;
  }
});
