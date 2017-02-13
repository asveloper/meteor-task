// Tests for the messages publications

import { assert } from 'meteor/practicalmeteor:chai';
import { Messages } from '../messages.js';
import { PublicationCollector } from 'meteor/johanbrook:publication-collector';
import './publications.js';

describe('messages publications', function () {
  beforeEach(function () {
    Messages.remove({});
    Messages.insert({
      description: 'hello world'
    });
  });

  describe('messages.all', function () {
    it('sends all messages', function (done) {
      const collector = new PublicationCollector();
      collector.collect('messages.all', (collections) => {
        assert.equal(collections.messages.length, 1);
        done();
      });
    });
  });

});
