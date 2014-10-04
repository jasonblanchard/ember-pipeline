import Ember from 'ember';

var Router = Ember.Router.extend({
  location: EmberPipelineClientENV.locationType
});

Router.map(function() {
  this.route('login');
  this.resource('posts', function() {
    this.resource('post', {path: '/:post_id'});
    this.route('new', {path: '/new'});
  });
});

export default Router;
