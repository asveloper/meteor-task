// Tests for the behavior of the links collection
//
// https://guide.meteor.com/testing.html

import { Meteor } from 'meteor/meteor';
import { assert } from 'meteor/practicalmeteor:chai';
import { Messages } from './messages.js';

if (Meteor.isServer) {
  describe('messages collection', function () {
    it('insert correctly', function () {
      const messageId = Messages.insert({
        description: 'this is a test task',
      });
      const added = Messages.find({ _id: messageId });
      const collectionName = added._getCollectionName();
      const count = added.count();

      assert.equal(collectionName, 'messages');
      assert.equal(count, 1);
    });
  });
}
