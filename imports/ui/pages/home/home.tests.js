import { chai } from 'meteor/practicalmeteor:chai';
import { Template } from 'meteor/templating';
import { Random } from 'meteor/random';
import { Messages } from '../../../api/messages/messages';

if (Meteor.isClient) {
  describe('messages', function () {
    it('add new message by user', function () {
      beforeEach(function () {
        Messages.remove({});
      });

      Messages.insert({
        description: "this is a test message",
        createdBy: Random.id()
      });

      chai.assert.equal(Messages.find().count(), 1);

    });
  });
}
