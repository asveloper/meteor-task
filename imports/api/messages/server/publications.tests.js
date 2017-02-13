// Tests for the messages publications

import { Meteor } from 'meteor/meteor';
import { Random } from 'meteor/random';
import { assert } from 'meteor/practicalmeteor:chai';
import { Messages } from '../messages.js';
import { PublicationCollector } from 'meteor/johanbrook:publication-collector';
import './publications.js';

describe('messages publications', function () {
  beforeEach(function () {
    Messages.remove({});
  });

  describe('messages.all', function () {
    it('sends all messages', function (done) {
      Messages.insert({
        description: 'hello world'
      });

      const collector = new PublicationCollector();
      collector.collect('messages.all', (collections) => {
        assert.equal(collections.messages.length, 1);
        done();
      });
    });
  });

  describe('messages.user', function () {
    it('sends user messages', function (done) {
      const userId = Random.id();

      const messageId = Messages.insert({
        description: "this is new message",
        createdBy: userId
      });

      const collector = new PublicationCollector();
      collector.collect('messages.user', userId, (collections) => {
        assert.equal(collections.messages.length, 1);
        done();
      });
    });
  });

});
