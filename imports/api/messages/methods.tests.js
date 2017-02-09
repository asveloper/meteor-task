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

    it('can add a new message', function () {
      const addMessage = Meteor.server.method_handlers['messages.insert'];

      addMessage.apply({}, ['this is a test message']);

      assert.equal(Messages.find().count(), 1);
    });
  });
}
