// Tests for messages methods

import { Meteor } from 'meteor/meteor';
import { assert } from 'meteor/practicalmeteor:chai';
import { Messages } from './messages.js';
import './methods.js';

if (Meteor.isServer) {
  describe('messages methods', function () {
    beforeEach(function () {
      Messages.remove({});
    });

    it('can remove a message', function () {

      const messageId = Messages.insert({
        description: "this is a test message"
      });

      const removeMessage = Meteor.server.method_handlers['messages.remove'];

      removeMessage.apply({}, [messageId]);

      assert.equal(Messages.find().count(), 0);
    });
  });
}
