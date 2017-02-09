import './home.html';

import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { AccountsTemplates } from 'meteor/useraccounts:core';

import { Messages } from '../../../api/messages/messages.js';

Template.App_home.helpers({
  messages() {
    return Messages.find().fetch();
  }
});

Template.App_home.events({
  'click .logout-btn'(event, template) {
    AccountsTemplates.logout();
  },
  'keypress #message'(event, template) {

    if (event.which === 13) {
      let message = $("#message").val();

      Messages.insert({
        description: message
      });

      $("#message").val("");
    }
  },
  'click .remove-message'(event, template) {

    Meteor.call("messages.remove", event.target.id, (err, result) => {
      if (err) {
        alert(err.message);
      }
    });

  }
});
