import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');
  this.route('logout');
  this.resource('posts', function() {
    this.resource('post', {path: '/:post_id'});
    this.route('new', {path: '/new'});
    this.route('edit', {path: '/:post_id/edit'});
  });
  this.route('posts/new');
});

export default Router;
