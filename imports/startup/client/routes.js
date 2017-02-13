import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';
import { AccountsTemplates } from 'meteor/useraccounts:core';

// Import needed templates
import '../../ui/layouts/body/body.js';
import '../../ui/pages/home/home.js';
import '../../ui/pages/not-found/not-found.js';

// Set up all routes in the app
FlowRouter.route('/', {
  name: 'App.home',
  subscriptions: function() {
    this.register('messages', Meteor.subscribe('messages.user', Meteor.userId()));
  },
  action() {
    BlazeLayout.render('App_body', { main: 'App_home' });
  },
});

FlowRouter.notFound = {
  action() {
    BlazeLayout.render('App_body', { main: 'App_notFound' });
  },
};

AccountsTemplates.configure({
    defaultLayout: 'App_body',
    defaultContentRegion: 'main'
});

AccountsTemplates.configureRoute('signIn', {
  path: '/login'
});

AccountsTemplates.configureRoute('signUp', {
  path: '/register'
});
